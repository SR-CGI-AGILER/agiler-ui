import DS from 'ember-data';
const { attr } = DS;
export default DS.Model.extend({
    text : attr('String'),
    projectName: attr('String'),
    owner: attr('String')
});
