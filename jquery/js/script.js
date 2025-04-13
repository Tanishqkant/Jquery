// $("h1").mouseenter(function () {
//   console.log("entered the mouse");
// });

// $("span").hover(
//   function () {
//     $("span").css("color", "blue");
//   },
//   function () {
//     $("span").css("color", "black");
//   }
// );

// $("h1").on({
//   click: function () {
//     console.log("clicked");
//   },
//   mouseleave: function () {
//     console.log("leave");
//   },
// });

// $("h1").click(function () {
//   console.log("Cllicked");
// });
// $("#wiki").hide(10000, function () {
//   console.log("hidden");
// });

// $("#wiki").on("click", function () {
//   $("#wiki").hide(5000, function () {
//     console.log("done");
//   });
// });

// $("#btn").on("click", function () {
//   console.log("Btn clicked", this);

//   $("#wiki").hide(3000, function () {
//     console.log("done");
//   });
// });

// $("#btn").click(function () {
//   console.log("btn clicked");

//   $("#wiki").toggle(3000, function () {
//     console.log("done");
//   });
// });

/// challenge #fadeIn(),fadeOut(),fadeToggle(),#fadeTo()

// $("#wiki").slideUp(3000, function () {
//   console.log("done");
// });
// $("#wiki").slideDown(3000);
// $("#wiki").slideToggle(3000);

// $("#wiki")
//   .css("color", "red", 3000)
//   .animate(
//     { opacity: 0.3, height: "150px", width: "350px" },
//     3000,
//     function () {
//       console.log("done");
//     }
//   );

// $("#wiki").text("Hi I am Tanishq");
// $("#ta").val("HI how are you");
// $("#ta").html("HI how are you2");
// $("#ta").empty();

////Important
///AJAX
//1.get
//syntax: $.get(URL Link, function(data,status){alert(status);})
//$.post("URL",{name:harry, age:"20"}, function(data, status)){alert(status)})
