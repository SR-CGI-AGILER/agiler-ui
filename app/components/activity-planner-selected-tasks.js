import Component from '@ember/component';
import {
    computed
  } from '@ember/object';

export default Component.extend({
    randomtasks: ['swarnim','atreya'],
    renderView: 'updates',
    actionComponent: computed('tabIndex', function() {
        let tab = this.get('tabIndex');
        // console.log(tab,"HEREEEE");
        switch(tab) {
            case 0: this.set('renderView','updates');
                    break;
            case 1: this.set('renderView','scheduled');
                    break;
            case 2: this.set('renderView','backlogs');
                    break;
            case 3: this.set('renderView', 'activityPlan');
                    break;
            default: return;
        }
    }),

    showUpdatesAction: computed('renderView',function(){
        return this.renderView === 'updates'
    }),

    showScheduledAction: computed('renderView',function(){
        return this.renderView === 'scheduled'
    }),

    showBacklogsAction: computed('renderView',function(){
        return this.renderView === 'backlogs'
    }),
    showActivityPlanAction: computed('renderView',function(){
        return this.renderView === 'activityPlan'
    }),

    actions: {
        addToActivityPlan() {
            // console.log(this.get('todayTeamCopy'));
            this.get('task').pushObjects(this.get('selectedTasks'));
            // console.log(this.get('todayTeamCopy'));
        },
        assignOwners(){

        }
    }
});