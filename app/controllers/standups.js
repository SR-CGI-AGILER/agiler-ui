import Controller from '@ember/controller';

export default Controller.extend({

    teamCopy: Ember.inject.service(),
    image:"",
    visible:false,
    email:"",
    name:"",
    ifPublished:false,
    init(){
        let img = this.get('session').currentUser;
        console.log(img);
        this.set('image',img.profilePicUrl);
        this.set('name',img.name);
    },
    actions:{
        async gotoStandUp(){
            await this.userInitiative.getInitiatives(this.get('session').currentUser.email).then(function(data){
                console.log(data);    
            })
            await this.teamCopy.getTeamCopy("2018-11-28","default").then(function(data){
                if(data.payload.data === "NO DATA FOUND"){
                    this.set('ifPublished',false)
                }
                else{
                    this.set('ifPublished',true)
                }
            });
            this.transitionToRoute('home', {ifPublished:this.get('ifPublished')});
            console.log(this.get('ifPublished'));
        }
    }
});
