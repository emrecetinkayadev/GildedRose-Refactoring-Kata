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

const SULFURAS = 'Sulfuras, Hand of Ragnaros'
const AGEDBRIE = 'Aged Brie'
const TAFKAL80ETC = 'Backstage passes to a TAFKAL80ETC concert'
const CONJURED = 'Conjured'
const increment = 1
const decrement = -1
const doubleDecrement = -2

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

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

  ConjuredUpdate(item){
    this.QualityUpdate(item, doubleDecrement)  
    this.SellUpdate(item, decrement)
  }

  SulfurasUpdate(item){
    this.QualityUpdate(item, increment)
  }

  AgedBrieUpdate(item){
    this.QualityUpdate(item, increment)
    this.SellUpdate(item, decrement)
  }

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

  NormalItemsUpdate(item){
    this.QualityUpdate(item, decrement)   
    this.SellUpdate(item, decrement)
  }

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

  SellUpdate(item, value){
    item.sellIn = item.sellIn + value
  }

/*   updateQualityOld() {
    for (let i = 0; i < this.items.length; i++) {
      let item = this.items[i];

      //default
      if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert' && item.name != 'Sulfuras, Hand of Ragnaros') {
        if (item.quality > 0) {
          item.quality = item.quality - 1     
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1
        }
        if (item.quality < 50) {
          if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.sellIn < 11) {     
              item.quality = item.quality + 1;          
            }
            if (item.sellIn < 6) {
              item.quality = item.quality + 1;             
            }
          }
        }
      }

      if (item.name != 'Sulfuras, Hand of Ragnaros') {
        item.sellIn = item.sellIn - 1;
      }

      if (item.sellIn < 0) {
        if (item.name != 'Aged Brie') {
          if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.quality > 0) {
              if (item.name != 'Sulfuras, Hand of Ragnaros') {
                item.quality = item.quality - 1
              }
            }
          } else {
            item.quality = item.quality - item.quality
          }
        } else {
          if (item.quality < 50) {
            item.quality = item.quality + 1
          }
        }
      }
    }

    return this.items;
  } */
}


