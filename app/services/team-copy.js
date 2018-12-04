import Service from '@ember/service';
import Ember from 'ember';
import ENV from '../config/environment'

export default Service.extend({
    getTeamCopy(date, initiativeId){
        
        return Ember.$.ajax({
            url: `http://${ENV.serverhost}/api/v1/teamCopy?date=${date}&initiativeId=${initiativeId}`,
            type: 'GET',
            contentType: 'application/json'
        })
    },
    updateTeamCopy(task_data) {
        
        return Ember.$.ajax({
            url: `http://${ENV.serverhost}/api/v1/teamCopy/${task_data.createdAt}/${task_data.initiativeId}`,
            type: 'PATCH',
            contentType: 'application/json',
            data: JSON.stringify(task_data.arr)
            })
    },
    addToTeamCopy(task_data) {
        
        return Ember.$.ajax({
            url: `http://${ENV.serverhost}/api/v1/teamCopy/${task_data.createdAt}/${task_data.initiativeId}`,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(task_data.task)
            })
    }
});