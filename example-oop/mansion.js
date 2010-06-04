/**
 * @fileoverview A Mansion is a larger House that includes a guest house.
 * @author hb@hb.gen.tr <Haldun Bayhantopcu>
 */
goog.provide('example.Mansion');

goog.require('example.House');

/**
 * @param {string} address Address of this mansion.
 * @param {example.House} guestHouse This mansion's guest house.
 * @param {number=} numberOfBathrooms Number of bathrooms in this mansion.
 *    Defaults to 10.
 * @constructor
 * @extends {example.House}
 */
example.Mansion = function(address, guestHouse, numberOfBathrooms) {
  if (!goog.isDef(numberOfBathrooms)) {
    numberOfBathrooms = 10;
  }
  example.House.call(this, address, numberOfBathrooms);
  
  /**
   * @type {example.House}
   */
  this.guestHouse_ = guestHouse;  
};
goog.inherits(example.Mansion, example.House);

/**
 * Donates all of the items in the garage.
 * @param {example.Goodwill} goodwill Organization who receives the donations.
 */
example.Mansion.prototype.giveItemsToGoodwill = function(goodwill) {
  // Can access the itemsInTheGarage field directly because it is protected.
  // If it were private, then the superclass would have to expose a public
  // or protected getter method for itemsInTheGarage
  var items = this.itemsInTheGarage;
  for (var i = 0; i < items.length; i++) {
    goodwill.acceptDonation(items[i]);
  }
  this.itemsInTheGarage = [];
};

/**
 * @override
 */
example.Mansion.prototype.paint = function(color) {
  example.Mansion.superClass_.paint.call(this, color);
  this.guestHouse_.paint(color);
};
