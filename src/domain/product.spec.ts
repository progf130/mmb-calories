import {Product, Ru_Units} from './product';


describe('New product', () => {

  const potato = new Product({
    proteins: 20,
    fats: 4,
    carbohydrates: 163,
    unit: Ru_Units.gram,
  });

  const milk = new Product({
    proteins: 29,
    fats: 25,
    carbohydrates: 48,
    unit: Ru_Units.milliliter,
  });

  const egg = new Product({
    proteins: 127,
    fats: 115,
    carbohydrates: 70,
    unit: Ru_Units.piece,
  });

  it('must correctly calculate calories', () => {
    expect(potato.getCalories()).toEqual(768);
  });

  it('must correctly calculate PFC with grams', () => {
    const {proteins, fats, carbohydrates, calories} = potato.getPFC(150);
    expect(proteins).toEqual(30);
    expect(fats).toEqual(6);
    expect(carbohydrates).toEqual(245);
    expect(calories).toEqual(1152);
  });

  it('must correctly calculate PFC with milliliters', () => {
    const {proteins, fats, carbohydrates, calories} = milk.getPFC(150);
    expect(proteins).toEqual(44);
    expect(fats).toEqual(38);
    expect(carbohydrates).toEqual(72);
    expect(calories).toEqual(800);
  });

  it('must correctly calculate PFC with grams pieces', () => {
    const {proteins, fats, carbohydrates, calories} = egg.getPFC(2);
    expect(proteins).toEqual(254);
    expect(fats).toEqual(230);
    expect(carbohydrates).toEqual(140);
    expect(calories).toEqual(3646);
  });
});