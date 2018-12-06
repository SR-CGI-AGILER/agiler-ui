import Component from '@ember/component';
import Ember from 'ember'
import { get } from '@ember/object';
import { set } from '@ember/object';


export default Component.extend({
    taskData: Ember.inject.service(),
    
    actions : {
        removeScheduledTodayTask (taskObject) {
            
        let arr = taskObject.that.scheduledTodayTasks.filter(task=> task._id !== taskObject.data._id);
        let arr1 = taskObject.that.scheduledTodayTasks.filter(task=> task._id === taskObject.data._id);

        set(taskObject.that,'scheduledTodayTasks',arr);
        
        }
    },
    init(){
        this._super(...arguments)
        let that = this
        
        this.get('taskData').on('data-commingScheduledToday', function(data) {
            that.actions.removeScheduledTodayTask({that: that, data: data})
            
            
        })
    },
    didRender(){
        
    }
});
