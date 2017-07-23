import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('yield-block', 'Integration | Component | yield block', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{yield-block}}`);

  assert.equal(this.$().text().trim(), '');

  this.render(hbs`
    {{#yield-block}}
      template block text
    {{/yield-block}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
