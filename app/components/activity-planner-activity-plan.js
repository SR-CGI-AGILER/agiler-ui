import Component from '@ember/component';
import {
  computed
} from '@ember/object';
import {inject as service} from '@ember/service'
export default Component.extend({
  session:Ember.inject.service(),
  websockets : service('socket-io'),
  mutiComp: false,
//   projectName: "default",
  session: Ember.inject.service(),
  initiatives: "default",
  io:null,
  showPromptDialog: false,
  init(){
    this._super()
    const io=this.websockets.socketFor(`http://localhost:4000`)
    this.set('io',io)
    io.on('connect',this.openEventHandler,this)
    io.on('message',this.addTaskEventHandler, this)
  },
  openEventHandler(event){
    debugger
  },
  addTaskEventHandler(event){
    console.log(this.get('task'),"get task")
    this.get('task').pushObject(event)
    console.log(this.get('task'),"after pushing obj")
  },
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

    message: '',

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
        let tempObj = {
          initiativeId : this.get('session').initiative.initiativeId,
          text : newTask.text
      }
        // this.get('task').pushObject(newTask);
        // console.log(this.get('task'));
        this.set('projectName','')
        this.set('taskName','');
        this.toggleProperty('showPromptDialog');
        this.io.send(tempObj)
    }
  },
  showMultiComp: computed('mutiComp', function () {
    return this.mutiComp
  })
});
