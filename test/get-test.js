var vows = require('vows'),
    assert = require('assert'),
    get = require('../src/index').get;

vows.describe('get()').addBatch({
  'Getting': {
    topic: function() {
      return {
        foo: 1
      };
    },
    'an existing property returns the value': function(obj) {
      assert.equal(get(obj, 'foo'), 1);
    },
    'a non-existing property returns null by default': function(obj) {
      assert.isUndefined(get(obj, 'bar'));
    },
    'a non-existing property returns the default value if provided': function(obj) {
      assert.equal(get(obj, 'foo', 2), 1);
      assert.equal(get(obj, 'bar', 2), 2);
    },
  }
}).export(module);