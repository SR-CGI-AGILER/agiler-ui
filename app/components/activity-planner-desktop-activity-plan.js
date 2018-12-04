import Component from '@ember/component';
import { computed } from '@ember/object';
import { set } from '@ember/object';
import {
    bindKeyboardShortcuts,
    unbindKeyboardShortcuts
  } from 'ember-keyboard-shortcuts';
export default Component.extend({
    activityPlanTasks: [],
    taskEmpty: computed('activityPlanTasks', function(){
        if(this.activityPlanTasks.length!==0){
            return true;
        }
    }),
    isPublished: false,
    notPublished: true,
    activityPlan: Ember.inject.service('activity-plan'),
    productBacklogs: Ember.inject.service(),
    session: Ember.inject.service(),
    actions: {

        publishActivityPlan(){
            var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + (month) + "-" + (day);
            let self = this;
            let data = {
                createdAt:today,
                initiativeId: self.get('session').initiative.initiativeId,
                tasks: []
            };
            data.tasks=this.activityPlanTasks;
            console.log(data,"published data");
           this.activityPlan.postActivityPlan(data);
           console.log(self.get('checkPublish'),"checkPublish in desktop activity plan");
           this.set('checkPublish',true);
           this.set('notPublished', false);
        // this.get('publishActivityPlan')(activityPlanTasks)
        },
        submit() {
            this.get('submit')();
          },
        addTask(x){
            console.log("addTask action")
            console.log(this.activityPlanTasks);
            
            // this.activityPlanTasks.pushObject(x);
            this.activityPlanTasks.addObject(x);

            console.log(this.activityPlanTasks);
        },
        add() {
            var now = new Date();
            var day = ("0" + now.getDate()).slice(-2);
            var month = ("0" + (now.getMonth() + 1)).slice(-2);
            var today = now.getFullYear() + "-" + (month) + "-" + (day);
            if (this.getProperties('input').input) {
                let s = this.getProperties('input').input;
                // let taskName = s.split('#');
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
                                let taskName = e.split('#');
                                
                                console.log(taskName,"taskName");
                                let taskName1 = e.split('@');
                                console.log(taskName1,"taskName1");
                                if(taskName.length>1){
                                    let l = taskName[1].substring(0);
                                    let q = l.toUpperCase();
                                    console.log(q,"q");
                                    let x = q.trim();
                                    console.log(x,"x")
                                    if(x==="BACKLOGS"){
                                        let newTask = {
                                            
                                                // text:this.getProperties('input').input,
                                                text: taskName[0]
                     
                                        }
                                        console.log(this,"this Backlogs in activity plan js file");
                                        that.backlogTasks.pushObject(newTask);
                                        let backlogData = {
                                            createdAt: today,
                                            initiativeId: that.get('session').initiative.initiativeId,
                                          tasks: []
                                        };
                                         backlogData.tasks= that.backlogTasks
                                        that.productBacklogs.postBacklog(backlogData);
                                    }
                                    else if(x==="NEW"){
                                        
                                        let z = {
                                            text: taskName[0],
                                            status: x
                                        };
                                        console.log(z,"new task z")
                                        // y.tasks.pushObject(z);
                                        that.newTasks.pushObject(z);
                                        console.log(that.newTasks,"that.newTasks")
                                    }
                                    else if(x==="PENDING"){
                                        let newTask = {
                                    text: taskName[0],
                                    status: x
                            }
                            that.pendingTasks.pushObject(newTask);
                        }
                        
                        else {
                            let now = new Date();
                            let day = ("0" + now.getDate()).slice(-2);
        let month = ("0" + (now.getMonth() + 1)).slice(-2);
        let today = now.getFullYear() + "-" + (month) + "-" + (day);
                            let data = {
                                text : taskName[0],
                                owner : taskName[1] || that.get('session').currentUser.name,
                                due_date: today,
                                status:"Standup"
                            };
                            // newTask.tasks.pushObject(data);
                            that.activityPlanTasks.pushObject(data);
                            console.log(that.activityPlanTasks,"ASDF")
                        }
                      }  
                          else
                        {
                            let now = new Date();
        let day = ("0" + now.getDate()).slice(-2);
        let month = ("0" + (now.getMonth() + 1)).slice(-2);
        let today = now.getFullYear() + "-" + (month) + "-" + (day);
                          let newTask = {
                              
                                // text:this.getProperties('input').input,
                                text: taskName[0],
                                owner: taskName[1],
                                due_date: today,
                                status: "Standup"
                            }
                            console.log(newTask,"ASD")
                          that.activityPlanTasks.pushObject(newTask);
                        }
                            })
                       } 
              }
              this.set('input',' ')
            

            }     
    },


    
