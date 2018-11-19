import Component from '@ember/component';
import RecognizerMixin from 'ember-gestures/mixins/recognizers';

export default Component.extend(RecognizerMixin, {
    actions: {
        clickme(){
            this.toggleProperty('left');
            this.toggleProperty('right');
        }
    },
    left:true,
    right:false,
    recognizers: 'swipe',
    swipeRight(){
        this.set('right',true);
        this.set('left',false);
    },
    swipeLeft(){
        this.set('left',true);
        this.set('right',false);
    }

});
