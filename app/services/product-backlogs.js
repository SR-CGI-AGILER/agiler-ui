import Service from '@ember/service';
import Ember from 'ember';

export default Service.extend({
    getProductBacklog(){
        return Ember.$.ajax({
            url: `http://172.23.239.103:3000/api/v1/backlog`,
            type: 'GET',
            contentType: 'application/json'
        })
    }
});
