import Route from "@ember/routing/route";

const WHEN_LOADED_ORIGINAL = `
{{#if loaded}}
  {{yield (hash loaded=(component "yield-block"))}}
{{else}}
  {{yield (hash loading=(component "yield-block"))}}
{{/if}}
`;

const WHEN_LOADED_USAGE_ORIGINAL = `
{{#when-loaded loaded=loaded as |when|}}
  {{#when.loaded}}Loaded!{{/when.loaded}}
  {{#when.loading}}Loading...{{/when.loading}}
{{/when-loaded}}
`;

const WHEN_LOADED_SOLUTION = `
{{#if loaded}}
  {{yield}}
{{else}}
  {{yield to="inverse"}}
{{/if}}
`;

const WHEN_LOADED_USAGE_SOLUTION = `
{{#when-loaded loaded=loaded}}
  Loaded!
{{else}}
  Loading...
{{/when-loaded}}
`;

export default Route.extend({
  model() {
    return {
      'when-loaded': WHEN_LOADED_ORIGINAL,
      'when-loaded-usage': WHEN_LOADED_USAGE_ORIGINAL,
      'when-loaded-solution': WHEN_LOADED_SOLUTION,
      'when-loaded-usage-solution': WHEN_LOADED_USAGE_SOLUTION
    }
  }
});
