import Controller from '@ember/controller';

export default Controller.extend({
    teamCopy: Ember.inject.service('team-copy'),
    startTime: null,
    endTime: null,
    selectedBands: [],
    selectedTasks : [],
    showSprintViewAction: false,
    selected: false,
    // isChecked = true, 
    // selected: false,
    selectedCount: Ember.computed.reads('selectedBands.length'),

    actions: {
        raisedButtonComplete() {
            console.log(this.showSprintViewAction,"atreya");
            // this.set('showSprintViewAction','true');
            // console.log(this.showSprintViewAction,"atreya");
            console.log(this.get('todayTeamCopy'));
            this.get('todayTeamCopy').pushObjects(this.get('selectedTasks'));
            console.log(this.get('todayTeamCopy'),"atreya ra selected task achi eita");
        },
        raisedButtonNew() {
        },
        raisedButtonPending() {
        },
        markComplete(task) {
            let data = {
                createdAt: '2018-10-21',
                taskId: task._id
            }
            this.teamCopy.updateTeamCopy(data).then(function(data){
                console.log(data);
            })
        },

        markNew(task) {
            let data = {
                createdAt: '2018-10-21',
                taskId:  task._id,
                action: "New"
            }
            
            this.teamCopy.updateTeamCopy(data).then(function(data) {
                console.log(data);
            })
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
            // debugger
            this.set('showSprintViewAction','true');
            console.log('unselect Band', "on touch end ");
            if((this.startTime + 1000) < new Date().getTime()){
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
