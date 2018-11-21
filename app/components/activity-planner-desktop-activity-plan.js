import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    activityPlanTasks: [],
    taskEmpty: computed('activityPlanTasks', function(){
        if(this.activityPlanTasks.length!==0){
            return true;
        }
    }),
    actions: {
        addTask(x){
            console.log("addTask action")
            console.log(this.activityPlanTasks);
            
            this.activityPlanTasks.pushObject(x);
            console.log(this.activityPlanTasks);
        },
            add() {
              if (this.getProperties('input').input) {
                  let s = this.getProperties('input').input;
                  let taskName = s.split('@');
                  console.log(taskName,"taskName");
                //   let word = s.split(' ');
                //   console.log(word,"array of space seperated strings");
                //   word.map(function(e){
                //       if(e.charAt(0)=== "@"){

                //       }
                //   })
             
              if(taskName.length>1){
                  let x = taskName[1].substring(0);

                  console.log(x,"x")
                  if(x==="backlogs"){
                    let newTask = {
                        tasks:{
                          // text:this.getProperties('input').input
                          text: taskName[0]
                        } 
                      }
                    this.backlogTasks.pushObject(newTask);
                }
                else if(x==="new"){
                    let y = {
                        tasks:{
                            text: taskName[0]
                        }
                    }
                    this.newTasks.pushObject(y);
                }
                else if(x==="pending"){
                    let newTask = {
                        tasks: {
                            text: taskName[0]
                        }
                    }
                    this.pendingTasks.pushObject(newTask);
                }
                else {
                    let newTask = {
                        tasks:{
                          // text:this.getProperties('input').input
                          text: taskName[0],
                          owner: taskName[1]
                        } 
                      }
                      console.log(newTask,"ASDF")
                    this.activityPlanTasks.pushObject(newTask);
                }
              } 
              else
              {
                let newTask = {
                    tasks:{
                      // text:this.getProperties('input').input
                      text: taskName[0],
                      owner: taskName[1]
                    } 
                  }
                  console.log(newTask,"ASD")
                this.activityPlanTasks.pushObject(newTask);
              }
            
              }
            }     
    }
});
