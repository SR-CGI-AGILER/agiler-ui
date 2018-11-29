import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
    initiativeUser : Ember.inject.service(),
    image:"",
    username:"",
    showView: true,
    // members:[],
    init(){
        this._super(...arguments)
        this.set('username',this.get('userData').name);
        this.set('image',this.get('userData').profilePicUrl);

        
        

    },
    actions: {
        showUsers(init){
            let that = this;
            this.initiativeUser.getUsers(init.id).then(function(data){
                // console.log(data)
                that.set('members',data);
                // console.log(that.get('members'),"hiiiii")
            })
            this.toggleProperty('showView');
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
