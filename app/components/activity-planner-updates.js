import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    categories: ['Completed', 'Pending', 'New', 'Cancelled'],
    currentView: 'Categories',
    actions: {
        selectCategory(category) {
            console.log('Updated Category:', category);
            this.set('currentView', category);
        },
        showCategories() {
            console.log('Back to Category View');
            this.set('currentView', 'Categories');
        }
    },
    showCategoriesView: computed('currentView', function() {
        return this.currentView === 'Categories'
    }),
    showTasksView: computed('currentView', function() {
        return this.currentView === 'Tasks'
    }),
    showPendingTasks: computed('currentView', function() {
        return  this.currentView === 'Pending'
    }),
    showCancelledTasks: computed('currentView', function(){
        return this.currentView === 'Cancelled'
    }),
    showCompletedTasksView: computed('currentView', function() {
        return this.currentView === 'Completed'
    }),
    showNewTasksView: computed('currentView', function() {
        return this.currentView === 'New'
    })
});
