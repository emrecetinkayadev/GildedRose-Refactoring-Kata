import { expect } from 'chai';
import { Item, GildedRose } from '@/gilded-rose';

const itemList = [
  new Item("+5 Dexterity Vest", 10, 20), //
  new Item("Aged Brie", 2, 0), //
  new Item("Elixir of the Mongoose", 5, 7), //
  new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
  new Item("Sulfuras, Hand of Ragnaros", -1, 80),
  new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
  new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
  // this conjured item does not work properly yet
  new Item("Conjured Mana Cake", 3, 6)];

describe('Gilded Rose', () => {
  const gildedRose = new GildedRose(itemList);
  const items = gildedRose.updateQuality();

  it('+5 Dexterity Vest', () => {
    expect(items[0].sellIn, 'Sell Value').equal(9);
    expect(items[0].quality, 'Quality').equal(19);
  });

  it('Aged Brie', () => {
    expect(items[1].sellIn, 'Sell Value').equal(1);
    expect(items[1].quality, 'Quality').equal(-1);
  });

  it('Elixir of the Mongoose', () => {
    expect(items[2].sellIn, 'Sell Value').equal(4);
    expect(items[2].quality, 'Quality').equal(6);
  });

});
