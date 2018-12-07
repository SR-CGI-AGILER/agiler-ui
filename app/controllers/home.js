import Controller from '@ember/controller';
// import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

import Ember from 'ember';
import {
  computed
} from '@ember/object';
import service from 'ember-service/inject';
import getOwner from 'ember-owner/get';

export default Controller.extend({
  routing: service("-routing"),
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
      // console.log(this.get('session').usertoken)
      // this.get('seshsion').invalidate('authenticator:torii', 'google-oauth2');
      // const currentRouteName = this.get("routing.currentRouteName");
      // const currentRouteInstant = getOwner(this).lookup(`route:${currentRouteName}`);
      // currentRouteInstant.refresh();
      // this.transitionToRoute('login');
      let that=this;
      this.get('session').invalidate().then(()=>{
        that.transitionToRoute('login');
      });
      console.log(this.get('session').currentUser,this.get('session').userToken);
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


