import Component from '@ember/component';

export default Component.extend({
    actions: {
        selectCategory(category) {
            console.log(category);
        }
    }
});