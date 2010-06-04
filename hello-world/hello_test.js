goog.require('goog.testing.jsunit');

goog.require('goog.dom');
goog.require('example');

var testHtmlEscaping = function() {
  example.sayHello('<b>greeting</b>');
  var greetingEl = goog.dom.getElement('greeting');
  assertEquals(
    'The <h1 id="greeting"> element should only have one child node',
    1, greetingEl.childNodes.length);
};

