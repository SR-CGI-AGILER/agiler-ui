import Controller from '@ember/controller';
import  Ember from 'ember';
export default Controller.extend({

    teamCopy: Ember.inject.service(),
    image:"",
    visible:false,
    email:"",
    name:"",
    ifPublished:false,
    userInitiative: Ember.inject.service(),
    initiativeUser: Ember.inject.service(),
    session: Ember.inject.service(),
    createDefault: false,
    userData: {},
    init(){
        let img = this.get('session').currentUser;
        this.set('image',img.profilePicUrl);
        this.set('name',img.name);
        
    },
    actions:{
        async gotoStandUp(){
            let that = this;
            var d = new Date();
            var day = ("0" + d.getDate()).slice(-2);
            var month = ("0" + (d.getMonth()+ 1)).slice(-2);
            var today = d.getFullYear() + "-" + (month) + "-" + (day);

            await this.userInitiative.getInitiatives(that.get('session').currentUser.email).then(function(data){
            if(!data.data){
                
                let newData={
                    name:"default",
                    members : that.get('session').currentUser
                }
                that.set('userData',newData);
                that.set('createDefault',true);
                 
                

            }
            else {
                
                that.get('session').set('initiative',data.data.initiative[0])
            }
            
            
        })
        
        if(that.get('createDefault')) {
            await that.initiativeUser.postInitiative(that.get('userData')).then(function(data){
                
                that.get('session').set('initiative',{
                    initiativeId:data.payload.data.initiative.id,
                    initiativeName:data.payload.data.initiative.name
                })
                
            }).catch(err=>{
            });
            
        }
        

            
            await this.teamCopy.getTeamCopy(today,this.get('session').initiative.initiativeId).then(function(data){
                if(data.payload.data === "NO DATA FOUND"){
                    that.set('ifPublished',false)
                }
                else{
                    that.set('ifPublished',true)
                }
            });

            this.transitionToRoute('home', {queryParams: {ifPublished:this.get('ifPublished')}});
        }
    }
});
