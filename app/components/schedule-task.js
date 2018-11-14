import Component from '@ember/component';

export default Component.extend({
    actions: {
        selectTask(category) {
            this.selectTask(category.text);
        }
    }
});