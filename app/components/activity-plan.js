import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    mutiComp: false,
    actions: {
        saveToDb() {
            this.saveData();
        }
    },
    showMultiComp: computed('mutiComp', function(){
        return this.mutiComp
    })
});
