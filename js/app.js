/*Hey Prepsters! Let's help Ronald McDonald find true love by revising his online dating profile!*/

// 1. In the nav element, target the span element with the id of "count" and change the number from 0 to 8.

var navElem = document.getElementById ("count");
navElem.innerHTML = 8;


// 2. Target the div with the id of 'age' and change the contents to: "21 year old vibrant stud".

var divElem = document.getElementById ("age");
divElem.innerHTML = "21 year old vibrant stud"


// 3. Target the span element with the id of "distance" and change the number from 1000 to 168.

var spanElem = document.getElementById ("distance");
spanElem.innerHTML = 168

// 4. Create a paragraph element with the id of "pro2". In this paragraph, add the following content: "My main objective is to find a Mrs. McDonald." Append this element inside of the paragraph element with the id of "profile".

var pElem = document.createElement ("p");
pElem.id = "pro2";
pElem.innerHTML = "My main objective is to find a Mrs. McDonald.";
document.getElementById("profile").appendChild (pElem);

// 5. Create a span element of the id of "mail" and give it a content of 11. Append this element into the "Messages" li element.

var menuElem = document.getElementsByClassName("menu");
var mailElem = document.createElement ("span");
mailElem.id = "mail";
mailElem.innerHTML = 11;
menuElem[2].appendChild (mailElem);


//6. Target the div id "first-name1" and replace the text "First Name" to "Wendy".

var wendy = document.getElementById("first-name1")
wendy.innerHTML = "Wendy"

//7. Target the div id "first-name2" and replace the text "First Name" to "Marie".

var marie = document.getElementById("first-name2")
marie.innerHTML = "Marie"

//8. Target the div id "first-name3" and replace the text "First Name" to "Anna".

var anna = document.getElementById("first-name3")
anna.innerHTML = "Anna"