import Service from '@ember/service';
import Ember from 'ember';

export default Service.extend(Ember.Evented, {
    sendDataNew(data){
         console.log(data)
         
        this.trigger('data-commingNew', data);
    },
    sendDataPending(data){
        this.trigger('data-commingPending', data);
    },
    sendDataBacklogs(data){
        this.trigger('data-commingBacklogs', data);
    }
});
