/**
 * @fileoverview House contains information about a house.
 * @author hb@hb.gen.tr <Haldun Bayhantopcu>
 */
goog.provide('example.House');

/**
 * Creates a new House.
 * @param {string} address Address of this house.
 * @param {number=} numberOfBathrooms
 * @param {Array.<Object>=} itemsInTheGarage
 * @constructor
 */
example.House = function(address, numberOfBathrooms, itemsInTheGarage) {
  /**
   * @type {string}
   * @private
   */
  this.address_ = address;
  
  if (goog.isDef(numberOfBathrooms)) {
    this.numberOfBathrooms_ = numberOfBathrooms;
  }
  
  /**
   * @type {Array.<Object>}
   * @protected
   */
  this.itemsInTheGarage = goog.isDef(itemsInTheGarage) ?
                          itemsInTheGarage : [];
};

/**
 * @type {number}
 * @private
 */
example.House.prototype.numberOfBathrooms_ = 1;

/**
 * @type {boolean}
 * @private
 */
example.House.prototype.needsPaintJob_ = false;

/**
 * @return {string}
 */
example.House.prototype.getAddress = function() {
  return this.address_;
};

/**
 * @return {number}
 */
example.House.prototype.isNeedsPaintJob = function() {
  return this.needsPaintJob_;
};

/**
 * @param {boolean} needsPaintJob
 */
example.House.prototype.setNeedsPaintJob = function(needsPaintJob) {
  this.needsPaintJob_ = needsPaintJob;
};

/**
 * @param {string} color
 */
example.House.prototype.paint = function(color) {
  console.log("painting house");
};

/**
 * @return {number}
 */
example.House.prototype.getNumberOfItemsInGarage = function() {
  return this.itemsInTheGarage.length;
};
