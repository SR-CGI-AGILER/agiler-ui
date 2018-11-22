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
  dragStart(event) {
    let data = event.dataTransfer.setData('some_Object', JSON.stringify(this.content)); // rename it after
    console.log(data,"dragStart");
    console.log(this.content,"content")
    return data
  },
  dragLeave(event) {
    event.preventDefault();
    set(this, 'dragClass', 'deactivated');
  }

 
});
