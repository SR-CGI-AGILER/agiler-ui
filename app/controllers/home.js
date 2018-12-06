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
    if (x > 760) {
      return false
    } else {
      return true
    }
  }),

  actions: {
    logout(){
      this.transitionToRoute("login");
    },
    publish(todayTeamCopy) {
      this.activityPlan.createActivityPlanMobile(todayTeamCopy).then(function(data){
  
        this.transitionToRoute('sprintView');
      })
    },
    gotoSprint() {
        
    },
    submit() {
      this.transitionToRoute('sprintView');
    },
    navigateToInitiaive(route){
      this.transitionToRoute(`initiative`, {queryParams: { route: route }})
    },
    navigateTomembers(route){
      this.transitionToRoute('initiative', {queryParams: { route: route }})
    }
  }
});


