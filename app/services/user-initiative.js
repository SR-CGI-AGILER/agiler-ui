import Service from '@ember/service';
import Ember from 'ember';
import ENV from '../config/environment'

export default Service.extend({

    getInitiatives(email){
        return Ember.$.ajax({
            url: `http://${ENV.serverhost}/api/v1/user/initiatives/${email}`,
            type: 'GET',
            contentType: 'application/json'
        })
    },
    postNewUser(user){
        let reqBody = {
            id: user.initiativeId,
            name: user.initiativeName, 
            members: {
                email: user.email
            }
        }
        return Ember.$.ajax({
            url:  `http://${ENV.serverhost}/api/v1/initiative/user`,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(reqBody) 
        })
    }
});
