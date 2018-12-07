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
    scheduleds: Ember.inject.service('scheduled'),
    session: Ember.inject.service(),
    showButton: true,
    teamCopy: Ember.inject.service(),

    
    async init(){
        this._super()
        let that=this;
        var d = new Date();
        var day = ("0" + d.getDate()).slice(-2);
        var month = ("0" + (d.getMonth()+ 1)).slice(-2);
        var today = d.getFullYear() + "-" + (month) + "-" + (day);
        await this.teamCopy.getTeamCopy(today,this.get('session').initiative.initiativeId).then(function(data){
          if(data.payload.data === "NO DATA FOUND"){
              
              that.set('showButton',true)
          }
          else{
              
              that.set('showButton',false)
          }
        }); 
        // const io=this.websockets.socketFor(`http://${ENV.serverhost}`)
        // this.set('io',io)
        // io.on('connect',this.openEventHandler,this)
        // io.on('message',this.addTaskEventHandler, this)
      },
      
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
           this.set('showButton',false);
        },
        
        addTask(x){
            let that = this;
           
           
            let now = new Date();
            let day = ("0" + now.getDate()).slice(-2);
            let month = ("0" + (now.getMonth() + 1)).slice(-2);
            let today = now.getFullYear() + "-" + (month) + "-" + (day);
            x.due_date = today;
            x.owner = that.get('session').currentUser.email;
            x.status = "Standup";
            console.log(x,"x")
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
                                if(e!==""){
                                    let taskName = e.split('#');
                                    console.log(taskName,"taskName#");
                                    // let taskName1 = e.split('@');
                                    // let taskName1 =  e.split('@').slice(1).join('@');

                                    let taskName1 =e.replace(/\@/,'&').split('&');
                                    console.log(taskName1,"taskName1@")
                                    let taskName2;
                                    if(taskName.length>=2){

                                         taskName2 = taskName[1].split('@');
                                        console.log(taskName2,"taskName2");
                                    }
                                    
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
                            else if(taskName2[0].toUpperCase()==="SCHEDULE"){
                                
                                let newTask = {
                                    text: taskName[0],
                                    scheduled_On:today,
                                    scheduled_For:taskName2[1] || today
                                };
                            console.log(newTask,"newTask")
                                that.scheduledFutureTasks.pushObject(newTask);
                                that.scheduledTodayTasks.pushObject(newTask);
                                let data = {
                                    initiative: that.get('session').initiative.initiativeId,
                                    tasks : newTask
                                };
                                console.log(data,"Data sche")
                                that.scheduleds.postScheduled(data);

                            }
                            
                            else if(x!==""){
                                let now = new Date();
                                let day = ("0" + now.getDate()).slice(-2);
                                let month = ("0" + (now.getMonth() + 1)).slice(-2);
                                let today = now.getFullYear() + "-" + (month) + "-" + (day);
                                
                                console.log(taskName,"taskName")
        
                                let newTask = {
                                    
                                      text: taskName1[0],
                                      owner: taskName1[1] || that.get('session').currentUser.email,
                                      due_date: today,
                                      status: "Standup"
                                  }
                                  console.log(newTask,"newTask");
                                  that.activityPlanTasks.pushObject(newTask);
                            }
                          }  
                              else
                            {
                                let now = new Date();
                                let day = ("0" + now.getDate()).slice(-2);
                                let month = ("0" + (now.getMonth() + 1)).slice(-2);
                                let today = now.getFullYear() + "-" + (month) + "-" + (day);
                         console.log(taskName,"taskName")
        
                              let newTask = {
                                
                                    text: taskName1[0],
                                    owner: taskName1[1] || that.get('session').currentUser.email,
                                    due_date: today,
                                    status: "Standup"
                                }
                                console.log(newTask,"newTask");
        
                              that.activityPlanTasks.pushObject(newTask);
                            }
                                }
         
                            })
                       } 
                    }
                    set(this,'input',' ');
        
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
                            console.log(taskName,"taskName#");
                            // let taskName1 = e.split('@');
                            // let taskName1 =  e.split('@').slice(1).join('@');

                            let taskName1 =e.replace(/\@/,'&').split('&');
                            console.log(taskName1,"taskName1@")
                            let taskName2;
                            if(taskName.length>=2){

                                 taskName2 = taskName[1].split('@');
                                console.log(taskName2,"taskName2");
                            }
                            
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
                    else if(taskName2[0].toUpperCase()==="SCHEDULE"){
                        
                        let newTask = {
                            text: taskName[0],
                            scheduled_On:today,
                            scheduled_For:taskName2[1] || today
                        };
                    console.log(newTask,"newTask")
                        that.scheduledFutureTasks.pushObject(newTask);
                        that.scheduledTodayTasks.pushObject(newTask);
                        let data = {
                            initiative: that.get('session').initiative.initiativeId,
                            tasks : newTask
                        };
                        console.log(data,"Data sche")
                        that.scheduleds.postScheduled(data);

                    }
                    
                    else if(x!==""){
                        let now = new Date();
                        let day = ("0" + now.getDate()).slice(-2);
                        let month = ("0" + (now.getMonth() + 1)).slice(-2);
                        let today = now.getFullYear() + "-" + (month) + "-" + (day);
                        
                        console.log(taskName,"taskName")

                        let newTask = {
                            
                              text: taskName1[0],
                              owner: taskName1[1] || that.get('session').currentUser.email,
                              due_date: today,
                              status: "Standup"
                          }
                          console.log(newTask,"newTask");
                          that.activityPlanTasks.pushObject(newTask);
                    }
                  }  
                      else
                    {
                        let now = new Date();
                        let day = ("0" + now.getDate()).slice(-2);
                        let month = ("0" + (now.getMonth() + 1)).slice(-2);
                        let today = now.getFullYear() + "-" + (month) + "-" + (day);
                 console.log(taskName,"taskName")

                      let newTask = {
                        
                            text: taskName1[0],
                            owner: taskName1[1] || that.get('session').currentUser.email,
                            due_date: today,
                            status: "Standup"
                        }
                        console.log(newTask,"newTask");

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
