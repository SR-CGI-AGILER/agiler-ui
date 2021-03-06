import Component from '@ember/component';
import Ember from 'ember';
import service from 'ember-service/inject';
import getOwner from 'ember-owner/get';
export default Component.extend({
    routing: service("-routing"),

    initiativeUser : Ember.inject.service(),
    session: Ember.inject.service(),
    image:"",
    username:"",
    showView: true,
    init(){
        this._super(...arguments)
        this.set('username',this.get('userData').name);
        this.set('image',this.get('userData').profilePicUrl);
        
        

    },
    actions: {
        logout(){
            const currentRouteName = this.get("routing.currentRouteName");
            const currentRouteInstant = getOwner(this).lookup(`route:${currentRouteName}`);
            currentRouteInstant.refresh();
            this.logout();
        },
        reRenderView(){
        },
        showUsers(init){
            let that = this;
            this.initiativeUser.getUsers(init.initiativeId).then(function(data){
                if(data.message === "something went wrong"){
                    let owner = [];
                    owner.pushObject({
                        email: that.get('session').currentUser.email,
                        name: that.get('session').currentUser.name,
                        owner: true,
                        profilePicUrl: that.get('session').currentUser.profilePicUrl
                    })
                    that.set('members',owner)
                }
                else {
                    that.set('members',data.data);
                }
            })
            this.toggleProperty('showView');
            this.reRenderView();
        },
        toggleView() {
            if(this.get('showView')){
                this.set('showView',false)
            }
            else{
                this.set('showView',true)
            }
        },
        navigateToInitiative(route){
            this.navigateToInitiative(route)
        },
        navigateToMembers(route){
            this.navigateToInitiativeMembers(route)
        },
        sprintView(){
            this.sprintView();
        }
    }
});
