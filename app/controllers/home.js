import Controller from '@ember/controller';
// import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

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
      let that = this;
      this.get('session').invalidate().then(()=>{
        that.transitionToRoute("login");
      });
    },
    sprintView(){
      this.transitionToRoute("sprintView")
    },
    publish(todayTeamCopy) {
      let that=this;
      this.activityPlan.createActivityPlanMobile(todayTeamCopy).then(function(data){
  
        that.transitionToRoute('sprintView');
      })
    },
    publishDesktop(todayTeamCopy) {
      let that = this;
      this.activityPlan.publishActivityPlan(todayTeamCopy).then(function(data){
        that.transitionToRoute('sprintView');
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


