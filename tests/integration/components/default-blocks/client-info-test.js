import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';

moduleForComponent('default-blocks/client-info',
  'Integration | Component | default blocks/client info',
  {
    integration: true
  }
);

test('it renders', function( assert ) {
  this.set('client', EmberObject.create({
    name: 'Sam Smite'
  }));

  this.render(hbs`{{default-blocks/client-info client=client}}`);

  assert.deepEqual(this.$()
      .text()
      .trim()
      .split('\n')
      .map(x => x.trim())
      .filter(x => x.length > 0),
    [
      "Name:",
      "Sam Smite",
      "ID:",
      "Hasn't unique ID!"
    ]
  );
});
