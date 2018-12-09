import Component from '@ember/component';
import ENV from '../config/environment'
import Ember from 'ember';
import {  computed } from '@ember/object';
import {inject as service} from '@ember/service'

export default Component.extend({
  
  session:Ember.inject.service(),
  teamCopy: Ember.inject.service(),
  websockets : service('socket-io'),
  mutiComp: false,
  session: Ember.inject.service(),
  initiatives: "default",
  io:null,
  showButton: true,
  showPromptDialog: false,


  async init(){
    this._super()
    let that=this;
    var d = new Date();
    var day = ("0" + d.getDate()).slice(-2);
    var month = ("0" + (d.getMonth()+ 1)).slice(-2);
    var today = d.getFullYear() + "-" + (month) + "-" + (day);
    await this.teamCopy.getTeamCopy(today,this.get('session').initiative.initiativeId).then(function(data){
      if(data.payload.data === "NO DATA FOUND"){
          that.set('showButton',true)
      }
      else{
          that.set('showButton',false)
      }
    }); 
    const io=this.websockets.socketFor(`http://${ENV.serverhost}`)
    this.set('io',io)
    io.on('connect',this.openEventHandler,this)
    io.on('message',this.addTaskEventHandler, this)
  },
  openEventHandler(event){
    
  },
  addTaskEventHandler(event){
    
    this.get('task').pushObject(event)
    this.set('event',{});
  },
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
    closeToastWithout(){

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
            owner: this.get('session').currentUser.name,
            status: "Standup"
        }
        let tempObj = {
          initiativeId : this.get('session').initiative.initiativeId,
          text : newTask.text
      }
      
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
