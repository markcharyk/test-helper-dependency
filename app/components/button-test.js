import Component from '@ember/component';

export default Component.extend({
  buttonIsClicked: false,

  actions: {
    onButtonClick() {
      this.set('buttonIsClicked', true);
    }
  }
});
