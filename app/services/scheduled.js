import Service from '@ember/service';
import Ember from 'ember';

export default Service.extend({
    getScheduledOn(){
        return Ember.$.ajax({
            url: `http://localhost:3000/api/v1/scheduled/task`,
            type: 'GET',
            contentType: 'application/json'
        })
    },
    getScheduledFor(){
        return Ember.$.ajax({
            url: `http://localhost:3000/api/v1/scheduledx/task`,
            type: 'GET',
            contentType: 'application/json'
        })
    },
   
    postScheduled(x){
        console.log(x,"x data hai ye re");
        return Ember.$.ajax({
            url: `http://localhost:3000/api/v1/scheduled/task`,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(x)
        })
    }
});
