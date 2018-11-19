import Component from '@ember/component';

export default Component.extend({
    randomtasks: ['swarnim','atreya'],
    actions:{
        raisedButton() {
            console.log(this.get('todayTeamCopy'));
            this.get('todayTeamCopy').pushObjects(this.get('selectedTasks'));
            // console.log(this.get('todayTeamCopy'));
        }
    }
});