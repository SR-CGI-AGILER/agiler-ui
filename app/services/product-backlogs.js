import Service from '@ember/service';
import Ember from 'ember';
import ENV from '../config/environment';

export default Service.extend({
    session: Ember.inject.service(),

    getProductBacklog(){
        let initiative = this.get('session').initiative
        return Ember.$.ajax({
            url: `http://${ENV.serverhost}/api/v1/backlog/${this.session.initiative.initiativeId}`,
            type: 'GET',
            contentType: 'application/json'
        })
    },

    postBacklog(backlog){
        return Ember.$.ajax({
            url:`http://${ENV.serverhost}/api/v1/backlog/${this.session.initiative.initiativeId}`,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(backlog)
        })
    },

    assignOwner(){
        
    }
});
