import Controller from '@ember/controller';

export default Controller.extend({
    teamCopy: Ember.inject.service(),

    actions: {
        markComplete(task) {
            let data = {
                createdAt: '2018-09-01',
                taskId: task._id
            }
            this.teamCopy.updateTeamCopy(data).then(function(data){
                console.log(data);
            })
        }
    }
});
