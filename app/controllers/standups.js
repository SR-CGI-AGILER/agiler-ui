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
    init(){
        let img = this.get('session').currentUser;
        console.log(img);
        this.set('image',img.profilePicUrl);
        this.set('name',img.name);
        
    },
    actions:{
        async gotoStandUp(){
            let that = this;
            var d = new Date();
        // d.setDate(d.getDate() - 1);
        var day = ("0" + d.getDate()).slice(-2);
        var month = ("0" + (d.getMonth()+ 1)).slice(-2);
        var today = d.getFullYear() + "-" + (month) + "-" + (day);

            await this.userInitiative.getInitiatives("swarnim@gmail.com").then(function(data){
            console.log(data.data.initiative[0],"PLEASE AA JAO NA");
            that.get('session').set('initiative',data.data.initiative[0])
            
        })
            console.log(this.get('session').initiative,"IN STANDUP")
            await this.teamCopy.getTeamCopy(today,this.get('session').initiative.initiativeName).then(function(data){
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
