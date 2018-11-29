import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
    teamCopy: Ember.inject.service(),
    async model(){
        let response;
        console.log(this.teamCopy.getTeamCopy("2018-10-21","default"));
       await  this.teamCopy.getTeamCopy("2018-10-21","default").then(data => {
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
