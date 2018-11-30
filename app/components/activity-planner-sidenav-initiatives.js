import Component from '@ember/component';
import Ember from 'ember';
import service from 'ember-service/inject';
import getOwner from 'ember-owner/get';

export default Component.extend({
    routing: service("-routing"),
    session: Ember.inject.service(),
    initiatives:[
        {
            initiativeId: "1cm4tri7mjp2wluvt",
            initiativeName: "i1"
        },
        {
            initiativeId: "1cm4tri7mjp2wm7ti",
            initiativeName: "i2"   
        }
    ],
    actions :{
        showUsers(init){
            this.get('session').set('initiative',init)
            // console.log(this.get('session').initiative,"HATT YAHA SE");
            this.showUsers(init)
            // this.reRenderView();
            const currentRouteName = this.get("routing.currentRouteName");
            const currentRouteInstant = getOwner(this).lookup(`route:${currentRouteName}`);
            currentRouteInstant.refresh();
            // console.log("IN COMPONENT")

        }

    }
});
