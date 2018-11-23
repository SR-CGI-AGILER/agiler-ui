import Service from '@ember/service';
// import $ from  '@ember/jquery';
import Ember from 'ember';

export default Service.extend({
    createActivityPlanMobile(plan){
        return Ember.$.ajax({
            url: `http://localhost:3000/api/v1/activityplan`,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(plan)
        })
    },
    postActivityPlan(x){
        return Ember.$.ajax({
            url: `http://172.23.239.177:3000/api/v1/activityplan`,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(x)
        })
    }
});
