import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    completedTasks: computed('activityPlan', function () {
        return this.activityPlan.filter(task => task.status === "Completed")
      }),

      pendingTasks: computed('activityPlan', function () {
        console.log(this.activityPlan.filter(task => task.status === "Pending"),"PENDING")
        return this.activityPlan.filter(task => task.status === "Pending")
      }),

      newTasks: computed('activityPlan', function () {
        return this.activityPlan.filter(task => task.status === "New")
      }),

      cancelledTasks: computed('activityPlan', function () {
        return this.activityPlan.filter(task => task.status === "Cancelled")
      }),

      scheduledFutureTasks: computed('activityPlan', function () {
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear() + "-" + (month) + "-" + (day);
        // console.log(today);
        return this.activityPlan.filter(task => task.scheduled === today);
      }),
    
      scheduledTodayTasks: computed('activityPlan', function () {
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear() + "-" + (month) + "-" + (day);
        // console.log(today);
        return this.activityPlan.filter(task => task.scheduled_On === today);
      }),
      backlogTasks: computed('backlogs', function () {
        let btasks = [];
        this.backlogs.forEach(element => {
          console.log(element.tasks, "hhgugh");
          element.tasks.forEach(task=>{
            btasks.pushObject(task);  
          });
        })
        console.log(btasks,"I AM BTASKS");
        // let temp = this.activityPlan.filter((backlogTasks => backlogTasks.tasks.backlog===true) && (backlogTasks.tasks.);
        // return this.activityPlan.filter(task => task.backlog);
        return btasks;
      })
      
      // actions : {
      //   publishActivityPlan(x){
      //     debugger;
      //   }
      // }
});
