console.log("Hello Saturday!")

const container = document.getElementById("container")
console.log(container)

const hData = {
    title: "High on Coding",
    links: ["Home", "Categories"]
}

function makeElement(elType) {
    return document.createElement(elType);
}

// Creater Header Function

function createHeader(someData) {
    let header = makeElement("header");
    let h1 = makeElement("h1");
    let ul = makeElement("ul");

    h1.textContent = someData.title;
    header.appendChild(h1);


    // Loop over menu items and create list

    someData.links.forEach((item) => {
    console.log(item)
    // create an li
    // create an anchor link
    // add hreef to a
    // add innerHTML
    // append ul
    const li = makeElement("li");
    const aLink = makeElement("a");
    aLink.setAttribute("href", "#");
    aLink.textContent = item; 

    li.appendChild(aLink);
    ul.appendChild(li);
    console.log(aLink);
    console.dir(aLink);
    });

    header.appendChild(ul);
    console.log(ul);
    return header;
}

container.appendChild(createHeader(hData));