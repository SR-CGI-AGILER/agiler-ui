import Controller from '@ember/controller';

export default Controller.extend({
    queryParams: ['route'],
    showInitiative: null,
    init() {
        if (this.get('route') === 'initiative') {
            this.set('showInitiative', true)
        }else{
            this.set('showInitiative', false)
        }
    },
    actions: {
        navigateToHome() {
            console.log('this is working', this.get('route'))
            this.transitionToRoute('home')
        }
    }
});
