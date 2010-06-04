goog.provide('example');
goog.provide('example.Button');
goog.provide('example.FancyButton');

goog.require('goog.dom');
goog.require('goog.math.Coordinate');

goog.require('example.templates');

example.sayHello = function(message) {
  var data = {
    greeting: message,
    year: new Date().getFullYear()
  };
  var html = example.templates.welcome(data);  
  goog.dom.getElement('hello').innerHTML = html;
};

/**
 * Tries to use parseInt() to convert str to an integer. If parseInt() returns
 * NaN, then example.convertStringToInteger returns 0 instead.
 *
 * @param {string|null|undefined} str
 * @return {number}
 */
example.convertStringToInteger = function(str) {
  var value = parseInt(str, 10);
  return isNaN(value) ? 0 : value;
};

/** @typedef {{row: number, column: string, piece}} */
example.chessSquare = goog.typedef;

/**
 * @param {{author: ?string, title: ?string, numRows: ?number}} properties
 */
example.createNewSpreadsheetWithRows = function(properties) {
  var author = properties.author || "hb@hb.gen.tr";
  var title = properties.title || "New Spreadsheet";
  var numRows = properties.numRows || 1024;
  // ....
};

/**
 * @param {string} label
 * @constructor
 */
example.Button = function(label) {
  /**
   * @type {string}
   * @private
   */
  this._id = String(++example.Button.NEXT_ID_);
  
  /**
   * @type {string}
   * @protected
   */
  this.label_ = label;
};

/**
 * @type {number}
 * @private
 */
example.Button.NEXT_ID_ = 0;

/**
 * @param {string} label
 * @constructor
 * @extends {example.Button}
 */
example.FancyButton = function(label) {
  example.Button.call(this, label);
};

/**
 * {@inheritDoc}
 */
example.FancyButton.prototype.toString = function() {
  return '[' + this.label_ + ']';
};

/**
 * @param {number} radius
 * @param {goog.math.Coordinate} point
 * @return {boolean} whether point is within the specified radius
 */
example.radius.isWithinRadius = function(radius, point) {
  var origin = new goog.math.Coordinate(0, 0);
  var distance = goog.math.Coordinate.distance(point, origin);
  return distance <= radius;
};

goog.exportSymbol('example.sayHello', example.sayHello);
