import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('salon', function() {
    this.route('styles');
    this.route('services');
    this.route('products');
    this.route('featured');
  });
  this.route('about');
  this.route('location');
  this.route('staff');
  this.route('links');
});

export default Router;
