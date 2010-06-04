/**
 * @fileoverview Deneme
 */
goog.provide('example');

goog.require('goog.ui.Component');


example.Component = function(domHelper) {
  this.superClass_.call(this, domHelper);
  console.log("example component initialized");
};
goog.inherits(example.Component, goog.ui.Component);

