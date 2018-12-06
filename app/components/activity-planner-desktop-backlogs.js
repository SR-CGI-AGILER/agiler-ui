import Component from '@ember/component';
import Ember from 'ember'
import { get } from '@ember/object';
import { set } from '@ember/object';


export default Component.extend({
    taskData: Ember.inject.service(),
  
    actions : {
        removeBacklogTask (taskObject) {
            
        let arr = taskObject.that.backlogTasks.filter(task=> task._id !== taskObject.data._id);
        let arr1 = taskObject.that.backlogTasks.filter(task=> task._id === taskObject.data._id);

        set(taskObject.that,'backlogTasks',arr);
        
        }
    },
    init(){
        this._super(...arguments)
        let that = this

        this.get('taskData').on('data-commingBacklogs', function(data) {
            that.actions.removeBacklogTask({that: that, data: data})
            
            
        })
    },
    didRender(){
        
    }
});
