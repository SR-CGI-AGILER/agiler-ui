import Service from '@ember/service';
import Ember from 'ember';

export default Service.extend({
    getTeamCopy(date, initiatives){
        return Ember.$.ajax({
            url: `http://localhost:3000/api/v1/teamCopy?date=${date}&initiatives=${initiatives}`,
            type: 'GET',
            contentType: 'application/json'
        })
    }
});