import Component from '@ember/component';
import Ember from 'ember'
import { get } from '@ember/object';
import { set } from '@ember/object';


export default Component.extend({
    taskData: Ember.inject.service(),
    // newTasks:['Task 1','Task 2', 'Task 3'],
    // removeTask: "this is check string",
    actions : {
        removeNewTask (taskObject) {
            
            debugger
            console.log(taskObject.that.newTasks, "is this getting triggered newTasks??")
        let arr = taskObject.that.newTasks.filter(task=> task._id !== taskObject.data._id);
        let arr1 = taskObject.that.newTasks.filter(task=> task._id === taskObject.data._id);

        console.log(arr1,"newTasks")
        // taskObject.that.newTasks = arr.splice(0);
        set(taskObject.that,'newTasks',arr);
            // taskObject.that.newTasks.removeObject(taskObject.data);
        }
    },
    init(){
        this._super(...arguments)
        let that = this
        this.get('taskData').on('data-commingNew', function(data) {
            // console.log(data,"init data")
            // console.log("sdfsdfsdf",that.newTasks,"this has reached the parent")
            that.actions.removeNewTask({that: that, data: data})
            
            
        })
    },
    didRender(){
        
    }
});
