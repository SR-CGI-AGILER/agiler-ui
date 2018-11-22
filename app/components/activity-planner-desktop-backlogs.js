import Component from '@ember/component';
import Ember from 'ember'
import { get } from '@ember/object';
import { set } from '@ember/object';


export default Component.extend({
    taskData: Ember.inject.service(),
    // backlogTasks:['Task 1','Task 2', 'Task 3'],
    // removeTask: "this is check string",
    actions : {
        removeBacklogTask (taskObject) {
            
            debugger
            console.log(taskObject.that.backlogTasks, "is this getting triggered backlogTasks ??")
        let arr = taskObject.that.backlogTasks.filter(task=> task._id !== taskObject.data._id);
        let arr1 = taskObject.that.backlogTasks.filter(task=> task._id === taskObject.data._id);

        console.log(arr1,"backlog tasks array")
        // taskObject.that.backlogTasks = arr.splice(0);
        set(taskObject.that,'backlogTasks',arr);
            // taskObject.that.backlogTasks.removeObject(taskObject.data);
        
        }
    },
    init(){
        this._super(...arguments)
        let that = this
        
        this.get('taskData').on('data-commingBacklogs', function(data) {
            // console.log(data,"init data")
            // console.log("sdfsdfsdf",that.backlogTasks,"this has reached the parent")
            that.actions.removeBacklogTask({that: that, data: data})
            
            
        })
    },
    didRender(){
        
    }
});
