import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('menu-sidebar', 'Integration | Component | menu sidebar', {
  integration: true
});

test('it renders', function(assert) {

  this.set('items', [
    {link: 'application', label: 'About'}
  ]);

  this.render(hbs`{{menu-sidebar items=items}}`);

  assert.equal(this.$().text().trim(), 'About');
});
