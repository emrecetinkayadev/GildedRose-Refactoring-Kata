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

  updateQualityOld() {
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
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      switch (this.items[i].name) {
        case 'Aged Brie':
          this.AgedBrieCheck(this.items[i])
          break
        case 'Sulfuras, Hand of Ragnaros':
          this.SulfurasCheck(this.items[i])
          break
        case 'Backstage passes to a TAFKAL80ETC concert':
          this.TAFKAL80ETCCheck(this.items[i])
          break
        default:
          this.OtherItemsCheck(this.items[i])
      }
    }
    return this.items;
  }

  SulfurasCheck(item){
    if (item.quality < 50) {
      item.quality = item.quality + 1
    }
  }


  AgedBrieCheck(item){
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

  TAFKAL80ETCCheck(item){
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

  OtherItemsCheck(item){
    if (item.quality > 0) {
      item.quality = item.quality - 1     
    }

    item.sellIn = item.sellIn - 1;

    if (item.sellIn < 0 && item.quality > 0) {
      item.quality = item.quality - 1    
    }
  }
}


