import Service from '@ember/service';
import Ember from 'ember';
export default Service.extend({
    getUsers(){
        return Ember.$.ajax({
            url: 'http://172.23.238.186:3000/api/v1/initiative/users/:initiativeId',  
        })
    }
});
