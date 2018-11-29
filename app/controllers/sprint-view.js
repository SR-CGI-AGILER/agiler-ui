import Controller from '@ember/controller';
import { set } from '@ember/object';
import {
  computed
} from '@ember/object';

export default Controller.extend({
  teamCopy: Ember.inject.service(),
  isCompleted: false,
  isPending: false,
  yes: true,
  isMobileSprint: computed('yes', function () {
    let x = window.screen.availWidth;
    // console.log(window.screen.availWidth);
    if (x < 760) {
      return false
    } else {
      return true
    }
  }),

  actions: {
    markComplete(task) {
      let data1 = {
        taskId: task._id,
        action: "Completed"
      }
      let data = {
        createdAt: '2018-10-21',
        arr: []
      }
      data.arr.push(data1);
      console.log(data, "data in action");
   
      this.teamCopy.updateTeamCopy(data).then(function (data) {})
    //   console.log(this.get('model').payload.data.tasks,"CONTROLLER");
      this.get('model').payload.data.tasks.map(e => {
        if(e._id === task._id){
            console.log(e);
            set(e,'isComplete',true);
            set(e,'isPending',false);
            set(e,'isNew',false);
            return e
        }
        else {
            return e
        }
      });
    //   console.log(this.isCompleted, this.isNew, this.isPending, "markComplete");
    },

    markNew(task) {
      let data = {
        createdAt: '2018-10-21',
        taskId: task._id,
        action: "New"
      }
      this.set('isNew', 'true');
      this.set('isPending', 'false');
      this.set('isCompleted', 'false');
      console.log(this.isNew, "isNew");
      this.teamCopy.updateTeamCopy(data).then(function (data) {
        console.log(data);

        // console.log(this.isNew,"isNew");

      })
    //   console.log(this.isCompleted, this.isNew, this.isPending, "markNew");
    },

    markPending(task) {
      let data1 = {
        taskId: task._id,
        action: "Pending"
      }
      let data = {
        createdAt: '2018-10-21',
        arr: []
      }
      data.arr.push(data1);
     
      this.teamCopy.updateTeamCopy(data).then(function (data) {
        console.log(data);

      })
      this.get('model').payload.data.tasks.map(e => {
        if(e._id === task._id){
            console.log(e);
            set(e,'isPending',true);
            set(e,'isComplete',false);
            set(e,'isNew',false);
            return e
        }
        else {
            return e
        }
      });
      
    //   console.log(this.isCompleted, this.isNew, this.isPending, "markPending");
    }
  }
});
