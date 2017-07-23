import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('what-is-it', {path: '/'});
  this.route('extending-component');
});

export default Router;
