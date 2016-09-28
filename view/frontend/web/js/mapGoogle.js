/**
 * Copyright © 2016 Fastgento. All rights reserved.
 * See COPYING.txt for license details.
 */
/*jshint jquery:true*/
define(["jquery",
        "mage/translate",
        "google",
        "jquery/ui"
], function ($, $t) {
    "use strict"

    $.widget('mage.mapGoogle',{
        options: {
            mapCanvas: '#map'
        },

        /**
         * Create map widget
         *
         * @returns {exports.Map}
         * @private
         */
        _create: function() {
            var mapOptions, googleMap;
            $(this.options.mapCanvas).height(this.options.height);
            $(this.options.mapCanvas).width(this.options.width);

            mapOptions = {
                center: new google.maps.LatLng(this.options.lat, this.options.long),
                zoom: this.options.zoom,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            googleMap = new google.maps.Map($(this.options.mapCanvas)[0], mapOptions);
            this._initMarkers(googleMap);
            return googleMap;
        },

        /**
         * Init markers data
         *
         * @param googleMap
         * @private
         */
        _initMarkers: function(googleMap) {
            var markers = this.options.markers, myLatLng = {}, markersArr = [];
            for (var i = 0; i <= markers.length - 1; i++) {
                myLatLng = {lat: markers[i].latitude, lng: markers[i].longitude};
                // Add new marker to the map
                markersArr.push(new google.maps.Marker({
                    position: myLatLng,
                    map: googleMap,
                    title: markers[i].title
                }));
            }
        }
    });
    return $.mage.mapGoogle
});