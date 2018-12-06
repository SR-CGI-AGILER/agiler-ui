import Component from '@ember/component';
import RecognizerMixin from 'ember-gestures/mixins/recognizers';
import Ember from 'ember';

import {
  computed
} from '@ember/object';

export default Component.extend(RecognizerMixin, {

  session: Ember.inject.service(),
  sprint: false,
  selectedTasks: [],
  projects: [],
  todayTeamCopy: [],
  task: [],
  initiatives: "default",
  tabIndex: 0,
  tabSubheading: '(1/4) Updates',
  currentTab: 'updates',
  selected: false,
  
  init(){
   

    this._super(...arguments);
  },
  
  recognizers: 'swipe',
    swipeRight(){
        let index = this.get('tabIndex');
        if(index === 0){
          this.set('tabIndex',3);
        }
        else {
          this.set('tabIndex',index-1);

        }
        this.set('selectedTasks', []);
        this.set('selected',false);
      if (this.tabIndex === 1) {
        this.set('currentTab', 'schedule')
        this.set('tabSubheading', `(${this.tabIndex+1}/4) Scheduled`)
      }
      if (this.tabIndex === 2) {
        this.set('currentTab', 'backlogs');
        this.set('tabSubheading', `(${this.tabIndex+1}/4) Product Backlogs`);

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
      let index = this.get('tabIndex');
      if(index === 3){
        this.set('tabIndex',0);
      }
      else {
        this.set('tabIndex',index+1);

      }
      this.set('selectedTasks', []);
      this.set('selected',false);
      if (this.tabIndex === 1) {
        this.set('currentTab', 'schedule')
        this.set('tabSubheading', `(${this.tabIndex+1}/4) Scheduled`)
      }
      if (this.tabIndex === 2) {
        this.set('currentTab', 'backlogs');
        this.set('tabSubheading', `(${this.tabIndex+1}/4) Product Backlogs`);

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
    logout(){
      this.logout();
    },
    sprintView(){
      this.sprintView();
    },
    reRenderView() {
    },
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
      
      this.set('tabIndex', newTabIndex);

      if (newTabIndex === 1) {
        this.set('currentTab', 'schedule')
        this.set('tabSubheading', `(${newTabIndex+1}/4) Scheduled`)
      }
      if (newTabIndex === 2) {
        this.set('currentTab', 'backlogs');
        this.set('tabSubheading', `(${newTabIndex+1}/4) Product Backlogs`);

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
      var day = ("0" + d.getDate()).slice(-2);
      var month = ("0" + (d.getMonth()+ 1)).slice(-2);
      var today = d.getFullYear() + "-" + (month) + "-" + (day);

      let obj = {
        initiative: this.get('session').initiative.initiativeName,
        initiativeId: this.get('session').initiative.initiativeId,
        createdAt: today,
        tasks: task
      }
      
      this.set('todayTeamCopy',obj);
      // this.set('sprint',true);
      this.publish(this.get('todayTeamCopy'));

    },
    selectTask(task) {
      this.get('selectedTasks').pushObject(task);
      alert(this.get('selectedTasks').length + " tasks selected")
    },
    horizontalSlide() {
      
    },
    navigateToInitiaiveRoute(route){
      this.navigateToInitiaive(route)
    },
    navigateTomembers(route){
      this.navigateToInitiativeMembers(route)
    }
  },
  showActivityPlanTab: computed('currentTab', function () {
    return this.currentTab === 'ActivityPlan';
  }),

  pendingTasks: computed('activityPlan', function () {
    if(this.get('activityPlan')) {
      return this.activityPlan.filter(task => task.status === "Pending");
    }
    else{
      this.gotoSprint();
    }
  }),

  ptasks: computed('activityPlan', function () {
    if(this.get('activityPlan')) {
      return this.activityPlan.filter(task => task.status === "Pending").length;
    }
    else{
      this.gotoSprint();
    }
  }),
  ntasks: computed('activityPlan', function () {
    if(this.get('activityPlan')) {
      return this.activityPlan.filter(task => task.status === "New").length;
    }
    else{
      this.gotoSprint();
    }
  }),
  ctasks: computed('activityPlan', function () {
    if(this.get('activityPlan')) {
      return this.activityPlan.filter(task => task.status === "Cancelled").length;
    }
    else{
      this.gotoSprint();
    }
  }),
  catasks: computed('activityPlan', function () {
    if(this.get('activityPlan')) {
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
  
      return this.activityPlan.filter(task => task.scheduled_On === today);

    }
    else{
      this.gotoSprint();
    }
  }),

  cancelledTasks: computed('activityPlan', function () {
    if(this.get('activityPlan')) {
      return this.activityPlan.filter(activityPlan => activityPlan.status === "Cancelled");
    }
    else{
      this.gotoSprint();
    }
  }),

  newTasks: computed('activityPlan', function () {
    if(this.get('activityPlan')) {
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
      this.set('projects', []);
      this.backlogs.tasks.forEach(element => {
          this.get('projects').push(element.projectName);
      });
      return this.projects;
    }
    else {
      this.gotoSprint();
      return [];
    }


  }),

  backlogTasks: computed('backlogs', function () {
    let btasks = [];
    
    if(this.get('backlogs')) {
      
      this.backlogs.tasks.forEach(element => {
          btasks.pushObject(element);  
      })
      return btasks;
    }
    else {
      
      this.gotoSprint();
      return []
    }
  })

});


