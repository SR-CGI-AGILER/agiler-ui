export default function(){
  // Add your transitions here, like:
    this.transition(
      this.hasClass('vehicles'),
      this.toValue(true),
      this.use('toLeft', {duration:500}),
      this.reverse('toRight',{duration:500})
  //     this.fromRoute('people.index'),
  //     this.toRoute('people.detail'),
  //     this.use('toLeft'),
  //     this.reverse('toRight')
    );
}
