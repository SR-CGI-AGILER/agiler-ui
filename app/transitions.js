export default function(){
    this.transition(
      this.hasClass("showcategory"),
      // this.toValue(true),
      this.use('toLeft', {duration: 500}),
      this.reverse('toRight', {duration: 500})
)}
