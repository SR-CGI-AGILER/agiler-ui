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
        // console.log(this.teamCopy.getTeamCopy("2018-10-21","default"));

        var d = new Date();
        // d.setDate(d.getDate() - 1);
        var day = ("0" + d.getDate()).slice(-2);
        var month = ("0" + (d.getMonth()+ 1)).slice(-2);
        var today = d.getFullYear() + "-" + (month) + "-" + (day);
        // console.log(this.teamCopy.getTeamCopy(today,"default"));
        // return this.teamCopy.getTeamCopy(today,this.get('session').initiative.initiativeId);
        var initiativeId = this.get('session').initiative.initiativeId;
        console.log(initiativeId);
       await  this.teamCopy.getTeamCopy(today,initiativeId).then(data => {
        // debugger  
        
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
            console.log(data)
        })
        // debugger
        
        let a =  new Promise(function(resolve, reject) {
            resolve(response)
        })
        return response;
        // return this.teamCopy.getTeamCopy("2018-10-21","default");

        
    },
    setupController(controller, model){
        this._super(controller, model);
        // this.controllerFor
        // this.set(model,'model'
        controller.set('model',model);
    }
    
});
