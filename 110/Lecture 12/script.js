// // plain JS
// function hideThis(){
//     let header = document.getElementsByTagName("h1")[0];
//     header.style.display = "none";
// }

// function showThis(){
//     let header = document.getElementsByTagName("h1")[0];
//     header.style.display = "block";
// }

// function toggleThis(){
//     let header = document.getElementsByTagName("h1")[0];
//     if(header.style.display === "none")
//         header.style.display = "block";
//     else
//         header.style.display = "none";
// }


// // J Query
// function hideThis(){
//     $("h1").eq(1).hide(1000);
// }

// function showThis(){
//     $("h1").eq(1).show(2000);
// }

// function toggleThis(){
//     $("h1").eq(1).toggle(1000);
// }


// // J Query
// function hideThis(){
//     $("h1").hide(1000);
// }

// function showThis(){
//     $("h1").show(2000);
// }

// function toggleThis(){
//     $("h1").toggle(1000);
// }


// ID and class selectors
// function hideThis(){
//     // plain JS for class selector
//     // let header = document.getElementsByClassName("h1")[0];
//     // header.style.display = "none";
//     $("#header").hide(1000);
//     $(".test").show(1000);
// }

// function showThis(){
//     // plain JS for id selector
//     // let header = document.getElementById("h1");
//     // header.style.display = "block";
//     $("#header").show(1000);
//     $(".test").hide(1000);
// }


// $("#button1").click(() => {
//     console.log("Hello");
//     $("#header").show(1000);
// });
// $("#button1").dblclick(() => console.log("Double hello"));
// $("#button1").hover(() => console.log("Hovering"));

// $("button").eq(1).hover(() => console.log("Hovering"));


function printh1(){
    console.log($("h1").eq(0).text());

    // $("div").eq(0).html("<h1> hi </h1>"); // set
    console.log($("div").eq(0).html()); // get
    $("div")[0].innerHTML = "<h1> hi </h1>";
}

function setValue(){
    let newVal = $("#in").val();

    $("h1").eq(0).text(newVal);
    // console.log($("h1").eq(0).text());

    $("#in").val("");
}

function changeCol(){
    // apply this to all h1's in the page
    $("h1").css('display', 'none');
}

function fb(){
    $("a").eq(0).attr('href', 'http://www.facebook.com')
}

$("#remBut").click(() => {
    $("#testDiv1").remove()
});

$("#empBut").click(() => {
    $("#testDiv1").empty()
});

$("#click").click(() => {
    $("#container").load("another.html");
});



