import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel(){
        // console.log('Atreya');
        this.replaceWith('home');
    }
});
