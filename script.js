// Task 1: Select Element by ID
let heading = document.getElementById("mainHeading");
console.log(heading);
heading.textContent = "This heading is changed";

// Task 2: Select Elements by Tag Name
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);
paragraphs[0].textContent = "First paragraph updated";

// Task 3: Select Elements by Class Name
let buttons = document.getElementsByClassName("btn");
console.log(buttons);
buttons[1].textContent = "Click Me";

// Task 4: Use querySelector
let qHeading = document.querySelector(".query-heading");
console.log(qHeading);
qHeading.style.color = "blue";

// Task 5: Use querySelectorAll
let listItems = document.querySelectorAll("li");
console.log(listItems);

listItems.forEach(function (item) {
    item.style.color = "green";
});

// Task 6: Change Style Using Selected Element
let stylePara = document.querySelector(".style-para");
console.log(stylePara);

stylePara.style.fontSize = "20px";
stylePara.style.color = "white";
stylePara.style.backgroundColor = "black";
