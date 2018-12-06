import Service from '@ember/service';
import Ember from 'ember';

export default Service.extend(Ember.Evented, {
    sendDataNew(data){
         
        this.trigger('data-commingNew', data);
    },
    sendDataPending(data){
        this.trigger('data-commingPending', data);
    },
    sendDataBacklogs(data){
        this.trigger('data-commingBacklogs', data);
    },
    sendDataScheduledToday(data){
        this.trigger('data-commingScheduledToday', data);
    },
    sendDataScheduledFuture(data){
        this.trigger('data-commingScheduledFuture', data);
    }

});
