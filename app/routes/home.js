import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
    teamCopy: Ember.inject.service(),
    productBacklogs: Ember.inject.service(),
    scheduled:Ember.inject.service() ,
    async model(){
        let model = {};
        await this.teamCopy.getTeamCopy("2018-11-21","default").then(function(data) {
            model.teamCopy = data.payload.data
        })
        // await this.productBacklogs.getProductBacklog().then(function (data) {
        //    model.productBacklogs = data.payload.data
        // })
        await this.scheduled.getScheduledOn().then(function (data) {
            model.scheduled = data.payload.data
         })
         await this.scheduled.getScheduledFor().then(function (data) {
            model.scheduledfor = data.payload.data
         })
        return model;
    }
});