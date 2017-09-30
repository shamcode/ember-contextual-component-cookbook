import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('to-inverse/when-loaded', 'Integration | Component | to inverse/when loaded', {
  integration: true
});

test('loaded', function(assert) {
  this.set( 'loaded', true );
  this.render(hbs`
    {{#to-inverse/when-loaded loaded}}
      template block text
    {{/to-inverse/when-loaded}}
  `);
  assert.equal(this.$().text().trim(), 'template block text');
});

test('inverse', function(assert) {
  this.set( 'loaded', false );
  this.render(hbs`
    {{#to-inverse/when-loaded loaded}}
      template block text
    {{else}}
      inverse block  
    {{/to-inverse/when-loaded}}
  `);
  assert.equal(this.$().text().trim(), 'inverse block');
});
