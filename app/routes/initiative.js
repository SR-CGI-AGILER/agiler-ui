import Route from '@ember/routing/route';

export default Route.extend({
    model(param){
        if (param.route === 'initiative') {
            return true
        }else{
            return false
        }
        

    }
});
