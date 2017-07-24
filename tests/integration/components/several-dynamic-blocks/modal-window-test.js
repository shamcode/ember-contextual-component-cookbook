import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('several-dynamic-blocks/modal-window', 'Integration | Component | several dynamic blocks/modal window', {
  integration: true
});

test('it renders', function(assert) {

  this.setProperties({
    title: 'My title',
    content: 'My content'
  });

  // Template block usage:
  this.render(hbs`
    {{#several-dynamic-blocks/modal-window as |modal|}}
      {{#modal.title}}
        {{title}}
      {{/modal.title}}
  
      {{#modal.content}}
        {{content}}
      {{/modal.content}}
    {{/several-dynamic-blocks/modal-window}}
  `);

  assert.equal(this.$( '.modal .title' ).text().trim(), 'My title');
  assert.equal(this.$( '.modal .content' ).text().trim(), 'My content');
});
