import { bear } from './../js/hungrybear.js';

describe('HungryBear', function() {
  let fuzzy = bear;

  beforeEach(function() {
    jasmine.clock().install();
    fuzzy.name = "Fuzzy";
    fuzzy.foodLevel = 10;
    fuzzy.setHunger();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level of 10 when it is created', function() {
    expect(fuzzy.name).toEqual("Fuzzy");
    expect(fuzzy.foodLevel).toEqual(10);
  });

  it('should have a food level of 7 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(fuzzy.foodLevel).toEqual(7);
  });

  it('should get very hungry if the food level drops below zero', function() {
    fuzzy.foodLevel = 0;
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  it('should get very hungry if 10 seconds pass without feeding', function() {
    jasmine.clock().tick(10001);
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  it('should return that the bear ate blueberries and the food level should go up 5', function() {
    expect(fuzzy.eatSmall("blueberries")).toEqual("The bear ate the blueberries! Food level goes up 5!");
    expect(fuzzy.foodLevel).toEqual(15);
  });

  it('should return that the bear ate honey and the food level should go up 10', function() {
    expect(fuzzy.eatMedium("honey")).toEqual("The bear ate the honey! Food level goes up 10!");
    expect(fuzzy.foodLevel).toEqual(20);
  });

  it('should return that the bear ate salmon and the food level should go up 15', function() {
    expect(fuzzy.eatLarge("salmon")).toEqual("The bear ate the salmon! Food level goes up 15!");
    expect(fuzzy.foodLevel).toEqual(25);
  });

  it('should return that the bear ate sticks and the food level should go up -10', function() {
    expect(fuzzy.eatYuck("sticks")).toEqual("The bear ate the sticks! Food level goes up -10!");
    expect(fuzzy.foodLevel).toEqual(0);
  });

  it('should return that the bear ate baby deer and the food level should go up 50', function() {
    expect(fuzzy.eatPowerUp("baby deer")).toEqual("The bear ate the baby deer! Food level goes up 50!");
    expect(fuzzy.foodLevel).toEqual(60);
  });

  it('should return that the bear ate EVERYTHING and the food level should go up 100', function() {
    expect(fuzzy.eatSpecialBonus("EVERYTHING")).toEqual("The bear ate the EVERYTHING! Food level goes up 100!");
    expect(fuzzy.foodLevel).toEqual(110);
  });

  it('should return that when the bear ate bugs and his food level should go up at a random rate', function() {
    fuzzy.eatWeirdThing("bugs");
    expect(isNaN(fuzzy.foodLevel)).toEqual(false);
  });
});
