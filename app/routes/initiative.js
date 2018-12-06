import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin,{
    beforeModel(){
        let token = this.get('session').userToken;
        if(!token){
            this.transitionTo('login');
        }
    },
    model(param){
        if (param.route === 'initiative') {
            return true
        }else{
            return false
        }
        

    }
});
