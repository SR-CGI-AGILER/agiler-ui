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
                                        console.log(this,"this");
                                        that.backlogTasks.pushObject(newTask);
                                    }
                                    else if(x==="new"){
                                        let y = {
                                            tasks:{
                                                text: taskName[0]
                                            }
                                        }
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
                                let x = taskName[1].substring(0);
                                let y = taskName[0].substring(0);
                                // console.log(z,"asdadj")
                                console.log(x,"x")
                                if(x==="backlogs"){
                                    let newTask = {
                                        tasks:{
                                            // text:this.getProperties('input').input,
                                            text: taskName[0]
                                        } 
                                    }
                                    console.log(this,"this");
                                    that.backlogTasks.pushObject(newTask);
                                }
                                else if(x==="new"){
                                    let y = {
                                        tasks:{
                                            text: taskName[0]
                                        }
                                    }
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
