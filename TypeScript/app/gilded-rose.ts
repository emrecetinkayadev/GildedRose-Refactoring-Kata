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

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  

  updateQuality() {
    const SULFURAS = 'Sulfuras, Hand of Ragnaros'
    const AGEDBRIE = 'Aged Brie'
    const TAFKAL80ETC = 'Backstage passes to a TAFKAL80ETC concert'
    const CONJURED = 'Conjured'

    for (let i = 0; i < this.items.length; i++) {
      let itemName = this.items[i].name

      if (itemName.startsWith('Conjured')) {
        itemName = 'Conjured'
      }

      switch (itemName) {
        case AGEDBRIE:
          this.AgedBrieUpdate(this.items[i])
          break
        case SULFURAS:
          this.SulfurasUpdate(this.items[i])
          break
        case TAFKAL80ETC:
          this.TAFKAL80ETCUpdate(this.items[i])
          break
        case CONJURED:
          this.ConjuredUpdate(this.items[i])
          break
        default:
          this.NormalItemsUpdate(this.items[i])
      }
    }
    return this.items;
  }

  ConjuredUpdate(item){
    if (item.quality > 0) {
      item.quality = item.quality - 2
    }
    item.sellIn = item.sellIn - 1;
  }

  SulfurasUpdate(item){
    if (item.quality < 50) {
      item.quality = item.quality + 1
    }
  }

  AgedBrieUpdate(item){
    if (item.quality < 50) {
      item.quality = item.quality + 1
    }
    item.sellIn = item.sellIn - 1;

    if (item.sellIn < 0) {
      if (item.quality < 50) {
        item.quality = item.quality + 1
      }
    }
  }

  TAFKAL80ETCUpdate(item){
    if (item.quality < 50) {
      item.quality = item.quality + 1
    }

    if (item.quality < 50) {
      if (item.sellIn < 11) {     
        item.quality = item.quality + 1;          
      }
      if (item.sellIn < 6) {
        item.quality = item.quality + 1;             
      }
    }

    item.sellIn = item.sellIn - 1;

    if (item.sellIn < 0) {
      item.quality = item.quality - item.quality
    }
  }

  NormalItemsUpdate(item){
    if (item.quality > 0) {
      item.quality = item.quality - 1     
    }

    item.sellIn = item.sellIn - 1;

    if (item.sellIn < 0 && item.quality > 0) {
      item.quality = item.quality - 1    
    }
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


