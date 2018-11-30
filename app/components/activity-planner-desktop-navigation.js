import Component from '@ember/component';

export default Component.extend({
    showView: true,
    actions: {
        showUsers(init){
            let that = this;
            this.initiativeUser.getUsers(init.id).then(function(data){
                // console.log(data)
                that.set('members',data);
                // console.log(that.get('members'),"hiiiii")


            })
        },
        toggleView() {
            this.toggleProperty('showView');
        }
    }
});
