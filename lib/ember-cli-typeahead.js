'use strict';

var path = require('path');
var fs   = require('fs');

function EmberCliTypeahead(project) {
  this.project = project;
  this.name    = 'Ember CLI Typeahead';
}

function unwatchedTree(dir) {
  return {
    read:    function() { return dir; },
    cleanup: function() { }
  };
}

EmberCliTypeahead.prototype.treeFor = function treeFor(name) {
  var treePath =  path.join('node_modules', 'ember-cli-typeahead', name + '-addon');

  if (fs.existsSync(treePath)) {
    return unwatchedTree(treePath);
  }
};

EmberCliTypeahead.prototype.included = function included(app) {
  this.app = app;

  this.app.import('bower_components/ember-cli-typeahead/js/twitter-typeahead.js');
  this.app.import('bower_components/ember-cli-typeahead/styles/style.css');
};

module.exports = EmberCliTypeahead;
