import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';

moduleForComponent('default-blocks/personal-client-info', 'Integration | Component | default blocks/personal client info', {
  integration: true
});

test('it renders', function(assert) {
  this.set( 'client', EmberObject.create({
    name: 'Sam Smite',
    personalId: '123'
  }));

  this.render(hbs`{{default-blocks/personal-client-info client=client}}`);

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
      "123"
    ]
  );
});
