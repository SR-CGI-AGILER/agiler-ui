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
    initiativeUser: Ember.inject.service(),
    teamCopy: Ember.inject.service(),
    session: Ember.inject.service(),
    users: {},
    async model(){
        let that=this;
        await this.initiativeUser.getUsers(this.get('session').initiative.initiativeId).then(function(data) {
            that.set('users',data.data)      
        })
        let response;

        var d = new Date();
        var day = ("0" + d.getDate()).slice(-2);
        var month = ("0" + (d.getMonth()+ 1)).slice(-2);
        var today = d.getFullYear() + "-" + (month) + "-" + (day);
        var initiativeId = this.get('session').initiative.initiativeId;
        await  this.teamCopy.getTeamCopy(today,initiativeId).then(data => {

        let that = this;
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
            let filterTask = data.payload.data.tasks.filter(function(eachTask) {
                 console.log(eachTask, that.get('session').currentUser)
                if(eachTask.owner === that.get('session').currentUser.email) {
                    return eachTask
                }
            })
            debugger
            this.set('filteredTasks', filterTask);
        })

        let a =  new Promise(function(resolve, reject) {
            resolve(response)
        })


        return response;

        
    },
    setupController(controller, model){
        this._super(controller, model);
        controller.set('model',model);
        controller.set('filteredTasks', this.get('filteredTasks'));
        controller.set('users', this.get('users'));
    }
    
});
