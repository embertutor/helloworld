import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('aboutus');
  this.route('contactus');
  this.route('schools');
});

export default Router;