add1(){
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + (month) + "-" + (day);
    if (this.getProperties('input').input) {
        let s = this.getProperties('input').input;
        // let taskName = s.split('#');
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
                            let taskName = e.split('#');
                            let taskName1 = e.split('@');
                            console.log(taskName,"taskName");
                            if(taskName.length>1){
                                let l = taskName[1].substring(0);
                                let q = l.toUpperCase();
                                console.log(q,"q");
                                let x = q.trim();
                                console.log(x,"x")
                                if(x==="BACKLOGS"){
                                    let newTask = {
                                        
                                            // text:this.getProperties('input').input,
                                            text: taskName[0]
                                            
                                     
                                    }
                                    console.log(that,"this add1 backlogs");
                                    that.backlogTasks.pushObject(newTask);
                                    let backlogData = {
                                        createdAt: today,
                                        initiativeId: that.get('session').initiative.initiativeId,
                                      tasks: []
                                    };
                                     backlogData.tasks= that.backlogTasks
                                    that.productBacklogs.postBacklog(backlogData);
                                }
                                else if(x==="NEW"){
                                    let z ={
                                        text: taskName[0],
                                    status:x
                                    }
                                    // let y = {
                                    //     tasks:[]
                                            
                                    // }
                                    // y.tasks.push(z);
                                    that.newTasks.pushObject(z);
                                }
                                else if(x==="PENDING"){
                                    let newTask = {
                                
                            
                                text: taskName[0],
                                status:x
                        
                        }
                        that.pendingTasks.pushObject(newTask);
                    }
                    
                    else if(x!==""){
                        let now = new Date();
                        let day = ("0" + now.getDate()).slice(-2);
                        let month = ("0" + (now.getMonth() + 1)).slice(-2);
                        let today = now.getFullYear() + "-" + (month) + "-" + (day);
                        let newTask = {
                            
                              // text:this.getProperties('input').input
                              text: taskName1[0],
                              owner: taskName1[1],
                              due_date: today,
                              status: "Standup"
                          }
                          that.activityPlanTasks.pushObject(newTask);
                          console.log(that.activityPlanTasks,"ASDF")
                    }
                  }  
                      else
                    {
                        let now = new Date();
                        let day = ("0" + now.getDate()).slice(-2);
                        let month = ("0" + (now.getMonth() + 1)).slice(-2);
                        let today = now.getFullYear() + "-" + (month) + "-" + (day);
                      let newTask = {
                        
                            // text:this.getProperties('input').input,
                            text: taskName1[0],
                            owner: taskName1[1],
                            due_date: today,
                            status: "Standup"
                        }
                        console.log(newTask,"ASD")
                      that.activityPlanTasks.pushObject(newTask);
                    }
                        }
 
                    })
               } 
            }
            console.log(this.get('input'),"input1")
            // this.set('input','');
            set(this,'input',' ');

            // console.log(this.get('input'),"input2")

    },
    keyDown(event) {
        // debugger
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
            // self.send('submitform');
            // let data = event.dataTransfer.setData('some_Object', JSON.stringify(this.content));
            // Ember.run.debounce(self,self.get('add1'),400);
            this.add1();
            console.log(this.get('input'))
            this.set('input',' ')
            return false;
        }
        else if(event.keyCode === 9) {
            console.log("tab key press");
            
        }
    }

});
