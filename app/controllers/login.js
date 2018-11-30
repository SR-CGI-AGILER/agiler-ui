import Controller from '@ember/controller';
// var jwtDecode = require('jwt-decode');
import jwtDecode from 'ember-cli-jwt-decode';

export default Controller.extend({
    image:"",
    email:"",
    name:"",
    actions: {
        authenticateSession(){
            
            let session = this.get('session');
            // let that = this;
            this.get('session').authenticate('authenticator:torii', 'google-oauth2')
            .then(()=>{
                
                let token = this.get('session').session.content.authenticated.jwtToken;
                
                this.get('session').set('userToken',token);
                var decoded = jwtDecode(token);
                
                this.get('session').set('currentUser',decoded.token);
                document.cookie = `jwtToken=${token}`;
                if(token){
                    
                    this.transitionToRoute('standups'); 
                    
                }
            })
            .catch(function(err){
                console.log(err);
            })
        }
    },
    
});
