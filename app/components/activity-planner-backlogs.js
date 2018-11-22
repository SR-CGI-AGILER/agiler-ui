import Component from '@ember/component';
import { computed } from '@ember/object';


export default Component.extend({
    // mutiComp: false,
    currentView: 'Projects',
    projectBacklogTasks: [],
    actions: {
        selectTask(category){
            // this.toggleProperty('mutiComp', true);
            this.set('currentView','Backlog');
            // this.selectTask(category.text);
            this.set('projectBacklogTasks',this.backlogTasks.filter(task=>task.projectName===category));
        },
        showProjects() {
            this.set('currentView', 'Projects');
        }
    },
    showProjectsView: computed('currentView', function() {
        return this.currentView === 'Projects'
    }),
    showBacklogTasksView: computed('currentView', function() {
        return this.currentView === 'Backlog'
    }),

});
