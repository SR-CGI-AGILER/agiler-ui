import Service from '@ember/service';
import Ember from 'ember';
import ENV from '../config/environment'
export default Service.extend({
    session:Ember.inject.service(),
    
    getScheduledOn(){
        let initiative = this.get("session").initiative
        return Ember.$.ajax({
            url: `http://${ENV.serverhost}/api/v1/scheduledy/task/${initiative.initiativeId}`,
            type: 'GET',
            contentType: 'application/json'
        })
    },
    getScheduledFor(){
        let initiative = this.get("session").initiative

        return Ember.$.ajax({
            url: `http://${ENV.serverhost}/api/v1/scheduledx/task/${initiative.initiativeId}`,
            type: 'GET',
            contentType: 'application/json'
        })
    },
   
    postScheduled(x){
        let initiative = this.get("session").initiative

        return Ember.$.ajax({
            url: `http://${ENV.serverhost}/api/v1/scheduled/task/${initiative.initiativeId}`,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(x)
        })
    },
    patchScheduled(x){
        let initiative = this.get("session").initiative

        return Ember.$.ajax({
        url: `http://${ENV.serverhost}/api/v1/scheduled/task/${initiative.initiativeId}`,
        type: 'PATCH',
        contentType: 'application/json',
        data: JSON.stringify(x)
    })
    }
});