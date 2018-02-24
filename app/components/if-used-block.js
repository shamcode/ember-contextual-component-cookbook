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
