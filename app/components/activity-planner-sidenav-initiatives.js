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
            // console.log(data.data.initiative);
            if(!data.data){
                console.log(data.data,"IF")
                console.log(that.get('session').initiative,"I AM INIR")
                let defaultInitiative  = [];
                defaultInitiative.pushObject(that.get('session').initiative);
                that.set('initiatives',defaultInitiative)
            }
            else{
                console.log(data.data,"ELSE")
                that.set('initiatives',data.data.initiative);
            }
        })
    },

    actions :{
        showUsers(init){
            debugger
            console.log(init,"Action1");
            this.get('session').set('initiative',init)
            // console.log(this.get('session').initiative,"HATT YAHA SE");
            
            this.showUsers(init)
            // this.reRenderView();
            const currentRouteName = this.get("routing.currentRouteName");
            const currentRouteInstant = getOwner(this).lookup(`route:${currentRouteName}`);
            currentRouteInstant.refresh();
            // console.log("IN COMPONENT")

        },
        navigateToInitiativeRoute(){
            this.navigate("initiative")
        }

    }
});
