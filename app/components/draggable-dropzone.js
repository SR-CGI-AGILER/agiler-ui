
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
    console.log(this)

  },
  // self: this,
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
        console.log(data,"drop1")
      
        let rawData = JSON.parse(data);
        console.log(rawData,"rawData in drop");
        this.sendAction('dropped', rawData);
        let a = rawData.tasks.status;
        let b = rawData.tasks.backlog;
        console.log(a,b,"statsu")
        // this.actions.some_action(data)
        // this.sendAction('dragged', rawData);
        // console.log(JSON.stringify(data),data,"drop");
        if(a=="new")
        this.taskData.sendDataNew(rawData);
        else if(a=="pending")
        this.taskData.sendDataPending(rawData);
        else if(b)
        this.taskData.sendDataBacklogs(rawData);
        // this.newTasks.removeObject(data);
        // console.log(this.actions.some_action(data),data, "which we are getting from the events")
        set(this, 'dragClass', 'deactivated');
      }
});
