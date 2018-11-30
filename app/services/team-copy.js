import Service from '@ember/service';
import Ember from 'ember';
import ENV from '../config/environment'

export default Service.extend({
    getTeamCopy(date, initiativeId){
        return Ember.$.ajax({
            url: `http://localhost:3000/api/v1/teamCopy?date=${date}&initiativeId=${initiativeId}`,
            type: 'GET',
            contentType: 'application/json'
        })
    },
    updateTeamCopy(data) {
        return Ember.$.ajax({
            url: `http://localhost:3000/api/v1/teamCopy/${data.createdAt}/tasks/${data.taskId}`,
            type: 'PATCH',
            contentType: 'application/json'
        })
    }
});