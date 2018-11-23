import Component from '@ember/component';
import {
  computed
} from '@ember/object';

export default Component.extend({
  mutiComp: false,
//   projectName: "default",
  initiatives: "default",
  task: [],
  showPromptDialog: false,
  actions: {
    publish() {
      this.publish(this.get('task'));
    },
    newTask() {
      this.set('showPromptDialog', true);
    },
    closePromptDialog() {
      this.toggleProperty('showPromptDialog');
      this.set('projectName','');
        this.set('taskName','');
    },
    cancel() {
        this.toggleProperty('showPromptDialog');
        this.set('projectName','');
        this.set('taskName','');
    },
    ok() {
        let newTask={
            text: this.get('taskName'),
            projectName: this.get('projectName'),
            due_date: "2018-11-27",
            owner: "Swarnim",
            status: "Standup"
        }
        this.get('task').pushObject(newTask);
        console.log(this.get('task'));
        this.set('projectName','');
        this.set('taskName','');
        this.toggleProperty('showPromptDialog');
    }
  },
  showMultiComp: computed('mutiComp', function () {
    return this.mutiComp
  })
});
