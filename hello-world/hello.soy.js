// This file was automatically generated from hello.soy.
// Please don't edit this file by hand.

goog.provide('example.templates');

goog.require('soy');
goog.require('soy.StringBuilder');


/**
 * @param {Object.<string, *>=} opt_data
 * @param {soy.StringBuilder=} opt_sb
 * @return {string|undefined}
 * @notypecheck
 */
example.templates.welcome = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<h1 id="greeting">', soy.$$escapeHtml(opt_data.greeting), '</h1>The year is ', soy.$$escapeHtml(opt_data.year), '.');
  if (!opt_sb) return output.toString();
};
