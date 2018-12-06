import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
    initiativeUser : Ember.inject.service(),
    session: Ember.inject.service(),
    image:"",
    username:"",
    showView: true,
    members:[],
    init(){
        this._super(...arguments)
        this.set('username',this.get('session').currentUser.name);
        this.set('image',this.get('session').currentUser.profilePicUrl);
    },

    actions: {
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
        }
    }
});
