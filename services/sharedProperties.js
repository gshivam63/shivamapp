angular.
  module('starter')
  .service('sharedProperties', function() {
    var city_selected="hyderabad";
    var location_selected="";
    var service_selected="";
    var parentid="all";
    var booking_list="";
    var reviewlength="";
    var userid="97";
    var appid="";
    var FromTime="";
    var ToTime="";
    var Bookingdate="";
    var Bookingtime="";
    var venueid="";
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
        },
        getparent: function() {
            return parentid;
        },
        setparent: function(value) {
            parentid = value;
        },
        setbookingdetails:function(value)
        {
            booking_list=value;
        },
        getbookingdetails:function(){
            return booking_list;
        },
        setreviewlength:function(value){
            reviewlength=value;
        },
        getreviewlength:function(){
            return reviewlength;
        },
        setuserid:function(id){
            userid=id;
        },
        getuserid:function(){
            return userid;
        },
        setappid:function(id){
            appid=id;
        },
        getappid:function(){
            return appid;
        },
        setFromTime:function(time){
            FromTime=time;
        },
        getFromTime:function(){
            return FromTime;
        },
        setToTime:function(time){
            ToTime=time;
        },
        getToTime:function(){
            return ToTime;
        },
        setBookingdate:function(value){
            Bookingdate=value;
        },
        getBookingdate:function(){
            return Bookingdate;
        },
        setBookingtime:function(value){
            Bookingtime=value;
        },
        getBookingtime:function(){
            return Bookingtime;
        },
        setvenueid:function(value){
            venueid=value;
        },
        getvenueid:function(){
            return venueid;
        }
    }
});