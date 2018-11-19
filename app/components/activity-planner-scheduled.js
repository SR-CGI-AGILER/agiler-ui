import Component from '@ember/component';

export default Component.extend({
  
      init () {
        this._super(...arguments);
        this.futureTasks.setEach('checked',false)
        // this.futureTasks.map(function (e) {
        //     e.checked = false
        //     return e
        // })
        // console.log(this.futureTasks)
      },
      // didReceiveAttrs() {
      //   this._super(...arguments);
      //   console.log(this.futureTasks, "this is rendered after reciving attrs")
      // //   this.set('futureTasks-altered',this.futureTasks.map(function (e) {
      // //       e.checked = false 
      // //       return e;
      // //   })
      // // )
      // //   console.log(this.futureTasks)
      // this.futureTasks.map(function(e) {
      //   e.checked = true;
      //   return e
      // })
      // },
      willDestroyElement(){
        console.log("COMPONENET DESTROYED")
        console.log(this.get('todayTeamCopy'));
        // this.futureTasks.map(function (e) {
        //   e.checked = false
        //   return e
        // });
        // this.futureTasks.setEach('checked',false);
        // console.log(this.get('futureTasks'));
        this._super(...arguments);
      },
    
      startTime: null,
      endTime: null,
      selectedBands: [],
      // isChecked = true, 
      // selected: false,
      selectedCount: Ember.computed.reads('selectedBands.length'),
    
      actions: {
          
        selectBand(event) {

          console.log('selectBand', this.get('category'));
          this.set('startTime', new Date().getTime())
          if(!event.checked){
            this.selectedTasks.pushObject(event.tasks);
            console.log(this.selectedTasks, "on touch staart ..!!!");
          }
          else{

            this.selectedTasks.removeObject(event.tasks);
            console.log(this.selectedTasks, "removing the object !! on touch start @@@@@@");
          }

       },   
       unselectBand(item) {
            console.log('unselect Band', "on touch end ");
            if((this.startTime + 500) < new Date().getTime()){
                this.set('selectedTasks', []);
                console.log("Long Press condition true")
                if(this.selected) {
                  this.set('selected',false)
                    

                }
                else{
                  this.set('selected', true)
                  console.log(this.selected);

                }
                  

            }
            else{
              console.log('else', "happened on the touch end!!!");
              if(!this.selected){

                console.log('NOT SELECTED', "checkbox not invoked!!");
                this.set('selectedTasks',[]);
              }

            }
            console.log(this.selectedTasks, "end state of the arr on touch end");
       },
       myuserdefined(x) {
           console.log(x, "onChange for the checkbox is triggred")
           x.checked = true;
           return x
        
      }
       
     }
   });
   
