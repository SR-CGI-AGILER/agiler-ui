
import Component from '@ember/component';
import Ember from 'ember'
import {
  get
} from '@ember/object';
import {
  set
} from '@ember/object';


export default Component.extend({
  init(){
    this._super(...arguments);
    const self = this
    this.set('self', self)

  },
  
  classNames: ['draggableItem'],
  attributeBindings: ['draggable'],
  draggable: 'true',
  dragClass: 'deactivated',
  taskData: Ember.inject.service('task-data'),
  dragLeave(event) {
    event.preventDefault();
    set(this, 'dragClass', 'deactivated');
  },
    dragOver(event) {
        event.preventDefault();
        set(this, 'dragClass', 'activated');
      },
      drop(event) {
        let data = event.dataTransfer.getData('some_Object');
      
        let rawData = JSON.parse(data);
        this.sendAction('dropped', rawData);
        let b = rawData.status;
        
        let a = b.toUpperCase();
        let now = new Date();
        let day = ("0" + now.getDate()).slice(-2);
        let month = ("0" + (now.getMonth() + 1)).slice(-2);
        let today = now.getFullYear() + "-" + (month) + "-" + (day);
    
       
        
        if(a==="NEW")
        this.taskData.sendDataNew(rawData);
        else if(a==="PENDING")
        this.taskData.sendDataPending(rawData);
        else if(a==="BACKLOGS")
        this.taskData.sendDataBacklogs(rawData);
        else if(rawData.scheduled_For){
          this.taskData.sendDataScheduledFuture(rawData);
          // console.log(date,date.parse(),"date hia ya nai?")
          // let c = Date.parse(rawData.scheduled_On);
            
        }        
        set(this, 'dragClass', 'deactivated');
      }
});
