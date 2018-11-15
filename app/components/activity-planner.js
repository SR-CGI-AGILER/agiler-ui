import Component from '@ember/component';
import { computed } from '@ember/object';
// import { Ember } from 'ember';

export default Component.extend({
  
  selectedTasks: [],
  projects: new Set(),
  latestActivityPlan: [...getTestTasks()],
  latestTeamCopy: [...getTestTasks()],  
  tabIndex: 0,
  tabSubheading: '(1/4) Updates',
  currentTab: 'updates',

  actions: {
    handleTabIndexC(newTabIndex){
      
      this.set('tabIndex', newTabIndex+1);
        if(this.tabIndex === 1){
          this.set('currentTab','schedule')
          this.set('tabSubheading',`(${this.tabIndex+1}/4) Scheduled`)
        }
        if(this.tabIndex  === 2) {
          this.set('currentTab', 'backlogs');
          this.set('tabSubheading', `(${this.tabIndex+1}/4) Product Backlogs`);
          // this.set('tabSubheading', '(' + (parseInt(newTabIndex)+1) + '/4) Product Backlogs');

        }
        if(this.tabIndex === 3){
          this.set('currentTab','ActivityPlan');
          this.set('tabSubheading',`(${this.tabIndex+1}/4) Activity Plan`);
          
        }
        
        else if(this.tabIndex === 0) {
          this.set('currentTab', 'updates');
          this.set('tabSubheading', `(${this.tabIndex+1}/4) Updates`);
        }
    },

    handleTabIndexB(newTabIndex){
      this.set('tabIndex', newTabIndex-1);
      
        
        if(this.tabIndex === 1){
          this.set('currentTab','schedule')
          this.set('tabSubheading',`(${this.tabIndex+1}/4) Scheduled`)
        }
        if(this.tabIndex  === 2) {
          this.set('currentTab', 'backlogs');
          this.set('tabSubheading', `(${this.tabIndex+1}/4) Product Backlogs`);
          // this.set('tabSubheading', '(' + (parseInt(newTabIndex)+1) + '/4) Product Backlogs');

        }
        if(this.tabIndex === 3){
          this.set('currentTab','ActivityPlan');
          this.set('tabSubheading',`(${this.tabIndex+1}/4) Activity Plan`);
          
        }
        
        else if(this.tabIndex === 0) {
          this.set('currentTab', 'updates');
          this.set('tabSubheading', `(${this.tabIndex+1}/4) Updates`);
        }
        
    },
    
      handleTabIndexChanged(newTabIndex) {
        // debugger
        // console.log(newTabIndex, "HERE");
        this.set('tabIndex', newTabIndex);
        
        if(newTabIndex === 1){
          this.set('currentTab','schedule')
          this.set('tabSubheading',`(${newTabIndex+1}/4) Scheduled`)
        }
        if(newTabIndex  === 2) {
          this.set('currentTab', 'backlogs');
          this.set('tabSubheading', `(${newTabIndex+1}/4) Product Backlogs`);
          // this.set('tabSubheading', '(' + (parseInt(newTabIndex)+1) + '/4) Product Backlogs');

        }
        if(newTabIndex === 3){
          this.set('currentTab','ActivityPlan');
          this.set('tabSubheading',`(${newTabIndex+1}/4) ActivityPlan`);
          
        }
        
        else if(newTabIndex === 0) {
          this.set('currentTab', 'updates');
          this.set('tabSubheading', `(${newTabIndex+1}/4) Updates`);
        }
      },
      handleTabSubheadingChanged(newTabSubheading) {
        this.set('tabSubheading', newTabSubheading);
      },
      saveToDb(){
        // Ember.$.ajax({
        //   type: 'POST',
        //   url: `http://localhost:3000/api/v1/tasks`,
        //   contentType: "application/json",
        //   data: JSON.stringify(this.latestActivityPlan)
        // })
      },
      selectTask(task) {
        this.get('selectedTasks').pushObject(task);
        alert(this.get('selectedTasks').length + " tasks selected")
        console.log(this.get('selectedTasks'));
      },
      horizontalSlide(){
        debugger
      }
    },
    showActivityPlanTab: computed('currentTab', function(){
      return this.currentTab === 'ActivityPlan';
    }),

    cancelledTasks: computed('activityPlan', function(){
      // console.log(this.activityPlan);
      return this.activityPlan.filter(activityPlan => activityPlan.tasks.status==="Cancelled");
    }),
    
    newTasks: computed('activityPlan', function(){
      console.log(this.activityPlan);
      return this.activityPlan.filter(task =>task.tasks.status === "New");
    }),

   
    showScheduleTab: computed('currentTab', function() {
      return this.currentTab === 'schedule'
    }),

    showBacklogsView: computed('currentTab', function (){
      return this.currentTab === 'backlogs'
    }),

    showUpdatesView: computed('currentTab', function() {
      return this.currentTab === 'updates'
    }),

    completedTasks: computed('activityPlan', function () {
      return this.activityPlan.filter(task => task.tasks.status === "Completed")
    }),

    backlogProjects: computed('activityPlan', function() {
      this.activityPlan.forEach(element => {
        this.projects.add(element.tasks.projectName)
        
      });
      console.log(this.get('projects'));
      return this.projects;
      
    // let temp = this.activityPlan.filter(backlogTasks => backlogTasks.tasks.backlog===true);
    
    }),

    backlogTasks: computed('activityPlan', function() {
    // let temp = this.activityPlan.filter((backlogTasks => backlogTasks.tasks.backlog===true) && (backlogTasks.tasks.);
      return this.activityPlan.filter(task=>task.tasks.backlog);
    })
  
});
function getTestProjects() {
  return [
    {
      "projectName": "Project D"
      ,"tasks": [
        {
        "text": "Eiusmod nulla dolore voluptate consequat ut cillum laborum aliquip officia ea sunt proident."
        },
        {
        "text": "Eiusmod excepteur exercitation quis laborum ea aliquip."
        },
        {
        "text": "Dolor culpa reprehenderit ea quis consectetur fugiat."
        }
      ],
    },
   { "projectName": "Project A",
      "tasks":[
        {
          "text": "Tempor ad minim et eiusmod velit."
        },
        {
          "text": "Amet aliquip consequat reprehenderit sit ea ea ea elit nulla proident adipisicing irure laboris officia."
        }
      ]
  }
  ]
 }
