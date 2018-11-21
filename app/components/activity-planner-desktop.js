import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    completedTasks: computed('activityPlan', function () {
        return this.activityPlan.filter(task => task.tasks.status === "Completed")
      }),

      pendingTasks: computed('activityPlan', function () {
        return this.activityPlan.filter(task => task.tasks.status === "Pending")
      }),

      newTasks: computed('activityPlan', function () {
        return this.activityPlan.filter(task => task.tasks.status === "New")
      }),

      cancelledTasks: computed('activityPlan', function () {
        return this.activityPlan.filter(task => task.tasks.status === "Cancelled")
      }),

      scheduledFutureTasks: computed('activityPlan', function () {
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear() + "-" + (month) + "-" + (day);
        // console.log(today);
        return this.activityPlan.filter(task => task.tasks.scheduled === today);
      }),
    
      scheduledTodayTasks: computed('activityPlan', function () {
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear() + "-" + (month) + "-" + (day);
        // console.log(today);
        return this.activityPlan.filter(task => task.tasks.scheduled_On === today);
      }),
      backlogTasks: computed('activityPlan', function () {
        // let temp = this.activityPlan.filter((backlogTasks => backlogTasks.tasks.backlog===true) && (backlogTasks.tasks.);
        return this.activityPlan.filter(task => task.tasks.backlog);
      })
    
});
