import Component from '@ember/component';
import Ember from 'ember'
import { get } from '@ember/object';
import { set } from '@ember/object';


export default Component.extend({
    taskData: Ember.inject.service(),
    // pendingTasks:['Task 1','Task 2', 'Task 3'],
    // removeTask: "this is check string",
    actions : {
        removePendingTask (taskObject) {
            
            // debugger
            console.log(taskObject.that.pendingTasks, "is this getting triggered pendingTasks??")
        let arr = taskObject.that.pendingTasks.filter(task=> task._id !== taskObject.data._id);
        let arr1 = taskObject.that.pendingTasks.filter(task=> task._id === taskObject.data._id);

        console.log(arr1,"pendingTasks array")
        // taskObject.that.pendingTasks = arr.splice(0);
        set(taskObject.that,'pendingTasks',arr);
            // taskObject.that.pendingTasks.removeObject(taskObject.data);
        
        }
    },
    init(){
        this._super(...arguments)
        let that = this
        
        this.get('taskData').on('data-commingPending', function(data) {
            // console.log(data,"init data")
            // console.log("sdfsdfsdf",that.pendingTasks,"this has reached the parent")
            that.actions.removePendingTask({that: that, data: data})
            
            
        })
    },
    didRender(){
        
    }
});
