import Service from '@ember/service';

export default Service.extend({
    postActivityPlan(x){
        return Ember.$.ajax({
            url: `http://172.23.239.177:3000/api/v1/activityplan`,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(x)
        })
    }
});
