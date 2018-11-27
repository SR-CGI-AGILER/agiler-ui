import Service from '@ember/service';

export default Service.extend({
    postActivityPlan(x){
        console.log(x,"x data hai ye re");
        return Ember.$.ajax({
            url: `http://172.23.239.177:4000/api/v1/activityplan`,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(x)
        })
    }
});
