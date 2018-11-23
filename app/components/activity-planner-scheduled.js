import Component from '@ember/component';

export default Component.extend({
  
      init () {
        this._super(...arguments);
        this.futureTasks.setEach('checked',false)
        // this.futureTasks.map(function (e) {
        //     e.checked = false
        //     return e
        // })
        // console.log(this.futureTasks)
      },
      // didReceiveAttrs() {
      //   this._super(...arguments);
      //   console.log(this.futureTasks, "this is rendered after reciving attrs")
      // //   this.set('futureTasks-altered',this.futureTasks.map(function (e) {
      // //       e.checked = false 
      // //       return e;
      // //   })
      // // )
      // //   console.log(this.futureTasks)
      // this.futureTasks.map(function(e) {
      //   e.checked = true;
      //   return e
      // })
      // },
      willDestroyElement(){
        console.log("COMPONENET DESTROYED")
        console.log(this.get('todayTeamCopy'));
        // this.futureTasks.map(function (e) {
        //   e.checked = false
        //   return e
        // });
        // this.futureTasks.setEach('checked',false);
        // console.log(this.get('futureTasks'));
        this._super(...arguments);
      },
    
      startTime: null,
      endTime: null,
      selectedBands: [],
      // isChecked = true, 
      // selected: false,
      selectedCount: Ember.computed.reads('selectedBands.length'),
      scheduleds: Ember.inject.service('scheduled'),
      actions: {
          
        selectBand(event) {

          console.log('selectBand', this.get('category'));
          this.set('startTime', new Date().getTime())
          if(!event.checked){
            this.selectedTasks.pushObject(event.tasks);
            console.log(this.selectedTasks, "on touch staart ..!!!");
          }
          else{

            this.selectedTasks.removeObject(event.tasks);
            console.log(this.selectedTasks, "removing the object !! on touch start @@@@@@");
          }

       },   
       unselectBand(item) {
            console.log('unselect Band', "on touch end ");
            if((this.startTime + 500) < new Date().getTime()){
                this.set('selectedTasks', []);
                console.log("Long Press condition true")
                if(this.selected) {
                  this.set('selected',false)
                    

                }
                else{
                  this.set('selected', true)
                  console.log(this.selected);

                }
                  

            }
            else{
              console.log('else', "happened on the touch end!!!");
              if(!this.selected){

                console.log('NOT SELECTED', "checkbox not invoked!!");
                this.set('selectedTasks',[]);
              }

            }
            console.log(this.selectedTasks, "end state of the arr on touch end");
       },
       myuserdefined(x) {
           console.log(x, "onChange for the checkbox is triggred")
           x.checked = true;
           return x
        
      },
      showPromptDialogAction(){
        this.toggleProperty('showPromptDialog');
    },
    closePromptDialog(){

        this.toggleProperty('showPromptDialog');
    },
    cancel() {

    },
    ok(){
      console.log(this.getProperties('initiative'),this.getProperties('task'),this.getProperties('projectName'),this.getProperties('scheduled_For'),"jjjjjj")
      let d =new Date((this.getProperties('scheduled_For')).scheduled_For)
      let date =d.getTime()
      console.log(date)
      let newdata = {
        initiative: this.getProperties('initiative').initiative,
        tasks: [{text:(this.getProperties('text')).text,projectName:(this.getProperties('projectName')).projectName,scheduled_For:date}]
    
      };
    
      // newdata.tasks=this.activityPlanTasks;
      console.log(newdata,"published data");
      console.log(this,"what is this?")
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
   
