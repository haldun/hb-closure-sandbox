/**
 * @fileoverview XHR denemeleri
 */
goog.provide('example');

goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrManager');

example.hello = function() {
  var xhr = new goog.net.XhrIo();
  
  goog.events.listenOnce(xhr, goog.net.EventType.COMPLETE, function(e) {
    var xhr = /** @type {goog.net.XhrIo} */  (e.target);
    console.log(xhr.getStatus());
    console.log(xhr.getResponseText());
    console.log(xhr.getResponseJson());
    xhr.dispose();
  });
  
  xhr.send('data.js');
};

example.helloPool = function() {
  var xhrManager = new goog.net.XhrManager(
    1, // max retries
    null, // headers
    1, // min count
    10, // max count
    1000 // timeout interval
    );

};
