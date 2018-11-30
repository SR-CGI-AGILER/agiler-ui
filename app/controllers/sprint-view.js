import Controller from '@ember/controller';
import {
  set
} from '@ember/object';
import {
  computed
} from '@ember/object';
import Ember from 'ember';

export default Controller.extend({
teamCopy: Ember.inject.service(),
session: Ember.inject.service(),
startTime: null,
endTime: null,
showPromptDialog: false,
selectedTasks: [],
showSprintViewAction: false,
selected: false,
selectedBands: [],
selectedCount: computed.reads('selectedBands.length'),
isCompleted: false,
isPending: false,
yes: true,
isDesktopSprint: computed('yes', function () {
  let x = window.screen.availWidth;
  if (x < 760) {
    return false
  } else {
    return true
  }
}),

actions: {
  newTask() {
    this.set('showPromptDialog', true);
  },
  closePromptDialog() {
    this.toggleProperty('showPromptDialog');
    this.set('projectName', '');
    this.set('taskName', '');
  },
  cancel() {
    this.toggleProperty('showPromptDialog');
    this.set('projectName', '');
    this.set('taskName', '');
  },
  ok() {
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + (month) + "-" + (day);
    let that = this;
    let data = {
      createdAt: today,
      initiativeId: that.get('session').initiative.initiativeId,
      task: {
        text: this.get('taskName'),
        projectName: this.get('projectName'),
        status: "New"
      }
    };

    this.teamCopy.addToTeamCopy(data);
    this.get('model').payload.data.tasks.pushObject(data.task);
    let l = this.get('model').payload.data.tasks.length;
    set(this.get('model').payload.data.tasks[l - 1], 'isNew', true);
    //   set(this.get('model').payload.data.tasks[l-1],'isPending', false);
    //   set(this.get('model').payload.data.tasks[l-1],'isComplete', false);
    this.set('projectName', '');
    this.set('taskName', '');
    this.set('showPromptDialog', false);
  },
  add() {
    if (this.getProperties('input').input) {
      let a = this.getProperties('input').input;
    }
  },
  raisedButtonComplete() {
    let taskArray = [];
    let that =  this;
    this.get('selectedTasks').map(function (e) {
      let data = {
        taskId: e._id,
        action: "Completed",
      };
      taskArray.pushObject(data);
    })
    var now = new Date();
 
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + (month) + "-" + (day);

    let data = {
        
      createdAt: today,
      initiativeId: that.get('session').initiative.initiativeId,
      arr: []
    };
    data.arr = taskArray;
    this.teamCopy.updateTeamCopy(data);
    this.get('model').payload.data.tasks.map(e => {
      this.get('selectedTasks').map(f => {
        if (e._id === f._id) {
          set(e, 'isComplete', true);
          set(e, 'isPending', false);
          set(e, 'isNew', false);
          return e
        } else {
          return e
        }
      })
    });
    this.set('selected', false);
  },





  raisedButtonPending() {
    let taskArray = [];
    let that =  this;
    this.get('selectedTasks').map(function (e) {
      let data = {
        taskId: e._id,
        action: "Pending",
      };
      taskArray.pushObject(data);
    })
    var now = new Date();
 
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + (month) + "-" + (day);

    let data = {
        
      createdAt: today,
      initiativeId: that.get('session').initiative.initiativeId,
      arr: []
    };
    data.arr = taskArray;
    this.teamCopy.updateTeamCopy(data);
    this.get('model').payload.data.tasks.map(e => {
      this.get('selectedTasks').map(f => {
        if (e._id === f._id) {
            set(e, 'isPending', true);
            set(e, 'isComplete', false);
          set(e, 'isNew', false);
          return e
        } else {
          return e
        }
      })
    });
    this.set('selected', false);
  },





  selectBand(event) {

    this.set('startTime', new Date().getTime())

    if (!event.checked) {
      this.selectedTasks.pushObject(event);
    } else {

      this.selectedTasks.removeObject(event);
    }

  },
  unselectBand(item) {

    this.set('showSprintViewAction', 'true');

    if ((this.startTime + 500) < new Date().getTime()) {
      this.set('selectedTasks', []);

      if (this.selected) {
        this.set('selected', false)


      } else {
        this.set('selected', true)


      }


    } else {

      if (!this.selected) {


        this.set('selectedTasks', []);
      }

    }

  },
  myuserdefined(x) {

    x.checked = true;
    return x

  },

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


    this.teamCopy.updateTeamCopy(data).then(function (data) {})

    this.get('model').payload.data.tasks.map(e => {
      if (e._id === task._id) {

        set(e, 'isComplete', true);
        set(e, 'isPending', false);
        set(e, 'isNew', false);
        return e
      } else {
        return e
      }
    });
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

    this.teamCopy.updateTeamCopy(data).then(function (data) {

    })

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


    })
    this.get('model').payload.data.tasks.map(e => {
      if (e._id === task._id) {

        set(e, 'isPending', true);
        set(e, 'isComplete', false);
        set(e, 'isNew', false);
        return e
      } else {
        return e

      }
    });
  },
  goToHome() {
    this.transitionToRoute("home")
  
  }
}
});



