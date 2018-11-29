import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', {path: '/home/:ifPublished'});
  this.route('test');
  this.route('sprintView');
  this.route('login');
  this.route('standups');
  this.route('sprint-view-desktop');
});

export default Router;
