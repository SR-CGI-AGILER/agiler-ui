import Component from '@ember/component';
import {
  computed
} from '@ember/object';

export default Component.extend({
  mutiComp: false,
//   projectName: "default",
  // initiatives: "default",
  session: Ember.inject.service(),
  showPromptDialog: false,
  actions: {
    publish() {
      console.log(this.get('task'));
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
      let that = this
      var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + (month) + "-" + (day);
        let newTask={
            text: this.get('taskName'),
            projectName: this.get('projectName'),
            due_date: today,
            owner: that.get('session').currentUser.name,
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
