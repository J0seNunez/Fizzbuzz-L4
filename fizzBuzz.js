let contArr=[];

for ( let i = 1 ; i < 101 ; i++) {
    if ( i % 5 === 0 && i % 3 === 0) {
        contArr.push("FizzBuzz");
    } else if ( i % 5 === 0) {
        contArr.push("Buzz");
    } else if ( i % 3 === 0) {
        contArr.push("Fizz");
        // $("#fzBz").html("fizz");
    } else {
        // $("#fzBz").html(i);
        contArr.push(i);
    }
}
const textToDisplay = contArr.join("  /  ");
$("#fzBz").html(textToDisplay);

$(document).ready(function($) {
    $("#fzBz:contains('FizzBuzz')").each( function () {
        $(this).html(function(index, text) {
            return text.replace(/FizzBuzz/g, '<span class="elfizzbuzz">Fizzbuzz</span>');
        });
    });
});


$(document).ready(function($) {
    $("#fzBz:contains(' Fizz ')").each( function () {
        $(this).html(function(index, text) {
            return text.replace(/ Fizz /g, '<span class="elfizz"> Fizz </span>');
        });
    });
});

$(document).ready(function($) {
    $("#fzBz:contains('Buzz')").each( function () {
        $(this).html(function(index, text) {
            return text.replace(/Buzz/g, '<span class="elbuzz">Buzz</span>');
        });
    });
});


// //need to fix regex and textDummy seems to not be working
// //Try searching for 'FizzBuzz' first, then ' Fizz ' then ' Buzz ' This should work
// let textDummy = '<span class="elfizz">Fizz</span><span class="elbuzz">Buzz</span>';
// $(document).ready(function($) {
//     $("#fzBz:contains(textDummy)")
//     .each( function () {
//         $(this).html(function(index, text) {
//             // return text.replace(/<span class=\"elfizz\">Fizz</span><span class=\"elbuzz\">Buzz</span>/g, '<span class="elfizzbuzz">FizzBuzz</span>');
//             return text.replace(/<span\b[^>]*>(.*?)<\/span><span\b[^>]*>(.*?)<\/span>/g, '<span class="elfizzbuzz">FizzBuzz</span>');

//         });
//     });
// });