function getTestTasks() {
    return [
        {
          "_id": "5be92db58610e2792a6cdf86",
          "text": "Eiusmod nulla dolore voluptate consequat ut cillum laborum aliquip officia ea sunt proident.",
          "projectName": "Project D",
          "dueDate": "date(new Date(), new Date(2018, 12, 12))",
          "owner": "Nixon Beach",
          "scheduled": "date(new Date(), new Date(2018, 12, 12))"
        },
        {
          "_id": "5be92db5ccd82283e84f8e8b",
          "text": "Tempor ad minim et eiusmod velit.",
          "projectName": "Project A",
          "dueDate": "date(new Date(), new Date(2018, 12, 12))",
          "owner": "Renee Peters",
          "scheduled": "date(new Date(), new Date(2018, 12, 12))"
        },
        {
          "_id": "5be92db587aed30896c058a6",
          "text": "Amet aliquip consequat reprehenderit sit ea ea ea elit nulla proident adipisicing irure laboris officia.",
          "projectName": "Project A",
          "dueDate": "date(new Date(), new Date(2018, 12, 12))",
          "owner": "Dorothy Romero",
          "scheduled": "date(new Date(), new Date(2018, 12, 12))"
        },
        {
          "_id": "5be92db539ae6155028f7df2",
          "text": "Dolor adipisicing occaecat aute dolor culpa cupidatat dolore id.",
          "projectName": "Project B",
          "dueDate": "date(new Date(), new Date(2018, 12, 12))",
          "owner": "Geneva Washington",
          "scheduled": "date(new Date(), new Date(2018, 12, 12))"
        },
        {
          "_id": "5be92db50f1a6441005059cb",
          "text": "Eiusmod excepteur exercitation quis laborum ea aliquip.",
          "projectName": "Project D",
          "dueDate": "date(new Date(), new Date(2018, 12, 12))",
          "owner": "Ratliff Montgomery",
          "scheduled": "date(new Date(), new Date(2018, 12, 12))"
        },
        {
          "_id": "5be92db596f8d2ba46281be4",
          "text": "Dolor culpa reprehenderit ea quis consectetur fugiat.",
          "projectName": "Project D",
          "dueDate": "date(new Date(), new Date(2018, 12, 12))",
          "owner": "Robyn Livingston",
          "scheduled": "date(new Date(), new Date(2018, 12, 12))"
        }
    ];
}

/*

[
  '{{repeat(10, 15)}}',
  {
    _id: '{{objectId()}}',
    text: '{{lorem(1, "sentence")}}',
    projectName: '{{random("Project A", "Project B", "Project C", "Project D")}}',
    dueDate: 'date(new Date(), new Date(2018, 12, 12))',
    owner: '{{firstName()}} {{surname()}}',
    scheduled: 'date(new Date(), new Date(2018, 12, 12))',
    status: '{{random("Completed", "Cancelled")}}'
  }
]

*/