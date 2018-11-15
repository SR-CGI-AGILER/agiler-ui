import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    categories: ['Completed', 'Pending', 'New', 'Cancelled'],
    currentView: 'Categories',
    actions: {
        selectCategory(category) {
            console.log('Updated Category:', category);
            this.set('currentView', 'CancelledTasks');
        },
        showCategories() {
            console.log('Back to Category View');
            this.set('currentView', 'Categories');
        }
    },
    showCategoriesView: computed('currentView', function() {
        return this.currentView === 'Categories'
    }),
    showCancelledTasks: computed('currentView', function(){
        return this.currentView === 'CancelledTasks'
    })
});
