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
