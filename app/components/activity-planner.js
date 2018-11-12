import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  selectedTasks: [],
  latestActivityPlan: [...getTestTasks()],
  latestTeamCopy: [...getTestTasks()],
    tabIndex: 0,
    tabSubheading: 'Updates',
    currentTab: '', 
    actions: {
        handleTabIndexChanged(newTabIndex) {
            console.log('Tab Index Changed!',newTabIndex);
            this.set('tabIndex', newTabIndex);
            if(newTabIndex === 1){
            this.set('currentTab','schedule')
            this.set('tabSubheading','schedule')
            }
            if(newTabIndex  === 2) {
              this.set('currentTab', 'backlogs');
              this.set('tabSubheading', 'Backlogs');
              console.log(this.latestActivityPlan);
            }
            else if(newTabIndex === 0) {
              this.set('currentTab', 'updates');
              this.set('tabSubheading', 'Updates');
            }
        },
        handleTabSubheadingChanged(newTabSubheading) {
            this.set('tabSubheading', newTabSubheading);
        }
    },
    showScheduleTab: computed('currentTab', function() {
      return this.currentTab === 'schedule'
  }),

    showBacklogsView: computed('currentTab', function (){
      return this.currentTab === 'backlogs'
    }),
    selectedTasks: [],
    latestActivityPlan: [...getTestTasks()],
    latestTeamCopy: [...getTestTasks()]
});

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
        },
        {
          "_id": "5be92db5c815958a178da1e3",
          "text": "Id ad cillum voluptate incididunt officia dolore eiusmod anim.",
          "projectName": "Project C",
          "dueDate": "date(new Date(), new Date(2018, 12, 12))",
          "owner": "Powell Singleton",
          "scheduled": "date(new Date(), new Date(2018, 12, 12))"
        },
        {
          "_id": "5be92db5789e1f98a1e3a870",
          "text": "Exercitation sint ex esse nostrud.",
          "projectName": "Project B",
          "dueDate": "date(new Date(), new Date(2018, 12, 12))",
          "owner": "Andrea Kirk",
          "scheduled": "date(new Date(), new Date(2018, 12, 12))"
        },
        {
          "_id": "5be92db522310d4b26daec22",
          "text": "Incididunt reprehenderit fugiat mollit ullamco magna exercitation.",
          "projectName": "Project B",
          "dueDate": "date(new Date(), new Date(2018, 12, 12))",
          "owner": "Blevins Logan",
          "scheduled": "date(new Date(), new Date(2018, 12, 12))"
        },
        {
          "_id": "5be92db558f5fb621e0271fd",
          "text": "Lorem sint ea pariatur sint qui ipsum mollit ipsum nostrud laboris proident in irure.",
          "projectName": "Project C",
          "dueDate": "date(new Date(), new Date(2018, 12, 12))",
          "owner": "Mays Vang",
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