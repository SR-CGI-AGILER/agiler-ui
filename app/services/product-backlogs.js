import Service from '@ember/service';
import Ember from 'ember';
import ENV from '../config/environment';

export default Service.extend({
    getProductBacklog(){
        return Ember.$.ajax({
            url: `http://${ENV.serverhost}/api/v1/backlog`,
            type: 'GET',
            contentType: 'application/json'
        })
    },

    postBacklog(backlog){
        return Ember.$.ajax({
            url:`http://${ENV.serverhost}/api/v1/backlog`,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(backlog)
        })
    }
});
