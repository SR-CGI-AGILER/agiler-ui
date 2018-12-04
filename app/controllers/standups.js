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
                that.get('session').set('initiative',{
                    initiativeId:"default000",
                    initiativeName:"default"
                })
                let newData={
                    name:"default",
                    id:"default000",
                    members : that.get('session').currentUser
                }
                that.set('userData',newData);
                that.set('createDefault',true);
                 console.log("HERHEHERHER")
                
            }
            else {
                debugger
                that.get('session').set('initiative',data.data.initiative[0])
            }
            console.log(that.get('session').initiative,"INITTIATTA");
            
            })
            console.log(this.get('createDefault'),"PLEASE")
            if(this.get('createDefault')) {
                console.log("CREATE");
                console.log(this.get('userData'),"MAIN HOON YAHA")
                await this.initiativeUser.postInitiative(this.get('userData')).then(function(err,data){
                    if(err){
                        reject(err)
                    }
                    else{
                        console.log(data);
                    }
                });
            }
            
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
