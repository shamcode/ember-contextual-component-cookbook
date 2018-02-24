
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('wrap-component-into-hash', 'helper:wrap-component-into-hash', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{get (wrap-component-into-hash 'foo' 123) 'foo'}}`);

  assert.equal(this.$().text().trim(), '123');
});

