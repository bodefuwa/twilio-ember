import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      name: "Word Focus Chapel",
      twitter: "@wordfocuschapel"
      }, {
      name: "Rawneed Inc.",
      twitter: "@rawneed"
      }
    }];
  }

});
