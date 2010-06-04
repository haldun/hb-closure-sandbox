goog.provide('example');

goog.require('goog.dom');
goog.require('goog.net.cookies');
goog.require('goog.style');

/**
 * @type {?Element}
 */
var highlightedRow = null;

example.click = function(e) {
  var el = e.target;
  var rowEl = goog.dom.getAncestorByTagNameAndClass(el, undefined, 'row');
  
  if (rowEl) {
    var name = rowEl.id.substring('row-'.length);
    alert('clicked on ' + name);
  }
};

example.mouseover = function(e) {
  var el = e.target;
  var rowEl = goog.dom.getAncestorByTagNameAndClass(el, undefined, 'row');
  
  if (rowEl === highlightedRow) {
    return;
  }
  
  example.clearHighlight();
  highlightedRow = rowEl;
  highlightedRow.style.backgroundColor = 'grey';
};

example.clearHighlight = function() {
  if (highlightedRow) {
    highlightedRow.style.backgroundColor = 'white';
  }
  
  highlightedRow = null;
};

example.main = function() {
  var root = goog.dom.getElement('root');
  
  root.addEventListener('click', example.click, false);
  root.addEventListener('mouseover', example.mouseover, false);
  root.addEventListener('mouseout', example.clearHighlight, false);
  
  example.addSomeElement();
  example.addDocumentFragment();
  
  var mycookie = goog.net.cookies.get('mycookie');
  
  if (mycookie) {
    console.log("cookie varmis");
    console.log()
  } else {
    goog.net.cookies.set('mycookie', 'Nabber');
  }
  
  var coordinate = goog.style.getPageOffset(root);
  console.log(coordinate);
  
  console.log(goog.style.getSize(root));
  console.log(goog.style.getBounds(root));
};

example.addSomeElement = function() {
  var root = goog.dom.getElement('root');
  var divEl = 
    goog.dom.createDom('div', 'header',
      goog.dom.createDom('img', {'class': 'logo', 'src': 'logo.png'}),
      goog.dom.createDom('h2', undefined, 'Welcome!'));
  goog.dom.appendChild(root, divEl);
};

example.addDocumentFragment = function() {
  var root = goog.dom.getElement('root');
  var docFragment = goog.dom.htmlToDocumentFragment(
    'Only <b>you</b> can prevent forest fires.');
  
  goog.dom.appendChild(root, docFragment);
};
