import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | standups', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:standups');
    assert.ok(controller);
  });
});
