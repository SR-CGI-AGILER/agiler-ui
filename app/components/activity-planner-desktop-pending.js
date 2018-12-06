import Component from '@ember/component';
import Ember from 'ember'
import { get } from '@ember/object';
import { set } from '@ember/object';


export default Component.extend({
    taskData: Ember.inject.service(),
    
    actions : {
        removePendingTask (taskObject) {
            
        let arr = taskObject.that.pendingTasks.filter(task=> task._id !== taskObject.data._id);
        let arr1 = taskObject.that.pendingTasks.filter(task=> task._id === taskObject.data._id);

        set(taskObject.that,'pendingTasks',arr);
        
        }
    },
    init(){
        this._super(...arguments)
        let that = this
        
        this.get('taskData').on('data-commingPending', function(data) {
            that.actions.removePendingTask({that: that, data: data})
            
            
        })
    },
    didRender(){
        
    }
});
