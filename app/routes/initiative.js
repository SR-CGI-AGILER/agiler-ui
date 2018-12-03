import Route from '@ember/routing/route';

export default Route.extend({
    model(param){
        this.set('route', param.route)
    }
    // setupController(model, controller){
    //     this._super(...arguments)
    // }
});
