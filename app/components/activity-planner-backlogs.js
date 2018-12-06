import Component from '@ember/component';
import { computed } from '@ember/object';


export default Component.extend({
    session: Ember.inject.service(),
    
    init(){
        this._super(...arguments);
        if(this.backlogs) {
            this.backlogs.tasks.forEach(element => {                  
                    this.get('backlogProjects').pushObject(element.projectName);
            })
            let allProjects = this.get('backlogProjects').filter((v,i)=>this.get('backlogProjects').indexOf(v) === i);
            this.set('backlogProjects',allProjects);
        }
    },
   
      willDestroyElement(){
       
        this._super(...arguments);
      },
    
      startTime: null,
      endTime: null,
      selectedBands: [],
      selectedCount: Ember.computed.reads('selectedBands.length'),
      scheduleds: Ember.inject.service('scheduled'),
    currentView: 'Projects',
    projectBacklogTasks: [],
    projects: new Set(),
    backlogProjects: [],
    backlog: Ember.inject.service('product-backlogs'),
    actions: {
        selectBand(event) {

            this.set('startTime', new Date().getTime())
            if(!event.checked){
              this.selectedTasks.pushObject(event);
            }
            else{
      
              this.selectedTasks.removeObject(event);
            }
      
         },   
         unselectBand(item) {
              if((this.startTime + 500) < new Date().getTime()){
                  this.set('selectedTasks', []);
                  if(this.selected) {
                    this.set('selected',false)
                      
      
  
                  }
                  else{
                    this.set('selected', true)
  
                  }
                    
  
              }
              else{
                if(!this.selected){
      
                  this.set('selectedTasks',[]);
                }
      
              }
         },
         myuserdefined(x) {
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
            let newData = {
                initiativeName: this.get('session').initiative.initiativeName,
                tasks : [
                    {
                        text: this.get('taskName'),
                        projectName: this.get('projectName'),
                        due_date:"",
                        owner:this.get('session').currentUser.email,
                        status:"Backlog"
                    }
                ]
            }
            this.backlog.postBacklog(newData)            
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
          element.tasks.forEach(task=>{
            btasks.pushObject(task);  
          });
        })

        return btasks;
      })

});







 