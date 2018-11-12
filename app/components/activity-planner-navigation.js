import Component from '@ember/component';

export default Component.extend({
    
    actions: {
        incrementTabIndex() {
            this.onTabIndexChanged(this.tabIndex+1);
        },
        decrementTabIndex() {
            this.onTabIndexChanged(this.tabIndex-1);
        }
    }
});
