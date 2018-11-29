import Component from '@ember/component';
import RecognizerMixin from 'ember-gestures/mixins/recognizers';

import {
  computed
} from '@ember/object';
// import { Ember } from 'ember';

export default Component.extend(RecognizerMixin, {
  sprint: false,
  selectedTasks: [],
  projects: new Set(),
  todayTeamCopy: [],
  task: [],
  initiatives: "default",
  tabIndex: 3,
  tabSubheading: '(4/4) Activity Plan',
  currentTab: 'ActivityPlan',
  selected: false,
  
  recognizers: 'swipe',
    swipeRight(){
        let index = this.get('tabIndex');
        if(index === 0){
          this.set('tabIndex',3);
        }
        else {
          this.set('tabIndex',index-1);

        }
        console.log(this.tabIndex);
        this.set('selectedTasks', []);
        this.set('selected',false);
      if (this.tabIndex === 1) {
        this.set('currentTab', 'schedule')
        this.set('tabSubheading', `(${this.tabIndex+1}/4) Scheduled`)
      }
      if (this.tabIndex === 2) {
        this.set('currentTab', 'backlogs');
        this.set('tabSubheading', `(${this.tabIndex+1}/4) Product Backlogs`);
        // this.set('tabSubheading', '(' + (parseInt(newTabIndex)+1) + '/4) Product Backlogs');

      }
      if (this.tabIndex === 3) {
        this.set('currentTab', 'ActivityPlan');
        this.set('tabSubheading', `(${this.tabIndex+1}/4) Activity Plan`);

      } else if (this.tabIndex === 0) {
        this.set('currentTab', 'updates');
        this.set('tabSubheading', `(${this.tabIndex+1}/4) Updates`);
      }


    },
    swipeLeft(){
      // console.log("HELLO")
      let index = this.get('tabIndex');
      if(index === 3){
        this.set('tabIndex',0);
      }
      else {
        this.set('tabIndex',index+1);

      }
      console.log(this.tabIndex);
      this.set('selectedTasks', []);
      this.set('selected',false);
      if (this.tabIndex === 1) {
        this.set('currentTab', 'schedule')
        this.set('tabSubheading', `(${this.tabIndex+1}/4) Scheduled`)
      }
      if (this.tabIndex === 2) {
        this.set('currentTab', 'backlogs');
        this.set('tabSubheading', `(${this.tabIndex+1}/4) Product Backlogs`);
        // this.set('tabSubheading', '(' + (parseInt(newTabIndex)+1) + '/4) Product Backlogs');

      }
      if (this.tabIndex === 3) {
        this.set('currentTab', 'ActivityPlan');
        this.set('tabSubheading', `(${this.tabIndex+1}/4) Activity Plan`);

      } else if (this.tabIndex === 0) {
        this.set('currentTab', 'updates');
        this.set('tabSubheading', `(${this.tabIndex+1}/4) Updates`);
      }
    },
  
  actions: {
    handleTabIndexC(newTabIndex) {
      this.set('selectedTasks', []);
      this.set('tabIndex', newTabIndex + 1);
      this.set('selected',false);
      if (this.tabIndex === 1) {
        this.set('currentTab', 'schedule')
        this.set('tabSubheading', `(${this.tabIndex+1}/4) Scheduled`)
      }
      if (this.tabIndex === 2) {
        this.set('currentTab', 'backlogs');
        this.set('tabSubheading', `(${this.tabIndex+1}/4) Product Backlogs`);
        // this.set('tabSubheading', '(' + (parseInt(newTabIndex)+1) + '/4) Product Backlogs');

      }
      if (this.tabIndex === 3) {
        this.set('currentTab', 'ActivityPlan');
        this.set('tabSubheading', `(${this.tabIndex+1}/4) Activity Plan`);

      } else if (this.tabIndex === 0) {
        this.set('currentTab', 'updates');
        this.set('tabSubheading', `(${this.tabIndex+1}/4) Updates`);
      }
    },

    handleTabIndexB(newTabIndex) {

      this.set('selectedTasks', []);
      this.set('selected',false);
      this.set('tabIndex', newTabIndex - 1);
      if (this.tabIndex === 1) {
        this.set('currentTab', 'schedule')
        this.set('tabSubheading', `(${this.tabIndex+1}/4) Scheduled`)
      }
      if (this.tabIndex === 2) {
        this.set('currentTab', 'backlogs');
        this.set('tabSubheading', `(${this.tabIndex+1}/4) Product Backlogs`);
        // this.set('tabSubheading', '(' + (parseInt(newTabIndex)+1) + '/4) Product Backlogs');

      }
      if (this.tabIndex === 3) {
        this.set('currentTab', 'ActivityPlan');
        this.set('tabSubheading', `(${this.tabIndex+1}/4) Activity Plan`);

      } else if (this.tabIndex === 0) {
        this.set('currentTab', 'updates');
        this.set('tabSubheading', `(${this.tabIndex+1}/4) Updates`);
      }

    },

    handleTabIndexChanged(newTabIndex) {
      // debugger
      // console.log(newTabIndex, "HERE");
      this.set('tabIndex', newTabIndex);

      if (newTabIndex === 1) {
        this.set('currentTab', 'schedule')
        this.set('tabSubheading', `(${newTabIndex+1}/4) Scheduled`)
      }
      if (newTabIndex === 2) {
        this.set('currentTab', 'backlogs');
        this.set('tabSubheading', `(${newTabIndex+1}/4) Product Backlogs`);
        // this.set('tabSubheading', '(' + (parseInt(newTabIndex)+1) + '/4) Product Backlogs');

      }
      if (newTabIndex === 3) {
        this.set('currentTab', 'ActivityPlan');
        this.set('tabSubheading', `(${newTabIndex+1}/4) ActivityPlan`);

      } else if (newTabIndex === 0) {
        this.set('currentTab', 'updates');
        this.set('tabSubheading', `(${newTabIndex+1}/4) Updates`);
      }
    },
    handleTabSubheadingChanged(newTabSubheading) {
      this.set('tabSubheading', newTabSubheading);
    },
    publish(task) {
      
      var d = new Date();
      // d.setDate(d.getDate() - 1);
      var day = ("0" + d.getDate()).slice(-2);
      var month = ("0" + (d.getMonth()+ 1)).slice(-2);
      var today = d.getFullYear() + "-" + (month) + "-" + (day);

      let obj = {
        initiatives: this.get('initiatives'),
        createdAt: today,
        tasks: task
      }
      
      this.set('todayTeamCopy',obj);
      console.log(this.get('todayTeamCopy'));
      // this.set('sprint',true);
      this.publish(this.get('todayTeamCopy'));

    },
    selectTask(task) {
      this.get('selectedTasks').pushObject(task);
      alert(this.get('selectedTasks').length + " tasks selected")
      console.log(this.get('selectedTasks'));
    },
    horizontalSlide() {
      debugger
    }
  },
  showActivityPlanTab: computed('currentTab', function () {
    return this.currentTab === 'ActivityPlan';
  }),

  pendingTasks: computed('activityPlan', function () {
    if(this.get('activityPlan')) {
      // return this.activityPlan.filter(task => task.status === "Completed");
      return this.activityPlan.filter(task => task.status === "Pending");
    }
    else{
      this.gotoSprint();
    }
  }),

  ptasks: computed('activityPlan', function () {
    // console.log(this.pendingTasks.length, "BLABLA");
    if(this.get('activityPlan')) {
      // return this.activityPlan.filter(task => task.status === "Completed");
      return this.activityPlan.filter(task => task.status === "Pending").length;
    }
    else{
      this.gotoSprint();
    }
  }),
  ntasks: computed('activityPlan', function () {
    // console.log(this.pendingTasks.length, "BLABLA");
    if(this.get('activityPlan')) {
      // return this.activityPlan.filter(task => task.status === "Completed");
      return this.activityPlan.filter(task => task.status === "New").length;
    }
    else{
      this.gotoSprint();
    }
  }),
  ctasks: computed('activityPlan', function () {
    // console.log(this.pendingTasks.length, "BLABLA");
    if(this.get('activityPlan')) {
      // return this.activityPlan.filter(task => task.status === "Completed");
      return this.activityPlan.filter(task => task.status === "Cancelled").length;
    }
    else{
      this.gotoSprint();
    }
  }),
  catasks: computed('activityPlan', function () {
    // console.log(this.activityPlan.filter(task => task.status === "Completed").length, "BLABLA");
    if(this.get('activityPlan')) {
      // return this.activityPlan.filter(task => task.status === "Completed");
      return this.activityPlan.filter(task => task.status === "Completed").length;
    }
    else{
      this.gotoSprint();
    }
  }),

  scheduledFutureTasks: computed('activityPlan', function () {
    if(this.get('activityPlan')) {

      var now = new Date();
      var day = ("0" + now.getDate()).slice(-2);
      var month = ("0" + (now.getMonth() + 1)).slice(-2);
      var today = now.getFullYear() + "-" + (month) + "-" + (day);
      // console.log(today);
  
      return this.activityPlan.filter(task => task.scheduled === today);
    }
    else{
      this.gotoSprint();
    }
  }),

  scheduledTodayTasks: computed('activityPlan', function () {
    if(this.get('activityPlan')) {

      var now = new Date();
      var day = ("0" + now.getDate()).slice(-2);
      var month = ("0" + (now.getMonth() + 1)).slice(-2);
      var today = now.getFullYear() + "-" + (month) + "-" + (day);
      // console.log(today);
  
      return this.activityPlan.filter(task => task.scheduled_On === today);

    }
    else{
      this.gotoSprint();
    }
  }),

  cancelledTasks: computed('activityPlan', function () {
    // console.log(this.activityPlan);
    if(this.get('activityPlan')) {
      // return this.activityPlan.filter(task => task.status === "Completed");
      return this.activityPlan.filter(activityPlan => activityPlan.status === "Cancelled");
    }
    else{
      this.gotoSprint();
    }
  }),

  newTasks: computed('activityPlan', function () {
    // console.log(this.activityPlan);
    if(this.get('activityPlan')) {
      // return this.activityPlan.filter(task => task.status === "Completed");
      return this.activityPlan.filter(task => task.status === "New");
    }
    else{
      this.gotoSprint();
    }
  }),

  showScheduleTab: computed('currentTab', function () {
    return this.currentTab === 'schedule'
  }),

  showBacklogsView: computed('currentTab', function () {
    return this.currentTab === 'backlogs'
  }),

  showUpdatesView: computed('currentTab', function () {
    return this.currentTab === 'updates'
  }),

  completedTasks: computed('activityPlan', function () {
    if(this.get('activityPlan')) {
      return this.activityPlan.filter(task => task.status === "Completed");
    }
    else{
      this.gotoSprint();    
    }
  }),

  backlogProjects: computed('backlogs', function () {
    if(this.get('backlogs')) {

      this.backlogs.forEach(element => {
        element.tasks.forEach(task=>{
          this.get('projects').add(task.projectName);
        })
      });
      return this.projects;
    }
    else {
      this.gotoSprint();
    }

    // let temp = this.activityPlan.filter(backlogTasks => backlogTasks.tasks.backlog===true);

  }),

  backlogTasks: computed('backlogs', function () {
    let btasks = [];
    if(this.get('backlogs')) {

      this.backlogs.forEach(element => {
        console.log(element.tasks, "hhgugh");
        element.tasks.forEach(task=>{
          btasks.pushObject(task);  
        });
      })
      console.log(btasks,"I AM BTASKS");
      return btasks;
    }
    else {
      this.gotoSprint();
    }
    // let temp = this.activityPlan.filter((backlogTasks => backlogTasks.tasks.backlog===true) && (backlogTasks.tasks.);
    // return this.activityPlan.filter(task => task.backlog);
  })

});




/*

[
  '{{repeat(10, 15)}}',
  {
    _id: '{{objectId()}}',
    text: '{{lorem(1, "sentence")}}',
    projectName: '{{random("Project A", "Project B", "Project C", "Project D")}}',
    dueDate: 'date(new Date(), new Date(2018, 12, 12))',
    owner: '{{firstName()}} {{surname()}}',
    scheduled: 'date(new Date(), new Date(2018, 12, 12))',
    status: '{{random("Completed", "Cancelled")}}'
  }
]

*/
