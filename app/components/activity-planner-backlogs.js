import Component from '@ember/component';
import { computed } from '@ember/object';


export default Component.extend({
    // mutiComp: false,
    currentView: 'Projects',
    projectBacklogTasks: [],
    backlog: Ember.inject.service('product-backlogs'),
    actions: {
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
            this.backlogTasks.pushObject(newData)
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

});
