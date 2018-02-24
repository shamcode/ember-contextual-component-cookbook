import Route from '@ember/routing/route';

const CLIENT_INFO = `
<dl>
    <dt>Name:</dt>
    <dd>{{client.name}}</dd>
    <dt>ID:</dt>
    <dd>
      {{!--May override--}}
      {{!--If don't overridden, display message --}}
      <span class="danger">
        Hasn't unique ID!
      </span> 
    </dd>
</dl>
`;

const IF_USED_BLOCK_TEMPLATE = `
{{yield (wrap-component-into-hash
  blockName
  (component "yield-block"
    register=(action 'register')
    unregister=(action 'unregister')
  )
)}}

{{#unless blockUsed}}
  {{yield to="inverse"}}
{{/unless}}
`;
const IF_BLOCK_USED_COMPONENT = `
import Component from '@ember/component';

const IfUsedBlock = Component.extend({
  blockUsed: false,

  actions: {
    register() {
      this.set('blockUsed', true)
    },
    unregister() {
      if (this.isDestroyed || this.isDestroying) {
        return;
      }
      this.set('blockUsed', false)
    }
  }
});

IfUsedBlock.reopenClass({
  positionalParams: ['blockName']
});

export default IfUsedBlock;
`;

const YIELD_BLOCK_TEMPLATE = `
{{yield}}
`;

const YIELD_BLOCK_COMPONENT = `
import Component from '@ember/component';

export default Component.extend({
  tagName: '',
  init() {
    this._super( ...arguments );
    const register = this.get('register');
    if (undefined !== register) {
      this.get('register')();
    }
  },
  willDestroy() {
    const unregister = this.get('unregister');
    if (undefined !== unregister) {
      this.get('unregister')();
    }
  }
});
`;

const SLOT_HASH_HELPER = `
import { helper } from '@ember/component/helper';
import EmberObject from '@ember/object';

export function slotHash(params/*, hash*/) {
  return EmberObject.create({
    [params[0]]: params[1]
  });
}

export default helper(slotHash);
`;

const CLIENT_INFO_SOLUTION = `
<dl>
    <dt>Name:</dt>
    <dd>{{client.name}}</dd>
    <dt>ID:</dt>
    <dd>
      {{#if-used-block 'id' as |block|}}
        {{yield block}}
      {{else}}
        <span class="danger">
          Hasn't unique ID!
        </span>
     {{/if-used-block}}
    </dd>
</dl>
`;

const PERSONAL_CLIENT = `
{{#client-info client=client as |blocks|}}
  {{#blocks.id}}
    {{client.personalId}}
  {{/blocks.id}}
{{/client-info}}
`;

const LEGAL_CLIENT = `
{{#client-info client=client as |blocks|}}
  {{#blocks.id}}
    {{client.regCode}}
  {{/blocks.id}}
{{/client-info}}
`;

const DEFAULT_CLIENT_INFO_TEST = `
test('it renders', function( assert ) {
  this.set('client', EmberObject.create({
    name: 'Sam Smite'
  }));

  this.render(hbs\`{{client-info client=client}}\`);

  assert.deepEqual(this.$()
      .text()
      .trim()
      .split('\\n')
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
`;

const OOP_PROBLEM = `
class Client {
  renderId() {
  
    // May override
    // If don't overridden, display message
    return "Hasn't unique ID!";
  }
}
`;

const OOP_SOLUTION = `
class PersonalClient extends Client {
  renderId() {
    return this.user.personalId;
  }
}
`;

export default Route.extend({
  model() {
    return {
      'client-info': CLIENT_INFO,
      'if-used-block-template': IF_USED_BLOCK_TEMPLATE,
      'if-used-block-component': IF_BLOCK_USED_COMPONENT,
      'yield-block-template': YIELD_BLOCK_TEMPLATE,
      'yield-block-component': YIELD_BLOCK_COMPONENT,
      'wrap-component-into-hash-helper': SLOT_HASH_HELPER,
      'client-info-solution': CLIENT_INFO_SOLUTION,
      'personal-client-info': PERSONAL_CLIENT,
      'legal-client-info': LEGAL_CLIENT,
      'default-client-info-test': DEFAULT_CLIENT_INFO_TEST,
      'oop-problem': OOP_PROBLEM,
      'oop-solution': OOP_SOLUTION
    }
  }
});
