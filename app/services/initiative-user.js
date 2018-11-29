import Service from '@ember/service';
import Ember from 'ember';

export default Service.extend({
    getUsers(id){
        return Ember.$.ajax({
            url: `http://localhost:3000/api/v1/initiative/users/${id}`,
            type: 'GET',
            contentType: 'application/json'
        })
    }
});
