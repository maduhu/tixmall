'use strict';
/**
 * @ngdoc service
 * @name tixmall.oauthTokenInjector
 * @description
 * # sessionService
 * Factory in the tixmall.
 */
angular.module('tixmall')
    .factory('oauthTokenInjector', ['$cookies',
    function($cookies) {
            var oauthTokenInjector = {
                request: function(config) {
                    if (config.url.indexOf('.html') === -1) {
                        if ($cookies.get("token") !== null && $cookies.get("token") !== undefined) {
                            var sep = config.url.indexOf('?') === -1 ? '?' : '&';
                            config.url = config.url + sep + 'token=' + $cookies.get("token");
                        }
                    }
                    return config;
                }
            };
            return oauthTokenInjector;
}]);