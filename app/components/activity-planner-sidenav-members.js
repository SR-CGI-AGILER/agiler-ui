import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
    initiativeUser: Ember.inject.service(),
    session: Ember.inject.service(),
    init() {
        let that = this;
        this._super(...arguments);
        
        this.initiativeUser.getUsers(this.get('session').initiative.initiativeId).then(function(data){
            console.log(data.message,"user")
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
            // console.log(that.get('members'),"hiiiii")
        })
        console.log(this.get('members'));
    }
});
