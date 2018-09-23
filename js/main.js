/**
 * UC Berkeley SWE
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('sweweb', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // Pages
    .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    .when("/faq", {templateUrl: "partials/faq.html", controller: "PageCtrl"})
    .when("/national", {templateUrl: "partials/national.html", controller: "MembershipCtrl"})
    .when("/committee", {templateUrl: "partials/committee.html", controller: "MembershipCtrl"})
    .when("/GMslides", {templateUrl: "partials/GMslides.html", controller: "ResourceCtrl"})
    .when("/newsletters", {templateUrl: "partials/newsletters.html", controller: "ResourceCtrl"})
    .when("/alumnisignup", {templateUrl: "partials/alumnisignup.html", controller: "ResourceCtrl"})
    .when("/outreach", {templateUrl: "partials/outreach.html", controller: "ResourceCtrl"})
    .when("/miniu", {templateUrl: "partials/miniu.html", controller: "ResourceCtrl"})    
    .when("/science", {templateUrl: "partials/science.html", controller: "ResourceCtrl"})
    .when("/ohp", {templateUrl: "partials/ohp.html", controller: "ResourceCtrl"})
    .when("/hsep", {templateUrl: "partials/hsep.html", controller: "ResourceCtrl"})

    // .when("/ohp-specifics", {templateUrl: "partials/ohp-specifics.html", controller: "PageCtrl"})
    // .when("/ohp-register", {templateUrl: "partials/ohp-register.html", controller: "PageCtrl"})
    // .when("/ohp-host", {templateUrl: "partials/ohp-host.html", controller: "PageCtrl"})
    // .when("/ohp-volunteer", {templateUrl: "partials/ohp-volunteer.html", controller: "PageCtrl"})
    .when("/corporatepackage", {templateUrl: "partials/corporatepackage.html", controller: "BlogCtrl"})
    .when("/calendar", {templateUrl: "partials/calendar.html", controller: "BlogCtrl"})
    .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
    .when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    .when("/postjob", {redirectTo: ("https://docs.google.com/forms/d/e/1FAIpQLSeuHZNz-8IC_lN8T4N710FZQeU25OfmQfntWsyJFMpZXJbHCQ/viewform?embedded=true")})
    // Blog
    .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
    .when("/officers", {templateUrl: "partials/officers.html", controller: "OfficersCtrl"})
    .when("/sponsors", {templateUrl: "partials/sponsors.html", controller: "SponsorCtrl"})
    .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  // $('.carousel').carousel({
  //   interval: 7000
  // });

  // $('#sweCarousel').carousel({
  //   interval: 7000
  // });

  // // Activates Tooltips for Social Links
  // $('.tooltip-social').tooltip({
  //   selector: "a[data-toggle=tooltip]"
  // })
});

app.controller('MembershipCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  // $('.carousel').carousel({
  //   interval: 7000
  // });

  // // Activates Tooltips for Social Links
  // $('.tooltip-social').tooltip({
  //   selector: "a[data-toggle=tooltip]"
  // })
});
