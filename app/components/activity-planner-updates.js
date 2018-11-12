import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    categories: ['Completed', 'Pending', 'New', 'Cancelled'],
    currentView: 'Categories',
    actions: {
        selectCategory(category) {
            console.log('Updated Category:', category);
            this.set('currentView', 'Tasks');
        }
    },
    showCategoriesView: computed('currentView', function() {
        return this.currentView === 'Categories'
    }),
    showTasksView: computed('currentView', function() {
        return this.currentView === 'Tasks'
    })
});