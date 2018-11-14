import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    // mutiComp: false,
    actions: {
        selectTask(category){
            // this.toggleProperty('mutiComp', true);
            this.selectTask(category.text);    
        }
    }
});
