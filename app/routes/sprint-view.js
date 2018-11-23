import Route from '@ember/routing/route';
import Ember from 'ember';
export default Route.extend({
    teamCopy: Ember.inject.service(),
    model(){
        console.log(this.teamCopy.getTeamCopy("2018-09-01","default"));
        return this.teamCopy.getTeamCopy("2018-09-01","default");
    }
});
