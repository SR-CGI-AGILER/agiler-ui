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
            url: `http://localhost:3000/api/v1/backlog/1cm4tr8mrjp2nymjx`,
            type: 'GET',
            contentType: 'application/json'
        })
    },

    postBacklog(backlog){
        return Ember.$.ajax({
            url:`http://localhost:3000/api/v1/backlog`,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(backlog)
        })
    }
});
