import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('several-dynamic-blocks/modal-content', 'Integration | Component | several dynamic blocks/modal content', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{several-dynamic-blocks/modal-content}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#several-dynamic-blocks/modal-content}}
      template block text
    {{/several-dynamic-blocks/modal-content}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
