angular.
  module('starter')
  .service('sharedProperties', function() {
    var city_selected="hyderabad";
    var location_selected="madhapur";
    var service_selected="all";
    return {
        getString: function() {
            return city_selected;
        },
        setString: function(value) {
            city_selected = value;
        },
        get_location_selected: function() {
            return location_selected;
        },
        set_location_selected: function(value) {
            location_selected = value;
        },
        getservice: function() {
            return service_selected;
        },
        setservice: function(value) {
            service_selected = value;
        },
        getindex: function() {
            return index_selected;
        },
        setindex: function(value) {
            index_selected = value;
        }
    }
});