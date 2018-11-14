import Component from '@ember/component';

export default Component.extend({
    
    actions: {
        incrementTabIndex() {
            if(this.tabIndex === 3){
                this.onTabIndexChanged(0);
            }
            else{
                this.onTabIndexChanged(this.tabIndex+1);
            }
        },
        decrementTabIndex() {
            if(this.tabIndex === 0){
                this.onTabIndexChanged(3);
            }
            else {
                this.onTabIndexChanged(this.tabIndex-1);
            }
        }
    }
});
