import Component from '@ember/component';
import Ember from 'ember'
import { get } from '@ember/object';
import { set } from '@ember/object';


export default Component.extend({
    taskData: Ember.inject.service(),
    // scheduledTodayTasks:['Task 1','Task 2', 'Task 3'],
    // removeTask: "this is check string",
    // actions : {
    //     removeScheduledTask (taskObject) {
            
            
    //         // console.log(taskObject, "is this getting triggered ??")
    //     let arr = taskObject.that.scheduledTodayTasks.filter(task=> task._id !== taskObject.data._id);
    //     console.log(arr,"what is this?")
    //     // taskObject.that.scheduledTodayTasks = arr.splice(0);
    //     set(taskObject.that,'scheduledTodayTasks',arr);
    //         // taskObject.that.scheduledTodayTasks.removeObject(taskObject.data);
        
    //     }
    // },
    init(){
        this._super(...arguments)
        let that = this
        
        this.get('taskData').on('data-comming', function(data) {
            // console.log(data,"init data")
            // console.log("sdfsdfsdf",that.scheduledTodayTasks,"this has reached the parent")
            that.actions.removeScheduledTask({that: that, data: data})
            
            
        })
    },
    didRender(){
        
    }
});
