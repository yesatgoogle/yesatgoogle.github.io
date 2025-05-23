
//   var source = document.getElementById("navbar-template").innerHTML;
// var template = Handlebars.compile(source);

// var template = Handlebars.templates['navbar'];

import template from "./navbar.handlebars";


var context = { title: "My New Post", body: "This is my first post!" };
var html = template(context);
console.log(html);