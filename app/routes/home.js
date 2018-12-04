import Route from '@ember/routing/route';
import Ember from 'ember';
import {set} from '@ember/object';

export default Route.extend({
    teamCopy: Ember.inject.service(),
    scheduled:Ember.inject.service(),
    activityPlan: Ember.inject.service(),
    productBacklogs: Ember.inject.service(),
    session: Ember.inject.service(),
    userInitiative : Ember.inject.service(),
    checkPublish1: false,
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
            // debugger
            let that = this;
            await this.teamCopy.getTeamCopy(today,initiative.initiativeId).then(function(data) {
                // if(data.payload.data.tasks.length===0){
                //     // debugger
                //     that.set('checkPublish1',false);
                //     console.log(that.get('checkPublish1'),"home js if")
                // }
                // else{
                //     // debugger
                //     that.set('checkPublish1',true);
                //     console.log(that.get('checkPublish1'),"home js else")
                // }
                    model.teamCopy = data.payload.data
            })
            await this.productBacklogs.getProductBacklog().then(function (data) {

                model.productBacklogs = data.payload.data
            })
            
            await this.scheduled.getScheduledOn().then(function (data) {

                
                let scheduledTasks = data.payload.data;
                scheduledTasks.map(elem => {
                var d = new Date(elem.scheduled_For)
                var day = ("0" + d.getDate()).slice(-2);
                var month = ("0" + (d.getMonth()+ 1)).slice(-2);
                var act_Date = d.getFullYear() + "-" + (month) + "-" + (day);
                set(elem,'scheduled_For',act_Date); 
                })
 
                model.scheduled = data.payload.data
            })
             await this.scheduled.getScheduledFor().then(function (data) {

                let scheduledTasks = data.payload.data;
                scheduledTasks.map(elem => {
                var d = new Date(elem.scheduled_For)
                var day = ("0" + d.getDate()).slice(-2);
                var month = ("0" + (d.getMonth()+ 1)).slice(-2);
                var act_Date = d.getFullYear() + "-" + (month) + "-" + (day);
                set(elem,'scheduled_For',act_Date); 
                })
 
                model.scheduledfor = data.payload.data
            })
        }
       
        return model;
    }

});

