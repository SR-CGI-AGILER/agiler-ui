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
          
          console.log(this.activityPlan.filter(task => task.status === "Pending"),"PENDING")
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
          console.log(this.get('scheduledfor'),"scheduled future tasks");
          var now = new Date();
          var day = ("0" + now.getDate()).slice(-2);
          var month = ("0" + (now.getMonth() + 1)).slice(-2);
          var today = now.getFullYear() + "-" + (month) + "-" + (day);
          // console.log(today);
          return this.scheduledfor.filter(task => task.scheduled === today);
        }
      }),
    
      scheduledTodayTasks: computed('scheduled', function () {
        if(this.get('scheduled')){        
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear() + "-" + (month) + "-" + (day);
        // console.log(today);
        return this.scheduled.filter(task => task.scheduled_On === today);
        }
      }),
      backlogTasks: computed('backlogs', function () {
        let btasks = [];
        if(this.get('backlogs')){
          console.log(this.backlogs,"backlogs")        
        this.backlogs.tasks.forEach(element => {
          // console.log(element.tasks, "hhgugh");
          // element.tasks.forEach(task=>{
            btasks.pushObject(element);  
          // }); 
        })
      }
        console.log(btasks,"I AM BTASKS");
        // let temp = this.activityPlan.filter((backlogTasks => backlogTasks.tasks.backlog===true) && (backlogTasks.tasks.);
        // return this.activityPlan.filter(task => task.backlog);
        return btasks;
      }),
      actions : {
        reRenderView() {
          // this.reRenderView();
        },
        navigateToInitiaiveRoute(route){
          console.log("comming in planneer component")
          this.navigateToInitiaive(route)
        },
        navigateTomembers(route){
          console.log("planner", route)
          this.navigateToInitiativeMembers(route)
        }
      }
      
      // actions : {
      //   publishActivityPlan(x){
      //     debugger;
      //   }
      // }
});
