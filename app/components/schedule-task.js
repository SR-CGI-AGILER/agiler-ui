import Component from '@ember/component';

export default Component.extend({
    
      startTime: null,
      endTime: null,
      selectedBands: [],
      selected: false,
      selectedCount: Ember.computed.reads('selectedBands.length'),
    
      actions: {
          
        selectBand(event) {
            
            this.set('startTime', new Date().getTime())
            // debugger
            console.log(event.text)
            event.enable 
         const selectedBands = Ember.$(event.text.target).val();
         this.set('selectedBands', selectedBands || []);
       },   
       unselectBand(item) {
           
            if((this.startTime + 500) < new Date().getTime()){
                console.log("Long Press")
                this.set('selected', true)

            }
       },
       hello() {
           
       }
       
     }
   });
   
