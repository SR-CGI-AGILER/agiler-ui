import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
    userInitiative: Ember.inject.service(),
    session: Ember.inject.service(),
    initiativeSuggestion: [],
    successful: false,
    failed: false,
    async init() {
        let that = this
        this._super(...arguments);
        let user = this.session.currentUser.email
        this.set('initiativeSuggestion',[]);
        await this.userInitiative.getInitiatives(user).then(function(data) {
            data.data.initiative.map(function(e) {
                if(that.get('initiativeSuggestion').indexOf(e) === -1){
                    that.initiativeSuggestion.pushObject(e)
                }
            })
        })
        
    },
    actions: {
        searchInitiative() {

        },
        addUser() {
            let that = this
            let data = {
                initiativeId: this.get('selectedItem').initiativeId,
                initiativeName: this.get('selectedItem').initiativeName,
                email: this.get('name')
            }
            if(data.initiativeId !== ""&& data.initiativeId !== undefined && data.email !== "") {

                this.userInitiative.postNewUser(data).then(function (data) {
                    that.toggleProperty('successful')
                }).catch(function(err) {
                    this.toggleProperty('failed')
                })
            }
        },
        deleteUser() {
        },
        closeSuccessful() {

        },
        closeFailed() {

        }
    }
});
