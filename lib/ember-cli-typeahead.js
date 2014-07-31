'use strict';

var path = require('path');
var fs   = require('fs');

function EmberCLITypeahead(project) {
  this.project = project;
  this.name    = 'Ember CLI Typeahead';
}

function unwatchedTree(dir) {
  return {
    read:    function() { return dir; },
    cleanup: function() { }
  };
}

EmberCLITypeahead.prototype.treeFor = function treeFor(name) {
  var treePath =  path.join('node_modules', 'ember-cli-type-ahead', name + '-addon');

  if (fs.existsSync(treePath)) {
    return unwatchedTree(treePath);
  }
};

EmberCLITypeahead.prototype.included = function included(app) {
  this.app = app;

  this.app.import('vendor/ember-cli-typeahead/js/twitter-typeahead.js');
  this.app.import('vendor/ember-cli-typeahead/styles/style.css');
};

module.exports = EmberCLITypeahead;
