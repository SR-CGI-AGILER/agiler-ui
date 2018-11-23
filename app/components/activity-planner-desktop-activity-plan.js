import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    activityPlanTasks: [],
    taskEmpty: computed('activityPlanTasks', function(){
        if(this.activityPlanTasks.length!==0){
            return true;
        }
    }),
    activityPlan: Ember.inject.service('activity-plan'),
    actions: {
        publishActivityPlan(){
            let self = this;
            let data = {
                createdAt:"2018-11-17",
                initiatives:"default",
                tasks: []
            };
            data.tasks=this.activityPlanTasks;
            console.log(data,"published data");
           this.activityPlan.postActivityPlan(data);
        },
        addTask(x){
            console.log("addTask action")
            console.log(this.activityPlanTasks);
            
            this.activityPlanTasks.pushObject(x);
            console.log(this.activityPlanTasks);
        },
        add() {
            if (this.getProperties('input').input) {
                let s = this.getProperties('input').input;
                // let taskName = s.split('@');
                // console.log(taskName,"taskName");
                //   let word = s.split(' ');
                //   console.log(word,"array of space seperated strings");
                //   word.map(function(e){
                    //       if(e.charAt(0)=== "@"){
                        
                        //       }
                        //   })
                        console.log(this,"this1")
                        let multi = s.split('+');
                        console.log(multi,"multi")
                       if(multi.length>=0){
                           let that = this;
                           console.log(that,"that3")
                            multi.map(function(e){
                                let taskName = e.split('@');
                                console.log(taskName,"taskName");
                                if(taskName.length>1){
                                    let x = taskName[1].substring(0);
                                    // console.log(z,"asdadj")
                                    console.log(x,"x")
                                    if(x==="backlogs"){
                                        let newTask = {
                                            tasks:{
                                                // text:this.getProperties('input').input,
                                                text: taskName[0]
                                            } 
                                        }
                                        console.log(this,"this Backlogs in activity plan js file");
                                        that.backlogTasks.pushObject(newTask);
                                    }
                                    else if(x==="new"){
                                        let y = {
                                            createdAt:"2018-11-17",
                                            initiatives:"default",
                                            tasks: []
                                        }
                                        let z = taskName[0];
                                        console.log(z,"new task z")
                                        y.tasks.pushObject(z);
                                        that.newTasks.pushObject(y);
                                    }
                                    else if(x==="pending"){
                                        let newTask = {
                                    
                                tasks: {
                                    text: taskName[0]
                                }
                            }
                            that.pendingTasks.pushObject(newTask);
                        }
                        
                        else {
                            let newTask = {
                                createdAt:"2018-11-17",
                                initiatives:"default",
                                // tasks:{
                                //   // text:this.getProperties('input').input
                                //   text: taskName[0],
                                //   owner: taskName[1]
                                // }
                                tasks:[] 
                              };
                            let data = {
                                text : taskName[0],
                                owner : taskName[1]
                            };
                            newTask.tasks.pushObject(data);
                              console.log(newTask,"ASDF")
                            that.activityPlanTasks = newTask.tasks
                        }
                      }  
                          else
                        {
                          let newTask = {
                              tasks:{
                                // text:this.getProperties('input').input,
                                text: taskName[0],
                                owner: taskName[1]
                              } 
                            }
                            console.log(newTask,"ASD")
                          that.activityPlanTasks.pushObject(newTask);
                        }
                            })
                       } 
              }
              this.set('input','');
            }     
    },
add1(){
    if (this.getProperties('input').input) {
        let s = this.getProperties('input').input;
        // let taskName = s.split('@');
        // console.log(taskName,"taskName");
        //   let word = s.split(' ');
        //   console.log(word,"array of space seperated strings");
        //   word.map(function(e){
            //       if(e.charAt(0)=== "@"){
                
                //       }
                //   })
                console.log(this,"this1")
                let multi = s.split('+');
                console.log(multi,"multi")
               if(multi.length>=0){
                   let that = this;
                   console.log(that,"that3")
                    multi.map(function(e){
                        console.log(e,"E");
                        if(e!==""){
                            let taskName = e.split('@');
                            console.log(taskName,"taskName");
                            if(taskName.length>1){
                                let y = taskName[1].substring(0);
                                // let y = taskName[0].substring(0);
                                let x = y.trim();
                                // console.log(z,"asdadj")
                                console.log(x,"x")
                                if(x==="backlogs"){
                                    let newTask = {
                                        tasks:{
                                            // text:this.getProperties('input').input,
                                            text: taskName[0],
                                            backlog:true
                                        } 
                                    }
                                    console.log(that,"this add1 backlogs");
                                    that.backlogTasks.pushObject(newTask);
                                }
                                else if(x==="new"){
                                    let z ={
                                        text: taskName[0],
                                    status:x
                                    }
                                    let y = {
                                        tasks:[]
                                            
                                    }
                                    y.tasks.push(z);
                                    that.newTasks.pushObject(y);
                                }
                                else if(x==="pending"){
                                    let newTask = {
                                
                            tasks: {
                                text: taskName[0],
                                status:x
                            }
                        }
                        that.pendingTasks.pushObject(newTask);
                    }
                    
                    else if(x!==""){
                        let newTask = {
                            tasks:{
                              // text:this.getProperties('input').input
                              text: taskName[0],
                              owner: taskName[1]
                            } 
                          }
                          console.log(newTask,"ASDF")
                        that.activityPlanTasks.pushObject(newTask);
                    }
                  }  
                      else
                    {
                      let newTask = {
                          tasks:{
                            // text:this.getProperties('input').input,
                            text: taskName[0],
                            owner: taskName[1]
                          } 
                        }
                        console.log(newTask,"ASD")
                      that.activityPlanTasks.pushObject(newTask);
                    }
                        }
 
                    })
               } 
      }
      this.set('input','');
    },
    keyDown(event) {
        let self = this;
        let a = this.getProperties('input');
        let c =a.input;
        // console.log(c,"c")
        if (event.keyCode === 13) {
            console.log(a,"keystroke");
            let b = {
                tasks:{
                    text:c
                }
            }
            console.log(b,"b")
            console.log(this,"thisasdasdfmkciopxpobnniubiux sywbijnsdoncnxdoisemwjkopspokakwipqowasoq[olas[")
            // self.send('submitform');
            // let data = event.dataTransfer.setData('some_Object', JSON.stringify(this.content));
            // Ember.run.debounce(self,self.get('add1'),400);
            this.add1();
            this.set('input','')
            return false;
        }
    }
});
