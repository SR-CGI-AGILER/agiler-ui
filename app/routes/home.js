import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
    teamCopy: Ember.inject.service(),
    scheduled:Ember.inject.service() ,
    activityPlan: Ember.inject.service(),
    productBacklogs: Ember.inject.service(),
    
    
    async model(param){

        // console.log(param.ifPublished);

        let model = {};

        var d = new Date();
        d.setDate(d.getDate() - 1);
        var day = ("0" + d.getDate()).slice(-2);
        var month = ("0" + (d.getMonth()+ 1)).slice(-2);
        var today = d.getFullYear() + "-" + (month) + "-" + (day);
        // console.log(this, "is it this ??")
        let that = this;
        
        let checkPublish = param.ifPublished;
        if(checkPublish) {

            await this.teamCopy.getTeamCopy(today,"default").then(function(data) {
                // if(typeof data.payload.data === "string"){
                //     // model.teamCopy = [];
                //     that.transitionTo('sprintView')
                // }
                // else {
                //     // console.log(that, "is it this ??")
                //     model.teamCopy = data.payload.data
                // }
                model.teamCopy = data.payload.data
            })
            await this.productBacklogs.getProductBacklog().then(function (data) {
               model.productBacklogs = data.payload.data
            })
            
            await this.scheduled.getScheduledOn().then(function (data) {
                model.scheduled = data.payload.data
            })
             await this.scheduled.getScheduledFor().then(function (data) {
                model.scheduledfor = data.payload.data
            })
        }
        // else {
            
        // }
        return model;
    }

    
});

