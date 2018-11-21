import Service from '@ember/service';
import Ember from 'ember'
export default Service.extend(Ember.Evented, {
    sendData(data){
         console.log(data)
        this.trigger('data-comming', data)
    }
});
