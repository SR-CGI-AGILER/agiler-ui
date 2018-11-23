import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | sprintView', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:sprint-view');
    assert.ok(route);
  });
});
