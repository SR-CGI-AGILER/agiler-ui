import Component from '@ember/component';
import Ember from 'ember';
import { set } from '@ember/object';

export default Component.extend({
  scheduled_For_Render: [],
  session: Ember.inject.service(),
  init() {
   
    this._super(...arguments);
    if(this.futureTasks) {
      this.futureTasks.setEach('checked',false)
    }
  },
  
  willDestroyElement() {
   
    this._super(...arguments);
  },

  startTime: null,
  endTime: null,
  selectedBands: [],
  
  selectedCount: Ember.computed.reads('selectedBands.length'),
  scheduleds: Ember.inject.service('scheduled'),
  actions: {

    selectBand(event) {

      this.set('startTime', new Date().getTime())
      if (!event.checked) {
        this.selectedTasks.pushObject(event);
      }
      else {

        this.selectedTasks.removeObject(event);
      }

    },
    unselectBand(item) {
      if ((this.startTime + 500) < new Date().getTime()) {
        this.set('selectedTasks', []);
        if (this.selected) {
          this.set('selected', false)


        }
        else {
          this.set('selected', true)

        }


      }
      else {
        if (!this.selected) {

          this.set('selectedTasks', []);
        }

      }
    },
    myuserdefined(x) {
      x.checked = true;
      return x

    },
    showPromptDialogAction() {
      this.toggleProperty('showPromptDialog');
    },
    closePromptDialog() {

      this.toggleProperty('showPromptDialog');
    },
    cancel() {

    },
     reschedule(){
      let taskArray = [];
      let that =  this;
      let d =new Date((this.getProperties('scheduled_For1')).scheduled_For1)
      let date = d.getTime()
      this.get('selectedTasks').map(function (e) {
        let data = {
          taskId: e._id,
          scheduled_For: date,
        };
        taskArray.pushObject(data);
      })
      let data = {
        initiativeId: that.get('session').initiative.initiativeId,
        arr: []
      };
      data.arr = taskArray;
      this.scheduleds.patchScheduled(data);
  },
    ok() {
      let d = new Date((this.getProperties('scheduled_For')).scheduled_For)
      let date = d.getTime()
      let newdata = {
        initiative: this.get('session').initiative.initiativeId,
        tasks: { text: (this.getProperties('text')).text, projectName: (this.getProperties('projectName')).projectName, scheduled_For: date }

      };
      var d1 = d
      var day = ("0" + d1.getDate()).slice(-2);
      var month = ("0" + (d1.getMonth()+ 1)).slice(-2);
      var act_Date = d1.getFullYear() + "-" + (month) + "-" + (day);
      this.scheduleds.postScheduled(newdata);
      let render_object = {
        projectName: this.getProperties('projectName').projectName,
        scheduled_For: act_Date,
        text: this.getProperties('text').text
      }
      this.get('scheduled').pushObject(render_object);
      this.get('scheduledfor').pushObject(render_object);
      this.toggleProperty('showPromptDialog');
    }

  }
});

