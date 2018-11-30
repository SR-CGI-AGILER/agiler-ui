import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
    teamCopy: Ember.inject.service(),
    scheduled:Ember.inject.service(),
    activityPlan: Ember.inject.service(),
    productBacklogs: Ember.inject.service(),
    session: Ember.inject.service(),
    userInitiative : Ember.inject.service(),

    beforeModel(){
        debugger
    },

    async model(param){
        let that = this;
        debugger
        console.log(param.ifPublished);
    //    await this.userInitiative.getInitiatives("swarnim@gmail.com").then(function(data){
    //         console.log(data.data.initiative[0],"PLEASE AA JAO NA");
    //         that.get('session').set('initiative',data.data.initiative[0])
            
    //     })
        let model = {};
        let initiative = that.get('session').initiative;
    //    await console.log(initiative,"ASDASDSAD");
        var d = new Date();
        // d.setDate(d.getDate() - 1);
        var day = ("0" + d.getDate()).slice(-2);
        var month = ("0" + (d.getMonth()+ 1)).slice(-2);
        var today = d.getFullYear() + "-" + (month) + "-" + (day);
        let checkPublish = param.ifPublished;
        // console.log(checkPublish,"IN HOME");
        if(checkPublish) {
            console.log(initiative,"CONSOLE HERE")
            await this.teamCopy.getTeamCopy(today,initiative.initiativeName).then(function(data) {
                console.log(data,"MODEL")
                model.teamCopy = data.payload.data
            })
            await this.productBacklogs.getProductBacklog().then(function (data) {
               model.productBacklogs = data.payload.data
            })
            
            // await this.scheduled.getScheduledOn().then(function (data) {
            //     model.scheduled = data.payload.data
            // })
            //  await this.scheduled.getScheduledFor().then(function (data) {
            //     model.scheduledfor = data.payload.data
            // })
        }
       
        return model;
    }

    
});

