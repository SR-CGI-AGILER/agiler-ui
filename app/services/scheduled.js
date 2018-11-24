import Service from '@ember/service';
import Ember from 'ember';
import ENV from '../config/environment'

export default Service.extend({
    getScheduledOn(){
        return Ember.$.ajax({
            url: `http://${ENV.serverhost}/api/v1/scheduled/task`,
            type: 'GET',
            contentType: 'application/json'
        })
    },
    getScheduledFor(){
        return Ember.$.ajax({
            url: `http://${ENV.serverhost}/api/v1/scheduledx/task`,
            type: 'GET',
            contentType: 'application/json'
        })
    },
   
    postScheduled(x){
        return Ember.$.ajax({
            url: `http://${ENV.serverhost}/api/v1/scheduled/task`,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(x)
        })
    }
});
