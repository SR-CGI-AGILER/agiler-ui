import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
    initiativeUser : Ember.inject.service(),
    session: Ember.inject.service(),
    image:"",
    username:"",
    showView: true,
    // members:[],
    init(){
        this._super(...arguments)
        this.set('username',this.get('userData').name);
        this.set('image',this.get('userData').profilePicUrl);
        // console.log(this.get('session').currentUser);
        
        

    },
    actions: {
        reRenderView(){
            // debugger
            // this.reRenderView();
        },
        showUsers(init){
            console.log(init,"ACTION")
            let that = this;
            this.initiativeUser.getUsers(init.initiativeId).then(function(data){
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
            this.toggleProperty('showView');
            this.reRenderView();
        },
        incrementTabIndex() {
            if(this.tabIndex === 3){
                this.onTabIndexChanged(0);
            }
            else{
                this.onTabIndexChanged(this.tabIndex+1);
            }
        },
        decrementTabIndex() {
            if(this.tabIndex === 0){
                this.onTabIndexChanged(3);
            }
            else {
                this.onTabIndexChanged(this.tabIndex-1);
            }
        },
        toggleView() {
            if(this.get('showView')){
                this.set('showView',false)
            }
            else{
                this.set('showView',true)
            }
        }
    }
});
