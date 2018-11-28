import Controller from '@ember/controller';
// var jwtDecode = require('jwt-decode');
import jwtDecode from 'ember-cli-jwt-decode';

export default Controller.extend({
    image:"",
    visible:false,
    email:"",
    name:"",
    actions: {
        authenticateSession(){
            
            let session = this.get('session');
            
            this.get('session').authenticate('authenticator:torii', 'google-oauth2').then(()=>{
                
                let token = this.get('session').session.content.authenticated.jwtToken;
                
                this.get('session').set('userToken',token);
                var decoded = jwtDecode(token);
                
                this.get('session').set('currentUser',decoded.token);
                document.cookie = `jwtToken=${token}`;
                if(token){
                    // console.log(token,"dsasd")
                    this.transitionToRoute('standups');                                                                            Property('visible');
                    // this.set('image',decoded.token.profilePicUrl);
                    // this.set('name',decoded.token.name);
                    // this.set('email',decoded.token.email);
                }
            }).catch(err=>{
                console.log(err);
            });
        },
        gotoStandUp(){
            this.transitionToRoute('home');
        }
    },
    
});
