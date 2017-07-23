import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('extending-component/blog-post', 'Integration | Component | extending component/blog post', {
  integration: true
});

test('it renders', function(assert) {
  this.set('posts', [
    { content: 'Foo content' },
    { content: 'Bar content' }
  ]);

  // Template block usage:
  this.render(hbs`
    {{#each posts as |post|}}
      {{#extending-component/blog-post}}
        {{post.content}}
      {{/extending-component/blog-post}}
    {{/each}}
  `);
  const content = this.$( '.blog-post' )
    .text()
    .split('\n')
    .map(x => x.trim())
    .filter(x => x.length > 0);
  assert.deepEqual(content, [
    'Foo content',
    'Bar content'
  ]);
});
