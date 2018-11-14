import Component from '@ember/component';

export default Component.extend({
    actions: {
        selectCategory(category) {
            this.selectTask(category.text);
        }
    }
});