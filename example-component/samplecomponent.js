/**
 * @fileoverview A simple component.
 */
goog.provide('example.SampleComponent');

goog.require('goog.debug.Logger');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.events.EventHandler');
goog.require('goog.events.EventType');
goog.require('goog.events.KeyCodes');
goog.require('goog.events.KeyHandler');
goog.require('goog.events.KeyHandler.EventType');
goog.require('goog.ui.Component');

/**
 * A simple box that changes colour when clicked. This class demonstrates
 * the goog.ui.Component API, and is keyboard accessible, etc.
 * 
 * @param {string=} label A label to display.
 * @param {goog.dom.DomHelper=} domHelper DOM helper to use.
 * @extends {goog.ui.Component}
 * @constructor
 */
example.SampleComponent = function(label, domHelper) {
  goog.ui.Component.call(this, domHelper);
  
  /**
   * The label to display.
   * @type {String}
   * private
   */
  this.initialLabel_ = label || 'Click Me!';
  
  /**
   * The current color.
   * @type {String}
   * @private
   */
  this.color_ = 'red';
  
  /**
   * Event handler for this object.
   * @type {goog.events.EventHandler}
   * @private
   */
  this.eh_ = new goog.events.EventHandler(this);
  
  /**
   * Keyboard handler for this object. This object is created once the
   * component's DOM element is known.
   * @type {goog.events.KeyHandlers|null}
   * @private
   */
  this.kh_ = null;
  
  this.logger_.info("initialized");
  this.logger_.info(this.getId());
};
goog.inherits(example.SampleComponent, goog.ui.Component);

/**
 * A logger to help debugging of component behaviour.
 * @type {goog.debug.Logger}
 * @private
 */
example.SampleComponent.prototype.logger_ = 
    goog.debug.Logger.getLogger('example.SampleComponent');

/**
 * Changes the color of the element.
 * @private
 */
example.SampleComponent.prototype.changeColor_ = function() {
  if (this.color_ == 'red') {
    this.color_ = 'green';
  } else if (this.color_ == 'green') {
    this.color_ = 'blue';
  } else {
    this.color_ = 'red';
  }
  this.getElement().style.backgroundColor = this.color_;
};

/**
 * Creates an initial DOM representaion for the component.
 */
example.SampleComponent.prototype.createDom = function() {
  this.decorateInternal(this.dom_.createElement('div'));
  this.logger_.info('Logger createDom finished');
};

/**
 * Decorates an existing HTML DIV element as a SampleComponent.
 * @param {HTMLElement} element The DIV element to decorate. The element's
 *    text, if any will be used as the component's label.
 */
example.SampleComponent.prototype.decorateInternal = function(element) {
  example.SampleComponent.superClass_.decorateInternal.call(this, element);
  
  if (!this.getLabelText()) {
    this.setLabelText(this.initialLabel_);
  }
  
  var el = this.getElement();
  goog.dom.classes.add(el, goog.getCssName('example-sample-component'));
  el.style.backgroundColor = this.color_;
  el.tabIndex = 0;
  
  this.kh_ = new goog.events.KeyHandler(el);
  this.eh_.listen(this.kh_, goog.events.KeyHandler.EventType.KEY, this.onKey_);
  this.logger_.info("Sample component decorated internal");
};

/**
 * Disposes of the component.
 */
example.SampleComponent.prototype.disposeInternal = function() {
  example.SampleComponent.superClass_.disposeInternal.call(this);
  this.eh_.dispose();
  if (this.kh_) {
    this.kh_.dispose();
  }
};

/**
 * Called when component's element is known to be in the document.
 */
example.SampleComponent.prototype.enterDocument = function() {
  example.SampleComponent.superClass_.enterDocument.call(this);
  this.eh_.listen(this.element_, goog.events.EventType.CLICK,
      this.onDivClicked_);
};

/**
 * Called when component's element is known to have been removed from the
 * document.
 */
example.SampleComponent.prototype.exitDocument = function() {
  example.SampleComponent.superClass_.exitDocument.call(this);
  this.eh_.unlisten(this.element_, goog.events.EventType.CLICK,
      this.onDivClicked_);
};

/**
 * Gets the current label text.
 *
 * @return {string} The current text set into the label, or empty string if
 *    none set.
 */
example.SampleComponent.prototype.getLabelText = function() {
  if (!this.getElement()) {
    return '';
  }
  return goog.dom.getTextContent(this.getElement());
};

/**
 * Handles DIV element clicks, causing the DIV's color to change.
 * @param {goog.events.Event} event The click event.
 * @private
 */
example.SampleComponent.prototype.onDivClicked_ = function() {
  this.changeColor_();
};
 
/**
 * Fired when user presses a akey while the DIV has focus. If the user presses
 * space or enter, the color will be changed.
 * @param {goog.events.Event} event The key event.
 * @private
 */
example.SampleComponent.prototype.onKey_ = function(event) {
  var keyCodes = goog.events.KeyCodes;
  if (event.keyCode == keyCodes.SPACE || event.keyCode == keyCodes.ENTER) {
    this.changeColor_();
  }
};

/**
 * Sets the current label text. Has no effect if component is not rendered.
 * @param {string} text The text to set as the label.
 */
example.SampleComponent.prototype.setLabelText = function(text) {
  if (this.getElement()) {
    goog.dom.setTextContent(this.getElement(), text);
  }
};
