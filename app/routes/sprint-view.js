import Route from '@ember/routing/route';
import Ember from 'ember';
export default Route.extend({
    teamCopy: Ember.inject.service(),
    session: Ember.inject.service(),
    model(){
        var d = new Date();
        // d.setDate(d.getDate() - 1);
        var day = ("0" + d.getDate()).slice(-2);
        var month = ("0" + (d.getMonth()+ 1)).slice(-2);
        var today = d.getFullYear() + "-" + (month) + "-" + (day);
        // console.log(this.teamCopy.getTeamCopy(today,"default"));
        return this.teamCopy.getTeamCopy(today,this.get('session').initiative.initiativeId);
    }
});
