import ToriiAuthenticator from 'ember-simple-auth/authenticators/torii';
import Ember from 'ember';
const  { RSVP, $ ,inject: {service} } = Ember
import ENV from '../config/environment';

export default ToriiAuthenticator.extend({
    torii: service('torii'),
    session: service('session'),
    server: "http://"+`${ENV.serverhost}`+"/api/v1/auth/google",
    authenticate(provider, options){
          
        return this.get('torii').open(provider, options)
        .then((authData) => {
                                     
            return new Promise((resolve, reject) =>  {
                     
                return $.ajax(this.server, {
                    type: 'POST',
                    data: {
                        code: authData.authorizationCode,
                        redirect_uri: authData.redirectUri
                    },
                    success: resolve,
                    error: reject
                })
            })
        })
    },
    invalidate(){
        let that=this;
        return new Promise(function(resolve,reject){
            resolve(that.get('session'));
        });
    }
})
