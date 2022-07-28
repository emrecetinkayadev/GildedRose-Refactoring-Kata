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
  new Item("Backstage passes to a TAFKAL80ETC concert", 5, 3),
  new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20),
  new Item("Conjured Mana Cake", 3, 6)];

describe('Gilded Rose', () => {
  const gildedRose = new GildedRose(itemList);
  const items = gildedRose.updateQuality();

  it('+5 Dexterity Vest', () => {
    expect(items[0].sellIn, 'Sell In').equal(9);
    expect(items[0].quality, 'Quality').equal(19);
  });

  it('Aged Brie', () => {
    expect(items[1].sellIn, 'Sell In').equal(1);
    expect(items[1].quality, 'Quality').equal(1);
  });

  it('Elixir of the Mongoose', () => {
    expect(items[2].sellIn, 'Sell In').equal(4);
    expect(items[2].quality, 'Quality').equal(6);
  });

  it('Sulfuras, Hand of Ragnaros 1', () => {
    expect(items[3].sellIn, 'Sell In').equal(0);
    expect(items[3].quality, 'Quality').equal(80);
  });

  it('Sulfuras, Hand of Ragnaros 2', () => {
    expect(items[4].sellIn, 'Sell In').equal(-1);
    expect(items[4].quality, 'Quality').equal(80);
  });

  it('Backstage passes to a TAFKAL80ETC concert 1', () => {
    expect(items[5].sellIn, 'Sell In').equal(14);
    expect(items[5].quality, 'Quality').equal(21);
  });

  it('Backstage passes to a TAFKAL80ETC concert 2', () => {
    expect(items[6].sellIn, 'Sell In').equal(9);
    expect(items[6].quality, 'Quality').equal(50);
  });

  it('Backstage passes to a TAFKAL80ETC concert 3', () => {
    expect(items[7].sellIn, 'Sell In').equal(4);
    expect(items[7].quality, 'Quality').equal(50);
  });

  it('Backstage passes to a TAFKAL80ETC concert 4', () => {
    expect(items[8].sellIn, 'Sell In').equal(4);
    expect(items[8].quality, 'Quality').equal(6);
  });

  it('Backstage passes to a TAFKAL80ETC concert 5', () => {
    expect(items[9].sellIn, 'Sell In').equal(-1);
    expect(items[9].quality, 'Quality').equal(0);
  });

  it('Conjured Mana Cake', () => {
    expect(items[10].sellIn, 'Sell In').equal(2);
    expect(items[10].quality, 'Quality').equal(4);
  });

});
