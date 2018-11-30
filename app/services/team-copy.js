import Service from '@ember/service';
import Ember from 'ember';
import ENV from '../config/environment'

export default Service.extend({
    getTeamCopy(date, initiatives){
        return Ember.$.ajax({
            url: `http://172.23.238.187:3000/api/v1/teamCopy?date=${date}&initiatives=${initiatives}`,
            type: 'GET',
            contentType: 'application/json'
        })
    },
    updateTeamCopy(task_data) {
        console.log(task_data,"req.body data");
        // debugger
        return Ember.$.ajax({
            url: `http://172.23.238.187:3000/api/v1/teamCopy/${task_data.createdAt}/tasks`,
            type: 'PATCH',
            contentType: 'application/json',
            data: JSON.stringify(task_data.arr)
            })
    },
    addToTeamCopy(task_data) {
        return Ember.$.ajax({
            url: `http://172.23.238.187:3000/api/v1/teamCopy/${task_data.createdAt}/${task_data.initiatives}`,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(task_data.task)
            })
    }
});