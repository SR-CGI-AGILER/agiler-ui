import Service from '@ember/service';
import Ember from 'ember';
import ENV from '../config/environment';

export default Service.extend({
    getProductBacklog(){
        return Ember.$.ajax({
            url: `http://172.23.238.186:3000/api/v1/backlog/defaultInitiative`,
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
