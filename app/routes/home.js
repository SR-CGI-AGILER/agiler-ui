import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
    teamCopy: Ember.inject.service(),
    scheduled:Ember.inject.service(),
    activityPlan: Ember.inject.service(),
    productBacklogs: Ember.inject.service(),
    session: Ember.inject.service(),
    userInitiative : Ember.inject.service(),
    // updateRender: "",


    async model(param){

        console.log("MODEL")

        let that = this;
        
        // console.log(param.ifPublished);
        let model = {};
        let initiative = that.get('session').initiative;
    
        var d = new Date();
        var day = ("0" + d.getDate()).slice(-2);
        var month = ("0" + (d.getMonth()+ 1)).slice(-2);
        var today = d.getFullYear() + "-" + (month) + "-" + (day);
        let checkPublish = param.ifPublished;
        if(checkPublish) {
            // console.log(initiative,"CONSOLE HERE")
            await this.teamCopy.getTeamCopy(today,initiative.initiativeId).then(function(data) {
                // console.log(data,"MODEL")
                model.teamCopy = data.payload.data
            })
            await this.productBacklogs.getProductBacklog().then(function (data) {
               console.log(data,"HELLO");
                model.productBacklogs = data.payload.data
            })
            
            await this.scheduled.getScheduledOn().then(function (data) {
                console.log(data.payload.data,"CLUELESS1");
                model.scheduled = data.payload.data
            })
             await this.scheduled.getScheduledFor().then(function (data) {
                console.log(data.payload.data,"CLUELESS2");
                model.scheduledfor = data.payload.data
            })
        }
       
        return model;
    }

});

