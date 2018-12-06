import Route from '@ember/routing/route';
import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';


export default Route.extend(AuthenticatedRouteMixin, {

    beforeModel() {
        let token = this.get('session').userToken;
        if(!token){
            this.transitionTo('login');
        }
    },
    teamCopy: Ember.inject.service(),
    session: Ember.inject.service(),
    async model(){
        let response;

        var d = new Date();
        var day = ("0" + d.getDate()).slice(-2);
        var month = ("0" + (d.getMonth()+ 1)).slice(-2);
        var today = d.getFullYear() + "-" + (month) + "-" + (day);
        var initiativeId = this.get('session').initiative.initiativeId;
       await  this.teamCopy.getTeamCopy(today,initiativeId).then(data => {
        
        data.payload.data.tasks.map(function(e){
                if(e.status === 'Completed'){
                    e.isComplete = true;
                    e.isNew = false;
                    e.isPending = false;
                }
                else if(e.status === 'New') {
                    e.isNew = true;
                    e.isComplete = false;
                    e.isPending = false;
                }
                else if(e.status === "Pending"){
                    e.isPending = true;
                    e.isNew = false;
                    e.isComplete = false;
                }
                return e
            })
            
            response = data;
        })
        
        let a =  new Promise(function(resolve, reject) {
            resolve(response)
        })
        return response;

        
    },
    setupController(controller, model){
        this._super(controller, model);
        controller.set('model',model);
    }
    
});
