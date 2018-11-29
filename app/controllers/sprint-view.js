import Controller from '@ember/controller';
import { set } from '@ember/object';
export default Controller.extend({
    teamCopy: Ember.inject.service('team-copy'),
    startTime: null,
    endTime: null,
    selectedBands: [],
    selectedTasks : [],
    showSprintViewAction: false,
    selected: false,
    selectedCount: Ember.computed.reads('selectedBands.length'),

    actions: {
        
        raisedButtonComplete() {
            console.log(this.showSprintViewAction,"atreya");
            console.log(this.get('todayTeamCopy'));
            
            console.log(this.get('selectedTasks'),"selectedTasks");
            let arr1 = [];
            this.get('selectedTasks').map(function(e){
                let data = {
                    taskId:e._id,
                    action:"Completed"
                };
                arr1.pushObject(data);
            })
            let data = {
                createdAt:"2018-10-21",
                arr2 : [],
            };
            data.arr2 = arr1;
            this.teamCopy.updateTeamCopy(data);
            this.get('model').payload.data.tasks.map(e => {
                this.get('selectedTasks').map(f => {
                    if(e._id === f._id){
                        console.log(e);
                        set(e,'isPending',true);
                        set(e,'isComplete',false);
                        set(e,'isNew',false);
                        return e
                    }
                    else {
                        return e
                    }
                })
               
              });
            this.set('selected',false);
            console.log(this.get('selected'), "ghcgh");

        },

        raisedButtonPending() {
            console.log(this.showSprintViewAction,"atreya");
            console.log(this.get('todayTeamCopy'));
            
            console.log(this.get('selectedTasks'),"selectedTasks");
            let arr1 = [];
            this.get('selectedTasks').map(function(e){
                let data = {
                    taskId:e._id,
                    action:"Pending"
                };
                arr1.pushObject(data);
            })
            let data = {
                createdAt:"2018-10-21",
                arr2 : [],
            };
            data.arr2 = arr1;
            this.teamCopy.updateTeamCopy(data);
            this.get('model').payload.data.tasks.map(e => {
                this.get('selectedTasks').map(f => {
                    if(e._id === f._id){
                        console.log(e);
                        set(e,'isPending',true);
                        set(e,'isComplete',false);
                        set(e,'isNew',false);
                        return e
                    }
                    else {
                        return e
                    }
                })
               
              });
            this.set('selected',false);

        },

        selectBand(event) {

            console.log('selectBand', this.get('task'),event);
            this.set('startTime', new Date().getTime())
            console.log(event,"event");
            if(!event.checked){
                // debugger
              this.selectedTasks.pushObject(event);
              console.log(this.selectedTasks, "on touch staart ..!!!");
            }
            else{
  
              this.selectedTasks.removeObject(event);
              console.log(this.selectedTasks, "removing the object !! on touch start @@@@@@");
            }
  
        },   
        
        unselectBand(item) {
            
            this.set('showSprintViewAction','true');
            console.log('unselect Band', "on touch end ");
            if((this.startTime + 500) < new Date().getTime()){
                  this.set('selectedTasks', []);
                  console.log("Long Press condition true")
                  if(this.selected) {
                    this.set('selected',false)
                      
  
                  }
                  else{
                    this.set('selected', true)
                    console.log(this.selected);
  
                  }
                    
  
            }
              
            else{
                console.log('else', "happened on the touch end!!!");
                if(!this.selected){
  
                  console.log('NOT SELECTED', "checkbox not invoked!!");
                  this.set('selectedTasks',[]);
                }
  
              }
            console.log(this.selectedTasks, "end state of the arr on touch end");
        },

        myuserdefined(x) {
             console.log(x, "onChange for the checkbox is triggred")
             x.checked = true;
             return x
          
  },
    }
});
