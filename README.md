# piano-lessons-site
Internet Site for Piano Lessons Teacher

To test locally run "python -m SimpleHTTPServer" and open browser at http://localhost:8000/

To enable animation add "ngAnimate" to app.js, include angular-animate.js in index.html and add this CSS:
 
 .carousel .item {
    transition: opacity 0.5s;
 }
 .carousel .active.left, .carousel .active.right {
     left:0;
     opacity:0;
     z-index:2;
 }
 .carousel .next {
     left:0;
     opacity:1;
     z-index:1;
 }
