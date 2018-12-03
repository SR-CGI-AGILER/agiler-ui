import Service from '@ember/service';
import Ember from 'ember';
import ENV from '../config/environment';

export default Service.extend({
    session: Ember.inject.service(),

    // initiative: this.get('session').initiative.id,
    getProductBacklog(){
        let initiative = this.get('session').initiative
        console.log(initiative,"i am sure this is undefiuned") 
        return Ember.$.ajax({
            url: `http://172.23.238.187:4000/api/v1/backlog/${this.session.initiative.initiativeId}`,
            type: 'GET',
            contentType: 'application/json'
        })
    },

    postBacklog(backlog){
        return Ember.$.ajax({
            url:`http://172.23.238.187:4000/api/v1/backlog/${this.session.initiative.initiativeId}`,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(backlog)
        })
    },

    assignOwner(){
        
    }
});
