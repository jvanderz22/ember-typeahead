'use strict';

var path = require('path');
var fs   = require('fs');

function EmberCLITypeAhead(project) {
  this.project = project;
  this.name    = 'Ember CLI Type Ahead';
}

function unwatchedTree(dir) {
  return {
    read:    function() { return dir; },
    cleanup: function() { }
  };
}

EmberCLITypeAhead.prototype.treeFor = function treeFor(name) {
  var treePath =  path.join('node_modules', 'ember-cli-type-ahead', name + '-addon');

  if (fs.existsSync(treePath)) {
    return unwatchedTree(treePath);
  }
};

EmberCLITypeAhead.prototype.included = function included(app) {
  this.app = app;

  this.app.import('vendor/ember-cli-type-ahead/js/twitter-typeahead.js');
  this.app.import('vendor/ember-cli-type-ahead/styles/style.css');
};

module.exports = EmberCLITypeAhead;
