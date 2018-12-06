import Component from '@ember/component';
import Ember from 'ember';
import service from 'ember-service/inject';
import getOwner from 'ember-owner/get';

export default Component.extend({
    routing: service("-routing"),
    session: Ember.inject.service(),
    userInitiative: Ember.inject.service(),
    initiatives:[],

    async init(){
        this._super(...arguments);
        let that = this;
        await this.userInitiative.getInitiatives(this.get('session').currentUser.email).then(function(data){
            if(!data.data){
                let defaultInitiative  = [];
                defaultInitiative.pushObject(that.get('session').initiative);
                that.set('initiatives',defaultInitiative)
            }
            else{
                that.set('initiatives',data.data.initiative);
            }
        })
    },

    actions :{
        showUsers(init){
            this.get('session').set('initiative',init)
            
            this.showUsers(init)
            const currentRouteName = this.get("routing.currentRouteName");
            const currentRouteInstant = getOwner(this).lookup(`route:${currentRouteName}`);
            currentRouteInstant.refresh();

        },
        navigateToInitiativeRoute(){
            this.navigate("initiative")
        }

    }
});
