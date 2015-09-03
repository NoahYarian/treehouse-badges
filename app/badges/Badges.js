'use strict';

var ObjectID = require('mongodb').ObjectID;
var _ = require('lodash');

var mongo = require('../../lib/mongo/');

function Badge(b) {
  this.title = b.title;
  this.icon_url = b.icon_url;
  this.url = b.url;
}

Object.defineProperty(Badge, 'collection', {
  get: function () {
    return mongo.getDb().collection('badges');
  }
});
