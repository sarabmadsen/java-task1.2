//Question 1
//Select the h3 element and change its value to Hello instead of Welcome.

const heading3 = document.querySelector("h3");

heading3.innerHTML = "Hello";


//Question 2
//Select all the h4 elements on the page and change their margin-bottom style to -20px.

const heading4 = document.querySelectorAll("h4");

for(let i = 0; i < heading4.length; i++) {
    heading4[i].style.marginBottom = "-20px";
};


//Question 3
//Set the background colour of the second h4 element to red.

heading4[1].style.backgroundColor = "red";


//Question 4
//Set the font size of the first paragraph element on the page to 24px and its color to blue.

const firstParagraph = document.querySelector("p.one");

firstParagraph.style.fontSize = "24px";
firstParagraph.style.color = "blue";


//Question 5
//Add span tags around the content of the third paragraph element on the page.

const thirdParagraph = document.querySelector("p.three");

thirdParagraph.innerHTML = `<span>${thirdParagraph.innerHTML}</span>`;


//Question 6
//Add a new paragraph to the div with a class of content. Add the paragraph after the others.

const contentContainer = document.querySelector(".content");

contentContainer.innerHTML = `${contentContainer.innerHTML}<p>Third line</p>`;


//Question 7
//Add a new class called content-item to each paragraph in the div with a class of content.

const newClass = document.querySelectorAll(".content p");

for(let i = 0; i < newClass.length; i++) {
    newClass[i].classList.add("content-item");
}


//Question 8
//Select the ul element on the page by its id and add a new list item to the beginning of the list.

const list = document.querySelector("#services");

list.innerHTML = `<li>New Item</li>${list.innerHTML}`;


//Question 9
//Programmatically remove the class from the ul element.

list.classList.remove("service-list");

//Question 10
//Hide the element with the id of hide.

const hide = document.querySelector("#hide");

hide.style.display = "none";