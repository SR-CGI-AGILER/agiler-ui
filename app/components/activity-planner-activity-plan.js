import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    mutiComp: false,
    projectName: "default",
    initiatives: "default",
    task:[],
    actions: {
        saveToDb() {
            this.saveData();
        },
        addTask() {
            let inputText=this.get('text');
            if(inputText.charAt(0) === '#'){
                console.log(inputText.substring(1))
                this.set('projectName',inputText.substring(1).trim());
            }
            else{
                
            }
            this.set('text','');
        }
    },
    showMultiComp: computed('mutiComp', function(){
        return this.mutiComp
    })
});
