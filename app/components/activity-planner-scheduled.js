import Component from '@ember/component';

export default Component.extend({
    
      startTime: null,
      endTime: null,
      selectedBands: [],
      selected: false,
      selectedCount: Ember.computed.reads('selectedBands.length'),
    
      actions: {
          
        selectBand(event) {
            // debugger
          let startTime = new Date().getTime();
          console.log("here in schedel", startTime < new Date().getTime(), startTime, new Date().getTime())
          // if ((startTime + 200) < new Date().getTime()) {
          //   console.log('long press')   
          // }
          // setTimeout(300, function() {
          //   console.log("it executes", startTime, new Date().getTime())
          //   if (startTime > new Date().getTime()){
          //     this.set('selected', true)
          //   }
          // })
          this.set('startTime', new Date().getTime())
      //     // debugger
          // console.log(event)
          // event.enable 
          // const selectedBands = Ember.$(event.tasks.text.target).val();
          // this.set('selectedBands', selectedBands || []);
          // console.log(this.selectedBands);
          // let b = event.checked;
          // console.log(b);
          if(!event.checked){
            this.selectedTasks.pushObject(event.tasks);
            console.log(this.selectedTasks);
          }
          else{

            this.selectedTasks.removeObject(event.tasks);
            console.log(this.selectedTasks);
          }
       },   
       unselectBand(item) {
           
            if((this.startTime + 500) < new Date().getTime()){
                // var length = this.selectedTasks.length;
                // this.selectedTasks = [];
                console.log("Long Press")
                if(this.selected)
                  this.set('selected',false)
                else
                  this.set('selected', true)

            }
       },
       hello() {
           
       }
       
     }
   });
   
