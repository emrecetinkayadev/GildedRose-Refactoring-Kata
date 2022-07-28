export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

/* 
* Constant variables for string values.
*/
const SULFURAS = 'Sulfuras, Hand of Ragnaros'
const AGEDBRIE = 'Aged Brie'
const TAFKAL80ETC = 'Backstage passes to a TAFKAL80ETC concert'
const CONJURED = 'Conjured'
const increment = 1
const decrement = -1
const doubleDecrement = -2

/* 
* Gilded Rose Class
*/
export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  /* 
  * Update quality function.
  * Do not get any value.
  * Return items.
  */
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      let item = this.items[i]

      // Checks any item starts with 'Conjured'
      if (item.name.startsWith('Conjured')) {
        item.name = 'Conjured'
      }

      switch (item.name) {
        case AGEDBRIE:
          this.AgedBrieUpdate(item)
          break
        case SULFURAS:
          this.SulfurasUpdate(item)
          break
        case TAFKAL80ETC:
          this.TAFKAL80ETCUpdate(item)
          break
        case CONJURED:
          this.ConjuredUpdate(item)
          break
        default:
          this.NormalItemsUpdate(item)
      }
    }
    return this.items;
  }

  /* 
  * Update conjured items.
  * Param: item object.
  * Return nothing.
  */
  ConjuredUpdate(item){
    this.QualityUpdate(item, doubleDecrement)  
    this.SellUpdate(item, decrement)
  }

  /* 
  * Update sulfuras legendary item.
  * Param: item object.
  * Return nothing.
  */
  SulfurasUpdate(item){
    this.QualityUpdate(item, increment)
  }

  /* 
  * Update Aged Brie item.
  * Param: item object.
  * Return nothing.
  */
  AgedBrieUpdate(item){
    this.QualityUpdate(item, increment)
    this.SellUpdate(item, decrement)
  }

  /* 
  * Update TAFKAL80ETC item.
  * Param: item object.
  * Return nothing.
  */
  TAFKAL80ETCUpdate(item){
    this.QualityUpdate(item, increment)
    if (item.sellIn < 11) {     
      this.QualityUpdate(item, increment)
    }
    if (item.sellIn < 6) {
      this.QualityUpdate(item, increment)
    }
    this.SellUpdate(item, decrement)

    if (item.sellIn < 0) {
      this.QualityUpdate(item,-item.quality)
    }
  }

  /* 
  * Update normal items.
  * Param: item object.
  * Return nothing.
  */
  NormalItemsUpdate(item){
    this.QualityUpdate(item, decrement)   
    this.SellUpdate(item, decrement)
  }

  /*
  * Updates quality, if 'sell in' value goes under 0, Quality degrades twice as fast.
  * Param: item object.
  * Param2: quality value
  * Return nothing.
  */
  QualityUpdate(item, value){
    if (item.sellIn < 0){
      value *= 2
    }

    if (item.quality <= 50 && item.quality >= 0) {
      item.quality = item.quality + value
    }

    // Check functions if barriers break in case
    if (item.quality > 50 && item.name != SULFURAS){
      item.quality = 50
    }
    if (item.quality < 0){
      item.quality = 0
    }
  }

  /*
  * Sell in value update.
  * Param: item object.
  * Param2: quality value
  * Return nothing.
  */
  SellUpdate(item, value){
    item.sellIn = item.sellIn + value
  }
}


