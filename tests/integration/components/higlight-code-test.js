import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('higlight-code', 'Integration | Component | higlight code', {
  integration: true
});

test('Js render', function(assert) {
  this.setProperties({
    code: `function() { return 42; }`
  });

  this.render(hbs`{{higlight-code name='foo.js' code=code}}`);

  const content = this.$()
    .text()
    .split('\n')
    .map(x => x.trim())
    .filter(x => x.length > 0)
  ;
  assert.deepEqual(
    content,
    [
      'foo.js',
      '1 function() { return 42; }'
    ]
  );
});

test('Hbs render', function(assert) {
  this.setProperties({
    code: `
{{#if foo}}
    {{bar}}
{{/if}}
`
  });

  this.render(hbs`{{higlight-code name='foo.hbs' code=code}}`);

  const content = this.$()
    .text()
    .split('\n')
    .map(x => x.trim())
    .filter(x => x.length > 0)
  ;
  assert.deepEqual(
    content,
    [
      'foo.hbs',
      '1 {{#if foo}}',
      '2   {{bar}}',
      '3 {{/if}}'
    ]
  );
});
