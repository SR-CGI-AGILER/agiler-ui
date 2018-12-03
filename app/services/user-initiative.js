import Service from '@ember/service';
import Ember from 'ember';

export default Service.extend({

    getInitiatives(email){
        return Ember.$.ajax({
            url: `http://172.23.238.187:4000/api/v1/user/initiatives/${email}`,
            type: 'GET',
            contentType: 'application/json'
        })
    }
});
