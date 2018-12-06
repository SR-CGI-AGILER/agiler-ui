import Component from '@ember/component';
import RecognizerMixin from 'ember-gestures/mixins/recognizers';
export default Component.extend(RecognizerMixin, {
    init(){
        this._super(...arguments);
    },
});
