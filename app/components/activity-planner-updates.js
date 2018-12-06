import Component from '@ember/component';
import {
  computed
} from '@ember/object';

export default Component.extend({
  init() {
    this._super(...arguments);
    
  },

  willDestroyElement() {

    this._super(...arguments);
  },
  categories: ['Completed', 'Pending', 'New', 'Cancelled'],
  currentView: 'Categories',
  startTime: null,
  endTime: null,
  selectedBands: [],
  selectedCount: Ember.computed.reads('selectedBands.length'),
  
  actions: {
    selectCategory(category) {
      this.set('currentView', category);
    },
    showCategories() {
      this.set('currentView', 'Categories');
    },
    selectBand(event) {

        this.set('startTime', new Date().getTime())
        if (!event.checked) {
          this.selectedTasks.pushObject(event.tasks);
        } else {
  
          this.selectedTasks.removeObject(event.tasks);
        }
  
      },
      unselectBand(item) {
        if ((this.startTime + 500) < new Date().getTime()) {
          this.set('selectedTasks', []);
          if (this.selected){
            this.set('selected', false)
            }
          else{
            this.set('selected', true)
          }
            
  
        } else {
          if (!this.selected) {
  
            this.set('selectedTasks', []);
          }
  
        }
      },
      myuserdefined(x) {
        x.checked = true;
        return x
  
      }
  },

  newCategories: computed('categories', function () {

    return [{
      name: this.get('categories')[0],
      number: this.get('catasks')
    }, {
      name: this.get('categories')[1],
      number: this.get('ptasks')
    }, {
      name: this.get('categories')[2],
      number: this.get('ntasks')
    }, {
      name: this.get('categories')[3],
      number: this.get('ctasks')
    }];
  }),

  showCategoriesView: computed('currentView', function () {
    return this.currentView === 'Categories'
  }),
  showTasksView: computed('currentView', function () {
    return this.currentView === 'Tasks'
  }),
  showPendingTasks: computed('currentView', function () {
    return this.currentView === 'Pending'
  }),
  showCancelledTasks: computed('currentView', function () {
    return this.currentView === 'Cancelled'
  }),
  showCompletedTasksView: computed('currentView', function () {
    return this.currentView === 'Completed'
  }),
  showNewTasksView: computed('currentView', function () {
    return this.currentView === 'New'
  }),

  
});
