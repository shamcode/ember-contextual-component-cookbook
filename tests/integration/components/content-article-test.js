import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('content-article', 'Integration | Component | content article', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`
    {{#content-article as |article|}}
      {{#article.title}}Title{{/article.title}}
      {{#article.content}}Content{{/article.content}}
    {{/content-article}}
  `);

  assert.equal(this.$( '.title' ).text().trim(), 'Title');
  const content = this.$()
    .text()
    .split('\n')
    .map(x => x.trim())
    .filter(x => x.length > 0);
  assert.deepEqual(content, [
    'Title',
    'Content'
  ]);
});
