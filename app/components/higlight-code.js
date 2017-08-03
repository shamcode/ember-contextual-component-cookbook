import Component from '@ember/component';
import { computed } from '@ember/object';
import { oneWay } from '@ember/object/computed';
import { classify } from '@ember/string';

export default Component.extend({
  classNames: ['highlight'],

  language: computed('name', 'languageFor{Js,Hbs}Extension', function() {
    const extension = this.get('name').split('.').slice(-1)[0];
    return this.get(`languageFor${classify(extension)}Extension`);
  }),
  languageForJsExtension: computed(function() {
    return 'Javascript';
  }),
  languageForHbsExtension: computed(function() {
    return 'Handlebars';
  }),
  lines: computed('code', function() {
    return this
      .get('code')
      .trim()
      .split('\n')
      .map((_, i) => i + 1)
    ;
  }),
  linesString: computed('lines', function() {
    return this.get('lines').join('\n');
  }),
  linesCount: oneWay('lines.length')
});
