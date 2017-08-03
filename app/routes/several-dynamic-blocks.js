import Route from "@ember/routing/route";

const MODAL_ORIGINAL = `
<div class="modal">
  <div class="title">
    <!-- Dynamic title -->
  </div>
  <div class="content">
    <!-- Dynamic title -->
  </div>
</div>
`;

const MODAL_SOLUTION = `
<div class="modal">
  <div class="title">
    {{yield (hash title=(component "modal-header"))}}
  </div>
  <div class="content">
    {{yield (hash content=(component "modal-content"))}}
  </div>
</div>
`;

const MODAL_HEADER_HBS_SOLUTION = '{{yield}}';

const MODAL_HEADER_JS_SOLUTION = `
import Component from "@ember/component";

export default Component.extend({
  tagName: ''
});
`;

const MODAL_CONTENT_HBS_SOLUTION = '{{yield}}';

const MODAL_CONTENT_JS_SOLUTION = `
import Component from "@ember/component";

export default Component.extend({
  tagName: ''
});
`;

const MODAL_USING_SOLUTION = `
{{#modal-window as |modal|}}
  {{#modal.title}}
    <!-- Dynamic title -->
  {{/modal.title}}

  {{#modal.content}}
    <!-- Dynamic title -->
  {{/modal.content}}
{{/modal-window}}
`;

const YIELD_BLOCK_HBS = `{{yield}}`;
const YIELD_BLOCK_JS = `
import Component from "@ember/component";

export default Component.extend({
  tagName: ''
});
`;

const OOP_PROBLEM = `
class Modal {
  render() {
    // ...
    // Code for title
    // ...
    // Code for content
    // ...
  }
}`;

const OOP_SOLUTION =`
class Modal {
  render() {
    // ... 
    this.title();
    // ...
    this.content();
  }
  title() {
    // Code for title
  }
  content() {
    // Code for content
  }
}
`;

export default Route.extend({
  model() {
    return {
      'modal': MODAL_ORIGINAL,
      'modal-solution': MODAL_SOLUTION,
      'modal-header-hbs-solution': MODAL_HEADER_HBS_SOLUTION,
      'modal-header-js-solution': MODAL_HEADER_JS_SOLUTION,
      'modal-content-hbs-solution': MODAL_CONTENT_HBS_SOLUTION,
      'modal-content-js-solution': MODAL_CONTENT_JS_SOLUTION,
      'modal-using-solution': MODAL_USING_SOLUTION,
      'yield-block-hbs': YIELD_BLOCK_HBS,
      'yield-block-js': YIELD_BLOCK_JS,
      'oop-problem': OOP_PROBLEM,
      'oop-solution': OOP_SOLUTION
    }
  }
});

