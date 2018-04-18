import { module, test } from 'qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { setupRenderingTest } from 'ember-qunit';
import $ from 'jquery';
import { clickTrigger } from 'ember-power-select/test-support/helpers';

module('Integration | Component | button test', function(hooks) {
  setupRenderingTest(hooks);

  test('it destroys the button', async function(assert) {
    await render(hbs`{{button-test}}`);
    assert.equal($('.ember-power-select-trigger').length, 1, 'button not destroyed');

    await clickTrigger();

    assert.equal($('[data-test-destroyed-button]').length, 1, 'button destroyed');
  });
});
