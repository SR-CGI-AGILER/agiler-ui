import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    completedTasks: computed('activityPlan', function () {
        if(this.get('activityPlan')){

          return this.activityPlan.filter(task => task.status === "Completed")
        }
      }),

      pendingTasks: computed('activityPlan', function () {
        if(this.get('activityPlan')){
          
          return this.activityPlan.filter(task => task.status === "Pending")
        }
      }),

      newTasks: computed('activityPlan', function () {
        if(this.get('activityPlan')){
        
        return this.activityPlan.filter(task => task.status === "New")
        }
      }),

      cancelledTasks: computed('activityPlan', function () {
        if(this.get('activityPlan')){

          return this.activityPlan.filter(task => task.status === "Cancelled")
        }
      }),

      scheduledFutureTasks: computed('scheduledfor', function () {
        if(this.get('scheduledfor')){
          var now = new Date();
          var day = ("0" + now.getDate()).slice(-2);
          var month = ("0" + (now.getMonth() + 1)).slice(-2);
          var today = now.getFullYear() + "-" + (month) + "-" + (day);
          return this.scheduledfor.filter(task => task.scheduled === today);
        }
      }),
    
      scheduledTodayTasks: computed('scheduled', function () {
        if(this.get('scheduled')){        
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear() + "-" + (month) + "-" + (day);
        return this.scheduled.filter(task => task.scheduled_On === today);
        }
      }),
      backlogTasks: computed('backlogs', function () {
        let btasks = [];
        if(this.get('backlogs')){
        this.backlogs.tasks.forEach(element => {
            btasks.pushObject(element);  
          // }); 
        })
      }
        return btasks;
      }),
      actions : {
        reRenderView() {
        },
        navigateToInitiaiveRoute(route){
          this.navigateToInitiaive(route)
        },
        navigateTomembers(route){
          this.navigateToInitiativeMembers(route)
        }
      }
      
});
