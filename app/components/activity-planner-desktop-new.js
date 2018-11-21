import Component from '@ember/component';
import Ember from 'ember'
import { get } from '@ember/object';
import { set } from '@ember/object';


export default Component.extend({
    taskData: Ember.inject.service(),
    // newTasks:['Task 1','Task 2', 'Task 3'],
    // removeTask: "this is check string",
    actions : {
        removeTask (taskObject) {
            
            
            // console.log(taskObject, "is this getting triggered ??")
        let arr = taskObject.that.newTasks.filter(task=> task._id !== taskObject.data._id);
        console.log(arr,"what is this?")
        // taskObject.that.newTasks = arr.splice(0);
        set(taskObject.that,'newTasks',arr);
            // taskObject.that.newTasks.removeObject(taskObject.data);
        
        }
    },
    init(){
        this._super(...arguments)
        let that = this
        
        this.get('taskData').on('data-comming', function(data) {
            // console.log(data,"init data")
            // console.log("sdfsdfsdf",that.newTasks,"this has reached the parent")
            that.actions.removeTask({that: that, data: data})
            
            
        })
    },
    didRender(){
        
    }
});