import Controller from '@ember/controller';

export default Controller.extend({
    queryParams: ['route'],
    showInitiative: null,
   
    actions: {
        navigateToHome() {
            this.transitionToRoute('home')
        }
    }
});
