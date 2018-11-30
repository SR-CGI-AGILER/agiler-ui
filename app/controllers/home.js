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
      console.log(todayTeamCopy,"todayTeamCopy in home controller")
      this.activityPlan.createActivityPlanMobile(todayTeamCopy).then(function(data){
        // console.log(data,"ohjkuhilhopj;huyfigkh@@@@@@@@@@@");
      })
      this.transitionToRoute('sprintView');
    },
    
    gotoSprint() {
        // this.transitionToRoute('sprintView');
        
    },

    reRenderView(){
      debugger
      // console.log("HOW MANY TINES")
      // this.transitionToRoute('home', {queryParams: {ifPublished: true}});
    }
  }
});


