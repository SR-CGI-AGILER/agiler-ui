import Service from '@ember/service';
import Ember from 'ember';
import ENV from '../config/environment'

export default Service.extend({
    getTeamCopy(date, initiatives){
        return Ember.$.ajax({
            url: `http://localhost:3000/api/v1/teamCopy?date=${date}&initiatives=${initiatives}`,
            type: 'GET',
            contentType: 'application/json'
        })
    },
    updateTeamCopy(data) {
        console.log(data.arr2,"array?")
        return Ember.$.ajax({
            url: `http://localhost:3000/api/v1/teamCopy/${data.createdAt}/tasks`,
            type: 'PATCH',
            contentType: 'application/json',
            data: JSON.stringify(data.arr2)
            })
    }
});