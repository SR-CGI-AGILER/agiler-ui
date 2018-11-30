import Service from '@ember/service';
import Ember from 'ember';
import ENV from '../config/environment'

export default Service.extend({
    session:Emeber.inject.service(),
    
    getScheduledOn(){
        let initiative = this.get("session").initiative
        return Ember.$.ajax({
            url: `http://localhost:3000/api/v1/scheduledy/task/${initiative.initiativeId}`,
            type: 'GET',
            contentType: 'application/json'
        })
    },
    getScheduledFor(){
        let initiative = this.get("session").initiative

        return Ember.$.ajax({
            url: `http://localhost:3000/api/v1/scheduledx/task/${initiative.initiativeId}d`,
            type: 'GET',
            contentType: 'application/json'
        })
    },
   
    postScheduled(x){
        let initiative = this.get("session").initiative

        return Ember.$.ajax({
            url: `http://localhost:3000/api/v1/scheduled/task/${initiative.initiativeId}`,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(x)
        })
    },
    patchscheduled(x){
        let initiative = this.get("session").initiative

        return Ember.$.ajax({
        url: `http://localhost:3000/api/v1/scheduled/task/${initiative.initiativeId}/:taskId`,
        type: 'PATCH',
        contentType: 'application/json',
        data: JSON.stringify(x)
    })
    }
});
