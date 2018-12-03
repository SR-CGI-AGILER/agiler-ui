import Component from '@ember/component';
import Ember from 'ember'

export default Component.extend({
    initiativeSuggestion: [],
    userInitiative: Ember.inject.service(),
    initiativeUser: Ember.inject.service(),
    session: Ember.inject.service(),
    userInput: "",
    alertSuccessfull: false,
    alertFailed: false,
    async init() {
        let that = this
        this._super(...arguments);
        let user = this.session.currentUser.email
        debugger
        await this.userInitiative.getInitiatives(user).then(function(data) {
            data.data.initiative.map(function(e) {
                that.initiativeSuggestion.pushObject(e)
            })
        })
        
    },
    actions: {
        searchInitiative(param) {
           this.set('userInput', param);
        },
        createInitiative() {
            let that = this;
            if (this.get('userInput') !== "") {
                this.initiativeUser.postNewInitiative(this.get('userInput')).then(function(data) {
                    that.toggleProperty('alertSuccessfull')
                })
            }else {
                this.toggleProperty('alertFailed')
                console.log(this.get('alertFailed'))
            }
        },
        deleteInitiative() {
             let that = this;
             let data = {
                 user: this.session.currentUser.email,
                 initiativeId: this.get('selectedItem').initiativeId
             }
             this.initiativeUser.deleteInitiative(data).then(function (data) {
                that.toggleProperty('alertSuccessfull')
             }).catch(function (err) {
                that.toggleProperty('alertFailed')
             })
        },
        closeToast() {
            this.toggleProperty('alertSuccessfull')
        },
        closeToastFailed () {
            this.toggleProperty('alertFailed')
        }
    }
});
