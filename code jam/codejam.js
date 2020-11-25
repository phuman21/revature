function showDogPhoto(data) {
    var image = document.querySelector("#dog-photo");
    var img = document.createElement("img");
    img.src = data.message;
    if (data.status === "error") {
        document.querySelector(".text-danger").innerText = "Error: Invalid Breed";
    } else {
        image.appendChild(img);
    }
}

function showDogList(data, random) {
    var dest = document.querySelector("#dog-photo");
    var table = document.createElement("table");
    table.setAttribute("class", "center");
    var headRow = document.createElement("tr");
    var head = document.createElement("th");
    head.innerText = "Breed";
    headRow.appendChild(head);
    if (random) {
        head = document.createElement("th");
        head.innerText = "Photo";
        headRow.appendChild(head);
    }
    table.appendChild(headRow);
    var lst = Object.keys(data.message);
    for (let i = 0; i < lst.length; i++) {
        let row = document.createElement("tr");
        let elt = document.createElement("td");
        elt.innerText = lst[i];
        row.appendChild(elt);
        table.appendChild(row);
        if (random) {
            let url = `https://dog.ceo/api/breed/${lst[i]}/images/random`;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    elt = document.createElement("td");
                    var img = document.createElement("img");
                    img.src = data.message;
                    img.setAttribute("height", "30px");
                    elt.appendChild(img);
                    row.appendChild(elt);
                });
        }
    }
    dest.appendChild(table);
}

function dogSearch(breed) {
    if (breed === undefined) {
        breed = document.querySelector("#breed").value.toLowerCase();
    }
    if (breed === "") {
        dogQuery("https://dog.ceo/api/breeds/image/random", showDogPhoto);
    } else {
        breed = breed.split(" ").reverse().join("/");
        dogQuery(`https://dog.ceo/api/breed/${breed}/images/random`, showDogPhoto);
    }
}

function listAll(random) {
    dogQuery(`https://dog.ceo/api/breeds/list/all`, x => showDogList(x, random));
}

function dogQuery(url, fn) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.querySelector(".text-danger").innerText = "";
            var img = document.querySelector("#dog-photo");
            while(img.hasChildNodes()) {
                img.removeChild(img.lastChild);
            }
            fn(data);
        });
}