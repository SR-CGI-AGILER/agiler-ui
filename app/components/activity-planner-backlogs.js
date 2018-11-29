import Component from '@ember/component';
import { computed } from '@ember/object';


export default Component.extend({
    // mutiComp: false,

    init(){
        this._super(...arguments);
        console.log(this.backlogs,"ahs");

        if(this.backlogs) {

            this.backlogs.forEach(element => {
                element.tasks.forEach(tasks => {
                    this.get('backlogProjects').pushObject(tasks.projectName);
                })
                
            })
            let allProjects = this.get('backlogProjects').filter((v,i)=>this.get('backlogProjects').indexOf(v) === i);
            // console.log(x);
            this.set('backlogProjects',allProjects);
        }
    },

  

      willDestroyElement(){
        console.log("COMPONENET DESTROYED")
        console.log(this.get('todayTeamCopy'));
       
        this._super(...arguments);
      },
    
      startTime: null,
      endTime: null,
      selectedBands: [],
      // isChecked = true, 
      // selected: false,
      selectedCount: Ember.computed.reads('selectedBands.length'),
      scheduleds: Ember.inject.service('scheduled'),
    currentView: 'Projects',
    projectBacklogTasks: [],
    projects: new Set(),
    backlogProjects: [],
    backlog: Ember.inject.service('product-backlogs'),
    actions: {
        selectBand(event) {

            console.log('selectBand', this.get('category'),event);
            this.set('startTime', new Date().getTime())
            if(!event.checked){
              this.selectedTasks.pushObject(event);
              console.log(this.selectedTasks, "on touch staart ..!!!");
            }
            else{
  
              this.selectedTasks.removeObject(event);
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
        selectTask(category){
            // this.toggleProperty('mutiComp', true);
            this.set('currentView','Backlog');
            // this.selectTask(category.text);
            this.set('projectBacklogTasks',this.backlogTasks.filter(task => task.projectName===category));
        },
        showProjects() {
            this.set('currentView', 'Projects');
        },
        showDialogToAdd(){
            this.toggleProperty('showDialog');
        },
        closeDialog() {
            this.toggleProperty('showDialog');
        },
        add(){
            let project = this.get('projectName')
            // let task = this.get('taskName')
            console.log(project)
            let newData = {
                initiative: "I2",
                tasks : [
                    {
                        text: this.get('taskName'),
                        projectName: this.get('projectName'),
                        due_date:"2018-11-30",
                        owner:"Owner",
                        status:"Status"
                    }
                ]
            }
            this.backlog.postBacklog(newData)            
            console.log(this.backlogTasks,"backlogtasksfromparent")
            this.backlogTasks.pushObject({
                text: this.get('taskName'),
                projectName: this.get('projectName'),
                due_date:"2018-11-30",
                owner:"Owner",
                status:"Status"
            })
            if(this.get('backlogProjects').indexOf(project) === -1) {
                this.get('backlogProjects').pushObject(project);
            }
            console.log(this.backlogTasks,"computed property in child.js")
            this.toggleProperty('showDialog')


        }
    },
    showProjectsView: computed('currentView', function() {
        return this.currentView === 'Projects'
    }),
    showBacklogTasksView: computed('currentView', function() {
        return this.currentView === 'Backlog'
    }),
    // backlogProjects: computed('backlogs', function () {
    
    //     this.backlogs.forEach(element => {
    //       element.tasks.forEach(task=>{
    //         this.get('projects').add(task.projectName);
    //       })
    //     });
    //     return this.projects;
    
    //     // let temp = this.activityPlan.filter(backlogTasks => backlogTasks.tasks.backlog===true);
    
    //   }),
    
    
      backlogTasks: computed('backlogs', function () {
        let btasks = [];
        this.backlogs.forEach(element => {
          console.log(element.tasks, "hhgugh");
          element.tasks.forEach(task=>{
            btasks.pushObject(task);  
          });
        })
        console.log(btasks,"I AM BTASKS");
        // let temp = this.activityPlan.filter((backlogTasks => backlogTasks.tasks.backlog===true) && (backlogTasks.tasks.);
        // return this.activityPlan.filter(task => task.backlog);
        return btasks;
      })

});
