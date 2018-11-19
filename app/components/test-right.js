import Component from '@ember/component';

export default Component.extend({
    init(){
        this._super(...arguments);
        console.log("Right Init called");
    }
});
