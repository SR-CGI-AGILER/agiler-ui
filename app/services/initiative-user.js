import Service from '@ember/service';
import Ember from 'ember';
import ENV from '../config/environment';

export default Service.extend({
    session: Ember.inject.service(),
    getUsers(id){
        return Ember.$.ajax({
            url: `http://${ENV.serverhost}/api/v1/initiative/users/${id}`,
            type: 'GET',
            contentType: 'application/json'
        })
    },
    postInitiative(data){
        return Ember.$.ajax({
            url: `http://${ENV.serverhost}/api/v1/initiative/default`,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data)
        })
    },
    postNewInitiative(data){
        let reqBody = {
            name: data,
            members: {
                name: this.session.currentUser.name,
                email: this.session.currentUser.email,
                profilePicUrl: this.session.currentUser.profilePicUrl 
            }
        }
        
        console.log(reqBody)
        
        return Ember.$.ajax({
            url: `http://${ENV.serverhost}/api/v1/initiative/new`,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(reqBody),

        })
    },
    deleteInitiative(data){
        let reqBody = {
            email: data.user,
            initiativeId: data.initiativeId
        }

        return Ember.$.ajax({
            url: `http://${ENV.serverhost}/api/v1/initiative`,
            type: 'DELETE',
            contentType: 'application/json',
            data: JSON.stringify(reqBody),
        })
    }
});
