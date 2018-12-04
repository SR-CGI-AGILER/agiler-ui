import Controller from '@ember/controller';
import Ember from 'ember';
import {
  computed
} from '@ember/object';

export default Controller.extend({
  queryParams: ['ifPublished'],
  activityPlan: Ember.inject.service(),
  userInitiative : Ember.inject.service(),
  yes: true,
  session: Ember.inject.service(),
  userData: {},
  initiatives:"",
  
  init(){
    this._super(...arguments);
    let x = this.get('session').currentUser;
    this.set('userData',x)

  },

  isMobile: computed('yes', function () {
    let x = window.screen.availWidth;
    // console.log(window.screen.availWidth);
    if (x > 760) {
      return false
    } else {
      return true
    }
  }),

  actions: {
    publish(todayTeamCopy) {
      this.activityPlan.createActivityPlanMobile(todayTeamCopy).then(function(data){
  
        this.transitionToRoute('sprintView');
      })
    },
    gotoSprint() {
        // this.transitionToRoute('sprintView');
        
    },
    submit() {
      this.transitionToRoute('sprintView');
    },
    navigateToInitiaive(route){
      console.log("in controller??")
      this.transitionToRoute(`initiative`, {queryParams: { route: route }})
    },
    navigateTomembers(route){
      this.transitionToRoute('initiative', {queryParams: { route: route }})
    }
  }
});


