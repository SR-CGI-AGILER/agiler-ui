import Component from '@ember/component';
import Ember from 'ember';
import { set } from '@ember/object';

export default Component.extend({
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

      this.scheduleds.postScheduled(newdata);
      this.get('scheduledfor').pushObject(newdata);
      this.toggleProperty('showPromptDialog');


    }

  }
});

