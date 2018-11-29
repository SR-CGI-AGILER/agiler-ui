import Controller from '@ember/controller';
import { set } from '@ember/object';
import {
  computed
} from '@ember/object';

export default Controller.extend({
  teamCopy: Ember.inject.service(),
  startTime: null,
  endTime: null,
  selectedTasks: [],
  showSprintViewAction: false,
  selected: false,
  selectedBands: [],
  selectedCount: computed.reads('selectedBands.length'),
  isCompleted: false,
  isPending: false,
  yes: true,
  isDesktopSprint: computed('yes', function () {
    let x = window.screen.availWidth;
    // console.log(window.screen.availWidth);
    if (x < 760) {
      return false
    } else {
      return true
    }
  }),

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
            arr : [],
        };
        data.arr = arr1;
        this.teamCopy.updateTeamCopy(data);
        this.get('model').payload.data.tasks.map(e => {
            this.get('selectedTasks').map(f => {
                if(e._id === f._id){
                    console.log(e);
                    set(e,'isPending',false);
                    set(e,'isComplete',true);
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
            arr : [],
        };
        data.arr = arr1;
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

    markComplete(task) {
      let data1 = {
        taskId: task._id,
        action: "Completed"
      }
      let data = {
        createdAt: '2018-10-21',
        arr: []
      }
      data.arr.push(data1);
      console.log(data, "data in action");
   
      this.teamCopy.updateTeamCopy(data).then(function (data) {})
    //   console.log(this.get('model').payload.data.tasks,"CONTROLLER");
      this.get('model').payload.data.tasks.map(e => {
        if(e._id === task._id){
            console.log(e);
            set(e,'isComplete',true);
            set(e,'isPending',false);
            set(e,'isNew',false);
            return e
        }
        else {
            return e
        }
      });
    //   console.log(this.isCompleted, this.isNew, this.isPending, "markComplete");
    },

    markNew(task) {
      let data = {
        createdAt: '2018-10-21',
        taskId: task._id,
        action: "New"
      }
      this.set('isNew', 'true');
      this.set('isPending', 'false');
      this.set('isCompleted', 'false');
      console.log(this.isNew, "isNew");
      this.teamCopy.updateTeamCopy(data).then(function (data) {
        console.log(data);

        // console.log(this.isNew,"isNew");

      })
    //   console.log(this.isCompleted, this.isNew, this.isPending, "markNew");
    },

    markPending(task) {
      let data1 = {
        taskId: task._id,
        action: "Pending"
      }
      let data = {
        createdAt: '2018-10-21',
        arr: []
      }
      data.arr.push(data1);
     
      this.teamCopy.updateTeamCopy(data).then(function (data) {
        console.log(data);

      })
      this.get('model').payload.data.tasks.map(e => {
        if(e._id === task._id){
            console.log(e);
            set(e,'isPending',true);
            set(e,'isComplete',false);
            set(e,'isNew',false);
            return e
        }
        else {
            return e
        }
      });
      
    //   console.log(this.isCompleted, this.isNew, this.isPending, "markPending");
    }
  }
});
