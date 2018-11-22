import Component from '@ember/component';
import {
  computed
} from '@ember/object';

export default Component.extend({
  init() {
    this._super(...arguments);
    this.completedTasks.setEach('checked', false)
    this.newTasks.setEach('checked', false)
    this.pendingTasks.setEach('checked', false)
  },

  willDestroyElement() {
    console.log("COMPONENET DESTROYED")
    console.log(this.get('todayTeamCopy'));

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
      console.log('Updated Category:', category);
      this.set('currentView', category);
    },
    showCategories() {
      console.log('Back to Category View');
      this.set('currentView', 'Categories');
    },
    selectBand(event) {

        console.log('selectBand', this.get('category'));
        this.set('startTime', new Date().getTime())
        if (!event.checked) {
          this.selectedTasks.pushObject(event.tasks);
          console.log(this.selectedTasks, "on touch staart ..!!!");
        } else {
  
          this.selectedTasks.removeObject(event.tasks);
          console.log(this.selectedTasks, "removing the object !! on touch start @@@@@@");
        }
  
      },
      unselectBand(item) {
        console.log('unselect Band', "on touch end ");
        if ((this.startTime + 500) < new Date().getTime()) {
          this.set('selectedTasks', []);
          console.log("Long Press condition true")
          if (this.selected){
            this.set('selected', false)
            console.log(this.selected);
            }
          else{
            this.set('selected', true)
            console.log(this.selected);
          }
            
  
        } else {
          console.log('else', "happened on the touch end!!!");
          if (!this.selected) {
  
            console.log('NOT SELECTED', "checkbox not invoked!!");
            this.set('selectedTasks', []);
          }
  
        }
        console.log(this.selectedTasks, "end state of the arr on touch end");
      },
      myuserdefined(x) {
        console.log(x, "onChange for the checkbox is triggred")
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
