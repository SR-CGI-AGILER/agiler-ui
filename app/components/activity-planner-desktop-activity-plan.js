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
            
           this.activityPlan.postActivityPlan(data);
           
           this.set('isPublished',true);
           this.set('notPublished', false);
        },
        submit() {
            this.get('submit')();
          },
        addTask(x){
            let that = this;
           
           
            let now = new Date();
            let day = ("0" + now.getDate()).slice(-2);
            let month = ("0" + (now.getMonth() + 1)).slice(-2);
            let today = now.getFullYear() + "-" + (month) + "-" + (day);
            x.due_date = today;
            x.owner = that.get('session').currentUser.name
            this.activityPlanTasks.pushObject(x);
            

            
        },
        add() {
            var now = new Date();
            var day = ("0" + now.getDate()).slice(-2);
            var month = ("0" + (now.getMonth() + 1)).slice(-2);
            var today = now.getFullYear() + "-" + (month) + "-" + (day);
            if (this.getProperties('input').input) {
                let s = this.getProperties('input').input;
                       
                        let multi = s.split('+');
                        
                       if(multi.length>=0){
                           let that = this;
                           
                            multi.map(function(e){
                                let taskName = e.split('#');
                                
                              
                                let taskName1 = e.split('@');
                                if(taskName.length>1){
                                    let l = taskName[1].substring(0);
                                    let q = l.toUpperCase();
                                    let x = q.trim();
                                    if(x==="BACKLOGS"){
                                        let newTask = {
                                            
                                                text: taskName[0]
                     
                                        }
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
                                        that.newTasks.pushObject(z);
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
                            that.activityPlanTasks.pushObject(data);
                        }
                      }  
                          else
                        {
                            let now = new Date();
        let day = ("0" + now.getDate()).slice(-2);
        let month = ("0" + (now.getMonth() + 1)).slice(-2);
        let today = now.getFullYear() + "-" + (month) + "-" + (day);
                          let newTask = {
                              
                                text: taskName[0],
                                owner: taskName[1],
                                due_date: today,
                                status: "Standup"
                            }
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
        
                let multi = s.split('+');
               if(multi.length>=0){
                   let that = this;
                    multi.map(function(e){
                        if(e!==""){
                            let taskName = e.split('#');
                            let taskName1 = e.split('@');
                            if(taskName.length>1){
                                let l = taskName[1].substring(0);
                                let q = l.toUpperCase();
                                let x = q.trim();
                                if(x==="BACKLOGS"){
                                    let newTask = {
                                        
                                            text: taskName[0]
                                            
                                     
                                    }
                                    that.backlogTasks.pushObject(newTask);
                                    let backlogData = {
                                        createdAt: today,
                                        initiativeId: that.get('session').initiative.initiativeId,
                                      tasks: []
                                    };
                                     backlogData.tasks= that.backlogTasks;
                                    that.productBacklogs.postBacklog(backlogData);
                                }
                                else if(x==="NEW"){
                                    let z ={
                                        text: taskName[0],
                                    status:x
                                    }
                                  
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
                            
                              text: taskName1[0],
                              owner: taskName1[1],
                              due_date: today,
                              status: "Standup"
                          }
                          that.activityPlanTasks.pushObject(newTask);
                    }
                  }  
                      else
                    {
                        let now = new Date();
                        let day = ("0" + now.getDate()).slice(-2);
                        let month = ("0" + (now.getMonth() + 1)).slice(-2);
                        let today = now.getFullYear() + "-" + (month) + "-" + (day);
                      let newTask = {
                        
                            text: taskName1[0],
                            owner: taskName1[1],
                            due_date: today,
                            status: "Standup"
                        }
                      that.activityPlanTasks.pushObject(newTask);
                    }
                        }
 
                    })
               } 
            }
            set(this,'input',' ');


    },
    keyDown(event) {
        
        let self = this;
        let a = this.getProperties('input');
        let c =a.input;
        if (event.keyCode === 13) {
            let b = {
                tasks:{
                    text:c
                }
            }
           
            this.add1();
            this.set('input',' ')
            return false;
        }
    }

});
