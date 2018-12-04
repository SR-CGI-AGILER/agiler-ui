import Controller from '@ember/controller';
import  Ember from 'ember';
import { reject } from 'rsvp';
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
        // console.log(img);
        this.set('image',img.profilePicUrl);
        this.set('name',img.name);
        
    },
    actions:{
        async gotoStandUp(){
            let that = this;
            // let that = this;
            // d.setDate(d.getDate() - 1);
            var d = new Date();
            var day = ("0" + d.getDate()).slice(-2);
            var month = ("0" + (d.getMonth()+ 1)).slice(-2);
            var today = d.getFullYear() + "-" + (month) + "-" + (day);

            await this.userInitiative.getInitiatives(that.get('session').currentUser.email).then(function(data){
            // console.log(data.data.initiative[0],"PLEASE AA JAO NA");
            // console.log(that.get('session').currentUser,"Members")
            if(!data.data){
                
                let newData={
                    name:"default",
                    members : that.get('session').currentUser
                }
                that.set('userData',newData);
                that.set('createDefault',true);
                 console.log("HERHEHERHER")
                 console.log(that.get('createDefault'),"PLEASE")
                 
                

            }
            else {
                debugger
                that.get('session').set('initiative',data.data.initiative[0])
            }
            if(that.get('createDefault')) {
                console.log("CREATE");
                // console.log(this.get('userData'),"MAIN HOON YAHA")
                that.initiativeUser.postInitiative(that.get('userData')).then(function(data){
                    
                        console.log(data,"RESPONSE");
                        that.get('session').set('initiative',{
                                initiativeId:data.payload.data.initiative.id,
                                initiativeName:data.payload.data.initiative.name
                        })
                    
                }).catch(err=>{
                    console.log(err)
                });

            }
            console.log(that.get('session').initiative,"INITTIATTA");
            
            })
    

            
            // console.log(this.get('session').initiative,"IN STANDUP")
            await this.teamCopy.getTeamCopy(today,this.get('session').initiative.initiativeId).then(function(data){
                // console.log(data,"HELLo");
                if(data.payload.data === "NO DATA FOUND"){
                    // debugger
                    that.set('ifPublished',false)
                }
                else{
                    // debugger
                    that.set('ifPublished',true)
                }
            });
            // console.log(this.get('ifPublished'));

            this.transitionToRoute('home', {queryParams: {ifPublished:this.get('ifPublished')}});
        }
    }
});
