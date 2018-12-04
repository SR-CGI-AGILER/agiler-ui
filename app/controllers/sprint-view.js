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
teamCopyTasks:[],
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
        due_date: today,
        owner: that.get('session').currentUser.name,
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
  // add() {
  //   if (this.getProperties('input').input) {
  //     let a = this.getProperties('input').input;
  //   }
  // },
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
    let that =  this;
    var now = new Date();
 
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + (month) + "-" + (day);
    let data = {
      createdAt: today,
      initiativeId: that.get('session').initiative.initiativeId,
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

    
  markPending(task) {
    let data1 = {
      taskId: task._id,
      action: "Pending"
    }
    let that =  this;
    var now = new Date();
 
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + (month) + "-" + (day);
    let data = {
      createdAt: today,
      initiativeId: that.get('session').initiative.initiativeId,
      arr: []
    }
    data.arr.push(data1);


    this.teamCopy.updateTeamCopy(data).then(function (data) {})

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
  
  },
  add1(){
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + (month) + "-" + (day);
    let that = this;
    if(this.getProperties){
// let s = this.getProperties('input').input;
let f = this.getProperties('input').input;
let s = f.trim();
console.log(f,"f",s,"s");
let taskName = s.split('#');
console.log(taskName,"taskName");
// if(taskName.length===2){
  let data = {
    createdAt: today,
    initiativeId: that.get('session').initiative.initiativeId,
    task: {
      text: taskName[0],
      projectName: taskName[1],
      due_date: today,
      owner: that.get('session').currentUser.name,
      status: "New"
    }
  };
  console.log(data,"Sprint view desktop data it is")
  this.teamCopy.addToTeamCopy(data);
// }

  this.get('model').payload.data.tasks.pushObject(data.task);
  let l = this.get('model').payload.data.tasks.length;
  set(this.get('model').payload.data.tasks[l - 1], 'isNew', true);
  }
  // this.set('input','');
  this.set('input',' ')
            

  }
},


add2(){
  var now = new Date();
  var day = ("0" + now.getDate()).slice(-2);
  var month = ("0" + (now.getMonth() + 1)).slice(-2);
  var today = now.getFullYear() + "-" + (month) + "-" + (day);
  let that = this;
  if(this.getProperties){
let f = this.getProperties('input').input;
let s = f.trim();
let taskName = s.split('#');
console.log(taskName,"taskName");
// if(taskName.length===2){
let data = {
  createdAt: today,
  initiativeId: that.get('session').initiative.initiativeId,
  task: {
    text: taskName[0],
    projectName: taskName[1],
    due_date: today,
    owner: that.get('session').currentUser.name,
    status: "New"
  }
};
console.log(data,"Sprint view desktop data it is")
this.teamCopy.addToTeamCopy(data);
// }

this.get('model').payload.data.tasks.pushObject(data.task);
let l = this.get('model').payload.data.tasks.length;
set(this.get('model').payload.data.tasks[l - 1], 'isNew', true);
}
debugger
console.log(this.get('input'),"before clear")
this.set('input',' ')
console.log(this.get('input'),"after clear")

},

keyDown(event) {
  // debugger
  // let self = this;
  let a = this.getProperties('input');
  let c =a.input;
  // console.log(c,"c")
  if (event.keyCode === 13) {
      console.log(a,"keystroke");
      let b = {
          tasks:{
              text:c
          }
      }
      console.log(b,"b")
      // self.send('submitform');
      // let data = event.dataTransfer.setData('some_Object', JSON.stringify(this.content));
      // Ember.run.debounce(self,self.get('add1'),400);
      this.add2();
      debugger
      console.log(this.get('input'),"keydown")
      this.set('input',' ')
      return false;
  }
  else if(event.keyCode === 9) {
      console.log("tab key press");
      
  }
}
//   add() {
//     if (this.getProperties('input').input) {
//         let s = this.getProperties('input').input;
//         // let taskName = s.split('#');
//         // console.log(taskName,"taskName");
//         //   let word = s.split(' ');
//         //   console.log(word,"array of space seperated strings");
//         //   word.map(function(e){
//             //       if(e.charAt(0)=== "@"){
                
//                 //       }
//                 //   })
//                 console.log(this,"this1")
//                 let multi = s.split('+');
//                 console.log(multi,"multi")
//                if(multi.length>=0){
//                    let that = this;
//                    console.log(that,"that3")
//                     multi.map(function(e){
//                         let taskName = e.split('#');
                        
//                         console.log(taskName,"taskName");
//                         let taskName1 = e.split('@');
//                         console.log(taskName1,"taskName1");
//                         if(taskName.length>1){
//                             let l = taskName[1].substring(0);
//                             let q = l.toUpperCase();
//                             console.log(q,"q");
//                             let x = q.trim();
//                             console.log(x,"x")
//                             if(x==="BACKLOGS"){
//                                 let newTask = {
                                    
//                                         // text:this.getProperties('input').input,
//                                         text: taskName[0]
             
//                                 }
//                                 console.log(this,"this Backlogs in activity plan js file");
//                                 that.teamCopyTasks.pushObject(newTask);
//                             }
//                             else if(x==="NEW"){
                                
//                                 let z = {
//                                     text: taskName[0],
//                                     status: x
//                                 };
//                                 console.log(z,"new task z")
//                                 // y.tasks.pushObject(z);
//                                 that.teamCopyTasks.pushObject(z);
//                                 console.log(that.teamCopyTasks,"that.teamCopyTasks")
//                             }
//                             else if(x==="PENDING"){
//                                 let newTask = {
//                             text: taskName[0],
//                             status: x
//                     }
//                     that.teamCopyTasks.pushObject(newTask);
//                 }
                
//                 else {
//                     let now = new Date();
//                     let day = ("0" + now.getDate()).slice(-2);
// let month = ("0" + (now.getMonth() + 1)).slice(-2);
// let today = now.getFullYear() + "-" + (month) + "-" + (day);
//                     let data = {
//                         text : taskName[0],
//                         owner : taskName[1] || that.get('session').currentUser.name,
//                         due_date: today,
//                         status:"New"
//                     };
//                     // newTask.tasks.pushObject(data);
//                     that.teamCopyTasks.pushObject(data);
//                     console.log(that.teamCopyTasks,"ASDF")
//                 }
//               }  
//                   else
//                 {
//                     let now = new Date();
// let day = ("0" + now.getDate()).slice(-2);
// let month = ("0" + (now.getMonth() + 1)).slice(-2);
// let today = now.getFullYear() + "-" + (month) + "-" + (day);
//                   let newTask = {
                      
//                         // text:this.getProperties('input').input,
//                         text: taskName[0],
//                         owner: taskName[1] || that.get('session').currentUser.name,
//                         due_date: today,
//                         status: "New"
//                     }
//                     console.log(newTask,"ASD")
//                   that.teamCopyTasks.pushObject(newTask);
//                 }
//                     })
//                } 
//       }
//       var now = new Date();
//       var day = ("0" + now.getDate()).slice(-2);
//       var month = ("0" + (now.getMonth() + 1)).slice(-2);
//       var today = now.getFullYear() + "-" + (month) + "-" + (day);
//       let that = this;
//       let data = {
//         createdAt: today,
//         initiativeId: that.get('session').initiative.initiativeId,
//         task: that.teamCopyTasks
//       }
//       this.teamCopy.addToTeamCopy(data);
//       this.get('model').payload.data.tasks.pushObject(data.task);
//       let l = this.get('model').payload.data.tasks.length;
//       set(this.get('model').payload.data.tasks[l - 1], 'isNew', true);
//       this.set('input','');
//     }     
  
// }
});



