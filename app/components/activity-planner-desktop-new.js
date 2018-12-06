import Component from '@ember/component';
import Ember from 'ember'
import { set } from '@ember/object';


export default Component.extend({
    taskData: Ember.inject.service(),
    
    actions : {
        removeNewTask (taskObject) {
            
        let arr = taskObject.that.newTasks.filter(task=> task._id !== taskObject.data._id);
        set(taskObject.that,'newTasks',arr);
        }
    },
    init(){
        this._super(...arguments)
        let that = this
        this.get('taskData').on('data-commingNew', function(data) {
            that.actions.removeNewTask({that: that, data: data})
            
            
        })
    },
    didRender(){
        
    }
});
