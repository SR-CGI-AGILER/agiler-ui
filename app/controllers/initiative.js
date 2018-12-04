import Controller from '@ember/controller';

export default Controller.extend({
    queryParams: ['route'],
    showInitiative: null,
   
    actions: {
        navigateToHome() {
            console.log('this is working', this.get('route'))
            this.transitionToRoute('home')
        }
    }
});
