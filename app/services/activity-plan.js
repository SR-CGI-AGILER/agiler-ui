import Service from '@ember/service';
import Ember from 'ember';
import ENV from '../config/environment'

export default Service.extend({
    createActivityPlanMobile(plan){
        return Ember.$.ajax({
            url: `http://${ENV.serverhost}/api/v1/activityplan`,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(plan)
        })
    },
    postActivityPlan(task_data){
        return Ember.$.ajax({
            url: `http://${ENV.serverhost}/api/v1/activityplan`,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(task_data)
        })
    }
});
