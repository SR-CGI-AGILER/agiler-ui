import Service from '@ember/service';
import Ember from 'ember';

export default Service.extend({
    getProductBacklog(){
        return Ember.$.ajax({
            url: `http://localhost:3000/api/v1/backlog`,
            type: 'GET',
            contentType: 'application/json'
        })
    },

    postBacklog(backlog){
        return Ember.$.ajax({
            url:'http://localhost:3000/api/v1/backlog',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(backlog)
        })
    }
});
