import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
  session: Ember.inject.service(),
  init() {
   
    this._super(...arguments);
    if(this.futureTasks) {
      this.futureTasks.setEach('checked',false)
    }

    
  },
  
  willDestroyElement() {
    console.log("COMPONENET DESTROYED")
    console.log(this.get('todayTeamCopy'));
   
    this._super(...arguments);
  },

  startTime: null,
  endTime: null,
  selectedBands: [],
  
  selectedCount: Ember.computed.reads('selectedBands.length'),
  scheduleds: Ember.inject.service('scheduled'),
  actions: {

    selectBand(event) {

      console.log('selectBand', this.get('category'), event);
      this.set('startTime', new Date().getTime())
      if (!event.checked) {
        this.selectedTasks.pushObject(event);
        console.log(this.selectedTasks, "on touch staart ..!!!");
      }
      else {

        this.selectedTasks.removeObject(event);
        console.log(this.selectedTasks, "removing the object !! on touch start @@@@@@");
      }

    },
    unselectBand(item) {
      console.log('unselect Band', "on touch end ");
      if ((this.startTime + 500) < new Date().getTime()) {
        this.set('selectedTasks', []);
        console.log("Long Press condition true")
        if (this.selected) {
          this.set('selected', false)


        }
        else {
          this.set('selected', true)
          console.log(this.selected);

        }


      }
      else {
        console.log('else', "happened on the touch end!!!");
        if (!this.selected) {

          console.log('NOT SELECTED', "checkbox not invoked!!");
          this.set('selectedTasks', []);
        }

      }
      console.log(this.selectedTasks, "end state of the arr on touch end");
    },
    myuserdefined(x) {
      console.log(x, "onChange for the checkbox is triggred")
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
    ok() {
      console.log(this.get('scheduledfor'), "what is this?awd")
      console.log(this.getProperties('initiative'), this.getProperties('task'), this.getProperties('projectName'), this.getProperties('scheduled_For'), "jjjjjj")
      let d = new Date((this.getProperties('scheduled_For')).scheduled_For)
      let date = d.getTime()
      console.log(date)
      let newdata = {
        // initiative: this.getProperties('initiative').initiative,
        initiative: this.get('session').initiative.initiativeId,
        tasks: { text: (this.getProperties('text')).text, projectName: (this.getProperties('projectName')).projectName, scheduled_For: date, scheduled_On: new Date().getTime() }

      };

      // newdata.tasks=this.activityPlanTasks;
      console.log(newdata, "published data");
      console.log(this.get('scheduledfor'), "what is this?")
      this.scheduleds.postScheduled(newdata);
      // let createProject = {
      // projectName : newdata.projectName.projectName,
      // assignTo: [{teamId:this.get('teamId')}]
      // }

      // this.store.createRecord('project', createProject).save().then(data => {

      //     this.get('model').projects.pushObject(data)
      // })
      this.get('scheduledfor').pushObject(newdata);
      this.toggleProperty('showPromptDialog');


    }

  }
});

