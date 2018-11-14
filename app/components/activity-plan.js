import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    mutiComp: false,
    actions: {
        selectCategory(category){
            this.toggleProperty('mutiComp', true);   
            console.log(document,"qwert"); 
        }
    },
    showMultiComp: computed('mutiComp', function(){
        return this.mutiComp
    })
});
