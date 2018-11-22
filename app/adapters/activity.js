import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    buildUrl(){
        return `http://localhost:3000/api/v1/teamCopy`
    }
});
