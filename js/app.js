(function() {
  var app = angular.module('studio', ['ui.bootstrap']);
  
  app.controller('IndexController', function() {
    this.sections = ["Home", "Teacher", "Lessons", "Students", "Calendar", "Contact"];
    
    this.activesection = "home";
    
    this.activateSection = function(section) {
      this.activesection = section;
    };
    
    this.isActive = function(section) {
      return this.activesection === section;
    };
    
    this.carouselInterval = 2000;
    
    this.slides = [];
    
    for (var i=0; i<2; i++) {
      this.slides.push({image:"img/carousel" + (i + 1) + ".jpeg"});
    }
  });
})();