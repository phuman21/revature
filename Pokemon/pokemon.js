function getpokemon(){

    // Removes previous added table if there is one
    var remv = document.getElementById("stats");

    while(remv.hasChildNodes()) {
        remv.removeChild(remv.lastChild);
    }

    // AJAX request
    var xhr = new XMLHttpRequest();

    // Gets pokemon name from input box
    var pokename = document.getElementById("pokemonname").value;

    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4) {

            // parse the response
            pokemon = JSON.parse(xhr.responseText);

            // Gets All Pokemon stats we want
            // gets the sprite/picture
            
            pokemon_src_link = pokemon.sprites.front_shiny;
            // Get Pokemon Type
            pokemon_type = pokemon.types[0].type.name;
            // Get Pokemon ID
            pokemin_id = pokemon.id;

            // Creates a new img element
            var img = document.createElement("img");
            // Sets image source to 
            img.src = pokemon_src_link;

            // Creates new table element
            var table = document.createElement("table");

            // Creates new rows for each stat
            var pic = table.insertRow(0);
            var pokeid = table.insertRow(1);
            var type = table.insertRow(2);

            // Creates new columns for each row
            var pic_cell1 = pic.insertCell(0);
            var pic_cell2 = pic.insertCell(1);
            var id_cell1 = pokeid.insertCell(0);
            var id_cell2 = pokeid.insertCell(1);
            var type_cell1 = type.insertCell(0);
            var type_cell2 = type.insertCell(1);

            // Adds info/Stats to each row and column
            pic_cell1.innerText = `${pokename}` + "'s Picture";
            pic_cell2.appendChild(img);

            id_cell2.setAttribute("class", "stat");
            type_cell2.setAttribute("class", "stat");

            id_cell1.innerText = "Pokemon ID";
            id_cell2.innerText = pokemin_id;

            type_cell1.innerText = "Pokemon Type";
            type_cell2.innerText = pokemon_type;

            // Gets ID for where we want to input new table
            var stats = document.getElementById("stats");

            // Appends the new table
            stats.appendChild(table);

        }
    }

    xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/" + pokename);
    xhr.send();

}