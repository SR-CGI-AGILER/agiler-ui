import Service from '@ember/service';
import Ember from 'ember';

export default Service.extend({

    getInitiatives(id){
        return Ember.$.ajax({
            url: `http://localhost:3000/api/v1/user/initiatives/${id}`,
            type: 'GET',
            contentType: 'application/json'
        })
    }
});
