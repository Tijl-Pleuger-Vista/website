var pokemonList, numb = 0,
limit = 12;
var user = accessCookie("testCookie");

function checkCookie(){
if (user="") {
  console.log("yes")

  let pokedex = () => {  
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`).then(i => i.json()).then(i => {
      var v = 75;
      i.results.forEach(function(s, a) {
        setTimeout(function() {
          var v = i.results[numb].name;
          numb++, fetch(`https://pokeapi.co/api/v2/pokemon/${v}`).then(i => i.json()).then(i => {
            var s = i.sprites.front_default,
              a = "";
            if (i.types[0]) {
              var d = i.types[0].type.name;
              if ("normal" == d) var a = "<div class='normal'>" + d + "</div>";
              if ("fire" == d) var a = "<div class='fire'>" + d + "</div>";
              if ("grass" == d) var a = "<div class='grass'>" + d + "</div>";
              if ("water" == d) var a = "<div class='water'>" + d + "</div>";
              if ("ice" == d) var a = "<div class='ice'>" + d + "</div>";
              if ("electric" == d) var a = "<div class='electric'>" + d + "</div>";
              if ("fighting" == d) var a = "<div class='fighting'>" + d + "</div>";
              if ("flying" == d) var a = "<div class='flying'>" + d + "</div>";
              if ("bug" == d) var a = "<div class='bug'>" + d + "</div>";
              if ("ghost" == d) var a = "<div class='ghost'>" + d + "</div>";
              if ("rock" == d) var a = "<div class='rock'>" + d + "</div>";
              if ("ground" == d) var a = "<div class='ground'>" + d + "</div>";
              if ("steel" == d) var a = "<div class='steel'>" + d + "</div>";
              if ("dark" == d) var a = "<div class='dark'>" + d + "</div>";
              if ("psychic" == d) var a = "<div class='psychic'>" + d + "</div>";
              if ("fairy" == d) var a = "<div class='fairy'>" + d + "</div>";
              if ("dragon" == d) var a = "<div class='dragon'>" + d + "</div>";
              if ("poison" == d) var a = "<div class='poison'>" + d + "</div>"
            }
            var r = "";
            if (i.types[1]) {
              var c = i.types[1].type.name;
              if ("normal" == c) var r = "<div class='normal'>" + c + "</div>";
              if ("fire" == c) var r = "<div class='fire'>" + c + "</div>";
              if ("grass" == c) var r = "<div class='grass'>" + c + "</div>";
              if ("water" == c) var r = "<div class='water'>" + c + "</div>";
              if ("ice" == c) var r = "<div class='ice'>" + c + "</div>";
              if ("electric" == c) var r = "<div class='electric'>" + c + "</div>";
              if ("fighting" == c) var r = "<div class='fighting'>" + c + "</div>";
              if ("flying" == c) var r = "<div class='flying'>" + c + "</div>";
              if ("bug" == c) var r = "<div class='bug'>" + c + "</div>";
              if ("ghost" == c) var r = "<div class='ghost'>" + c + "</div>";
              if ("rock" == c) var r = "<div class='rock'>" + c + "</div>";
              if ("ground" == c) var r = "<div class='ground'>" + c + "</div>";
              if ("steel" == c) var r = "<div class='steel'>" + c + "</div>";
              if ("dark" == c) var r = "<div class='dark'>" + c + "</div>";
              if ("psychic" == c) var r = "<div class='psychic'>" + c + "</div>";
              if ("fairy" == c) var r = "<div class='fairy'>" + c + "</div>";
              if ("dragon" == c) var r = "<div class='dragon'>" + c + "</div>";
              if ("poison" == c) var r = "<div class='poison'>" + c + "</div>";
              if ("" == c) var r = "<div></div>"
            }
            Form.innerHTML += 
            `
            <div class="card poke-card ${d} ${c} visible" id="${v}" onclick="updatGIF()">
            <img  class="p-img" src="${s}" alt="" style="width: 128px; height: 128px;"><div class="p-name">${v}</div><div class="row type">${a}${r}</div></div>`
          })
        }, a * v)
      })
    })
    // document.cookie = Form.innerHTML
  
  };
  pokedex();
}}
if (user!="") {
  // Form.innerHTML = `${user}`
  console.log("not")
}





//

    fetch(`https://pokeapi.co/api/v2/pokemon/1`)
    .then(pokeInfo => pokeInfo.json())
    .then(pokeInfo => {
        
        var icon = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif"
        var ability0 = pokeInfo.abilities[0].ability.name;
        var ability1 = pokeInfo.abilities[1].ability.name;
        var id = pokeInfo.id;
        var stat0 = pokeInfo.stats[0].stat.name;
        var stat1 = pokeInfo.stats[1].stat.name;
        var stat2 = pokeInfo.stats[2].stat.name;
        var stat3 = pokeInfo.stats[3].stat.name;
        var stat4 = pokeInfo.stats[4].stat.name;
        var stat5 = pokeInfo.stats[5].stat.name;

        var _stat0 = pokeInfo.stats[0].base_stat;
        var _stat1 = pokeInfo.stats[1].base_stat;
        var _stat2 = pokeInfo.stats[2].base_stat;
        var _stat3 = pokeInfo.stats[3].base_stat;
        var _stat4 = pokeInfo.stats[4].base_stat;
        var _stat5 = pokeInfo.stats[5].base_stat;


        var type1 = ''
        var type0 = pokeInfo.types[0].type.name;
        if (pokeInfo.types[1]) {
            var type1 = pokeInfo.types[1].type.name;
        }
        

        // type 1
        if("normal"==type0)var _type0="<div class='normal'>"+type0+"</div>";if("fire"==type0)var _type0="<div class='fire'>"+type0+"</div>";if("grass"==type0)var _type0="<div class='grass'>"+type0+"</div>";if("water"==type0)var _type0="<div class='water'>"+type0+"</div>";if("ice"==type0)var _type0="<div class='ice'>"+type0+"</div>";if("electric"==type0)var _type0="<div class='electric'>"+type0+"</div>";if("fighting"==type0)var _type0="<div class='fighting'>"+type0+"</div>";if("flying"==type0)var _type0="<div class='flying'>"+type0+"</div>";if("bug"==type0)var _type0="<div class='bug'>"+type0+"</div>";if("ghost"==type0)var _type0="<div class='ghost'>"+type0+"</div>";if("rock"==type0)var _type0="<div class='rock'>"+type0+"</div>";if("ground"==type0)var _type0="<div class='ground'>"+type0+"</div>";if("steel"==type0)var _type0="<div class='steel'>"+type0+"</div>";if("dark"==type0)var _type0="<div class='dark'>"+type0+"</div>";if("psychic"==type0)var _type0="<div class='psychic'>"+type0+"</div>";if("fairy"==type0)var _type0="<div class='fairy'>"+type0+"</div>";if("dragon"==type0)var _type0="<div class='dragon'>"+type0+"</div>";if("poison"==type0)var _type0="<div class='poison'>"+type0+"</div>";


        // type 2
        if("normal"==type1)var _type1="<div class='normal'>"+type1+"</div>";if("fire"==type1)var _type1="<div class='fire'>"+type1+"</div>";if("grass"==type1)var _type1="<div class='grass'>"+type1+"</div>";if("water"==type1)var _type1="<div class='water'>"+type1+"</div>";if("ice"==type1)var _type1="<div class='ice'>"+type1+"</div>";if("electric"==type1)var _type1="<div class='electric'>"+type1+"</div>";if("fighting"==type1)var _type1="<div class='fighting'>"+type1+"</div>";if("flying"==type1)var _type1="<div class='flying'>"+type1+"</div>";if("bug"==type1)var _type1="<div class='bug'>"+type1+"</div>";if("ghost"==type1)var _type1="<div class='ghost'>"+type1+"</div>";if("rock"==type1)var _type1="<div class='rock'>"+type1+"</div>";if("ground"==type1)var _type1="<div class='ground'>"+type1+"</div>";if("steel"==type1)var _type1="<div class='steel'>"+type1+"</div>";if("dark"==type1)var _type1="<div class='dark'>"+type1+"</div>";if("psychic"==type1)var _type1="<div class='psychic'>"+type1+"</div>";if("fairy"==type1)var _type1="<div class='fairy'>"+type1+"</div>";if("dragon"==type1)var _type1="<div class='dragon'>"+type1+"</div>";if("poison"==type1)var _type1="<div class='poison'>"+type1+"</div>";if(""==type1)var _type1="<div></div>";

        infoCard.innerHTML +=
        `
        <img class="p-img-info" src="${icon}" alt="" style="width: 192px; height: 192px;">
        
        <div class="row type type-info">
        ${_type0}${_type1}
        </div>
        <h2></h2>
        <div class="row"><h3>Pokémon id:</h3>  <h3 class="stat">${id}</h3></div>
        <div class="row"><h3>Abilities:</h3>
        <div class="column">
            <div><h3 class="stat">${ability0}</h3></div>
            <div><h3 class="stat">${ability1}</h3></div>
        </div>
        </div>

        <div class="row"><h3>Stats:</h3></div>
        
        <div class="row"><h3 style="margin-left: 75px;">${stat0}</h3><h3 class="stat">${_stat0}</h3></div>
        <div class="row"><h3 style="margin-left: 75px;">${stat1}</h3><h3 class="stat">${_stat1}</h3></div>
        <div class="row"><h3 style="margin-left: 75px;">${stat2}</h3><h3 class="stat">${_stat2}</h3></div>
        <div class="row"><h3 style="margin-left: 75px;">${stat3}</h3><h3 class="stat">${_stat3}</h3></div>
        <div class="row"><h3 style="margin-left: 75px;">${stat4}</h3><h3 class="stat">${_stat4}</h3></div>
        <div class="row"><h3 style="margin-left: 75px;">${stat5}</h3><h3 class="stat">${_stat5}</h3></div>
        `
    })

    function updatGIF(){
    
        var divId

        document.addEventListener('click', (e) =>
        {
          // Retrieve id from clicked element
           divId = e.target.id;
          // If element has id
          if (divId !== '') {
              var icon = "https://projectpokemon.org/images/normal-sprite/" + divId + ".gif"
              infoCard.innerHTML =
              `
              <img class="p-img-info" src="${icon}" alt="" style="width: 192px; height: 192px;">
              `
              
              fetch(`https://pokeapi.co/api/v2/pokemon/${divId}`)
    .then(pokeInfo => pokeInfo.json())
    .then(pokeInfo => {
        
        var ability0 = pokeInfo.abilities[0].ability.name;
        var ability1 = pokeInfo.abilities[1].ability.name;
        var id = pokeInfo.id;
        var stat0 = pokeInfo.stats[0].stat.name;
        var stat1 = pokeInfo.stats[1].stat.name;
        var stat2 = pokeInfo.stats[2].stat.name;
        var stat3 = pokeInfo.stats[3].stat.name;
        var stat4 = pokeInfo.stats[4].stat.name;
        var stat5 = pokeInfo.stats[5].stat.name;

        var _stat0 = pokeInfo.stats[0].base_stat;
        var _stat1 = pokeInfo.stats[1].base_stat;
        var _stat2 = pokeInfo.stats[2].base_stat;
        var _stat3 = pokeInfo.stats[3].base_stat;
        var _stat4 = pokeInfo.stats[4].base_stat;
        var _stat5 = pokeInfo.stats[5].base_stat;


        var type1 = ''
        var type0 = pokeInfo.types[0].type.name;
        if (pokeInfo.types[1]) {
            var type1 = pokeInfo.types[1].type.name;
        }
        

        // type 1
        if("normal"==type0)var _type0="<div class='normal'>"+type0+"</div>";if("fire"==type0)var _type0="<div class='fire'>"+type0+"</div>";if("grass"==type0)var _type0="<div class='grass'>"+type0+"</div>";if("water"==type0)var _type0="<div class='water'>"+type0+"</div>";if("ice"==type0)var _type0="<div class='ice'>"+type0+"</div>";if("electric"==type0)var _type0="<div class='electric'>"+type0+"</div>";if("fighting"==type0)var _type0="<div class='fighting'>"+type0+"</div>";if("flying"==type0)var _type0="<div class='flying'>"+type0+"</div>";if("bug"==type0)var _type0="<div class='bug'>"+type0+"</div>";if("ghost"==type0)var _type0="<div class='ghost'>"+type0+"</div>";if("rock"==type0)var _type0="<div class='rock'>"+type0+"</div>";if("ground"==type0)var _type0="<div class='ground'>"+type0+"</div>";if("steel"==type0)var _type0="<div class='steel'>"+type0+"</div>";if("dark"==type0)var _type0="<div class='dark'>"+type0+"</div>";if("psychic"==type0)var _type0="<div class='psychic'>"+type0+"</div>";if("fairy"==type0)var _type0="<div class='fairy'>"+type0+"</div>";if("dragon"==type0)var _type0="<div class='dragon'>"+type0+"</div>";if("poison"==type0)var _type0="<div class='poison'>"+type0+"</div>";


        // type 2
        if("normal"==type1)var _type1="<div class='normal'>"+type1+"</div>";if("fire"==type1)var _type1="<div class='fire'>"+type1+"</div>";if("grass"==type1)var _type1="<div class='grass'>"+type1+"</div>";if("water"==type1)var _type1="<div class='water'>"+type1+"</div>";if("ice"==type1)var _type1="<div class='ice'>"+type1+"</div>";if("electric"==type1)var _type1="<div class='electric'>"+type1+"</div>";if("fighting"==type1)var _type1="<div class='fighting'>"+type1+"</div>";if("flying"==type1)var _type1="<div class='flying'>"+type1+"</div>";if("bug"==type1)var _type1="<div class='bug'>"+type1+"</div>";if("ghost"==type1)var _type1="<div class='ghost'>"+type1+"</div>";if("rock"==type1)var _type1="<div class='rock'>"+type1+"</div>";if("ground"==type1)var _type1="<div class='ground'>"+type1+"</div>";if("steel"==type1)var _type1="<div class='steel'>"+type1+"</div>";if("dark"==type1)var _type1="<div class='dark'>"+type1+"</div>";if("psychic"==type1)var _type1="<div class='psychic'>"+type1+"</div>";if("fairy"==type1)var _type1="<div class='fairy'>"+type1+"</div>";if("dragon"==type1)var _type1="<div class='dragon'>"+type1+"</div>";if("poison"==type1)var _type1="<div class='poison'>"+type1+"</div>";if(""==type1)var _type1="<div></div>";

        infoCard.innerHTML =
        `
        <img class="p-img-info" src="${icon}" alt="" style="width: 192px; height: 192px;">
        
        <div class="row type type-info">
        ${_type0}${_type1}
        </div>
        <h2></h2>
        <div class="row"><h3>Pokémon id:</h3>  <h3 class="stat">${id}</h3></div>
        <div class="row"><h3>Abilities:</h3>
        <div class="column">
            <div><h3 class="stat">${ability0}</h3></div>
            <div><h3 class="stat">${ability1}</h3></div>
        </div>
        </div>

        <div class="row"><h3>Stats:</h3></div>
        
        <div class="row"><h3 style="margin-left: 75px;">${stat0}</h3><h3 class="stat">${_stat0}</h3></div>
        <div class="row"><h3 style="margin-left: 75px;">${stat1}</h3><h3 class="stat">${_stat1}</h3></div>
        <div class="row"><h3 style="margin-left: 75px;">${stat2}</h3><h3 class="stat">${_stat2}</h3></div>
        <div class="row"><h3 style="margin-left: 75px;">${stat3}</h3><h3 class="stat">${_stat3}</h3></div>
        <div class="row"><h3 style="margin-left: 75px;">${stat4}</h3><h3 class="stat">${_stat4}</h3></div>
        <div class="row"><h3 style="margin-left: 75px;">${stat5}</h3><h3 class="stat">${_stat5}</h3></div>
        `
    })

          }
        }
      );

    }
var mewmew = 
`
<div id="Form" class="row row-3 scrollbar mew">
                            
                        
          <div class="card poke-card grass poison visible" id="bulbasaur" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">bulbasaur</div><div class="row type"><div class="grass">grass</div><div class="poison">poison</div></div></div>
          <div class="card poke-card grass poison visible" id="ivysaur" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">ivysaur</div><div class="row type"><div class="grass">grass</div><div class="poison">poison</div></div></div>
          <div class="card poke-card grass poison visible" id="venusaur" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">venusaur</div><div class="row type"><div class="grass">grass</div><div class="poison">poison</div></div></div>
          <div class="card poke-card fire undefined visible" id="charmander" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">charmander</div><div class="row type"><div class="fire">fire</div></div></div>
          <div class="card poke-card fire undefined visible" id="charmeleon" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">charmeleon</div><div class="row type"><div class="fire">fire</div></div></div>
          <div class="card poke-card fire flying visible" id="charizard" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">charizard</div><div class="row type"><div class="fire">fire</div><div class="flying">flying</div></div></div>
          <div class="card poke-card water undefined visible" id="squirtle" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">squirtle</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water undefined visible" id="wartortle" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">wartortle</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water undefined visible" id="blastoise" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">blastoise</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card bug undefined visible" id="caterpie" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">caterpie</div><div class="row type"><div class="bug">bug</div></div></div>
          <div class="card poke-card bug undefined visible" id="metapod" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">metapod</div><div class="row type"><div class="bug">bug</div></div></div>
          <div class="card poke-card bug flying visible" id="butterfree" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">butterfree</div><div class="row type"><div class="bug">bug</div><div class="flying">flying</div></div></div>
          <div class="card poke-card bug poison visible" id="weedle" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">weedle</div><div class="row type"><div class="bug">bug</div><div class="poison">poison</div></div></div>
          <div class="card poke-card bug poison visible" id="kakuna" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">kakuna</div><div class="row type"><div class="bug">bug</div><div class="poison">poison</div></div></div>
          <div class="card poke-card bug poison visible" id="beedrill" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">beedrill</div><div class="row type"><div class="bug">bug</div><div class="poison">poison</div></div></div>
          <div class="card poke-card normal flying visible" id="pidgey" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">pidgey</div><div class="row type"><div class="normal">normal</div><div class="flying">flying</div></div></div>
          <div class="card poke-card normal flying visible" id="pidgeotto" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">pidgeotto</div><div class="row type"><div class="normal">normal</div><div class="flying">flying</div></div></div>
          <div class="card poke-card normal flying visible" id="pidgeot" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">pidgeot</div><div class="row type"><div class="normal">normal</div><div class="flying">flying</div></div></div>
          <div class="card poke-card normal undefined visible" id="rattata" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">rattata</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card normal undefined visible" id="raticate" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">raticate</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card normal flying visible" id="spearow" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">spearow</div><div class="row type"><div class="normal">normal</div><div class="flying">flying</div></div></div>
          <div class="card poke-card normal flying visible" id="fearow" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">fearow</div><div class="row type"><div class="normal">normal</div><div class="flying">flying</div></div></div>
          <div class="card poke-card poison undefined visible" id="ekans" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">ekans</div><div class="row type"><div class="poison">poison</div></div></div>
          <div class="card poke-card poison undefined visible" id="arbok" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">arbok</div><div class="row type"><div class="poison">poison</div></div></div>
          <div class="card poke-card electric undefined visible" id="pikachu" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">pikachu</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card electric undefined visible" id="raichu" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">raichu</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card ground undefined visible" id="sandshrew" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">sandshrew</div><div class="row type"><div class="ground">ground</div></div></div>
          <div class="card poke-card ground undefined visible" id="sandslash" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">sandslash</div><div class="row type"><div class="ground">ground</div></div></div>
          <div class="card poke-card poison undefined visible" id="nidoran-f" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">nidoran-f</div><div class="row type"><div class="poison">poison</div></div></div>
          <div class="card poke-card poison undefined visible" id="nidorina" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">nidorina</div><div class="row type"><div class="poison">poison</div></div></div>
          <div class="card poke-card poison ground visible" id="nidoqueen" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">nidoqueen</div><div class="row type"><div class="poison">poison</div><div class="ground">ground</div></div></div>
          <div class="card poke-card poison undefined visible" id="nidoran-m" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">nidoran-m</div><div class="row type"><div class="poison">poison</div></div></div>
          <div class="card poke-card poison undefined visible" id="nidorino" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">nidorino</div><div class="row type"><div class="poison">poison</div></div></div>
          <div class="card poke-card poison ground visible" id="nidoking" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">nidoking</div><div class="row type"><div class="poison">poison</div><div class="ground">ground</div></div></div>
          <div class="card poke-card fairy undefined visible" id="clefairy" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">clefairy</div><div class="row type"><div class="fairy">fairy</div></div></div>
          <div class="card poke-card fairy undefined visible" id="clefable" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">clefable</div><div class="row type"><div class="fairy">fairy</div></div></div>
          <div class="card poke-card fire undefined visible" id="vulpix" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">vulpix</div><div class="row type"><div class="fire">fire</div></div></div>
          <div class="card poke-card fire undefined visible" id="ninetales" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">ninetales</div><div class="row type"><div class="fire">fire</div></div></div>
          <div class="card poke-card normal fairy visible" id="jigglypuff" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">jigglypuff</div><div class="row type"><div class="normal">normal</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card normal fairy visible" id="wigglytuff" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">wigglytuff</div><div class="row type"><div class="normal">normal</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card poison flying visible" id="zubat" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">zubat</div><div class="row type"><div class="poison">poison</div><div class="flying">flying</div></div></div>
          <div class="card poke-card poison flying visible" id="golbat" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">golbat</div><div class="row type"><div class="poison">poison</div><div class="flying">flying</div></div></div>
          <div class="card poke-card grass poison visible" id="oddish" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">oddish</div><div class="row type"><div class="grass">grass</div><div class="poison">poison</div></div></div>
          <div class="card poke-card grass poison visible" id="gloom" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">gloom</div><div class="row type"><div class="grass">grass</div><div class="poison">poison</div></div></div>
          <div class="card poke-card grass poison visible" id="vileplume" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">vileplume</div><div class="row type"><div class="grass">grass</div><div class="poison">poison</div></div></div>
          <div class="card poke-card bug grass visible" id="paras" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">paras</div><div class="row type"><div class="bug">bug</div><div class="grass">grass</div></div></div>
          <div class="card poke-card bug grass visible" id="parasect" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">parasect</div><div class="row type"><div class="bug">bug</div><div class="grass">grass</div></div></div>
          <div class="card poke-card bug poison visible" id="venonat" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">venonat</div><div class="row type"><div class="bug">bug</div><div class="poison">poison</div></div></div>
          <div class="card poke-card bug poison visible" id="venomoth" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">venomoth</div><div class="row type"><div class="bug">bug</div><div class="poison">poison</div></div></div>
          <div class="card poke-card ground undefined visible" id="diglett" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">diglett</div><div class="row type"><div class="ground">ground</div></div></div>
          <div class="card poke-card ground undefined visible" id="dugtrio" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">dugtrio</div><div class="row type"><div class="ground">ground</div></div></div>
          <div class="card poke-card normal undefined visible" id="meowth" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">meowth</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card normal undefined visible" id="persian" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">persian</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card water undefined visible" id="psyduck" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">psyduck</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water undefined visible" id="golduck" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">golduck</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card fighting undefined visible" id="mankey" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">mankey</div><div class="row type"><div class="fighting">fighting</div></div></div>
          <div class="card poke-card fighting undefined visible" id="primeape" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">primeape</div><div class="row type"><div class="fighting">fighting</div></div></div>
          <div class="card poke-card fire undefined visible" id="growlithe" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">growlithe</div><div class="row type"><div class="fire">fire</div></div></div>
          <div class="card poke-card fire undefined visible" id="arcanine" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">arcanine</div><div class="row type"><div class="fire">fire</div></div></div>
          <div class="card poke-card water undefined visible" id="poliwag" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">poliwag</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water undefined visible" id="poliwhirl" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">poliwhirl</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water fighting visible" id="poliwrath" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">poliwrath</div><div class="row type"><div class="water">water</div><div class="fighting">fighting</div></div></div>
          <div class="card poke-card psychic undefined visible" id="abra" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">abra</div><div class="row type"><div class="psychic">psychic</div></div></div>
          <div class="card poke-card psychic undefined visible" id="kadabra" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">kadabra</div><div class="row type"><div class="psychic">psychic</div></div></div>
          <div class="card poke-card psychic undefined visible" id="alakazam" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">alakazam</div><div class="row type"><div class="psychic">psychic</div></div></div>
          <div class="card poke-card fighting undefined visible" id="machop" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">machop</div><div class="row type"><div class="fighting">fighting</div></div></div>
          <div class="card poke-card fighting undefined visible" id="machoke" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">machoke</div><div class="row type"><div class="fighting">fighting</div></div></div>
          <div class="card poke-card fighting undefined visible" id="machamp" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">machamp</div><div class="row type"><div class="fighting">fighting</div></div></div>
          <div class="card poke-card grass poison visible" id="bellsprout" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">bellsprout</div><div class="row type"><div class="grass">grass</div><div class="poison">poison</div></div></div>
          <div class="card poke-card grass poison visible" id="weepinbell" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">weepinbell</div><div class="row type"><div class="grass">grass</div><div class="poison">poison</div></div></div>
          <div class="card poke-card grass poison visible" id="victreebel" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">victreebel</div><div class="row type"><div class="grass">grass</div><div class="poison">poison</div></div></div>
          <div class="card poke-card water poison visible" id="tentacool" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">tentacool</div><div class="row type"><div class="water">water</div><div class="poison">poison</div></div></div>
          <div class="card poke-card water poison visible" id="tentacruel" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">tentacruel</div><div class="row type"><div class="water">water</div><div class="poison">poison</div></div></div>
          <div class="card poke-card rock ground visible" id="geodude" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">geodude</div><div class="row type"><div class="rock">rock</div><div class="ground">ground</div></div></div>
          <div class="card poke-card rock ground visible" id="graveler" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">graveler</div><div class="row type"><div class="rock">rock</div><div class="ground">ground</div></div></div>
          <div class="card poke-card rock ground visible" id="golem" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">golem</div><div class="row type"><div class="rock">rock</div><div class="ground">ground</div></div></div>
          <div class="card poke-card fire undefined visible" id="ponyta" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">ponyta</div><div class="row type"><div class="fire">fire</div></div></div>
          <div class="card poke-card fire undefined visible" id="rapidash" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">rapidash</div><div class="row type"><div class="fire">fire</div></div></div>
          <div class="card poke-card water psychic visible" id="slowpoke" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">slowpoke</div><div class="row type"><div class="water">water</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card water psychic visible" id="slowbro" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">slowbro</div><div class="row type"><div class="water">water</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card electric steel visible" id="magnemite" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">magnemite</div><div class="row type"><div class="electric">electric</div><div class="steel">steel</div></div></div>
          <div class="card poke-card electric steel visible" id="magneton" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">magneton</div><div class="row type"><div class="electric">electric</div><div class="steel">steel</div></div></div>
          <div class="card poke-card normal flying visible" id="farfetchd" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">farfetchd</div><div class="row type"><div class="normal">normal</div><div class="flying">flying</div></div></div>
          <div class="card poke-card normal flying visible" id="doduo" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">doduo</div><div class="row type"><div class="normal">normal</div><div class="flying">flying</div></div></div>
          <div class="card poke-card normal flying visible" id="dodrio" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">dodrio</div><div class="row type"><div class="normal">normal</div><div class="flying">flying</div></div></div>
          <div class="card poke-card water undefined visible" id="seel" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">seel</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water ice visible" id="dewgong" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">dewgong</div><div class="row type"><div class="water">water</div><div class="ice">ice</div></div></div>
          <div class="card poke-card poison undefined visible" id="grimer" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">grimer</div><div class="row type"><div class="poison">poison</div></div></div>
          <div class="card poke-card poison undefined visible" id="muk" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">muk</div><div class="row type"><div class="poison">poison</div></div></div>
          <div class="card poke-card water undefined visible" id="shellder" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">shellder</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water ice visible" id="cloyster" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">cloyster</div><div class="row type"><div class="water">water</div><div class="ice">ice</div></div></div>
          <div class="card poke-card ghost poison visible" id="gastly" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">gastly</div><div class="row type"><div class="ghost">ghost</div><div class="poison">poison</div></div></div>
          <div class="card poke-card ghost poison visible" id="haunter" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">haunter</div><div class="row type"><div class="ghost">ghost</div><div class="poison">poison</div></div></div>
          <div class="card poke-card ghost poison visible" id="gengar" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">gengar</div><div class="row type"><div class="ghost">ghost</div><div class="poison">poison</div></div></div>
          <div class="card poke-card rock ground visible" id="onix" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">onix</div><div class="row type"><div class="rock">rock</div><div class="ground">ground</div></div></div>
          <div class="card poke-card psychic undefined visible" id="drowzee" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">drowzee</div><div class="row type"><div class="psychic">psychic</div></div></div>
          <div class="card poke-card psychic undefined visible" id="hypno" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">hypno</div><div class="row type"><div class="psychic">psychic</div></div></div>
          <div class="card poke-card water undefined visible" id="krabby" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">krabby</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water undefined visible" id="kingler" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">kingler</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card electric undefined visible" id="voltorb" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">voltorb</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card electric undefined visible" id="electrode" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">electrode</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card grass psychic visible" id="exeggcute" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">exeggcute</div><div class="row type"><div class="grass">grass</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card grass psychic visible" id="exeggutor" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">exeggutor</div><div class="row type"><div class="grass">grass</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card ground undefined visible" id="cubone" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">cubone</div><div class="row type"><div class="ground">ground</div></div></div>
          <div class="card poke-card ground undefined visible" id="marowak" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">marowak</div><div class="row type"><div class="ground">ground</div></div></div>
          <div class="card poke-card fighting undefined visible" id="hitmonlee" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">hitmonlee</div><div class="row type"><div class="fighting">fighting</div></div></div>
          <div class="card poke-card fighting undefined visible" id="hitmonchan" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">hitmonchan</div><div class="row type"><div class="fighting">fighting</div></div></div>
          <div class="card poke-card normal undefined visible" id="lickitung" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">lickitung</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card poison undefined visible" id="koffing" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">koffing</div><div class="row type"><div class="poison">poison</div></div></div>
          <div class="card poke-card poison undefined visible" id="weezing" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">weezing</div><div class="row type"><div class="poison">poison</div></div></div>
          <div class="card poke-card ground rock visible" id="rhyhorn" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">rhyhorn</div><div class="row type"><div class="ground">ground</div><div class="rock">rock</div></div></div>
          <div class="card poke-card ground rock visible" id="rhydon" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">rhydon</div><div class="row type"><div class="ground">ground</div><div class="rock">rock</div></div></div>
          <div class="card poke-card normal undefined visible" id="chansey" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">chansey</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card grass undefined visible" id="tangela" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">tangela</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card normal undefined visible" id="kangaskhan" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">kangaskhan</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card water undefined visible" id="horsea" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">horsea</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water undefined visible" id="seadra" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">seadra</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water undefined visible" id="goldeen" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">goldeen</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water undefined visible" id="seaking" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">seaking</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water undefined visible" id="staryu" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">staryu</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water psychic visible" id="starmie" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">starmie</div><div class="row type"><div class="water">water</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card psychic fairy visible" id="mr-mime" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">mr-mime</div><div class="row type"><div class="psychic">psychic</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card bug flying visible" id="scyther" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">scyther</div><div class="row type"><div class="bug">bug</div><div class="flying">flying</div></div></div>
          <div class="card poke-card ice psychic visible" id="jynx" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">jynx</div><div class="row type"><div class="ice">ice</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card electric undefined visible" id="electabuzz" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">electabuzz</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card fire undefined visible" id="magmar" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">magmar</div><div class="row type"><div class="fire">fire</div></div></div>
          <div class="card poke-card bug undefined visible" id="pinsir" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">pinsir</div><div class="row type"><div class="bug">bug</div></div></div>
          <div class="card poke-card normal undefined visible" id="tauros" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">tauros</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card water undefined visible" id="magikarp" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">magikarp</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water flying visible" id="gyarados" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">gyarados</div><div class="row type"><div class="water">water</div><div class="flying">flying</div></div></div>
          <div class="card poke-card water ice visible" id="lapras" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">lapras</div><div class="row type"><div class="water">water</div><div class="ice">ice</div></div></div>
          <div class="card poke-card normal undefined visible" id="ditto" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">ditto</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card normal undefined visible" id="eevee" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">eevee</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card water undefined visible" id="vaporeon" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">vaporeon</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card electric undefined visible" id="jolteon" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">jolteon</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card fire undefined visible" id="flareon" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">flareon</div><div class="row type"><div class="fire">fire</div></div></div>
          <div class="card poke-card normal undefined visible" id="porygon" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">porygon</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card rock water visible" id="omanyte" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">omanyte</div><div class="row type"><div class="rock">rock</div><div class="water">water</div></div></div>
          <div class="card poke-card rock water visible" id="omastar" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">omastar</div><div class="row type"><div class="rock">rock</div><div class="water">water</div></div></div>
          <div class="card poke-card rock water visible" id="kabuto" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">kabuto</div><div class="row type"><div class="rock">rock</div><div class="water">water</div></div></div>
          <div class="card poke-card rock water visible" id="kabutops" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">kabutops</div><div class="row type"><div class="rock">rock</div><div class="water">water</div></div></div>
          <div class="card poke-card rock flying visible" id="aerodactyl" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">aerodactyl</div><div class="row type"><div class="rock">rock</div><div class="flying">flying</div></div></div>
          <div class="card poke-card normal undefined visible" id="snorlax" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">snorlax</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card ice flying visible" id="articuno" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">articuno</div><div class="row type"><div class="ice">ice</div><div class="flying">flying</div></div></div>
          <div class="card poke-card electric flying visible" id="zapdos" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">zapdos</div><div class="row type"><div class="electric">electric</div><div class="flying">flying</div></div></div>
          <div class="card poke-card fire flying visible" id="moltres" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">moltres</div><div class="row type"><div class="fire">fire</div><div class="flying">flying</div></div></div>
          <div class="card poke-card dragon undefined visible" id="dratini" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">dratini</div><div class="row type"><div class="dragon">dragon</div></div></div>
          <div class="card poke-card dragon undefined visible" id="dragonair" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">dragonair</div><div class="row type"><div class="dragon">dragon</div></div></div>
          <div class="card poke-card dragon flying visible" id="dragonite" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">dragonite</div><div class="row type"><div class="dragon">dragon</div><div class="flying">flying</div></div></div>
          <div class="card poke-card psychic undefined visible" id="mewtwo" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">mewtwo</div><div class="row type"><div class="psychic">psychic</div></div></div>
          <div class="card poke-card psychic undefined visible" id="mew" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">mew</div><div class="row type"><div class="psychic">psychic</div></div></div>
          <div class="card poke-card grass undefined visible" id="chikorita" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">chikorita</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card grass undefined visible" id="bayleef" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/153.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">bayleef</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card grass undefined visible" id="meganium" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/154.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">meganium</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card fire undefined visible" id="cyndaquil" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">cyndaquil</div><div class="row type"><div class="fire">fire</div></div></div>
          <div class="card poke-card fire undefined visible" id="quilava" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/156.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">quilava</div><div class="row type"><div class="fire">fire</div></div></div>
          <div class="card poke-card fire undefined visible" id="typhlosion" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/157.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">typhlosion</div><div class="row type"><div class="fire">fire</div></div></div>
          <div class="card poke-card water undefined visible" id="totodile" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">totodile</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water undefined visible" id="croconaw" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/159.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">croconaw</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water undefined visible" id="feraligatr" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/160.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">feraligatr</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card normal undefined visible" id="sentret" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/161.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">sentret</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card normal undefined visible" id="furret" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/162.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">furret</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card normal flying visible" id="hoothoot" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/163.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">hoothoot</div><div class="row type"><div class="normal">normal</div><div class="flying">flying</div></div></div>
          <div class="card poke-card normal flying visible" id="noctowl" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/164.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">noctowl</div><div class="row type"><div class="normal">normal</div><div class="flying">flying</div></div></div>
          <div class="card poke-card bug flying visible" id="ledyba" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/165.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">ledyba</div><div class="row type"><div class="bug">bug</div><div class="flying">flying</div></div></div>
          <div class="card poke-card bug flying visible" id="ledian" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/166.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">ledian</div><div class="row type"><div class="bug">bug</div><div class="flying">flying</div></div></div>
          <div class="card poke-card bug poison visible" id="spinarak" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/167.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">spinarak</div><div class="row type"><div class="bug">bug</div><div class="poison">poison</div></div></div>
          <div class="card poke-card bug poison visible" id="ariados" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/168.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">ariados</div><div class="row type"><div class="bug">bug</div><div class="poison">poison</div></div></div>
          <div class="card poke-card poison flying visible" id="crobat" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">crobat</div><div class="row type"><div class="poison">poison</div><div class="flying">flying</div></div></div>
          <div class="card poke-card water electric visible" id="chinchou" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/170.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">chinchou</div><div class="row type"><div class="water">water</div><div class="electric">electric</div></div></div>
          <div class="card poke-card water electric visible" id="lanturn" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/171.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">lanturn</div><div class="row type"><div class="water">water</div><div class="electric">electric</div></div></div>
          <div class="card poke-card electric undefined visible" id="pichu" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">pichu</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card fairy undefined visible" id="cleffa" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/173.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">cleffa</div><div class="row type"><div class="fairy">fairy</div></div></div>
          <div class="card poke-card normal fairy visible" id="igglybuff" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/174.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">igglybuff</div><div class="row type"><div class="normal">normal</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card fairy undefined visible" id="togepi" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/175.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">togepi</div><div class="row type"><div class="fairy">fairy</div></div></div>
          <div class="card poke-card fairy flying visible" id="togetic" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/176.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">togetic</div><div class="row type"><div class="fairy">fairy</div><div class="flying">flying</div></div></div>
          <div class="card poke-card psychic flying visible" id="natu" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/177.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">natu</div><div class="row type"><div class="psychic">psychic</div><div class="flying">flying</div></div></div>
          <div class="card poke-card psychic flying visible" id="xatu" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/178.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">xatu</div><div class="row type"><div class="psychic">psychic</div><div class="flying">flying</div></div></div>
          <div class="card poke-card electric undefined visible" id="mareep" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/179.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">mareep</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card electric undefined visible" id="flaaffy" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/180.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">flaaffy</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card electric undefined visible" id="ampharos" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/181.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">ampharos</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card grass undefined visible" id="bellossom" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/182.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">bellossom</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card water fairy visible" id="marill" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/183.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">marill</div><div class="row type"><div class="water">water</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card water fairy visible" id="azumarill" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/184.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">azumarill</div><div class="row type"><div class="water">water</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card rock undefined visible" id="sudowoodo" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/185.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">sudowoodo</div><div class="row type"><div class="rock">rock</div></div></div>
          <div class="card poke-card water undefined visible" id="politoed" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/186.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">politoed</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card grass flying visible" id="hoppip" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/187.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">hoppip</div><div class="row type"><div class="grass">grass</div><div class="flying">flying</div></div></div>
          <div class="card poke-card grass flying visible" id="skiploom" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/188.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">skiploom</div><div class="row type"><div class="grass">grass</div><div class="flying">flying</div></div></div>
          <div class="card poke-card grass flying visible" id="jumpluff" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/189.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">jumpluff</div><div class="row type"><div class="grass">grass</div><div class="flying">flying</div></div></div>
          <div class="card poke-card normal undefined visible" id="aipom" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/190.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">aipom</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card grass undefined visible" id="sunkern" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/191.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">sunkern</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card grass undefined visible" id="sunflora" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/192.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">sunflora</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card bug flying visible" id="yanma" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/193.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">yanma</div><div class="row type"><div class="bug">bug</div><div class="flying">flying</div></div></div>
          <div class="card poke-card water ground visible" id="wooper" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">wooper</div><div class="row type"><div class="water">water</div><div class="ground">ground</div></div></div>
          <div class="card poke-card water ground visible" id="quagsire" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/195.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">quagsire</div><div class="row type"><div class="water">water</div><div class="ground">ground</div></div></div>
          <div class="card poke-card psychic undefined visible" id="espeon" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/196.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">espeon</div><div class="row type"><div class="psychic">psychic</div></div></div>
          <div class="card poke-card dark undefined visible" id="umbreon" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">umbreon</div><div class="row type"><div class="dark">dark</div></div></div>
          <div class="card poke-card dark flying visible" id="murkrow" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/198.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">murkrow</div><div class="row type"><div class="dark">dark</div><div class="flying">flying</div></div></div>
          <div class="card poke-card water psychic visible" id="slowking" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/199.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">slowking</div><div class="row type"><div class="water">water</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card ghost undefined visible" id="misdreavus" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/200.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">misdreavus</div><div class="row type"><div class="ghost">ghost</div></div></div>
          <div class="card poke-card psychic undefined visible" id="unown" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">unown</div><div class="row type"><div class="psychic">psychic</div></div></div>
          <div class="card poke-card psychic undefined visible" id="wobbuffet" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/202.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">wobbuffet</div><div class="row type"><div class="psychic">psychic</div></div></div>
          <div class="card poke-card normal psychic visible" id="girafarig" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/203.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">girafarig</div><div class="row type"><div class="normal">normal</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card bug undefined visible" id="pineco" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/204.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">pineco</div><div class="row type"><div class="bug">bug</div></div></div>
          <div class="card poke-card bug steel visible" id="forretress" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/205.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">forretress</div><div class="row type"><div class="bug">bug</div><div class="steel">steel</div></div></div>
          <div class="card poke-card normal undefined visible" id="dunsparce" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/206.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">dunsparce</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card ground flying visible" id="gligar" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/207.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">gligar</div><div class="row type"><div class="ground">ground</div><div class="flying">flying</div></div></div>
          <div class="card poke-card steel ground visible" id="steelix" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/208.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">steelix</div><div class="row type"><div class="steel">steel</div><div class="ground">ground</div></div></div>
          <div class="card poke-card fairy undefined visible" id="snubbull" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/209.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">snubbull</div><div class="row type"><div class="fairy">fairy</div></div></div>
          <div class="card poke-card fairy undefined visible" id="granbull" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/210.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">granbull</div><div class="row type"><div class="fairy">fairy</div></div></div>
          <div class="card poke-card water poison visible" id="qwilfish" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/211.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">qwilfish</div><div class="row type"><div class="water">water</div><div class="poison">poison</div></div></div>
          <div class="card poke-card bug steel visible" id="scizor" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">scizor</div><div class="row type"><div class="bug">bug</div><div class="steel">steel</div></div></div>
          <div class="card poke-card bug rock visible" id="shuckle" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/213.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">shuckle</div><div class="row type"><div class="bug">bug</div><div class="rock">rock</div></div></div>
          <div class="card poke-card bug fighting visible" id="heracross" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/214.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">heracross</div><div class="row type"><div class="bug">bug</div><div class="fighting">fighting</div></div></div>
          <div class="card poke-card dark ice visible" id="sneasel" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/215.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">sneasel</div><div class="row type"><div class="dark">dark</div><div class="ice">ice</div></div></div>
          <div class="card poke-card normal undefined visible" id="teddiursa" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/216.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">teddiursa</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card normal undefined visible" id="ursaring" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/217.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">ursaring</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card fire undefined visible" id="slugma" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/218.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">slugma</div><div class="row type"><div class="fire">fire</div></div></div>
          <div class="card poke-card fire rock visible" id="magcargo" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/219.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">magcargo</div><div class="row type"><div class="fire">fire</div><div class="rock">rock</div></div></div>
          <div class="card poke-card ice ground visible" id="swinub" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/220.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">swinub</div><div class="row type"><div class="ice">ice</div><div class="ground">ground</div></div></div>
          <div class="card poke-card ice ground visible" id="piloswine" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/221.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">piloswine</div><div class="row type"><div class="ice">ice</div><div class="ground">ground</div></div></div>
          <div class="card poke-card water rock visible" id="corsola" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/222.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">corsola</div><div class="row type"><div class="water">water</div><div class="rock">rock</div></div></div>
          <div class="card poke-card water undefined visible" id="remoraid" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/223.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">remoraid</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water undefined visible" id="octillery" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/224.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">octillery</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card ice flying visible" id="delibird" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/225.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">delibird</div><div class="row type"><div class="ice">ice</div><div class="flying">flying</div></div></div>
          <div class="card poke-card water flying visible" id="mantine" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/226.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">mantine</div><div class="row type"><div class="water">water</div><div class="flying">flying</div></div></div>
          <div class="card poke-card steel flying visible" id="skarmory" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/227.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">skarmory</div><div class="row type"><div class="steel">steel</div><div class="flying">flying</div></div></div>
          <div class="card poke-card dark fire visible" id="houndour" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/228.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">houndour</div><div class="row type"><div class="dark">dark</div><div class="fire">fire</div></div></div>
          <div class="card poke-card dark fire visible" id="houndoom" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/229.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">houndoom</div><div class="row type"><div class="dark">dark</div><div class="fire">fire</div></div></div>
          <div class="card poke-card water dragon visible" id="kingdra" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/230.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">kingdra</div><div class="row type"><div class="water">water</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card ground undefined visible" id="phanpy" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/231.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">phanpy</div><div class="row type"><div class="ground">ground</div></div></div>
          <div class="card poke-card ground undefined visible" id="donphan" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/232.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">donphan</div><div class="row type"><div class="ground">ground</div></div></div>
          <div class="card poke-card normal undefined visible" id="porygon2" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/233.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">porygon2</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card normal undefined visible" id="stantler" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/234.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">stantler</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card normal undefined visible" id="smeargle" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/235.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">smeargle</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card fighting undefined visible" id="tyrogue" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/236.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">tyrogue</div><div class="row type"><div class="fighting">fighting</div></div></div>
          <div class="card poke-card fighting undefined visible" id="hitmontop" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/237.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">hitmontop</div><div class="row type"><div class="fighting">fighting</div></div></div>
          <div class="card poke-card ice psychic visible" id="smoochum" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/238.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">smoochum</div><div class="row type"><div class="ice">ice</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card electric undefined visible" id="elekid" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/239.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">elekid</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card fire undefined visible" id="magby" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/240.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">magby</div><div class="row type"><div class="fire">fire</div></div></div>
          <div class="card poke-card normal undefined visible" id="miltank" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">miltank</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card normal undefined visible" id="blissey" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/242.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">blissey</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card electric undefined visible" id="raikou" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/243.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">raikou</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card fire undefined visible" id="entei" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/244.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">entei</div><div class="row type"><div class="fire">fire</div></div></div>
          <div class="card poke-card water undefined visible" id="suicune" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/245.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">suicune</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card rock ground visible" id="larvitar" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/246.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">larvitar</div><div class="row type"><div class="rock">rock</div><div class="ground">ground</div></div></div>
          <div class="card poke-card rock ground visible" id="pupitar" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/247.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">pupitar</div><div class="row type"><div class="rock">rock</div><div class="ground">ground</div></div></div>
          <div class="card poke-card rock dark visible" id="tyranitar" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/248.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">tyranitar</div><div class="row type"><div class="rock">rock</div><div class="dark">dark</div></div></div>
          <div class="card poke-card psychic flying visible" id="lugia" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">lugia</div><div class="row type"><div class="psychic">psychic</div><div class="flying">flying</div></div></div>
          <div class="card poke-card fire flying visible" id="ho-oh" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/250.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">ho-oh</div><div class="row type"><div class="fire">fire</div><div class="flying">flying</div></div></div>
          <div class="card poke-card psychic grass visible" id="celebi" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/251.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">celebi</div><div class="row type"><div class="psychic">psychic</div><div class="grass">grass</div></div></div>
          <div class="card poke-card grass undefined visible" id="treecko" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">treecko</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card grass undefined visible" id="grovyle" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/253.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">grovyle</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card grass undefined visible" id="sceptile" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/254.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">sceptile</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card fire undefined visible" id="torchic" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">torchic</div><div class="row type"><div class="fire">fire</div></div></div>
          <div class="card poke-card fire fighting visible" id="combusken" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/256.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">combusken</div><div class="row type"><div class="fire">fire</div><div class="fighting">fighting</div></div></div>
          <div class="card poke-card fire fighting visible" id="blaziken" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">blaziken</div><div class="row type"><div class="fire">fire</div><div class="fighting">fighting</div></div></div>
          <div class="card poke-card water undefined visible" id="mudkip" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">mudkip</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water ground visible" id="marshtomp" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/259.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">marshtomp</div><div class="row type"><div class="water">water</div><div class="ground">ground</div></div></div>
          <div class="card poke-card water ground visible" id="swampert" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">swampert</div><div class="row type"><div class="water">water</div><div class="ground">ground</div></div></div>
          <div class="card poke-card dark undefined visible" id="poochyena" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/261.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">poochyena</div><div class="row type"><div class="dark">dark</div></div></div>
          <div class="card poke-card dark undefined visible" id="mightyena" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/262.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">mightyena</div><div class="row type"><div class="dark">dark</div></div></div>
          <div class="card poke-card normal undefined visible" id="zigzagoon" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/263.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">zigzagoon</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card normal undefined visible" id="linoone" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/264.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">linoone</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card bug undefined visible" id="wurmple" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/265.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">wurmple</div><div class="row type"><div class="bug">bug</div></div></div>
          <div class="card poke-card bug undefined visible" id="silcoon" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/266.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">silcoon</div><div class="row type"><div class="bug">bug</div></div></div>
          <div class="card poke-card bug flying visible" id="beautifly" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/267.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">beautifly</div><div class="row type"><div class="bug">bug</div><div class="flying">flying</div></div></div>
          <div class="card poke-card bug undefined visible" id="cascoon" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/268.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">cascoon</div><div class="row type"><div class="bug">bug</div></div></div>
          <div class="card poke-card bug poison visible" id="dustox" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/269.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">dustox</div><div class="row type"><div class="bug">bug</div><div class="poison">poison</div></div></div>
          <div class="card poke-card water grass visible" id="lotad" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/270.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">lotad</div><div class="row type"><div class="water">water</div><div class="grass">grass</div></div></div>
          <div class="card poke-card water grass visible" id="lombre" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/271.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">lombre</div><div class="row type"><div class="water">water</div><div class="grass">grass</div></div></div>
          <div class="card poke-card water grass visible" id="ludicolo" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/272.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">ludicolo</div><div class="row type"><div class="water">water</div><div class="grass">grass</div></div></div>
          <div class="card poke-card grass undefined visible" id="seedot" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/273.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">seedot</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card grass dark visible" id="nuzleaf" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/274.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">nuzleaf</div><div class="row type"><div class="grass">grass</div><div class="dark">dark</div></div></div>
          <div class="card poke-card grass dark visible" id="shiftry" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/275.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">shiftry</div><div class="row type"><div class="grass">grass</div><div class="dark">dark</div></div></div>
          <div class="card poke-card normal flying visible" id="taillow" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/276.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">taillow</div><div class="row type"><div class="normal">normal</div><div class="flying">flying</div></div></div>
          <div class="card poke-card normal flying visible" id="swellow" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/277.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">swellow</div><div class="row type"><div class="normal">normal</div><div class="flying">flying</div></div></div>
          <div class="card poke-card water flying visible" id="wingull" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/278.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">wingull</div><div class="row type"><div class="water">water</div><div class="flying">flying</div></div></div>
          <div class="card poke-card water flying visible" id="pelipper" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/279.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">pelipper</div><div class="row type"><div class="water">water</div><div class="flying">flying</div></div></div>
          <div class="card poke-card psychic fairy visible" id="ralts" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/280.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">ralts</div><div class="row type"><div class="psychic">psychic</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card psychic fairy visible" id="kirlia" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/281.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">kirlia</div><div class="row type"><div class="psychic">psychic</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card psychic fairy visible" id="gardevoir" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">gardevoir</div><div class="row type"><div class="psychic">psychic</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card bug water visible" id="surskit" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/283.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">surskit</div><div class="row type"><div class="bug">bug</div><div class="water">water</div></div></div>
          <div class="card poke-card bug flying visible" id="masquerain" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/284.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">masquerain</div><div class="row type"><div class="bug">bug</div><div class="flying">flying</div></div></div>
          <div class="card poke-card grass undefined visible" id="shroomish" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/285.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">shroomish</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card grass fighting visible" id="breloom" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">breloom</div><div class="row type"><div class="grass">grass</div><div class="fighting">fighting</div></div></div>
          <div class="card poke-card normal undefined visible" id="slakoth" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/287.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">slakoth</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card normal undefined visible" id="vigoroth" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/288.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">vigoroth</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card normal undefined visible" id="slaking" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/289.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">slaking</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card bug ground visible" id="nincada" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/290.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">nincada</div><div class="row type"><div class="bug">bug</div><div class="ground">ground</div></div></div>
          <div class="card poke-card bug flying visible" id="ninjask" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/291.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">ninjask</div><div class="row type"><div class="bug">bug</div><div class="flying">flying</div></div></div>
          <div class="card poke-card bug ghost visible" id="shedinja" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/292.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">shedinja</div><div class="row type"><div class="bug">bug</div><div class="ghost">ghost</div></div></div>
          <div class="card poke-card normal undefined visible" id="whismur" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/293.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">whismur</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card normal undefined visible" id="loudred" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/294.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">loudred</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card normal undefined visible" id="exploud" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/295.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">exploud</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card fighting undefined visible" id="makuhita" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/296.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">makuhita</div><div class="row type"><div class="fighting">fighting</div></div></div>
          <div class="card poke-card fighting undefined visible" id="hariyama" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/297.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">hariyama</div><div class="row type"><div class="fighting">fighting</div></div></div>
          <div class="card poke-card normal fairy visible" id="azurill" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/298.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">azurill</div><div class="row type"><div class="normal">normal</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card rock undefined visible" id="nosepass" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/299.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">nosepass</div><div class="row type"><div class="rock">rock</div></div></div>
          <div class="card poke-card normal undefined visible" id="skitty" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/300.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">skitty</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card normal undefined visible" id="delcatty" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/301.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">delcatty</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card dark ghost visible" id="sableye" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/302.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">sableye</div><div class="row type"><div class="dark">dark</div><div class="ghost">ghost</div></div></div>
          <div class="card poke-card steel fairy visible" id="mawile" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/303.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">mawile</div><div class="row type"><div class="steel">steel</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card steel rock visible" id="aron" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/304.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">aron</div><div class="row type"><div class="steel">steel</div><div class="rock">rock</div></div></div>
          <div class="card poke-card steel rock visible" id="lairon" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/305.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">lairon</div><div class="row type"><div class="steel">steel</div><div class="rock">rock</div></div></div>
          <div class="card poke-card steel rock visible" id="aggron" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/306.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">aggron</div><div class="row type"><div class="steel">steel</div><div class="rock">rock</div></div></div>
          <div class="card poke-card fighting psychic visible" id="meditite" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/307.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">meditite</div><div class="row type"><div class="fighting">fighting</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card fighting psychic visible" id="medicham" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/308.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">medicham</div><div class="row type"><div class="fighting">fighting</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card electric undefined visible" id="electrike" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/309.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">electrike</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card electric undefined visible" id="manectric" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/310.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">manectric</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card electric undefined visible" id="plusle" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/311.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">plusle</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card electric undefined visible" id="minun" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/312.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">minun</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card bug undefined visible" id="volbeat" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/313.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">volbeat</div><div class="row type"><div class="bug">bug</div></div></div>
          <div class="card poke-card bug undefined visible" id="illumise" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/314.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">illumise</div><div class="row type"><div class="bug">bug</div></div></div>
          <div class="card poke-card grass poison visible" id="roselia" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/315.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">roselia</div><div class="row type"><div class="grass">grass</div><div class="poison">poison</div></div></div>
          <div class="card poke-card poison undefined visible" id="gulpin" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/316.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">gulpin</div><div class="row type"><div class="poison">poison</div></div></div>
          <div class="card poke-card poison undefined visible" id="swalot" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/317.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">swalot</div><div class="row type"><div class="poison">poison</div></div></div>
          <div class="card poke-card water dark visible" id="carvanha" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/318.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">carvanha</div><div class="row type"><div class="water">water</div><div class="dark">dark</div></div></div>
          <div class="card poke-card water dark visible" id="sharpedo" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/319.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">sharpedo</div><div class="row type"><div class="water">water</div><div class="dark">dark</div></div></div>
          <div class="card poke-card water undefined visible" id="wailmer" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/320.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">wailmer</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water undefined visible" id="wailord" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/321.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">wailord</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card fire ground visible" id="numel" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/322.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">numel</div><div class="row type"><div class="fire">fire</div><div class="ground">ground</div></div></div>
          <div class="card poke-card fire ground visible" id="camerupt" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/323.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">camerupt</div><div class="row type"><div class="fire">fire</div><div class="ground">ground</div></div></div>
          <div class="card poke-card fire undefined visible" id="torkoal" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/324.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">torkoal</div><div class="row type"><div class="fire">fire</div></div></div>
          <div class="card poke-card psychic undefined visible" id="spoink" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/325.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">spoink</div><div class="row type"><div class="psychic">psychic</div></div></div>
          <div class="card poke-card psychic undefined visible" id="grumpig" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/326.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">grumpig</div><div class="row type"><div class="psychic">psychic</div></div></div>
          <div class="card poke-card normal undefined visible" id="spinda" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/327.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">spinda</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card ground undefined visible" id="trapinch" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/328.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">trapinch</div><div class="row type"><div class="ground">ground</div></div></div>
          <div class="card poke-card ground dragon visible" id="vibrava" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/329.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">vibrava</div><div class="row type"><div class="ground">ground</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card ground dragon visible" id="flygon" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/330.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">flygon</div><div class="row type"><div class="ground">ground</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card grass undefined visible" id="cacnea" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/331.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">cacnea</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card grass dark visible" id="cacturne" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/332.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">cacturne</div><div class="row type"><div class="grass">grass</div><div class="dark">dark</div></div></div>
          <div class="card poke-card normal flying visible" id="swablu" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/333.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">swablu</div><div class="row type"><div class="normal">normal</div><div class="flying">flying</div></div></div>
          <div class="card poke-card dragon flying visible" id="altaria" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/334.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">altaria</div><div class="row type"><div class="dragon">dragon</div><div class="flying">flying</div></div></div>
          <div class="card poke-card normal undefined visible" id="zangoose" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/335.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">zangoose</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card poison undefined visible" id="seviper" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/336.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">seviper</div><div class="row type"><div class="poison">poison</div></div></div>
          <div class="card poke-card rock psychic visible" id="lunatone" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/337.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">lunatone</div><div class="row type"><div class="rock">rock</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card rock psychic visible" id="solrock" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/338.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">solrock</div><div class="row type"><div class="rock">rock</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card water ground visible" id="barboach" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/339.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">barboach</div><div class="row type"><div class="water">water</div><div class="ground">ground</div></div></div>
          <div class="card poke-card water ground visible" id="whiscash" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/340.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">whiscash</div><div class="row type"><div class="water">water</div><div class="ground">ground</div></div></div>
          <div class="card poke-card water undefined visible" id="corphish" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/341.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">corphish</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water dark visible" id="crawdaunt" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/342.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">crawdaunt</div><div class="row type"><div class="water">water</div><div class="dark">dark</div></div></div>
          <div class="card poke-card ground psychic visible" id="baltoy" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/343.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">baltoy</div><div class="row type"><div class="ground">ground</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card ground psychic visible" id="claydol" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/344.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">claydol</div><div class="row type"><div class="ground">ground</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card rock grass visible" id="lileep" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/345.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">lileep</div><div class="row type"><div class="rock">rock</div><div class="grass">grass</div></div></div>
          <div class="card poke-card rock grass visible" id="cradily" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/346.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">cradily</div><div class="row type"><div class="rock">rock</div><div class="grass">grass</div></div></div>
          <div class="card poke-card rock bug visible" id="anorith" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/347.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">anorith</div><div class="row type"><div class="rock">rock</div><div class="bug">bug</div></div></div>
          <div class="card poke-card rock bug visible" id="armaldo" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/348.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">armaldo</div><div class="row type"><div class="rock">rock</div><div class="bug">bug</div></div></div>
          <div class="card poke-card water undefined visible" id="feebas" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/349.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">feebas</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water undefined visible" id="milotic" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">milotic</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card normal undefined visible" id="castform" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/351.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">castform</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card normal undefined visible" id="kecleon" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/352.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">kecleon</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card ghost undefined visible" id="shuppet" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/353.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">shuppet</div><div class="row type"><div class="ghost">ghost</div></div></div>
          <div class="card poke-card ghost undefined visible" id="banette" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/354.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">banette</div><div class="row type"><div class="ghost">ghost</div></div></div>
          <div class="card poke-card ghost undefined visible" id="duskull" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/355.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">duskull</div><div class="row type"><div class="ghost">ghost</div></div></div>
          <div class="card poke-card ghost undefined visible" id="dusclops" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/356.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">dusclops</div><div class="row type"><div class="ghost">ghost</div></div></div>
          <div class="card poke-card grass flying visible" id="tropius" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/357.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">tropius</div><div class="row type"><div class="grass">grass</div><div class="flying">flying</div></div></div>
          <div class="card poke-card psychic undefined visible" id="chimecho" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/358.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">chimecho</div><div class="row type"><div class="psychic">psychic</div></div></div>
          <div class="card poke-card dark undefined visible" id="absol" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/359.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">absol</div><div class="row type"><div class="dark">dark</div></div></div>
          <div class="card poke-card psychic undefined visible" id="wynaut" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/360.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">wynaut</div><div class="row type"><div class="psychic">psychic</div></div></div>
          <div class="card poke-card ice undefined visible" id="snorunt" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/361.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">snorunt</div><div class="row type"><div class="ice">ice</div></div></div>
          <div class="card poke-card ice undefined visible" id="glalie" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/362.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">glalie</div><div class="row type"><div class="ice">ice</div></div></div>
          <div class="card poke-card ice water visible" id="spheal" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/363.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">spheal</div><div class="row type"><div class="ice">ice</div><div class="water">water</div></div></div>
          <div class="card poke-card ice water visible" id="sealeo" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/364.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">sealeo</div><div class="row type"><div class="ice">ice</div><div class="water">water</div></div></div>
          <div class="card poke-card ice water visible" id="walrein" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/365.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">walrein</div><div class="row type"><div class="ice">ice</div><div class="water">water</div></div></div>
          <div class="card poke-card water undefined visible" id="clamperl" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/366.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">clamperl</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water undefined visible" id="huntail" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/367.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">huntail</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water undefined visible" id="gorebyss" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/368.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">gorebyss</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water rock visible" id="relicanth" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/369.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">relicanth</div><div class="row type"><div class="water">water</div><div class="rock">rock</div></div></div>
          <div class="card poke-card water undefined visible" id="luvdisc" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/370.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">luvdisc</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card dragon undefined visible" id="bagon" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/371.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">bagon</div><div class="row type"><div class="dragon">dragon</div></div></div>
          <div class="card poke-card dragon undefined visible" id="shelgon" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/372.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">shelgon</div><div class="row type"><div class="dragon">dragon</div></div></div>
          <div class="card poke-card dragon flying visible" id="salamence" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">salamence</div><div class="row type"><div class="dragon">dragon</div><div class="flying">flying</div></div></div>
          <div class="card poke-card steel psychic visible" id="beldum" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/374.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">beldum</div><div class="row type"><div class="steel">steel</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card steel psychic visible" id="metang" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/375.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">metang</div><div class="row type"><div class="steel">steel</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card steel psychic visible" id="metagross" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/376.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">metagross</div><div class="row type"><div class="steel">steel</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card rock undefined visible" id="regirock" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/377.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">regirock</div><div class="row type"><div class="rock">rock</div></div></div>
          <div class="card poke-card ice undefined visible" id="regice" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/378.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">regice</div><div class="row type"><div class="ice">ice</div></div></div>
          <div class="card poke-card steel undefined visible" id="registeel" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/379.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">registeel</div><div class="row type"><div class="steel">steel</div></div></div>
          <div class="card poke-card dragon psychic visible" id="latias" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/380.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">latias</div><div class="row type"><div class="dragon">dragon</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card dragon psychic visible" id="latios" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/381.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">latios</div><div class="row type"><div class="dragon">dragon</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card water undefined visible" id="kyogre" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/382.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">kyogre</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card ground undefined visible" id="groudon" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/383.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">groudon</div><div class="row type"><div class="ground">ground</div></div></div>
          <div class="card poke-card dragon flying visible" id="rayquaza" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">rayquaza</div><div class="row type"><div class="dragon">dragon</div><div class="flying">flying</div></div></div>
          <div class="card poke-card steel psychic visible" id="jirachi" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/385.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">jirachi</div><div class="row type"><div class="steel">steel</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card psychic undefined visible" id="deoxys-normal" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/386.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">deoxys-normal</div><div class="row type"><div class="psychic">psychic</div></div></div>
          <div class="card poke-card grass undefined visible" id="turtwig" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">turtwig</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card grass undefined visible" id="grotle" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/388.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">grotle</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card grass ground visible" id="torterra" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/389.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">torterra</div><div class="row type"><div class="grass">grass</div><div class="ground">ground</div></div></div>
          <div class="card poke-card fire undefined visible" id="chimchar" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">chimchar</div><div class="row type"><div class="fire">fire</div></div></div>
          <div class="card poke-card fire fighting visible" id="monferno" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/391.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">monferno</div><div class="row type"><div class="fire">fire</div><div class="fighting">fighting</div></div></div>
          <div class="card poke-card fire fighting visible" id="infernape" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">infernape</div><div class="row type"><div class="fire">fire</div><div class="fighting">fighting</div></div></div>
          <div class="card poke-card water undefined visible" id="piplup" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">piplup</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water undefined visible" id="prinplup" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/394.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">prinplup</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water steel visible" id="empoleon" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/395.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">empoleon</div><div class="row type"><div class="water">water</div><div class="steel">steel</div></div></div>
          <div class="card poke-card normal flying visible" id="starly" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/396.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">starly</div><div class="row type"><div class="normal">normal</div><div class="flying">flying</div></div></div>
          <div class="card poke-card normal flying visible" id="staravia" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/397.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">staravia</div><div class="row type"><div class="normal">normal</div><div class="flying">flying</div></div></div>
          <div class="card poke-card normal flying visible" id="staraptor" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/398.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">staraptor</div><div class="row type"><div class="normal">normal</div><div class="flying">flying</div></div></div>
          <div class="card poke-card normal undefined visible" id="bidoof" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/399.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">bidoof</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card normal water visible" id="bibarel" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/400.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">bibarel</div><div class="row type"><div class="normal">normal</div><div class="water">water</div></div></div>
          <div class="card poke-card bug undefined visible" id="kricketot" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/401.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">kricketot</div><div class="row type"><div class="bug">bug</div></div></div>
          <div class="card poke-card bug undefined visible" id="kricketune" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/402.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">kricketune</div><div class="row type"><div class="bug">bug</div></div></div>
          <div class="card poke-card electric undefined visible" id="shinx" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/403.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">shinx</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card electric undefined visible" id="luxio" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/404.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">luxio</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card electric undefined visible" id="luxray" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/405.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">luxray</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card grass poison visible" id="budew" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/406.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">budew</div><div class="row type"><div class="grass">grass</div><div class="poison">poison</div></div></div>
          <div class="card poke-card grass poison visible" id="roserade" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/407.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">roserade</div><div class="row type"><div class="grass">grass</div><div class="poison">poison</div></div></div>
          <div class="card poke-card rock undefined visible" id="cranidos" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/408.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">cranidos</div><div class="row type"><div class="rock">rock</div></div></div>
          <div class="card poke-card rock undefined visible" id="rampardos" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/409.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">rampardos</div><div class="row type"><div class="rock">rock</div></div></div>
          <div class="card poke-card rock steel visible" id="shieldon" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/410.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">shieldon</div><div class="row type"><div class="rock">rock</div><div class="steel">steel</div></div></div>
          <div class="card poke-card rock steel visible" id="bastiodon" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/411.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">bastiodon</div><div class="row type"><div class="rock">rock</div><div class="steel">steel</div></div></div>
          <div class="card poke-card bug undefined visible" id="burmy" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/412.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">burmy</div><div class="row type"><div class="bug">bug</div></div></div>
          <div class="card poke-card bug grass visible" id="wormadam-plant" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">wormadam-plant</div><div class="row type"><div class="bug">bug</div><div class="grass">grass</div></div></div>
          <div class="card poke-card bug flying visible" id="mothim" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/414.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">mothim</div><div class="row type"><div class="bug">bug</div><div class="flying">flying</div></div></div>
          <div class="card poke-card bug flying visible" id="combee" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/415.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">combee</div><div class="row type"><div class="bug">bug</div><div class="flying">flying</div></div></div>
          <div class="card poke-card bug flying visible" id="vespiquen" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/416.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">vespiquen</div><div class="row type"><div class="bug">bug</div><div class="flying">flying</div></div></div>
          <div class="card poke-card electric undefined visible" id="pachirisu" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/417.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">pachirisu</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card water undefined visible" id="buizel" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/418.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">buizel</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water undefined visible" id="floatzel" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/419.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">floatzel</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card grass undefined visible" id="cherubi" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/420.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">cherubi</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card grass undefined visible" id="cherrim" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/421.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">cherrim</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card water undefined visible" id="shellos" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/422.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">shellos</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water ground visible" id="gastrodon" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/423.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">gastrodon</div><div class="row type"><div class="water">water</div><div class="ground">ground</div></div></div>
          <div class="card poke-card normal undefined visible" id="ambipom" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/424.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">ambipom</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card ghost flying visible" id="drifloon" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/425.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">drifloon</div><div class="row type"><div class="ghost">ghost</div><div class="flying">flying</div></div></div>
          <div class="card poke-card ghost flying visible" id="drifblim" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/426.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">drifblim</div><div class="row type"><div class="ghost">ghost</div><div class="flying">flying</div></div></div>
          <div class="card poke-card normal undefined visible" id="buneary" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/427.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">buneary</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card normal undefined visible" id="lopunny" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/428.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">lopunny</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card ghost undefined visible" id="mismagius" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/429.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">mismagius</div><div class="row type"><div class="ghost">ghost</div></div></div>
          <div class="card poke-card dark flying visible" id="honchkrow" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/430.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">honchkrow</div><div class="row type"><div class="dark">dark</div><div class="flying">flying</div></div></div>
          <div class="card poke-card normal undefined visible" id="glameow" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/431.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">glameow</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card normal undefined visible" id="purugly" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/432.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">purugly</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card psychic undefined visible" id="chingling" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/433.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">chingling</div><div class="row type"><div class="psychic">psychic</div></div></div>
          <div class="card poke-card poison dark visible" id="stunky" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/434.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">stunky</div><div class="row type"><div class="poison">poison</div><div class="dark">dark</div></div></div>
          <div class="card poke-card poison dark visible" id="skuntank" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/435.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">skuntank</div><div class="row type"><div class="poison">poison</div><div class="dark">dark</div></div></div>
          <div class="card poke-card steel psychic visible" id="bronzor" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/436.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">bronzor</div><div class="row type"><div class="steel">steel</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card steel psychic visible" id="bronzong" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/437.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">bronzong</div><div class="row type"><div class="steel">steel</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card rock undefined visible" id="bonsly" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/438.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">bonsly</div><div class="row type"><div class="rock">rock</div></div></div>
          <div class="card poke-card psychic fairy visible" id="mime-jr" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/439.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">mime-jr</div><div class="row type"><div class="psychic">psychic</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card normal undefined visible" id="happiny" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/440.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">happiny</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card normal flying visible" id="chatot" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/441.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">chatot</div><div class="row type"><div class="normal">normal</div><div class="flying">flying</div></div></div>
          <div class="card poke-card ghost dark visible" id="spiritomb" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/442.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">spiritomb</div><div class="row type"><div class="ghost">ghost</div><div class="dark">dark</div></div></div>
          <div class="card poke-card dragon ground visible" id="gible" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/443.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">gible</div><div class="row type"><div class="dragon">dragon</div><div class="ground">ground</div></div></div>
          <div class="card poke-card dragon ground visible" id="gabite" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/444.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">gabite</div><div class="row type"><div class="dragon">dragon</div><div class="ground">ground</div></div></div>
          <div class="card poke-card dragon ground visible" id="garchomp" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">garchomp</div><div class="row type"><div class="dragon">dragon</div><div class="ground">ground</div></div></div>
          <div class="card poke-card normal undefined visible" id="munchlax" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/446.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">munchlax</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card fighting undefined visible" id="riolu" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/447.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">riolu</div><div class="row type"><div class="fighting">fighting</div></div></div>
          <div class="card poke-card fighting steel visible" id="lucario" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">lucario</div><div class="row type"><div class="fighting">fighting</div><div class="steel">steel</div></div></div>
          <div class="card poke-card ground undefined visible" id="hippopotas" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/449.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">hippopotas</div><div class="row type"><div class="ground">ground</div></div></div>
          <div class="card poke-card ground undefined visible" id="hippowdon" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/450.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">hippowdon</div><div class="row type"><div class="ground">ground</div></div></div>
          <div class="card poke-card poison bug visible" id="skorupi" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/451.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">skorupi</div><div class="row type"><div class="poison">poison</div><div class="bug">bug</div></div></div>
          <div class="card poke-card poison dark visible" id="drapion" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/452.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">drapion</div><div class="row type"><div class="poison">poison</div><div class="dark">dark</div></div></div>
          <div class="card poke-card poison fighting visible" id="croagunk" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/453.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">croagunk</div><div class="row type"><div class="poison">poison</div><div class="fighting">fighting</div></div></div>
          <div class="card poke-card poison fighting visible" id="toxicroak" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/454.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">toxicroak</div><div class="row type"><div class="poison">poison</div><div class="fighting">fighting</div></div></div>
          <div class="card poke-card grass undefined visible" id="carnivine" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/455.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">carnivine</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card water undefined visible" id="finneon" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/456.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">finneon</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water undefined visible" id="lumineon" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/457.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">lumineon</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water flying visible" id="mantyke" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/458.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">mantyke</div><div class="row type"><div class="water">water</div><div class="flying">flying</div></div></div>
          <div class="card poke-card grass ice visible" id="snover" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/459.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">snover</div><div class="row type"><div class="grass">grass</div><div class="ice">ice</div></div></div>
          <div class="card poke-card grass ice visible" id="abomasnow" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/460.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">abomasnow</div><div class="row type"><div class="grass">grass</div><div class="ice">ice</div></div></div>
          <div class="card poke-card dark ice visible" id="weavile" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/461.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">weavile</div><div class="row type"><div class="dark">dark</div><div class="ice">ice</div></div></div>
          <div class="card poke-card electric steel visible" id="magnezone" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/462.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">magnezone</div><div class="row type"><div class="electric">electric</div><div class="steel">steel</div></div></div>
          <div class="card poke-card normal undefined visible" id="lickilicky" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/463.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">lickilicky</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card ground rock visible" id="rhyperior" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/464.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">rhyperior</div><div class="row type"><div class="ground">ground</div><div class="rock">rock</div></div></div>
          <div class="card poke-card grass undefined visible" id="tangrowth" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/465.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">tangrowth</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card electric undefined visible" id="electivire" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/466.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">electivire</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card fire undefined visible" id="magmortar" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/467.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">magmortar</div><div class="row type"><div class="fire">fire</div></div></div>
          <div class="card poke-card fairy flying visible" id="togekiss" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/468.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">togekiss</div><div class="row type"><div class="fairy">fairy</div><div class="flying">flying</div></div></div>
          <div class="card poke-card bug flying visible" id="yanmega" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/469.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">yanmega</div><div class="row type"><div class="bug">bug</div><div class="flying">flying</div></div></div>
          <div class="card poke-card grass undefined visible" id="leafeon" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">leafeon</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card ice undefined visible" id="glaceon" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/471.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">glaceon</div><div class="row type"><div class="ice">ice</div></div></div>
          <div class="card poke-card ground flying visible" id="gliscor" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/472.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">gliscor</div><div class="row type"><div class="ground">ground</div><div class="flying">flying</div></div></div>
          <div class="card poke-card ice ground visible" id="mamoswine" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/473.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">mamoswine</div><div class="row type"><div class="ice">ice</div><div class="ground">ground</div></div></div>
          <div class="card poke-card normal undefined visible" id="porygon-z" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/474.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">porygon-z</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card psychic fighting visible" id="gallade" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/475.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">gallade</div><div class="row type"><div class="psychic">psychic</div><div class="fighting">fighting</div></div></div>
          <div class="card poke-card rock steel visible" id="probopass" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/476.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">probopass</div><div class="row type"><div class="rock">rock</div><div class="steel">steel</div></div></div>
          <div class="card poke-card ghost undefined visible" id="dusknoir" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/477.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">dusknoir</div><div class="row type"><div class="ghost">ghost</div></div></div>
          <div class="card poke-card ice ghost visible" id="froslass" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/478.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">froslass</div><div class="row type"><div class="ice">ice</div><div class="ghost">ghost</div></div></div>
          <div class="card poke-card electric ghost visible" id="rotom" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/479.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">rotom</div><div class="row type"><div class="electric">electric</div><div class="ghost">ghost</div></div></div>
          <div class="card poke-card psychic undefined visible" id="uxie" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/480.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">uxie</div><div class="row type"><div class="psychic">psychic</div></div></div>
          <div class="card poke-card psychic undefined visible" id="mesprit" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/481.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">mesprit</div><div class="row type"><div class="psychic">psychic</div></div></div>
          <div class="card poke-card psychic undefined visible" id="azelf" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/482.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">azelf</div><div class="row type"><div class="psychic">psychic</div></div></div>
          <div class="card poke-card steel dragon visible" id="dialga" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/483.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">dialga</div><div class="row type"><div class="steel">steel</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card water dragon visible" id="palkia" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">palkia</div><div class="row type"><div class="water">water</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card fire steel visible" id="heatran" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/485.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">heatran</div><div class="row type"><div class="fire">fire</div><div class="steel">steel</div></div></div>
          <div class="card poke-card normal undefined visible" id="regigigas" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/486.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">regigigas</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card ghost dragon visible" id="giratina-altered" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/487.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">giratina-altered</div><div class="row type"><div class="ghost">ghost</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card psychic undefined visible" id="cresselia" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/488.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">cresselia</div><div class="row type"><div class="psychic">psychic</div></div></div>
          <div class="card poke-card water undefined visible" id="phione" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/489.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">phione</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water undefined visible" id="manaphy" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/490.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">manaphy</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card dark undefined visible" id="darkrai" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/491.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">darkrai</div><div class="row type"><div class="dark">dark</div></div></div>
          <div class="card poke-card grass undefined visible" id="shaymin-land" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/492.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">shaymin-land</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card normal undefined visible" id="arceus" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/493.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">arceus</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card psychic fire visible" id="victini" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/494.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">victini</div><div class="row type"><div class="psychic">psychic</div><div class="fire">fire</div></div></div>
          <div class="card poke-card grass undefined visible" id="snivy" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/495.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">snivy</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card grass undefined visible" id="servine" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/496.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">servine</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card grass undefined visible" id="serperior" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/497.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">serperior</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card fire undefined visible" id="tepig" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/498.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">tepig</div><div class="row type"><div class="fire">fire</div></div></div>
          <div class="card poke-card fire fighting visible" id="pignite" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/499.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">pignite</div><div class="row type"><div class="fire">fire</div><div class="fighting">fighting</div></div></div>
          <div class="card poke-card fire fighting visible" id="emboar" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/500.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">emboar</div><div class="row type"><div class="fire">fire</div><div class="fighting">fighting</div></div></div>
          <div class="card poke-card water undefined visible" id="oshawott" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/501.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">oshawott</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water undefined visible" id="dewott" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/502.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">dewott</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water undefined visible" id="samurott" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/503.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">samurott</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card normal undefined visible" id="patrat" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/504.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">patrat</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card normal undefined visible" id="watchog" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/505.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">watchog</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card normal undefined visible" id="lillipup" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/506.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">lillipup</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card normal undefined visible" id="herdier" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/507.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">herdier</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card normal undefined visible" id="stoutland" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/508.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">stoutland</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card dark undefined visible" id="purrloin" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/509.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">purrloin</div><div class="row type"><div class="dark">dark</div></div></div>
          <div class="card poke-card dark undefined visible" id="liepard" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/510.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">liepard</div><div class="row type"><div class="dark">dark</div></div></div>
          <div class="card poke-card grass undefined visible" id="pansage" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/511.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">pansage</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card grass undefined visible" id="simisage" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/512.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">simisage</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card fire undefined visible" id="pansear" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/513.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">pansear</div><div class="row type"><div class="fire">fire</div></div></div>
          <div class="card poke-card fire undefined visible" id="simisear" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/514.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">simisear</div><div class="row type"><div class="fire">fire</div></div></div>
          <div class="card poke-card water undefined visible" id="panpour" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/515.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">panpour</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water undefined visible" id="simipour" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/516.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">simipour</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card psychic undefined visible" id="munna" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/517.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">munna</div><div class="row type"><div class="psychic">psychic</div></div></div>
          <div class="card poke-card psychic undefined visible" id="musharna" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/518.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">musharna</div><div class="row type"><div class="psychic">psychic</div></div></div>
          <div class="card poke-card normal flying visible" id="pidove" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/519.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">pidove</div><div class="row type"><div class="normal">normal</div><div class="flying">flying</div></div></div>
          <div class="card poke-card normal flying visible" id="tranquill" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/520.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">tranquill</div><div class="row type"><div class="normal">normal</div><div class="flying">flying</div></div></div>
          <div class="card poke-card normal flying visible" id="unfezant" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/521.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">unfezant</div><div class="row type"><div class="normal">normal</div><div class="flying">flying</div></div></div>
          <div class="card poke-card electric undefined visible" id="blitzle" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/522.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">blitzle</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card electric undefined visible" id="zebstrika" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/523.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">zebstrika</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card rock undefined visible" id="roggenrola" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/524.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">roggenrola</div><div class="row type"><div class="rock">rock</div></div></div>
          <div class="card poke-card rock undefined visible" id="boldore" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/525.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">boldore</div><div class="row type"><div class="rock">rock</div></div></div>
          <div class="card poke-card rock undefined visible" id="gigalith" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/526.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">gigalith</div><div class="row type"><div class="rock">rock</div></div></div>
          <div class="card poke-card psychic flying visible" id="woobat" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/527.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">woobat</div><div class="row type"><div class="psychic">psychic</div><div class="flying">flying</div></div></div>
          <div class="card poke-card psychic flying visible" id="swoobat" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/528.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">swoobat</div><div class="row type"><div class="psychic">psychic</div><div class="flying">flying</div></div></div>
          <div class="card poke-card ground undefined visible" id="drilbur" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/529.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">drilbur</div><div class="row type"><div class="ground">ground</div></div></div>
          <div class="card poke-card ground steel visible" id="excadrill" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/530.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">excadrill</div><div class="row type"><div class="ground">ground</div><div class="steel">steel</div></div></div>
          <div class="card poke-card normal undefined visible" id="audino" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/531.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">audino</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card fighting undefined visible" id="timburr" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/532.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">timburr</div><div class="row type"><div class="fighting">fighting</div></div></div>
          <div class="card poke-card fighting undefined visible" id="gurdurr" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/533.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">gurdurr</div><div class="row type"><div class="fighting">fighting</div></div></div>
          <div class="card poke-card fighting undefined visible" id="conkeldurr" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/534.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">conkeldurr</div><div class="row type"><div class="fighting">fighting</div></div></div>
          <div class="card poke-card water undefined visible" id="tympole" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/535.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">tympole</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water ground visible" id="palpitoad" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/536.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">palpitoad</div><div class="row type"><div class="water">water</div><div class="ground">ground</div></div></div>
          <div class="card poke-card water ground visible" id="seismitoad" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/537.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">seismitoad</div><div class="row type"><div class="water">water</div><div class="ground">ground</div></div></div>
          <div class="card poke-card fighting undefined visible" id="throh" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/538.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">throh</div><div class="row type"><div class="fighting">fighting</div></div></div>
          <div class="card poke-card fighting undefined visible" id="sawk" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/539.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">sawk</div><div class="row type"><div class="fighting">fighting</div></div></div>
          <div class="card poke-card bug grass visible" id="sewaddle" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/540.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">sewaddle</div><div class="row type"><div class="bug">bug</div><div class="grass">grass</div></div></div>
          <div class="card poke-card bug grass visible" id="swadloon" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/541.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">swadloon</div><div class="row type"><div class="bug">bug</div><div class="grass">grass</div></div></div>
          <div class="card poke-card bug grass visible" id="leavanny" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/542.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">leavanny</div><div class="row type"><div class="bug">bug</div><div class="grass">grass</div></div></div>
          <div class="card poke-card bug poison visible" id="venipede" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/543.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">venipede</div><div class="row type"><div class="bug">bug</div><div class="poison">poison</div></div></div>
          <div class="card poke-card bug poison visible" id="whirlipede" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/544.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">whirlipede</div><div class="row type"><div class="bug">bug</div><div class="poison">poison</div></div></div>
          <div class="card poke-card bug poison visible" id="scolipede" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/545.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">scolipede</div><div class="row type"><div class="bug">bug</div><div class="poison">poison</div></div></div>
          <div class="card poke-card grass fairy visible" id="cottonee" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/546.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">cottonee</div><div class="row type"><div class="grass">grass</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card grass fairy visible" id="whimsicott" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/547.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">whimsicott</div><div class="row type"><div class="grass">grass</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card grass undefined visible" id="petilil" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/548.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">petilil</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card grass undefined visible" id="lilligant" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/549.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">lilligant</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card water undefined visible" id="basculin-red-striped" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/550.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">basculin-red-striped</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card ground dark visible" id="sandile" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/551.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">sandile</div><div class="row type"><div class="ground">ground</div><div class="dark">dark</div></div></div>
          <div class="card poke-card ground dark visible" id="krokorok" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/552.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">krokorok</div><div class="row type"><div class="ground">ground</div><div class="dark">dark</div></div></div>
          <div class="card poke-card ground dark visible" id="krookodile" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/553.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">krookodile</div><div class="row type"><div class="ground">ground</div><div class="dark">dark</div></div></div>
          <div class="card poke-card fire undefined visible" id="darumaka" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/554.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">darumaka</div><div class="row type"><div class="fire">fire</div></div></div>
          <div class="card poke-card fire undefined visible" id="darmanitan-standard" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/555.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">darmanitan-standard</div><div class="row type"><div class="fire">fire</div></div></div>
          <div class="card poke-card grass undefined visible" id="maractus" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/556.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">maractus</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card bug rock visible" id="dwebble" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/557.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">dwebble</div><div class="row type"><div class="bug">bug</div><div class="rock">rock</div></div></div>
          <div class="card poke-card bug rock visible" id="crustle" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/558.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">crustle</div><div class="row type"><div class="bug">bug</div><div class="rock">rock</div></div></div>
          <div class="card poke-card dark fighting visible" id="scraggy" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/559.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">scraggy</div><div class="row type"><div class="dark">dark</div><div class="fighting">fighting</div></div></div>
          <div class="card poke-card dark fighting visible" id="scrafty" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/560.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">scrafty</div><div class="row type"><div class="dark">dark</div><div class="fighting">fighting</div></div></div>
          <div class="card poke-card psychic flying visible" id="sigilyph" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/561.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">sigilyph</div><div class="row type"><div class="psychic">psychic</div><div class="flying">flying</div></div></div>
          <div class="card poke-card ghost undefined visible" id="yamask" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/562.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">yamask</div><div class="row type"><div class="ghost">ghost</div></div></div>
          <div class="card poke-card ghost undefined visible" id="cofagrigus" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/563.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">cofagrigus</div><div class="row type"><div class="ghost">ghost</div></div></div>
          <div class="card poke-card water rock visible" id="tirtouga" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/564.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">tirtouga</div><div class="row type"><div class="water">water</div><div class="rock">rock</div></div></div>
          <div class="card poke-card water rock visible" id="carracosta" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/565.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">carracosta</div><div class="row type"><div class="water">water</div><div class="rock">rock</div></div></div>
          <div class="card poke-card rock flying visible" id="archen" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/566.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">archen</div><div class="row type"><div class="rock">rock</div><div class="flying">flying</div></div></div>
          <div class="card poke-card rock flying visible" id="archeops" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/567.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">archeops</div><div class="row type"><div class="rock">rock</div><div class="flying">flying</div></div></div>
          <div class="card poke-card poison undefined visible" id="trubbish" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/568.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">trubbish</div><div class="row type"><div class="poison">poison</div></div></div>
          <div class="card poke-card poison undefined visible" id="garbodor" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/569.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">garbodor</div><div class="row type"><div class="poison">poison</div></div></div>
          <div class="card poke-card dark undefined visible" id="zorua" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/570.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">zorua</div><div class="row type"><div class="dark">dark</div></div></div>
          <div class="card poke-card dark undefined visible" id="zoroark" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/571.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">zoroark</div><div class="row type"><div class="dark">dark</div></div></div>
          <div class="card poke-card normal undefined visible" id="minccino" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/572.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">minccino</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card normal undefined visible" id="cinccino" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/573.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">cinccino</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card psychic undefined visible" id="gothita" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/574.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">gothita</div><div class="row type"><div class="psychic">psychic</div></div></div>
          <div class="card poke-card psychic undefined visible" id="gothorita" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/575.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">gothorita</div><div class="row type"><div class="psychic">psychic</div></div></div>
          <div class="card poke-card psychic undefined visible" id="gothitelle" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/576.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">gothitelle</div><div class="row type"><div class="psychic">psychic</div></div></div>
          <div class="card poke-card psychic undefined visible" id="solosis" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/577.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">solosis</div><div class="row type"><div class="psychic">psychic</div></div></div>
          <div class="card poke-card psychic undefined visible" id="duosion" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/578.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">duosion</div><div class="row type"><div class="psychic">psychic</div></div></div>
          <div class="card poke-card psychic undefined visible" id="reuniclus" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/579.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">reuniclus</div><div class="row type"><div class="psychic">psychic</div></div></div>
          <div class="card poke-card water flying visible" id="ducklett" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/580.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">ducklett</div><div class="row type"><div class="water">water</div><div class="flying">flying</div></div></div>
          <div class="card poke-card water flying visible" id="swanna" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/581.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">swanna</div><div class="row type"><div class="water">water</div><div class="flying">flying</div></div></div>
          <div class="card poke-card ice undefined visible" id="vanillite" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/582.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">vanillite</div><div class="row type"><div class="ice">ice</div></div></div>
          <div class="card poke-card ice undefined visible" id="vanillish" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/583.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">vanillish</div><div class="row type"><div class="ice">ice</div></div></div>
          <div class="card poke-card ice undefined visible" id="vanilluxe" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/584.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">vanilluxe</div><div class="row type"><div class="ice">ice</div></div></div>
          <div class="card poke-card normal grass visible" id="deerling" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/585.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">deerling</div><div class="row type"><div class="normal">normal</div><div class="grass">grass</div></div></div>
          <div class="card poke-card normal grass visible" id="sawsbuck" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/586.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">sawsbuck</div><div class="row type"><div class="normal">normal</div><div class="grass">grass</div></div></div>
          <div class="card poke-card electric flying visible" id="emolga" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/587.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">emolga</div><div class="row type"><div class="electric">electric</div><div class="flying">flying</div></div></div>
          <div class="card poke-card bug undefined visible" id="karrablast" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/588.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">karrablast</div><div class="row type"><div class="bug">bug</div></div></div>
          <div class="card poke-card bug steel visible" id="escavalier" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/589.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">escavalier</div><div class="row type"><div class="bug">bug</div><div class="steel">steel</div></div></div>
          <div class="card poke-card grass poison visible" id="foongus" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/590.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">foongus</div><div class="row type"><div class="grass">grass</div><div class="poison">poison</div></div></div>
          <div class="card poke-card grass poison visible" id="amoonguss" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/591.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">amoonguss</div><div class="row type"><div class="grass">grass</div><div class="poison">poison</div></div></div>
          <div class="card poke-card water ghost visible" id="frillish" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/592.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">frillish</div><div class="row type"><div class="water">water</div><div class="ghost">ghost</div></div></div>
          <div class="card poke-card water ghost visible" id="jellicent" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/593.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">jellicent</div><div class="row type"><div class="water">water</div><div class="ghost">ghost</div></div></div>
          <div class="card poke-card water undefined visible" id="alomomola" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/594.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">alomomola</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card bug electric visible" id="joltik" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/595.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">joltik</div><div class="row type"><div class="bug">bug</div><div class="electric">electric</div></div></div>
          <div class="card poke-card bug electric visible" id="galvantula" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/596.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">galvantula</div><div class="row type"><div class="bug">bug</div><div class="electric">electric</div></div></div>
          <div class="card poke-card grass steel visible" id="ferroseed" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/597.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">ferroseed</div><div class="row type"><div class="grass">grass</div><div class="steel">steel</div></div></div>
          <div class="card poke-card grass steel visible" id="ferrothorn" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/598.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">ferrothorn</div><div class="row type"><div class="grass">grass</div><div class="steel">steel</div></div></div>
          <div class="card poke-card steel undefined visible" id="klink" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/599.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">klink</div><div class="row type"><div class="steel">steel</div></div></div>
          <div class="card poke-card steel undefined visible" id="klang" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/600.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">klang</div><div class="row type"><div class="steel">steel</div></div></div>
          <div class="card poke-card steel undefined visible" id="klinklang" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/601.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">klinklang</div><div class="row type"><div class="steel">steel</div></div></div>
          <div class="card poke-card electric undefined visible" id="tynamo" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/602.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">tynamo</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card electric undefined visible" id="eelektrik" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/603.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">eelektrik</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card electric undefined visible" id="eelektross" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/604.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">eelektross</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card psychic undefined visible" id="elgyem" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/605.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">elgyem</div><div class="row type"><div class="psychic">psychic</div></div></div>
          <div class="card poke-card psychic undefined visible" id="beheeyem" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/606.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">beheeyem</div><div class="row type"><div class="psychic">psychic</div></div></div>
          <div class="card poke-card ghost fire visible" id="litwick" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/607.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">litwick</div><div class="row type"><div class="ghost">ghost</div><div class="fire">fire</div></div></div>
          <div class="card poke-card ghost fire visible" id="lampent" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/608.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">lampent</div><div class="row type"><div class="ghost">ghost</div><div class="fire">fire</div></div></div>
          <div class="card poke-card ghost fire visible" id="chandelure" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/609.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">chandelure</div><div class="row type"><div class="ghost">ghost</div><div class="fire">fire</div></div></div>
          <div class="card poke-card dragon undefined visible" id="axew" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/610.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">axew</div><div class="row type"><div class="dragon">dragon</div></div></div>
          <div class="card poke-card dragon undefined visible" id="fraxure" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/611.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">fraxure</div><div class="row type"><div class="dragon">dragon</div></div></div>
          <div class="card poke-card dragon undefined visible" id="haxorus" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/612.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">haxorus</div><div class="row type"><div class="dragon">dragon</div></div></div>
          <div class="card poke-card ice undefined visible" id="cubchoo" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/613.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">cubchoo</div><div class="row type"><div class="ice">ice</div></div></div>
          <div class="card poke-card ice undefined visible" id="beartic" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/614.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">beartic</div><div class="row type"><div class="ice">ice</div></div></div>
          <div class="card poke-card ice undefined visible" id="cryogonal" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/615.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">cryogonal</div><div class="row type"><div class="ice">ice</div></div></div>
          <div class="card poke-card bug undefined visible" id="shelmet" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/616.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">shelmet</div><div class="row type"><div class="bug">bug</div></div></div>
          <div class="card poke-card bug undefined visible" id="accelgor" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/617.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">accelgor</div><div class="row type"><div class="bug">bug</div></div></div>
          <div class="card poke-card ground electric visible" id="stunfisk" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/618.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">stunfisk</div><div class="row type"><div class="ground">ground</div><div class="electric">electric</div></div></div>
          <div class="card poke-card fighting undefined visible" id="mienfoo" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/619.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">mienfoo</div><div class="row type"><div class="fighting">fighting</div></div></div>
          <div class="card poke-card fighting undefined visible" id="mienshao" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/620.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">mienshao</div><div class="row type"><div class="fighting">fighting</div></div></div>
          <div class="card poke-card dragon undefined visible" id="druddigon" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/621.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">druddigon</div><div class="row type"><div class="dragon">dragon</div></div></div>
          <div class="card poke-card ground ghost visible" id="golett" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/622.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">golett</div><div class="row type"><div class="ground">ground</div><div class="ghost">ghost</div></div></div>
          <div class="card poke-card ground ghost visible" id="golurk" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/623.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">golurk</div><div class="row type"><div class="ground">ground</div><div class="ghost">ghost</div></div></div>
          <div class="card poke-card dark steel visible" id="pawniard" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/624.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">pawniard</div><div class="row type"><div class="dark">dark</div><div class="steel">steel</div></div></div>
          <div class="card poke-card dark steel visible" id="bisharp" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/625.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">bisharp</div><div class="row type"><div class="dark">dark</div><div class="steel">steel</div></div></div>
          <div class="card poke-card normal undefined visible" id="bouffalant" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/626.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">bouffalant</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card normal flying visible" id="rufflet" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/627.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">rufflet</div><div class="row type"><div class="normal">normal</div><div class="flying">flying</div></div></div>
          <div class="card poke-card normal flying visible" id="braviary" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/628.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">braviary</div><div class="row type"><div class="normal">normal</div><div class="flying">flying</div></div></div>
          <div class="card poke-card dark flying visible" id="vullaby" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/629.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">vullaby</div><div class="row type"><div class="dark">dark</div><div class="flying">flying</div></div></div>
          <div class="card poke-card dark flying visible" id="mandibuzz" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/630.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">mandibuzz</div><div class="row type"><div class="dark">dark</div><div class="flying">flying</div></div></div>
          <div class="card poke-card fire undefined visible" id="heatmor" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/631.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">heatmor</div><div class="row type"><div class="fire">fire</div></div></div>
          <div class="card poke-card bug steel visible" id="durant" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/632.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">durant</div><div class="row type"><div class="bug">bug</div><div class="steel">steel</div></div></div>
          <div class="card poke-card dark dragon visible" id="deino" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/633.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">deino</div><div class="row type"><div class="dark">dark</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card dark dragon visible" id="zweilous" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/634.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">zweilous</div><div class="row type"><div class="dark">dark</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card dark dragon visible" id="hydreigon" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/635.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">hydreigon</div><div class="row type"><div class="dark">dark</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card bug fire visible" id="larvesta" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/636.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">larvesta</div><div class="row type"><div class="bug">bug</div><div class="fire">fire</div></div></div>
          <div class="card poke-card bug fire visible" id="volcarona" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/637.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">volcarona</div><div class="row type"><div class="bug">bug</div><div class="fire">fire</div></div></div>
          <div class="card poke-card steel fighting visible" id="cobalion" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/638.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">cobalion</div><div class="row type"><div class="steel">steel</div><div class="fighting">fighting</div></div></div>
          <div class="card poke-card rock fighting visible" id="terrakion" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/639.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">terrakion</div><div class="row type"><div class="rock">rock</div><div class="fighting">fighting</div></div></div>
          <div class="card poke-card grass fighting visible" id="virizion" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/640.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">virizion</div><div class="row type"><div class="grass">grass</div><div class="fighting">fighting</div></div></div>
          <div class="card poke-card flying undefined visible" id="tornadus-incarnate" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/641.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">tornadus-incarnate</div><div class="row type"><div class="flying">flying</div></div></div>
          <div class="card poke-card electric flying visible" id="thundurus-incarnate" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/642.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">thundurus-incarnate</div><div class="row type"><div class="electric">electric</div><div class="flying">flying</div></div></div>
          <div class="card poke-card dragon fire visible" id="reshiram" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/643.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">reshiram</div><div class="row type"><div class="dragon">dragon</div><div class="fire">fire</div></div></div>
          <div class="card poke-card dragon electric visible" id="zekrom" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/644.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">zekrom</div><div class="row type"><div class="dragon">dragon</div><div class="electric">electric</div></div></div>
          <div class="card poke-card ground flying visible" id="landorus-incarnate" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/645.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">landorus-incarnate</div><div class="row type"><div class="ground">ground</div><div class="flying">flying</div></div></div>
          <div class="card poke-card dragon ice visible" id="kyurem" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/646.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">kyurem</div><div class="row type"><div class="dragon">dragon</div><div class="ice">ice</div></div></div>
          <div class="card poke-card water fighting visible" id="keldeo-ordinary" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/647.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">keldeo-ordinary</div><div class="row type"><div class="water">water</div><div class="fighting">fighting</div></div></div>
          <div class="card poke-card normal psychic visible" id="meloetta-aria" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/648.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">meloetta-aria</div><div class="row type"><div class="normal">normal</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card bug steel visible" id="genesect" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/649.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">genesect</div><div class="row type"><div class="bug">bug</div><div class="steel">steel</div></div></div>
          <div class="card poke-card grass undefined visible" id="chespin" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/650.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">chespin</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card grass undefined visible" id="quilladin" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/651.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">quilladin</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card grass fighting visible" id="chesnaught" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/652.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">chesnaught</div><div class="row type"><div class="grass">grass</div><div class="fighting">fighting</div></div></div>
          <div class="card poke-card fire undefined visible" id="fennekin" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/653.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">fennekin</div><div class="row type"><div class="fire">fire</div></div></div>
          <div class="card poke-card fire undefined visible" id="braixen" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/654.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">braixen</div><div class="row type"><div class="fire">fire</div></div></div>
          <div class="card poke-card fire psychic visible" id="delphox" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/655.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">delphox</div><div class="row type"><div class="fire">fire</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card water undefined visible" id="froakie" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/656.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">froakie</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water undefined visible" id="frogadier" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/657.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">frogadier</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water dark visible" id="greninja" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/658.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">greninja</div><div class="row type"><div class="water">water</div><div class="dark">dark</div></div></div>
          <div class="card poke-card normal undefined visible" id="bunnelby" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/659.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">bunnelby</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card normal ground visible" id="diggersby" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/660.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">diggersby</div><div class="row type"><div class="normal">normal</div><div class="ground">ground</div></div></div>
          <div class="card poke-card normal flying visible" id="fletchling" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/661.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">fletchling</div><div class="row type"><div class="normal">normal</div><div class="flying">flying</div></div></div>
          <div class="card poke-card fire flying visible" id="fletchinder" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/662.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">fletchinder</div><div class="row type"><div class="fire">fire</div><div class="flying">flying</div></div></div>
          <div class="card poke-card fire flying visible" id="talonflame" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/663.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">talonflame</div><div class="row type"><div class="fire">fire</div><div class="flying">flying</div></div></div>
          <div class="card poke-card bug undefined visible" id="scatterbug" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/664.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">scatterbug</div><div class="row type"><div class="bug">bug</div></div></div>
          <div class="card poke-card bug undefined visible" id="spewpa" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/665.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">spewpa</div><div class="row type"><div class="bug">bug</div></div></div>
          <div class="card poke-card bug flying visible" id="vivillon" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/666.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">vivillon</div><div class="row type"><div class="bug">bug</div><div class="flying">flying</div></div></div>
          <div class="card poke-card fire normal visible" id="litleo" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/667.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">litleo</div><div class="row type"><div class="fire">fire</div><div class="normal">normal</div></div></div>
          <div class="card poke-card fire normal visible" id="pyroar" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/668.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">pyroar</div><div class="row type"><div class="fire">fire</div><div class="normal">normal</div></div></div>
          <div class="card poke-card fairy undefined visible" id="flabebe" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/669.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">flabebe</div><div class="row type"><div class="fairy">fairy</div></div></div>
          <div class="card poke-card fairy undefined visible" id="floette" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/670.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">floette</div><div class="row type"><div class="fairy">fairy</div></div></div>
          <div class="card poke-card fairy undefined visible" id="florges" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/671.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">florges</div><div class="row type"><div class="fairy">fairy</div></div></div>
          <div class="card poke-card grass undefined visible" id="skiddo" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/672.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">skiddo</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card grass undefined visible" id="gogoat" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/673.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">gogoat</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card fighting undefined visible" id="pancham" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/674.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">pancham</div><div class="row type"><div class="fighting">fighting</div></div></div>
          <div class="card poke-card fighting dark visible" id="pangoro" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/675.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">pangoro</div><div class="row type"><div class="fighting">fighting</div><div class="dark">dark</div></div></div>
          <div class="card poke-card normal undefined visible" id="furfrou" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/676.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">furfrou</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card psychic undefined visible" id="espurr" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/677.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">espurr</div><div class="row type"><div class="psychic">psychic</div></div></div>
          <div class="card poke-card psychic undefined visible" id="meowstic-male" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/678.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">meowstic-male</div><div class="row type"><div class="psychic">psychic</div></div></div>
          <div class="card poke-card steel ghost visible" id="honedge" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/679.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">honedge</div><div class="row type"><div class="steel">steel</div><div class="ghost">ghost</div></div></div>
          <div class="card poke-card steel ghost visible" id="doublade" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/680.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">doublade</div><div class="row type"><div class="steel">steel</div><div class="ghost">ghost</div></div></div>
          <div class="card poke-card steel ghost visible" id="aegislash-shield" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/681.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">aegislash-shield</div><div class="row type"><div class="steel">steel</div><div class="ghost">ghost</div></div></div>
          <div class="card poke-card fairy undefined visible" id="spritzee" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/682.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">spritzee</div><div class="row type"><div class="fairy">fairy</div></div></div>
          <div class="card poke-card fairy undefined visible" id="aromatisse" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/683.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">aromatisse</div><div class="row type"><div class="fairy">fairy</div></div></div>
          <div class="card poke-card fairy undefined visible" id="swirlix" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/684.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">swirlix</div><div class="row type"><div class="fairy">fairy</div></div></div>
          <div class="card poke-card fairy undefined visible" id="slurpuff" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/685.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">slurpuff</div><div class="row type"><div class="fairy">fairy</div></div></div>
          <div class="card poke-card dark psychic visible" id="inkay" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/686.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">inkay</div><div class="row type"><div class="dark">dark</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card dark psychic visible" id="malamar" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/687.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">malamar</div><div class="row type"><div class="dark">dark</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card rock water visible" id="binacle" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/688.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">binacle</div><div class="row type"><div class="rock">rock</div><div class="water">water</div></div></div>
          <div class="card poke-card rock water visible" id="barbaracle" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/689.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">barbaracle</div><div class="row type"><div class="rock">rock</div><div class="water">water</div></div></div>
          <div class="card poke-card poison water visible" id="skrelp" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/690.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">skrelp</div><div class="row type"><div class="poison">poison</div><div class="water">water</div></div></div>
          <div class="card poke-card poison dragon visible" id="dragalge" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/691.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">dragalge</div><div class="row type"><div class="poison">poison</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card water undefined visible" id="clauncher" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/692.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">clauncher</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water undefined visible" id="clawitzer" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/693.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">clawitzer</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card electric normal visible" id="helioptile" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/694.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">helioptile</div><div class="row type"><div class="electric">electric</div><div class="normal">normal</div></div></div>
          <div class="card poke-card electric normal visible" id="heliolisk" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/695.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">heliolisk</div><div class="row type"><div class="electric">electric</div><div class="normal">normal</div></div></div>
          <div class="card poke-card rock dragon visible" id="tyrunt" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/696.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">tyrunt</div><div class="row type"><div class="rock">rock</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card rock dragon visible" id="tyrantrum" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/697.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">tyrantrum</div><div class="row type"><div class="rock">rock</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card rock ice visible" id="amaura" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/698.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">amaura</div><div class="row type"><div class="rock">rock</div><div class="ice">ice</div></div></div>
          <div class="card poke-card rock ice visible" id="aurorus" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/699.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">aurorus</div><div class="row type"><div class="rock">rock</div><div class="ice">ice</div></div></div>
          <div class="card poke-card fairy undefined visible" id="sylveon" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/700.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">sylveon</div><div class="row type"><div class="fairy">fairy</div></div></div>
          <div class="card poke-card fighting flying visible" id="hawlucha" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/701.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">hawlucha</div><div class="row type"><div class="fighting">fighting</div><div class="flying">flying</div></div></div>
          <div class="card poke-card electric fairy visible" id="dedenne" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/702.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">dedenne</div><div class="row type"><div class="electric">electric</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card rock fairy visible" id="carbink" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/703.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">carbink</div><div class="row type"><div class="rock">rock</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card dragon undefined visible" id="goomy" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/704.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">goomy</div><div class="row type"><div class="dragon">dragon</div></div></div>
          <div class="card poke-card dragon undefined visible" id="sliggoo" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/705.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">sliggoo</div><div class="row type"><div class="dragon">dragon</div></div></div>
          <div class="card poke-card dragon undefined visible" id="goodra" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/706.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">goodra</div><div class="row type"><div class="dragon">dragon</div></div></div>
          <div class="card poke-card steel fairy visible" id="klefki" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/707.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">klefki</div><div class="row type"><div class="steel">steel</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card ghost grass visible" id="phantump" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/708.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">phantump</div><div class="row type"><div class="ghost">ghost</div><div class="grass">grass</div></div></div>
          <div class="card poke-card ghost grass visible" id="trevenant" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/709.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">trevenant</div><div class="row type"><div class="ghost">ghost</div><div class="grass">grass</div></div></div>
          <div class="card poke-card ghost grass visible" id="pumpkaboo-average" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/710.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">pumpkaboo-average</div><div class="row type"><div class="ghost">ghost</div><div class="grass">grass</div></div></div>
          <div class="card poke-card ghost grass visible" id="gourgeist-average" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/711.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">gourgeist-average</div><div class="row type"><div class="ghost">ghost</div><div class="grass">grass</div></div></div>
          <div class="card poke-card ice undefined visible" id="bergmite" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/712.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">bergmite</div><div class="row type"><div class="ice">ice</div></div></div>
          <div class="card poke-card ice undefined visible" id="avalugg" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/713.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">avalugg</div><div class="row type"><div class="ice">ice</div></div></div>
          <div class="card poke-card flying dragon visible" id="noibat" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/714.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">noibat</div><div class="row type"><div class="flying">flying</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card flying dragon visible" id="noivern" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/715.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">noivern</div><div class="row type"><div class="flying">flying</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card fairy undefined visible" id="xerneas" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/716.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">xerneas</div><div class="row type"><div class="fairy">fairy</div></div></div>
          <div class="card poke-card dark flying visible" id="yveltal" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/717.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">yveltal</div><div class="row type"><div class="dark">dark</div><div class="flying">flying</div></div></div>
          <div class="card poke-card dragon ground visible" id="zygarde-50" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/718.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">zygarde-50</div><div class="row type"><div class="dragon">dragon</div><div class="ground">ground</div></div></div>
          <div class="card poke-card rock fairy visible" id="diancie" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/719.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">diancie</div><div class="row type"><div class="rock">rock</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card psychic ghost visible" id="hoopa" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/720.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">hoopa</div><div class="row type"><div class="psychic">psychic</div><div class="ghost">ghost</div></div></div>
          <div class="card poke-card fire water visible" id="volcanion" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/721.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">volcanion</div><div class="row type"><div class="fire">fire</div><div class="water">water</div></div></div>
          <div class="card poke-card grass flying visible" id="rowlet" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/722.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">rowlet</div><div class="row type"><div class="grass">grass</div><div class="flying">flying</div></div></div>
          <div class="card poke-card grass flying visible" id="dartrix" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/723.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">dartrix</div><div class="row type"><div class="grass">grass</div><div class="flying">flying</div></div></div>
          <div class="card poke-card grass ghost visible" id="decidueye" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/724.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">decidueye</div><div class="row type"><div class="grass">grass</div><div class="ghost">ghost</div></div></div>
          <div class="card poke-card fire undefined visible" id="litten" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/725.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">litten</div><div class="row type"><div class="fire">fire</div></div></div>
          <div class="card poke-card fire undefined visible" id="torracat" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/726.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">torracat</div><div class="row type"><div class="fire">fire</div></div></div>
          <div class="card poke-card fire dark visible" id="incineroar" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/727.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">incineroar</div><div class="row type"><div class="fire">fire</div><div class="dark">dark</div></div></div>
          <div class="card poke-card water undefined visible" id="popplio" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/728.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">popplio</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water undefined visible" id="brionne" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/729.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">brionne</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water fairy visible" id="primarina" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/730.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">primarina</div><div class="row type"><div class="water">water</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card normal flying visible" id="pikipek" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/731.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">pikipek</div><div class="row type"><div class="normal">normal</div><div class="flying">flying</div></div></div>
          <div class="card poke-card normal flying visible" id="trumbeak" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/732.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">trumbeak</div><div class="row type"><div class="normal">normal</div><div class="flying">flying</div></div></div>
          <div class="card poke-card normal flying visible" id="toucannon" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/733.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">toucannon</div><div class="row type"><div class="normal">normal</div><div class="flying">flying</div></div></div>
          <div class="card poke-card normal undefined visible" id="yungoos" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/734.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">yungoos</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card normal undefined visible" id="gumshoos" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/735.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">gumshoos</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card bug undefined visible" id="grubbin" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/736.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">grubbin</div><div class="row type"><div class="bug">bug</div></div></div>
          <div class="card poke-card bug electric visible" id="charjabug" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/737.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">charjabug</div><div class="row type"><div class="bug">bug</div><div class="electric">electric</div></div></div>
          <div class="card poke-card bug electric visible" id="vikavolt" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/738.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">vikavolt</div><div class="row type"><div class="bug">bug</div><div class="electric">electric</div></div></div>
          <div class="card poke-card fighting undefined visible" id="crabrawler" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/739.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">crabrawler</div><div class="row type"><div class="fighting">fighting</div></div></div>
          <div class="card poke-card fighting ice visible" id="crabominable" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/740.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">crabominable</div><div class="row type"><div class="fighting">fighting</div><div class="ice">ice</div></div></div>
          <div class="card poke-card fire flying visible" id="oricorio-baile" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/741.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">oricorio-baile</div><div class="row type"><div class="fire">fire</div><div class="flying">flying</div></div></div>
          <div class="card poke-card bug fairy visible" id="cutiefly" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/742.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">cutiefly</div><div class="row type"><div class="bug">bug</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card bug fairy visible" id="ribombee" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/743.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">ribombee</div><div class="row type"><div class="bug">bug</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card rock undefined visible" id="rockruff" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/744.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">rockruff</div><div class="row type"><div class="rock">rock</div></div></div>
          <div class="card poke-card rock undefined visible" id="lycanroc-midday" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/745.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">lycanroc-midday</div><div class="row type"><div class="rock">rock</div></div></div>
          <div class="card poke-card water undefined visible" id="wishiwashi-solo" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/746.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">wishiwashi-solo</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card poison water visible" id="mareanie" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/747.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">mareanie</div><div class="row type"><div class="poison">poison</div><div class="water">water</div></div></div>
          <div class="card poke-card poison water visible" id="toxapex" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/748.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">toxapex</div><div class="row type"><div class="poison">poison</div><div class="water">water</div></div></div>
          <div class="card poke-card ground undefined visible" id="mudbray" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/749.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">mudbray</div><div class="row type"><div class="ground">ground</div></div></div>
          <div class="card poke-card ground undefined visible" id="mudsdale" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/750.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">mudsdale</div><div class="row type"><div class="ground">ground</div></div></div>
          <div class="card poke-card water bug visible" id="dewpider" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/751.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">dewpider</div><div class="row type"><div class="water">water</div><div class="bug">bug</div></div></div>
          <div class="card poke-card water bug visible" id="araquanid" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/752.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">araquanid</div><div class="row type"><div class="water">water</div><div class="bug">bug</div></div></div>
          <div class="card poke-card grass undefined visible" id="fomantis" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/753.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">fomantis</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card grass undefined visible" id="lurantis" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/754.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">lurantis</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card grass fairy visible" id="morelull" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/755.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">morelull</div><div class="row type"><div class="grass">grass</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card grass fairy visible" id="shiinotic" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/756.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">shiinotic</div><div class="row type"><div class="grass">grass</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card poison fire visible" id="salandit" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/757.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">salandit</div><div class="row type"><div class="poison">poison</div><div class="fire">fire</div></div></div>
          <div class="card poke-card poison fire visible" id="salazzle" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/758.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">salazzle</div><div class="row type"><div class="poison">poison</div><div class="fire">fire</div></div></div>
          <div class="card poke-card normal fighting visible" id="stufful" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/759.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">stufful</div><div class="row type"><div class="normal">normal</div><div class="fighting">fighting</div></div></div>
          <div class="card poke-card normal fighting visible" id="bewear" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/760.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">bewear</div><div class="row type"><div class="normal">normal</div><div class="fighting">fighting</div></div></div>
          <div class="card poke-card grass undefined visible" id="bounsweet" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/761.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">bounsweet</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card grass undefined visible" id="steenee" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/762.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">steenee</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card grass undefined visible" id="tsareena" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/763.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">tsareena</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card fairy undefined visible" id="comfey" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/764.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">comfey</div><div class="row type"><div class="fairy">fairy</div></div></div>
          <div class="card poke-card normal psychic visible" id="oranguru" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/765.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">oranguru</div><div class="row type"><div class="normal">normal</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card fighting undefined visible" id="passimian" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/766.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">passimian</div><div class="row type"><div class="fighting">fighting</div></div></div>
          <div class="card poke-card bug water visible" id="wimpod" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/767.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">wimpod</div><div class="row type"><div class="bug">bug</div><div class="water">water</div></div></div>
          <div class="card poke-card bug water visible" id="golisopod" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/768.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">golisopod</div><div class="row type"><div class="bug">bug</div><div class="water">water</div></div></div>
          <div class="card poke-card ghost ground visible" id="sandygast" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/769.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">sandygast</div><div class="row type"><div class="ghost">ghost</div><div class="ground">ground</div></div></div>
          <div class="card poke-card ghost ground visible" id="palossand" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/770.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">palossand</div><div class="row type"><div class="ghost">ghost</div><div class="ground">ground</div></div></div>
          <div class="card poke-card water undefined visible" id="pyukumuku" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/771.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">pyukumuku</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card normal undefined visible" id="type-null" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/772.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">type-null</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card normal undefined visible" id="silvally" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/773.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">silvally</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card rock flying visible" id="minior-red-meteor" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/774.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">minior-red-meteor</div><div class="row type"><div class="rock">rock</div><div class="flying">flying</div></div></div>
          <div class="card poke-card normal undefined visible" id="komala" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/775.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">komala</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card fire dragon visible" id="turtonator" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/776.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">turtonator</div><div class="row type"><div class="fire">fire</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card electric steel visible" id="togedemaru" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/777.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">togedemaru</div><div class="row type"><div class="electric">electric</div><div class="steel">steel</div></div></div>
          <div class="card poke-card ghost fairy visible" id="mimikyu-disguised" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/778.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">mimikyu-disguised</div><div class="row type"><div class="ghost">ghost</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card water psychic visible" id="bruxish" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/779.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">bruxish</div><div class="row type"><div class="water">water</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card normal dragon visible" id="drampa" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/780.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">drampa</div><div class="row type"><div class="normal">normal</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card ghost grass visible" id="dhelmise" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/781.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">dhelmise</div><div class="row type"><div class="ghost">ghost</div><div class="grass">grass</div></div></div>
          <div class="card poke-card dragon undefined visible" id="jangmo-o" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/782.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">jangmo-o</div><div class="row type"><div class="dragon">dragon</div></div></div>
          <div class="card poke-card dragon fighting visible" id="hakamo-o" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/783.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">hakamo-o</div><div class="row type"><div class="dragon">dragon</div><div class="fighting">fighting</div></div></div>
          <div class="card poke-card dragon fighting visible" id="kommo-o" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/784.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">kommo-o</div><div class="row type"><div class="dragon">dragon</div><div class="fighting">fighting</div></div></div>
          <div class="card poke-card electric fairy visible" id="tapu-koko" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/785.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">tapu-koko</div><div class="row type"><div class="electric">electric</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card psychic fairy visible" id="tapu-lele" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/786.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">tapu-lele</div><div class="row type"><div class="psychic">psychic</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card grass fairy visible" id="tapu-bulu" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/787.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">tapu-bulu</div><div class="row type"><div class="grass">grass</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card water fairy visible" id="tapu-fini" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/788.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">tapu-fini</div><div class="row type"><div class="water">water</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card psychic undefined visible" id="cosmog" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/789.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">cosmog</div><div class="row type"><div class="psychic">psychic</div></div></div>
          <div class="card poke-card psychic undefined visible" id="cosmoem" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/790.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">cosmoem</div><div class="row type"><div class="psychic">psychic</div></div></div>
          <div class="card poke-card psychic steel visible" id="solgaleo" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/791.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">solgaleo</div><div class="row type"><div class="psychic">psychic</div><div class="steel">steel</div></div></div>
          <div class="card poke-card psychic ghost visible" id="lunala" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/792.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">lunala</div><div class="row type"><div class="psychic">psychic</div><div class="ghost">ghost</div></div></div>
          <div class="card poke-card rock poison visible" id="nihilego" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/793.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">nihilego</div><div class="row type"><div class="rock">rock</div><div class="poison">poison</div></div></div>
          <div class="card poke-card bug fighting visible" id="buzzwole" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/794.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">buzzwole</div><div class="row type"><div class="bug">bug</div><div class="fighting">fighting</div></div></div>
          <div class="card poke-card bug fighting visible" id="pheromosa" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/795.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">pheromosa</div><div class="row type"><div class="bug">bug</div><div class="fighting">fighting</div></div></div>
          <div class="card poke-card electric undefined visible" id="xurkitree" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/796.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">xurkitree</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card steel flying visible" id="celesteela" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/797.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">celesteela</div><div class="row type"><div class="steel">steel</div><div class="flying">flying</div></div></div>
          <div class="card poke-card grass steel visible" id="kartana" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/798.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">kartana</div><div class="row type"><div class="grass">grass</div><div class="steel">steel</div></div></div>
          <div class="card poke-card dark dragon visible" id="guzzlord" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/799.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">guzzlord</div><div class="row type"><div class="dark">dark</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card psychic undefined visible" id="necrozma" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/800.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">necrozma</div><div class="row type"><div class="psychic">psychic</div></div></div>
          <div class="card poke-card steel fairy visible" id="magearna" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/801.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">magearna</div><div class="row type"><div class="steel">steel</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card fighting ghost visible" id="marshadow" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/802.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">marshadow</div><div class="row type"><div class="fighting">fighting</div><div class="ghost">ghost</div></div></div>
          <div class="card poke-card poison undefined visible" id="poipole" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/803.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">poipole</div><div class="row type"><div class="poison">poison</div></div></div>
          <div class="card poke-card poison dragon visible" id="naganadel" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/804.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">naganadel</div><div class="row type"><div class="poison">poison</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card rock steel visible" id="stakataka" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/805.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">stakataka</div><div class="row type"><div class="rock">rock</div><div class="steel">steel</div></div></div>
          <div class="card poke-card fire ghost visible" id="blacephalon" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/806.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">blacephalon</div><div class="row type"><div class="fire">fire</div><div class="ghost">ghost</div></div></div>
          <div class="card poke-card electric undefined visible" id="zeraora" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/807.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">zeraora</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card steel undefined visible" id="meltan" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/808.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">meltan</div><div class="row type"><div class="steel">steel</div></div></div>
          <div class="card poke-card steel undefined visible" id="melmetal" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/809.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">melmetal</div><div class="row type"><div class="steel">steel</div></div></div>
          <div class="card poke-card grass undefined visible" id="grookey" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/810.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">grookey</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card grass undefined visible" id="thwackey" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/811.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">thwackey</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card grass undefined visible" id="rillaboom" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/812.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">rillaboom</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card fire undefined visible" id="scorbunny" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/813.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">scorbunny</div><div class="row type"><div class="fire">fire</div></div></div>
          <div class="card poke-card fire undefined visible" id="raboot" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/814.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">raboot</div><div class="row type"><div class="fire">fire</div></div></div>
          <div class="card poke-card fire undefined visible" id="cinderace" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/815.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">cinderace</div><div class="row type"><div class="fire">fire</div></div></div>
          <div class="card poke-card water undefined visible" id="sobble" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/816.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">sobble</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water undefined visible" id="drizzile" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/817.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">drizzile</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water undefined visible" id="inteleon" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/818.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">inteleon</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card normal undefined visible" id="skwovet" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/819.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">skwovet</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card normal undefined visible" id="greedent" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/820.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">greedent</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card flying undefined visible" id="rookidee" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/821.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">rookidee</div><div class="row type"><div class="flying">flying</div></div></div>
          <div class="card poke-card flying undefined visible" id="corvisquire" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/822.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">corvisquire</div><div class="row type"><div class="flying">flying</div></div></div>
          <div class="card poke-card flying steel visible" id="corviknight" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/823.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">corviknight</div><div class="row type"><div class="flying">flying</div><div class="steel">steel</div></div></div>
          <div class="card poke-card bug undefined visible" id="blipbug" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/824.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">blipbug</div><div class="row type"><div class="bug">bug</div></div></div>
          <div class="card poke-card bug psychic visible" id="dottler" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/825.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">dottler</div><div class="row type"><div class="bug">bug</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card bug psychic visible" id="orbeetle" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/826.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">orbeetle</div><div class="row type"><div class="bug">bug</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card dark undefined visible" id="nickit" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/827.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">nickit</div><div class="row type"><div class="dark">dark</div></div></div>
          <div class="card poke-card dark undefined visible" id="thievul" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/828.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">thievul</div><div class="row type"><div class="dark">dark</div></div></div>
          <div class="card poke-card grass undefined visible" id="gossifleur" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/829.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">gossifleur</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card grass undefined visible" id="eldegoss" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/830.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">eldegoss</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card normal undefined visible" id="wooloo" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/831.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">wooloo</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card normal undefined visible" id="dubwool" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/832.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">dubwool</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card water undefined visible" id="chewtle" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/833.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">chewtle</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water rock visible" id="drednaw" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/834.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">drednaw</div><div class="row type"><div class="water">water</div><div class="rock">rock</div></div></div>
          <div class="card poke-card electric undefined visible" id="yamper" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/835.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">yamper</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card electric undefined visible" id="boltund" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/836.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">boltund</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card rock undefined visible" id="rolycoly" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/837.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">rolycoly</div><div class="row type"><div class="rock">rock</div></div></div>
          <div class="card poke-card rock fire visible" id="carkol" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/838.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">carkol</div><div class="row type"><div class="rock">rock</div><div class="fire">fire</div></div></div>
          <div class="card poke-card rock fire visible" id="coalossal" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/839.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">coalossal</div><div class="row type"><div class="rock">rock</div><div class="fire">fire</div></div></div>
          <div class="card poke-card grass dragon visible" id="applin" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/840.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">applin</div><div class="row type"><div class="grass">grass</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card grass dragon visible" id="flapple" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/841.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">flapple</div><div class="row type"><div class="grass">grass</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card grass dragon visible" id="appletun" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/842.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">appletun</div><div class="row type"><div class="grass">grass</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card ground undefined visible" id="silicobra" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/843.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">silicobra</div><div class="row type"><div class="ground">ground</div></div></div>
          <div class="card poke-card ground undefined visible" id="sandaconda" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/844.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">sandaconda</div><div class="row type"><div class="ground">ground</div></div></div>
          <div class="card poke-card flying water visible" id="cramorant" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/845.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">cramorant</div><div class="row type"><div class="flying">flying</div><div class="water">water</div></div></div>
          <div class="card poke-card water undefined visible" id="arrokuda" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/846.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">arrokuda</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water undefined visible" id="barraskewda" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/847.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">barraskewda</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card electric poison visible" id="toxel" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/848.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">toxel</div><div class="row type"><div class="electric">electric</div><div class="poison">poison</div></div></div>
          <div class="card poke-card electric poison visible" id="toxtricity-amped" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/849.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">toxtricity-amped</div><div class="row type"><div class="electric">electric</div><div class="poison">poison</div></div></div>
          <div class="card poke-card fire bug visible" id="sizzlipede" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/850.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">sizzlipede</div><div class="row type"><div class="fire">fire</div><div class="bug">bug</div></div></div>
          <div class="card poke-card fire bug visible" id="centiskorch" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/851.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">centiskorch</div><div class="row type"><div class="fire">fire</div><div class="bug">bug</div></div></div>
          <div class="card poke-card fighting undefined visible" id="clobbopus" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/852.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">clobbopus</div><div class="row type"><div class="fighting">fighting</div></div></div>
          <div class="card poke-card fighting undefined visible" id="grapploct" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/853.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">grapploct</div><div class="row type"><div class="fighting">fighting</div></div></div>
          <div class="card poke-card ghost undefined visible" id="sinistea" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/854.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">sinistea</div><div class="row type"><div class="ghost">ghost</div></div></div>
          <div class="card poke-card ghost undefined visible" id="polteageist" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/855.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">polteageist</div><div class="row type"><div class="ghost">ghost</div></div></div>
          <div class="card poke-card psychic undefined visible" id="hatenna" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/856.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">hatenna</div><div class="row type"><div class="psychic">psychic</div></div></div>
          <div class="card poke-card psychic undefined visible" id="hattrem" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/857.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">hattrem</div><div class="row type"><div class="psychic">psychic</div></div></div>
          <div class="card poke-card psychic fairy visible" id="hatterene" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/858.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">hatterene</div><div class="row type"><div class="psychic">psychic</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card dark fairy visible" id="impidimp" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/859.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">impidimp</div><div class="row type"><div class="dark">dark</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card dark fairy visible" id="morgrem" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/860.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">morgrem</div><div class="row type"><div class="dark">dark</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card dark fairy visible" id="grimmsnarl" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/861.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">grimmsnarl</div><div class="row type"><div class="dark">dark</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card dark normal visible" id="obstagoon" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/862.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">obstagoon</div><div class="row type"><div class="dark">dark</div><div class="normal">normal</div></div></div>
          <div class="card poke-card steel undefined visible" id="perrserker" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/863.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">perrserker</div><div class="row type"><div class="steel">steel</div></div></div>
          <div class="card poke-card ghost undefined visible" id="cursola" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/864.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">cursola</div><div class="row type"><div class="ghost">ghost</div></div></div>
          <div class="card poke-card fighting undefined visible" id="sirfetchd" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/865.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">sirfetchd</div><div class="row type"><div class="fighting">fighting</div></div></div>
          <div class="card poke-card ice psychic visible" id="mr-rime" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/866.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">mr-rime</div><div class="row type"><div class="ice">ice</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card ground ghost visible" id="runerigus" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/867.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">runerigus</div><div class="row type"><div class="ground">ground</div><div class="ghost">ghost</div></div></div>
          <div class="card poke-card fairy undefined visible" id="milcery" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/868.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">milcery</div><div class="row type"><div class="fairy">fairy</div></div></div>
          <div class="card poke-card fairy undefined visible" id="alcremie" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/869.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">alcremie</div><div class="row type"><div class="fairy">fairy</div></div></div>
          <div class="card poke-card fighting undefined visible" id="falinks" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/870.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">falinks</div><div class="row type"><div class="fighting">fighting</div></div></div>
          <div class="card poke-card electric undefined visible" id="pincurchin" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/871.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">pincurchin</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card ice bug visible" id="snom" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/872.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">snom</div><div class="row type"><div class="ice">ice</div><div class="bug">bug</div></div></div>
          <div class="card poke-card ice bug visible" id="frosmoth" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/873.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">frosmoth</div><div class="row type"><div class="ice">ice</div><div class="bug">bug</div></div></div>
          <div class="card poke-card rock undefined visible" id="stonjourner" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/874.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">stonjourner</div><div class="row type"><div class="rock">rock</div></div></div>
          <div class="card poke-card ice undefined visible" id="eiscue-ice" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/875.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">eiscue-ice</div><div class="row type"><div class="ice">ice</div></div></div>
          <div class="card poke-card psychic normal visible" id="indeedee-male" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/876.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">indeedee-male</div><div class="row type"><div class="psychic">psychic</div><div class="normal">normal</div></div></div>
          <div class="card poke-card electric dark visible" id="morpeko-full-belly" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/877.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">morpeko-full-belly</div><div class="row type"><div class="electric">electric</div><div class="dark">dark</div></div></div>
          <div class="card poke-card steel undefined visible" id="cufant" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/878.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">cufant</div><div class="row type"><div class="steel">steel</div></div></div>
          <div class="card poke-card steel undefined visible" id="copperajah" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/879.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">copperajah</div><div class="row type"><div class="steel">steel</div></div></div>
          <div class="card poke-card electric dragon visible" id="dracozolt" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/880.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">dracozolt</div><div class="row type"><div class="electric">electric</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card electric ice visible" id="arctozolt" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/881.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">arctozolt</div><div class="row type"><div class="electric">electric</div><div class="ice">ice</div></div></div>
          <div class="card poke-card water dragon visible" id="dracovish" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/882.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">dracovish</div><div class="row type"><div class="water">water</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card water ice visible" id="arctovish" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/883.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">arctovish</div><div class="row type"><div class="water">water</div><div class="ice">ice</div></div></div>
          <div class="card poke-card steel dragon visible" id="duraludon" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/884.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">duraludon</div><div class="row type"><div class="steel">steel</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card dragon ghost visible" id="dreepy" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/885.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">dreepy</div><div class="row type"><div class="dragon">dragon</div><div class="ghost">ghost</div></div></div>
          <div class="card poke-card dragon ghost visible" id="drakloak" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/886.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">drakloak</div><div class="row type"><div class="dragon">dragon</div><div class="ghost">ghost</div></div></div>
          <div class="card poke-card dragon ghost visible" id="dragapult" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/887.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">dragapult</div><div class="row type"><div class="dragon">dragon</div><div class="ghost">ghost</div></div></div>
          <div class="card poke-card fairy undefined visible" id="zacian" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/888.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">zacian</div><div class="row type"><div class="fairy">fairy</div></div></div>
          <div class="card poke-card fighting undefined visible" id="zamazenta" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/889.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">zamazenta</div><div class="row type"><div class="fighting">fighting</div></div></div>
          <div class="card poke-card poison dragon visible" id="eternatus" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/890.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">eternatus</div><div class="row type"><div class="poison">poison</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card fighting undefined visible" id="kubfu" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/891.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">kubfu</div><div class="row type"><div class="fighting">fighting</div></div></div>
          <div class="card poke-card fighting dark visible" id="urshifu-single-strike" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/892.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">urshifu-single-strike</div><div class="row type"><div class="fighting">fighting</div><div class="dark">dark</div></div></div>
          <div class="card poke-card dark grass visible" id="zarude" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/893.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">zarude</div><div class="row type"><div class="dark">dark</div><div class="grass">grass</div></div></div>
          <div class="card poke-card electric undefined visible" id="regieleki" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/894.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">regieleki</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card dragon undefined visible" id="regidrago" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/895.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">regidrago</div><div class="row type"><div class="dragon">dragon</div></div></div>
          <div class="card poke-card ice undefined visible" id="glastrier" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/896.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">glastrier</div><div class="row type"><div class="ice">ice</div></div></div>
          <div class="card poke-card ghost undefined visible" id="spectrier" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/897.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">spectrier</div><div class="row type"><div class="ghost">ghost</div></div></div>
          <div class="card poke-card psychic grass visible" id="calyrex" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/898.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">calyrex</div><div class="row type"><div class="psychic">psychic</div><div class="grass">grass</div></div></div>
          <div class="card poke-card normal psychic visible" id="wyrdeer" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/899.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">wyrdeer</div><div class="row type"><div class="normal">normal</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card bug rock visible" id="kleavor" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/900.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">kleavor</div><div class="row type"><div class="bug">bug</div><div class="rock">rock</div></div></div>
          <div class="card poke-card ground normal visible" id="ursaluna" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/901.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">ursaluna</div><div class="row type"><div class="ground">ground</div><div class="normal">normal</div></div></div>
          <div class="card poke-card water ghost visible" id="basculegion-male" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/902.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">basculegion-male</div><div class="row type"><div class="water">water</div><div class="ghost">ghost</div></div></div>
          <div class="card poke-card fighting poison visible" id="sneasler" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/903.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">sneasler</div><div class="row type"><div class="fighting">fighting</div><div class="poison">poison</div></div></div>
          <div class="card poke-card dark poison visible" id="overqwil" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/904.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">overqwil</div><div class="row type"><div class="dark">dark</div><div class="poison">poison</div></div></div>
          <div class="card poke-card fairy flying visible" id="enamorus-incarnate" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/905.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">enamorus-incarnate</div><div class="row type"><div class="fairy">fairy</div><div class="flying">flying</div></div></div>
          <div class="card poke-card grass undefined visible" id="sprigatito" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/906.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">sprigatito</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card grass undefined visible" id="floragato" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/907.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">floragato</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card grass dark visible" id="meowscarada" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/908.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">meowscarada</div><div class="row type"><div class="grass">grass</div><div class="dark">dark</div></div></div>
          <div class="card poke-card fire undefined visible" id="fuecoco" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/909.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">fuecoco</div><div class="row type"><div class="fire">fire</div></div></div>
          <div class="card poke-card fire undefined visible" id="crocalor" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/910.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">crocalor</div><div class="row type"><div class="fire">fire</div></div></div>
          <div class="card poke-card fire ghost visible" id="skeledirge" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/911.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">skeledirge</div><div class="row type"><div class="fire">fire</div><div class="ghost">ghost</div></div></div>
          <div class="card poke-card water undefined visible" id="quaxly" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/912.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">quaxly</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water undefined visible" id="quaxwell" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/913.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">quaxwell</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water fighting visible" id="quaquaval" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/914.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">quaquaval</div><div class="row type"><div class="water">water</div><div class="fighting">fighting</div></div></div>
          <div class="card poke-card normal undefined visible" id="lechonk" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/915.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">lechonk</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card normal undefined visible" id="oinkologne" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/916.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">oinkologne</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card bug undefined visible" id="tarountula" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/917.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">tarountula</div><div class="row type"><div class="bug">bug</div></div></div>
          <div class="card poke-card bug undefined visible" id="spidops" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/918.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">spidops</div><div class="row type"><div class="bug">bug</div></div></div>
          <div class="card poke-card bug undefined visible" id="nymble" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/919.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">nymble</div><div class="row type"><div class="bug">bug</div></div></div>
          <div class="card poke-card bug dark visible" id="lokix" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/920.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">lokix</div><div class="row type"><div class="bug">bug</div><div class="dark">dark</div></div></div>
          <div class="card poke-card electric undefined visible" id="pawmi" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/921.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">pawmi</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card electric fighting visible" id="pawmo" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/922.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">pawmo</div><div class="row type"><div class="electric">electric</div><div class="fighting">fighting</div></div></div>
          <div class="card poke-card electric fighting visible" id="pawmot" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/923.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">pawmot</div><div class="row type"><div class="electric">electric</div><div class="fighting">fighting</div></div></div>
          <div class="card poke-card normal undefined visible" id="tandemaus" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/924.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">tandemaus</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card normal undefined visible" id="maushold" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/925.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">maushold</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card fairy undefined visible" id="fidough" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/926.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">fidough</div><div class="row type"><div class="fairy">fairy</div></div></div>
          <div class="card poke-card fairy undefined visible" id="dachsbun" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/927.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">dachsbun</div><div class="row type"><div class="fairy">fairy</div></div></div>
          <div class="card poke-card grass normal visible" id="smoliv" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/928.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">smoliv</div><div class="row type"><div class="grass">grass</div><div class="normal">normal</div></div></div>
          <div class="card poke-card grass normal visible" id="dolliv" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/929.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">dolliv</div><div class="row type"><div class="grass">grass</div><div class="normal">normal</div></div></div>
          <div class="card poke-card grass normal visible" id="arboliva" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/930.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">arboliva</div><div class="row type"><div class="grass">grass</div><div class="normal">normal</div></div></div>
          <div class="card poke-card normal flying visible" id="squawkabilly" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/931.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">squawkabilly</div><div class="row type"><div class="normal">normal</div><div class="flying">flying</div></div></div>
          <div class="card poke-card rock undefined visible" id="nacli" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/932.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">nacli</div><div class="row type"><div class="rock">rock</div></div></div>
          <div class="card poke-card rock undefined visible" id="naclstack" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/933.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">naclstack</div><div class="row type"><div class="rock">rock</div></div></div>
          <div class="card poke-card rock undefined visible" id="garganacl" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/934.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">garganacl</div><div class="row type"><div class="rock">rock</div></div></div>
          <div class="card poke-card fire undefined visible" id="charcadet" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/935.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">charcadet</div><div class="row type"><div class="fire">fire</div></div></div>
          <div class="card poke-card fire psychic visible" id="armarouge" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/936.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">armarouge</div><div class="row type"><div class="fire">fire</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card fire ghost visible" id="ceruledge" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/937.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">ceruledge</div><div class="row type"><div class="fire">fire</div><div class="ghost">ghost</div></div></div>
          <div class="card poke-card electric undefined visible" id="tadbulb" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/938.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">tadbulb</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card electric undefined visible" id="bellibolt" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/939.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">bellibolt</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card electric flying visible" id="wattrel" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/940.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">wattrel</div><div class="row type"><div class="electric">electric</div><div class="flying">flying</div></div></div>
          <div class="card poke-card electric flying visible" id="kilowattrel" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/941.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">kilowattrel</div><div class="row type"><div class="electric">electric</div><div class="flying">flying</div></div></div>
          <div class="card poke-card dark undefined visible" id="maschiff" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/942.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">maschiff</div><div class="row type"><div class="dark">dark</div></div></div>
          <div class="card poke-card dark undefined visible" id="mabosstiff" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/943.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">mabosstiff</div><div class="row type"><div class="dark">dark</div></div></div>
          <div class="card poke-card poison normal visible" id="shroodle" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/944.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">shroodle</div><div class="row type"><div class="poison">poison</div><div class="normal">normal</div></div></div>
          <div class="card poke-card poison normal visible" id="grafaiai" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/945.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">grafaiai</div><div class="row type"><div class="poison">poison</div><div class="normal">normal</div></div></div>
          <div class="card poke-card grass ghost visible" id="bramblin" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/946.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">bramblin</div><div class="row type"><div class="grass">grass</div><div class="ghost">ghost</div></div></div>
          <div class="card poke-card grass ghost visible" id="brambleghast" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/947.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">brambleghast</div><div class="row type"><div class="grass">grass</div><div class="ghost">ghost</div></div></div>
          <div class="card poke-card ground grass visible" id="toedscool" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/948.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">toedscool</div><div class="row type"><div class="ground">ground</div><div class="grass">grass</div></div></div>
          <div class="card poke-card ground grass visible" id="toedscruel" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/949.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">toedscruel</div><div class="row type"><div class="ground">ground</div><div class="grass">grass</div></div></div>
          <div class="card poke-card rock undefined visible" id="klawf" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/950.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">klawf</div><div class="row type"><div class="rock">rock</div></div></div>
          <div class="card poke-card grass undefined visible" id="capsakid" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/951.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">capsakid</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card grass fire visible" id="scovillain" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/952.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">scovillain</div><div class="row type"><div class="grass">grass</div><div class="fire">fire</div></div></div>
          <div class="card poke-card bug undefined visible" id="rellor" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/953.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">rellor</div><div class="row type"><div class="bug">bug</div></div></div>
          <div class="card poke-card bug psychic visible" id="rabsca" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/954.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">rabsca</div><div class="row type"><div class="bug">bug</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card psychic undefined visible" id="flittle" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/955.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">flittle</div><div class="row type"><div class="psychic">psychic</div></div></div>
          <div class="card poke-card psychic undefined visible" id="espathra" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/956.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">espathra</div><div class="row type"><div class="psychic">psychic</div></div></div>
          <div class="card poke-card fairy steel visible" id="tinkatink" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/957.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">tinkatink</div><div class="row type"><div class="fairy">fairy</div><div class="steel">steel</div></div></div>
          <div class="card poke-card fairy steel visible" id="tinkatuff" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/958.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">tinkatuff</div><div class="row type"><div class="fairy">fairy</div><div class="steel">steel</div></div></div>
          <div class="card poke-card fairy steel visible" id="tinkaton" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/959.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">tinkaton</div><div class="row type"><div class="fairy">fairy</div><div class="steel">steel</div></div></div>
          <div class="card poke-card water undefined visible" id="wiglett" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/960.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">wiglett</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water undefined visible" id="wugtrio" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/961.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">wugtrio</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card flying dark visible" id="bombirdier" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/962.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">bombirdier</div><div class="row type"><div class="flying">flying</div><div class="dark">dark</div></div></div>
          <div class="card poke-card water undefined visible" id="finizen" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/963.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">finizen</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water undefined visible" id="palafin" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/964.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">palafin</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card steel poison visible" id="varoom" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/965.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">varoom</div><div class="row type"><div class="steel">steel</div><div class="poison">poison</div></div></div>
          <div class="card poke-card steel poison visible" id="revavroom" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/966.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">revavroom</div><div class="row type"><div class="steel">steel</div><div class="poison">poison</div></div></div>
          <div class="card poke-card dragon normal visible" id="cyclizar" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/967.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">cyclizar</div><div class="row type"><div class="dragon">dragon</div><div class="normal">normal</div></div></div>
          <div class="card poke-card steel undefined visible" id="orthworm" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/968.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">orthworm</div><div class="row type"><div class="steel">steel</div></div></div>
          <div class="card poke-card rock poison visible" id="glimmet" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/969.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">glimmet</div><div class="row type"><div class="rock">rock</div><div class="poison">poison</div></div></div>
          <div class="card poke-card rock poison visible" id="glimmora" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/970.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">glimmora</div><div class="row type"><div class="rock">rock</div><div class="poison">poison</div></div></div>
          <div class="card poke-card ghost undefined visible" id="greavard" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/971.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">greavard</div><div class="row type"><div class="ghost">ghost</div></div></div>
          <div class="card poke-card ghost undefined visible" id="houndstone" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/972.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">houndstone</div><div class="row type"><div class="ghost">ghost</div></div></div>
          <div class="card poke-card flying fighting visible" id="flamigo" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/973.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">flamigo</div><div class="row type"><div class="flying">flying</div><div class="fighting">fighting</div></div></div>
          <div class="card poke-card ice undefined visible" id="cetoddle" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/974.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">cetoddle</div><div class="row type"><div class="ice">ice</div></div></div>
          <div class="card poke-card ice undefined visible" id="cetitan" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/975.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">cetitan</div><div class="row type"><div class="ice">ice</div></div></div>
          <div class="card poke-card water psychic visible" id="veluza" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/976.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">veluza</div><div class="row type"><div class="water">water</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card water undefined visible" id="dondozo" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/977.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">dondozo</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card dragon water visible" id="tatsugiri" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/978.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">tatsugiri</div><div class="row type"><div class="dragon">dragon</div><div class="water">water</div></div></div>
          <div class="card poke-card fighting ghost visible" id="annihilape" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/979.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">annihilape</div><div class="row type"><div class="fighting">fighting</div><div class="ghost">ghost</div></div></div>
          <div class="card poke-card poison ground visible" id="clodsire" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/980.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">clodsire</div><div class="row type"><div class="poison">poison</div><div class="ground">ground</div></div></div>
          <div class="card poke-card normal psychic visible" id="farigiraf" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/981.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">farigiraf</div><div class="row type"><div class="normal">normal</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card normal undefined visible" id="dudunsparce" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/982.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">dudunsparce</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card dark steel visible" id="kingambit" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/983.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">kingambit</div><div class="row type"><div class="dark">dark</div><div class="steel">steel</div></div></div>
          <div class="card poke-card ground fighting visible" id="great-tusk" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/984.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">great-tusk</div><div class="row type"><div class="ground">ground</div><div class="fighting">fighting</div></div></div>
          <div class="card poke-card fairy psychic visible" id="scream-tail" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/985.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">scream-tail</div><div class="row type"><div class="fairy">fairy</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card grass dark visible" id="brute-bonnet" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/986.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">brute-bonnet</div><div class="row type"><div class="grass">grass</div><div class="dark">dark</div></div></div>
          <div class="card poke-card ghost fairy visible" id="flutter-mane" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/987.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">flutter-mane</div><div class="row type"><div class="ghost">ghost</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card bug fighting visible" id="slither-wing" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/988.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">slither-wing</div><div class="row type"><div class="bug">bug</div><div class="fighting">fighting</div></div></div>
          <div class="card poke-card electric ground visible" id="sandy-shocks" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/989.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">sandy-shocks</div><div class="row type"><div class="electric">electric</div><div class="ground">ground</div></div></div>
          <div class="card poke-card ground steel visible" id="iron-treads" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/990.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">iron-treads</div><div class="row type"><div class="ground">ground</div><div class="steel">steel</div></div></div>
          <div class="card poke-card ice water visible" id="iron-bundle" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/991.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">iron-bundle</div><div class="row type"><div class="ice">ice</div><div class="water">water</div></div></div>
          <div class="card poke-card fighting electric visible" id="iron-hands" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/992.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">iron-hands</div><div class="row type"><div class="fighting">fighting</div><div class="electric">electric</div></div></div>
          <div class="card poke-card dark flying visible" id="iron-jugulis" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/993.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">iron-jugulis</div><div class="row type"><div class="dark">dark</div><div class="flying">flying</div></div></div>
          <div class="card poke-card fire poison visible" id="iron-moth" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/994.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">iron-moth</div><div class="row type"><div class="fire">fire</div><div class="poison">poison</div></div></div>
          <div class="card poke-card rock electric visible" id="iron-thorns" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/995.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">iron-thorns</div><div class="row type"><div class="rock">rock</div><div class="electric">electric</div></div></div>
          <div class="card poke-card dragon ice visible" id="frigibax" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/996.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">frigibax</div><div class="row type"><div class="dragon">dragon</div><div class="ice">ice</div></div></div>
          <div class="card poke-card dragon ice visible" id="arctibax" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/997.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">arctibax</div><div class="row type"><div class="dragon">dragon</div><div class="ice">ice</div></div></div>
          <div class="card poke-card dragon ice visible" id="baxcalibur" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/998.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">baxcalibur</div><div class="row type"><div class="dragon">dragon</div><div class="ice">ice</div></div></div>
          <div class="card poke-card ghost undefined visible" id="gimmighoul" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/999.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">gimmighoul</div><div class="row type"><div class="ghost">ghost</div></div></div>
          <div class="card poke-card steel ghost visible" id="gholdengo" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1000.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">gholdengo</div><div class="row type"><div class="steel">steel</div><div class="ghost">ghost</div></div></div>
          <div class="card poke-card dark grass visible" id="wo-chien" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1001.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">wo-chien</div><div class="row type"><div class="dark">dark</div><div class="grass">grass</div></div></div>
          <div class="card poke-card dark ice visible" id="chien-pao" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1002.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">chien-pao</div><div class="row type"><div class="dark">dark</div><div class="ice">ice</div></div></div>
          <div class="card poke-card dark ground visible" id="ting-lu" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1003.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">ting-lu</div><div class="row type"><div class="dark">dark</div><div class="ground">ground</div></div></div>
          <div class="card poke-card dark fire visible" id="chi-yu" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1004.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">chi-yu</div><div class="row type"><div class="dark">dark</div><div class="fire">fire</div></div></div>
          <div class="card poke-card dragon dark visible" id="roaring-moon" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1005.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">roaring-moon</div><div class="row type"><div class="dragon">dragon</div><div class="dark">dark</div></div></div>
          <div class="card poke-card fairy fighting visible" id="iron-valiant" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1006.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">iron-valiant</div><div class="row type"><div class="fairy">fairy</div><div class="fighting">fighting</div></div></div>
          <div class="card poke-card fighting dragon visible" id="koraidon" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1007.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">koraidon</div><div class="row type"><div class="fighting">fighting</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card electric dragon visible" id="miraidon" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1008.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">miraidon</div><div class="row type"><div class="electric">electric</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card water dragon visible" id="walking-wake" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1009.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">walking-wake</div><div class="row type"><div class="water">water</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card grass psychic visible" id="iron-leaves" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1010.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">iron-leaves</div><div class="row type"><div class="grass">grass</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card grass dragon visible" id="dipplin" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1011.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">dipplin</div><div class="row type"><div class="grass">grass</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card grass ghost visible" id="poltchageist" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1012.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">poltchageist</div><div class="row type"><div class="grass">grass</div><div class="ghost">ghost</div></div></div>
          <div class="card poke-card grass ghost visible" id="sinistcha" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1013.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">sinistcha</div><div class="row type"><div class="grass">grass</div><div class="ghost">ghost</div></div></div>
          <div class="card poke-card poison fighting visible" id="okidogi" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1014.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">okidogi</div><div class="row type"><div class="poison">poison</div><div class="fighting">fighting</div></div></div>
          <div class="card poke-card poison psychic visible" id="munkidori" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1015.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">munkidori</div><div class="row type"><div class="poison">poison</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card poison fairy visible" id="fezandipiti" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1016.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">fezandipiti</div><div class="row type"><div class="poison">poison</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card grass undefined visible" id="ogerpon" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1017.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">ogerpon</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card psychic undefined visible" id="deoxys-attack" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10001.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">deoxys-attack</div><div class="row type"><div class="psychic">psychic</div></div></div>
          <div class="card poke-card psychic undefined visible" id="deoxys-defense" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10002.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">deoxys-defense</div><div class="row type"><div class="psychic">psychic</div></div></div>
          <div class="card poke-card psychic undefined visible" id="deoxys-speed" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10003.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">deoxys-speed</div><div class="row type"><div class="psychic">psychic</div></div></div>
          <div class="card poke-card bug ground visible" id="wormadam-sandy" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10004.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">wormadam-sandy</div><div class="row type"><div class="bug">bug</div><div class="ground">ground</div></div></div>
          <div class="card poke-card bug steel visible" id="wormadam-trash" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10005.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">wormadam-trash</div><div class="row type"><div class="bug">bug</div><div class="steel">steel</div></div></div>
          <div class="card poke-card grass flying visible" id="shaymin-sky" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10006.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">shaymin-sky</div><div class="row type"><div class="grass">grass</div><div class="flying">flying</div></div></div>
          <div class="card poke-card ghost dragon visible" id="giratina-origin" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10007.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">giratina-origin</div><div class="row type"><div class="ghost">ghost</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card electric fire visible" id="rotom-heat" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10008.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">rotom-heat</div><div class="row type"><div class="electric">electric</div><div class="fire">fire</div></div></div>
          <div class="card poke-card electric water visible" id="rotom-wash" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10009.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">rotom-wash</div><div class="row type"><div class="electric">electric</div><div class="water">water</div></div></div>
          <div class="card poke-card electric ice visible" id="rotom-frost" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10010.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">rotom-frost</div><div class="row type"><div class="electric">electric</div><div class="ice">ice</div></div></div>
          <div class="card poke-card electric flying visible" id="rotom-fan" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10011.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">rotom-fan</div><div class="row type"><div class="electric">electric</div><div class="flying">flying</div></div></div>
          <div class="card poke-card electric grass visible" id="rotom-mow" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10012.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">rotom-mow</div><div class="row type"><div class="electric">electric</div><div class="grass">grass</div></div></div>
          <div class="card poke-card fire undefined visible" id="castform-sunny" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10013.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">castform-sunny</div><div class="row type"><div class="fire">fire</div></div></div>
          <div class="card poke-card water undefined visible" id="castform-rainy" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10014.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">castform-rainy</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card ice undefined visible" id="castform-snowy" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10015.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">castform-snowy</div><div class="row type"><div class="ice">ice</div></div></div>
          <div class="card poke-card water undefined visible" id="basculin-blue-striped" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10016.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">basculin-blue-striped</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card fire psychic visible" id="darmanitan-zen" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10017.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">darmanitan-zen</div><div class="row type"><div class="fire">fire</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card normal fighting visible" id="meloetta-pirouette" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10018.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">meloetta-pirouette</div><div class="row type"><div class="normal">normal</div><div class="fighting">fighting</div></div></div>
          <div class="card poke-card flying undefined visible" id="tornadus-therian" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10019.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">tornadus-therian</div><div class="row type"><div class="flying">flying</div></div></div>
          <div class="card poke-card electric flying visible" id="thundurus-therian" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10020.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">thundurus-therian</div><div class="row type"><div class="electric">electric</div><div class="flying">flying</div></div></div>
          <div class="card poke-card ground flying visible" id="landorus-therian" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10021.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">landorus-therian</div><div class="row type"><div class="ground">ground</div><div class="flying">flying</div></div></div>
          <div class="card poke-card dragon ice visible" id="kyurem-black" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10022.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">kyurem-black</div><div class="row type"><div class="dragon">dragon</div><div class="ice">ice</div></div></div>
          <div class="card poke-card dragon ice visible" id="kyurem-white" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10023.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">kyurem-white</div><div class="row type"><div class="dragon">dragon</div><div class="ice">ice</div></div></div>
          <div class="card poke-card water fighting visible" id="keldeo-resolute" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10024.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">keldeo-resolute</div><div class="row type"><div class="water">water</div><div class="fighting">fighting</div></div></div>
          <div class="card poke-card psychic undefined visible" id="meowstic-female" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10025.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">meowstic-female</div><div class="row type"><div class="psychic">psychic</div></div></div>
          <div class="card poke-card steel ghost visible" id="aegislash-blade" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10026.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">aegislash-blade</div><div class="row type"><div class="steel">steel</div><div class="ghost">ghost</div></div></div>
          <div class="card poke-card ghost grass visible" id="pumpkaboo-small" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10027.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">pumpkaboo-small</div><div class="row type"><div class="ghost">ghost</div><div class="grass">grass</div></div></div>
          <div class="card poke-card ghost grass visible" id="pumpkaboo-large" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10028.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">pumpkaboo-large</div><div class="row type"><div class="ghost">ghost</div><div class="grass">grass</div></div></div>
          <div class="card poke-card ghost grass visible" id="pumpkaboo-super" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10029.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">pumpkaboo-super</div><div class="row type"><div class="ghost">ghost</div><div class="grass">grass</div></div></div>
          <div class="card poke-card ghost grass visible" id="gourgeist-small" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10030.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">gourgeist-small</div><div class="row type"><div class="ghost">ghost</div><div class="grass">grass</div></div></div>
          <div class="card poke-card ghost grass visible" id="gourgeist-large" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10031.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">gourgeist-large</div><div class="row type"><div class="ghost">ghost</div><div class="grass">grass</div></div></div>
          <div class="card poke-card ghost grass visible" id="gourgeist-super" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10032.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">gourgeist-super</div><div class="row type"><div class="ghost">ghost</div><div class="grass">grass</div></div></div>
          <div class="card poke-card grass poison visible" id="venusaur-mega" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10033.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">venusaur-mega</div><div class="row type"><div class="grass">grass</div><div class="poison">poison</div></div></div>
          <div class="card poke-card fire dragon visible" id="charizard-mega-x" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10034.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">charizard-mega-x</div><div class="row type"><div class="fire">fire</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card fire flying visible" id="charizard-mega-y" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10035.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">charizard-mega-y</div><div class="row type"><div class="fire">fire</div><div class="flying">flying</div></div></div>
          <div class="card poke-card water undefined visible" id="blastoise-mega" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10036.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">blastoise-mega</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card psychic undefined visible" id="alakazam-mega" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10037.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">alakazam-mega</div><div class="row type"><div class="psychic">psychic</div></div></div>
          <div class="card poke-card ghost poison visible" id="gengar-mega" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10038.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">gengar-mega</div><div class="row type"><div class="ghost">ghost</div><div class="poison">poison</div></div></div>
          <div class="card poke-card normal undefined visible" id="kangaskhan-mega" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10039.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">kangaskhan-mega</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card bug flying visible" id="pinsir-mega" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10040.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">pinsir-mega</div><div class="row type"><div class="bug">bug</div><div class="flying">flying</div></div></div>
          <div class="card poke-card water dark visible" id="gyarados-mega" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10041.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">gyarados-mega</div><div class="row type"><div class="water">water</div><div class="dark">dark</div></div></div>
          <div class="card poke-card rock flying visible" id="aerodactyl-mega" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10042.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">aerodactyl-mega</div><div class="row type"><div class="rock">rock</div><div class="flying">flying</div></div></div>
          <div class="card poke-card psychic fighting visible" id="mewtwo-mega-x" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10043.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">mewtwo-mega-x</div><div class="row type"><div class="psychic">psychic</div><div class="fighting">fighting</div></div></div>
          <div class="card poke-card psychic undefined visible" id="mewtwo-mega-y" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10044.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">mewtwo-mega-y</div><div class="row type"><div class="psychic">psychic</div></div></div>
          <div class="card poke-card electric dragon visible" id="ampharos-mega" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10045.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">ampharos-mega</div><div class="row type"><div class="electric">electric</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card bug steel visible" id="scizor-mega" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10046.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">scizor-mega</div><div class="row type"><div class="bug">bug</div><div class="steel">steel</div></div></div>
          <div class="card poke-card bug fighting visible" id="heracross-mega" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10047.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">heracross-mega</div><div class="row type"><div class="bug">bug</div><div class="fighting">fighting</div></div></div>
          <div class="card poke-card dark fire visible" id="houndoom-mega" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10048.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">houndoom-mega</div><div class="row type"><div class="dark">dark</div><div class="fire">fire</div></div></div>
          <div class="card poke-card rock dark visible" id="tyranitar-mega" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10049.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">tyranitar-mega</div><div class="row type"><div class="rock">rock</div><div class="dark">dark</div></div></div>
          <div class="card poke-card fire fighting visible" id="blaziken-mega" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10050.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">blaziken-mega</div><div class="row type"><div class="fire">fire</div><div class="fighting">fighting</div></div></div>
          <div class="card poke-card psychic fairy visible" id="gardevoir-mega" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10051.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">gardevoir-mega</div><div class="row type"><div class="psychic">psychic</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card steel fairy visible" id="mawile-mega" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10052.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">mawile-mega</div><div class="row type"><div class="steel">steel</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card steel undefined visible" id="aggron-mega" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10053.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">aggron-mega</div><div class="row type"><div class="steel">steel</div></div></div>
          <div class="card poke-card fighting psychic visible" id="medicham-mega" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10054.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">medicham-mega</div><div class="row type"><div class="fighting">fighting</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card electric undefined visible" id="manectric-mega" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10055.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">manectric-mega</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card ghost undefined visible" id="banette-mega" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10056.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">banette-mega</div><div class="row type"><div class="ghost">ghost</div></div></div>
          <div class="card poke-card dark undefined visible" id="absol-mega" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10057.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">absol-mega</div><div class="row type"><div class="dark">dark</div></div></div>
          <div class="card poke-card dragon ground visible" id="garchomp-mega" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10058.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">garchomp-mega</div><div class="row type"><div class="dragon">dragon</div><div class="ground">ground</div></div></div>
          <div class="card poke-card fighting steel visible" id="lucario-mega" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10059.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">lucario-mega</div><div class="row type"><div class="fighting">fighting</div><div class="steel">steel</div></div></div>
          <div class="card poke-card grass ice visible" id="abomasnow-mega" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10060.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">abomasnow-mega</div><div class="row type"><div class="grass">grass</div><div class="ice">ice</div></div></div>
          <div class="card poke-card fairy undefined visible" id="floette-eternal" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10061.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">floette-eternal</div><div class="row type"><div class="fairy">fairy</div></div></div>
          <div class="card poke-card dragon psychic visible" id="latias-mega" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10062.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">latias-mega</div><div class="row type"><div class="dragon">dragon</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card dragon psychic visible" id="latios-mega" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10063.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">latios-mega</div><div class="row type"><div class="dragon">dragon</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card water ground visible" id="swampert-mega" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10064.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">swampert-mega</div><div class="row type"><div class="water">water</div><div class="ground">ground</div></div></div>
          <div class="card poke-card grass dragon visible" id="sceptile-mega" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10065.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">sceptile-mega</div><div class="row type"><div class="grass">grass</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card dark ghost visible" id="sableye-mega" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10066.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">sableye-mega</div><div class="row type"><div class="dark">dark</div><div class="ghost">ghost</div></div></div>
          <div class="card poke-card dragon fairy visible" id="altaria-mega" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10067.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">altaria-mega</div><div class="row type"><div class="dragon">dragon</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card psychic fighting visible" id="gallade-mega" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10068.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">gallade-mega</div><div class="row type"><div class="psychic">psychic</div><div class="fighting">fighting</div></div></div>
          <div class="card poke-card normal fairy visible" id="audino-mega" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10069.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">audino-mega</div><div class="row type"><div class="normal">normal</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card water dark visible" id="sharpedo-mega" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10070.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">sharpedo-mega</div><div class="row type"><div class="water">water</div><div class="dark">dark</div></div></div>
          <div class="card poke-card water psychic visible" id="slowbro-mega" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10071.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">slowbro-mega</div><div class="row type"><div class="water">water</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card steel ground visible" id="steelix-mega" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10072.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">steelix-mega</div><div class="row type"><div class="steel">steel</div><div class="ground">ground</div></div></div>
          <div class="card poke-card normal flying visible" id="pidgeot-mega" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10073.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">pidgeot-mega</div><div class="row type"><div class="normal">normal</div><div class="flying">flying</div></div></div>
          <div class="card poke-card ice undefined visible" id="glalie-mega" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10074.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">glalie-mega</div><div class="row type"><div class="ice">ice</div></div></div>
          <div class="card poke-card rock fairy visible" id="diancie-mega" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10075.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">diancie-mega</div><div class="row type"><div class="rock">rock</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card steel psychic visible" id="metagross-mega" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10076.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">metagross-mega</div><div class="row type"><div class="steel">steel</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card water undefined visible" id="kyogre-primal" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10077.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">kyogre-primal</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card ground fire visible" id="groudon-primal" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10078.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">groudon-primal</div><div class="row type"><div class="ground">ground</div><div class="fire">fire</div></div></div>
          <div class="card poke-card dragon flying visible" id="rayquaza-mega" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10079.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">rayquaza-mega</div><div class="row type"><div class="dragon">dragon</div><div class="flying">flying</div></div></div>
          <div class="card poke-card electric undefined visible" id="pikachu-rock-star" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10080.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">pikachu-rock-star</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card electric undefined visible" id="pikachu-belle" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10081.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">pikachu-belle</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card electric undefined visible" id="pikachu-pop-star" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10082.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">pikachu-pop-star</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card electric undefined visible" id="pikachu-phd" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10083.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">pikachu-phd</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card electric undefined visible" id="pikachu-libre" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10084.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">pikachu-libre</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card electric undefined visible" id="pikachu-cosplay" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10085.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">pikachu-cosplay</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card psychic dark visible" id="hoopa-unbound" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10086.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">hoopa-unbound</div><div class="row type"><div class="psychic">psychic</div><div class="dark">dark</div></div></div>
          <div class="card poke-card fire ground visible" id="camerupt-mega" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10087.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">camerupt-mega</div><div class="row type"><div class="fire">fire</div><div class="ground">ground</div></div></div>
          <div class="card poke-card normal fighting visible" id="lopunny-mega" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10088.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">lopunny-mega</div><div class="row type"><div class="normal">normal</div><div class="fighting">fighting</div></div></div>
          <div class="card poke-card dragon flying visible" id="salamence-mega" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10089.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">salamence-mega</div><div class="row type"><div class="dragon">dragon</div><div class="flying">flying</div></div></div>
          <div class="card poke-card bug poison visible" id="beedrill-mega" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10090.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">beedrill-mega</div><div class="row type"><div class="bug">bug</div><div class="poison">poison</div></div></div>
          <div class="card poke-card dark normal visible" id="rattata-alola" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10091.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">rattata-alola</div><div class="row type"><div class="dark">dark</div><div class="normal">normal</div></div></div>
          <div class="card poke-card dark normal visible" id="raticate-alola" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10092.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">raticate-alola</div><div class="row type"><div class="dark">dark</div><div class="normal">normal</div></div></div>
          <div class="card poke-card dark normal visible" id="raticate-totem-alola" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10093.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">raticate-totem-alola</div><div class="row type"><div class="dark">dark</div><div class="normal">normal</div></div></div>
          <div class="card poke-card electric undefined visible" id="pikachu-original-cap" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10094.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">pikachu-original-cap</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card electric undefined visible" id="pikachu-hoenn-cap" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10095.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">pikachu-hoenn-cap</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card electric undefined visible" id="pikachu-sinnoh-cap" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10096.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">pikachu-sinnoh-cap</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card electric undefined visible" id="pikachu-unova-cap" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10097.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">pikachu-unova-cap</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card electric undefined visible" id="pikachu-kalos-cap" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10098.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">pikachu-kalos-cap</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card electric undefined visible" id="pikachu-alola-cap" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10099.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">pikachu-alola-cap</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card electric psychic visible" id="raichu-alola" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10100.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">raichu-alola</div><div class="row type"><div class="electric">electric</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card ice steel visible" id="sandshrew-alola" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10101.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">sandshrew-alola</div><div class="row type"><div class="ice">ice</div><div class="steel">steel</div></div></div>
          <div class="card poke-card ice steel visible" id="sandslash-alola" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10102.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">sandslash-alola</div><div class="row type"><div class="ice">ice</div><div class="steel">steel</div></div></div>
          <div class="card poke-card ice undefined visible" id="vulpix-alola" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10103.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">vulpix-alola</div><div class="row type"><div class="ice">ice</div></div></div>
          <div class="card poke-card ice fairy visible" id="ninetales-alola" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10104.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">ninetales-alola</div><div class="row type"><div class="ice">ice</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card ground steel visible" id="diglett-alola" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10105.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">diglett-alola</div><div class="row type"><div class="ground">ground</div><div class="steel">steel</div></div></div>
          <div class="card poke-card ground steel visible" id="dugtrio-alola" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10106.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">dugtrio-alola</div><div class="row type"><div class="ground">ground</div><div class="steel">steel</div></div></div>
          <div class="card poke-card dark undefined visible" id="meowth-alola" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10107.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">meowth-alola</div><div class="row type"><div class="dark">dark</div></div></div>
          <div class="card poke-card dark undefined visible" id="persian-alola" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10108.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">persian-alola</div><div class="row type"><div class="dark">dark</div></div></div>
          <div class="card poke-card rock electric visible" id="geodude-alola" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10109.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">geodude-alola</div><div class="row type"><div class="rock">rock</div><div class="electric">electric</div></div></div>
          <div class="card poke-card rock electric visible" id="graveler-alola" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10110.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">graveler-alola</div><div class="row type"><div class="rock">rock</div><div class="electric">electric</div></div></div>
          <div class="card poke-card rock electric visible" id="golem-alola" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10111.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">golem-alola</div><div class="row type"><div class="rock">rock</div><div class="electric">electric</div></div></div>
          <div class="card poke-card poison dark visible" id="grimer-alola" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10112.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">grimer-alola</div><div class="row type"><div class="poison">poison</div><div class="dark">dark</div></div></div>
          <div class="card poke-card poison dark visible" id="muk-alola" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10113.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">muk-alola</div><div class="row type"><div class="poison">poison</div><div class="dark">dark</div></div></div>
          <div class="card poke-card grass dragon visible" id="exeggutor-alola" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10114.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">exeggutor-alola</div><div class="row type"><div class="grass">grass</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card fire ghost visible" id="marowak-alola" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10115.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">marowak-alola</div><div class="row type"><div class="fire">fire</div><div class="ghost">ghost</div></div></div>
          <div class="card poke-card water dark visible" id="greninja-battle-bond" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10116.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">greninja-battle-bond</div><div class="row type"><div class="water">water</div><div class="dark">dark</div></div></div>
          <div class="card poke-card water dark visible" id="greninja-ash" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10117.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">greninja-ash</div><div class="row type"><div class="water">water</div><div class="dark">dark</div></div></div>
          <div class="card poke-card dragon ground visible" id="zygarde-10-power-construct" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10118.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">zygarde-10-power-construct</div><div class="row type"><div class="dragon">dragon</div><div class="ground">ground</div></div></div>
          <div class="card poke-card dragon ground visible" id="zygarde-50-power-construct" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10119.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">zygarde-50-power-construct</div><div class="row type"><div class="dragon">dragon</div><div class="ground">ground</div></div></div>
          <div class="card poke-card dragon ground visible" id="zygarde-complete" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10120.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">zygarde-complete</div><div class="row type"><div class="dragon">dragon</div><div class="ground">ground</div></div></div>
          <div class="card poke-card normal undefined visible" id="gumshoos-totem" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10121.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">gumshoos-totem</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card bug electric visible" id="vikavolt-totem" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10122.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">vikavolt-totem</div><div class="row type"><div class="bug">bug</div><div class="electric">electric</div></div></div>
          <div class="card poke-card electric flying visible" id="oricorio-pom-pom" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10123.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">oricorio-pom-pom</div><div class="row type"><div class="electric">electric</div><div class="flying">flying</div></div></div>
          <div class="card poke-card psychic flying visible" id="oricorio-pau" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10124.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">oricorio-pau</div><div class="row type"><div class="psychic">psychic</div><div class="flying">flying</div></div></div>
          <div class="card poke-card ghost flying visible" id="oricorio-sensu" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10125.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">oricorio-sensu</div><div class="row type"><div class="ghost">ghost</div><div class="flying">flying</div></div></div>
          <div class="card poke-card rock undefined visible" id="lycanroc-midnight" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10126.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">lycanroc-midnight</div><div class="row type"><div class="rock">rock</div></div></div>
          <div class="card poke-card water undefined visible" id="wishiwashi-school" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10127.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">wishiwashi-school</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card grass undefined visible" id="lurantis-totem" onclick="updatGIF()">
          <img class="p-img" src="null" alt="" style="width: 128px; height: 128px;"><div class="p-name">lurantis-totem</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card poison fire visible" id="salazzle-totem" onclick="updatGIF()">
          <img class="p-img" src="null" alt="" style="width: 128px; height: 128px;"><div class="p-name">salazzle-totem</div><div class="row type"><div class="poison">poison</div><div class="fire">fire</div></div></div>
          <div class="card poke-card rock flying visible" id="minior-orange-meteor" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10130.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">minior-orange-meteor</div><div class="row type"><div class="rock">rock</div><div class="flying">flying</div></div></div>
          <div class="card poke-card rock flying visible" id="minior-yellow-meteor" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10131.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">minior-yellow-meteor</div><div class="row type"><div class="rock">rock</div><div class="flying">flying</div></div></div>
          <div class="card poke-card rock flying visible" id="minior-green-meteor" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10132.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">minior-green-meteor</div><div class="row type"><div class="rock">rock</div><div class="flying">flying</div></div></div>
          <div class="card poke-card rock flying visible" id="minior-blue-meteor" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10133.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">minior-blue-meteor</div><div class="row type"><div class="rock">rock</div><div class="flying">flying</div></div></div>
          <div class="card poke-card rock flying visible" id="minior-indigo-meteor" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10134.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">minior-indigo-meteor</div><div class="row type"><div class="rock">rock</div><div class="flying">flying</div></div></div>
          <div class="card poke-card rock flying visible" id="minior-violet-meteor" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10135.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">minior-violet-meteor</div><div class="row type"><div class="rock">rock</div><div class="flying">flying</div></div></div>
          <div class="card poke-card rock flying visible" id="minior-red" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10136.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">minior-red</div><div class="row type"><div class="rock">rock</div><div class="flying">flying</div></div></div>
          <div class="card poke-card rock flying visible" id="minior-orange" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10137.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">minior-orange</div><div class="row type"><div class="rock">rock</div><div class="flying">flying</div></div></div>
          <div class="card poke-card rock flying visible" id="minior-yellow" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10138.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">minior-yellow</div><div class="row type"><div class="rock">rock</div><div class="flying">flying</div></div></div>
          <div class="card poke-card rock flying visible" id="minior-green" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10139.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">minior-green</div><div class="row type"><div class="rock">rock</div><div class="flying">flying</div></div></div>
          <div class="card poke-card rock flying visible" id="minior-blue" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10140.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">minior-blue</div><div class="row type"><div class="rock">rock</div><div class="flying">flying</div></div></div>
          <div class="card poke-card rock flying visible" id="minior-indigo" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10141.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">minior-indigo</div><div class="row type"><div class="rock">rock</div><div class="flying">flying</div></div></div>
          <div class="card poke-card rock flying visible" id="minior-violet" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10142.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">minior-violet</div><div class="row type"><div class="rock">rock</div><div class="flying">flying</div></div></div>
          <div class="card poke-card ghost fairy visible" id="mimikyu-busted" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10143.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">mimikyu-busted</div><div class="row type"><div class="ghost">ghost</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card ghost fairy visible" id="mimikyu-totem-disguised" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10144.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">mimikyu-totem-disguised</div><div class="row type"><div class="ghost">ghost</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card ghost fairy visible" id="mimikyu-totem-busted" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10145.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">mimikyu-totem-busted</div><div class="row type"><div class="ghost">ghost</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card dragon fighting visible" id="kommo-o-totem" onclick="updatGIF()">
          <img class="p-img" src="null" alt="" style="width: 128px; height: 128px;"><div class="p-name">kommo-o-totem</div><div class="row type"><div class="dragon">dragon</div><div class="fighting">fighting</div></div></div>
          <div class="card poke-card steel fairy visible" id="magearna-original" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10147.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">magearna-original</div><div class="row type"><div class="steel">steel</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card electric undefined visible" id="pikachu-partner-cap" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10148.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">pikachu-partner-cap</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card fire ghost visible" id="marowak-totem" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10149.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">marowak-totem</div><div class="row type"><div class="fire">fire</div><div class="ghost">ghost</div></div></div>
          <div class="card poke-card bug fairy visible" id="ribombee-totem" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10150.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">ribombee-totem</div><div class="row type"><div class="bug">bug</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card rock undefined visible" id="rockruff-own-tempo" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10151.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">rockruff-own-tempo</div><div class="row type"><div class="rock">rock</div></div></div>
          <div class="card poke-card rock undefined visible" id="lycanroc-dusk" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10152.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">lycanroc-dusk</div><div class="row type"><div class="rock">rock</div></div></div>
          <div class="card poke-card water bug visible" id="araquanid-totem" onclick="updatGIF()">
          <img class="p-img" src="null" alt="" style="width: 128px; height: 128px;"><div class="p-name">araquanid-totem</div><div class="row type"><div class="water">water</div><div class="bug">bug</div></div></div>
          <div class="card poke-card electric steel visible" id="togedemaru-totem" onclick="updatGIF()">
          <img class="p-img" src="null" alt="" style="width: 128px; height: 128px;"><div class="p-name">togedemaru-totem</div><div class="row type"><div class="electric">electric</div><div class="steel">steel</div></div></div>
          <div class="card poke-card psychic steel visible" id="necrozma-dusk" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10155.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">necrozma-dusk</div><div class="row type"><div class="psychic">psychic</div><div class="steel">steel</div></div></div>
          <div class="card poke-card psychic ghost visible" id="necrozma-dawn" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10156.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">necrozma-dawn</div><div class="row type"><div class="psychic">psychic</div><div class="ghost">ghost</div></div></div>
          <div class="card poke-card psychic dragon visible" id="necrozma-ultra" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10157.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">necrozma-ultra</div><div class="row type"><div class="psychic">psychic</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card electric undefined visible" id="pikachu-starter" onclick="updatGIF()">
          <img class="p-img" src="null" alt="" style="width: 128px; height: 128px;"><div class="p-name">pikachu-starter</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card normal undefined visible" id="eevee-starter" onclick="updatGIF()">
          <img class="p-img" src="null" alt="" style="width: 128px; height: 128px;"><div class="p-name">eevee-starter</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card electric undefined visible" id="pikachu-world-cap" onclick="updatGIF()">
          <img class="p-img" src="null" alt="" style="width: 128px; height: 128px;"><div class="p-name">pikachu-world-cap</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card steel undefined visible" id="meowth-galar" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10161.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">meowth-galar</div><div class="row type"><div class="steel">steel</div></div></div>
          <div class="card poke-card psychic undefined visible" id="ponyta-galar" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10162.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">ponyta-galar</div><div class="row type"><div class="psychic">psychic</div></div></div>
          <div class="card poke-card psychic fairy visible" id="rapidash-galar" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10163.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">rapidash-galar</div><div class="row type"><div class="psychic">psychic</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card psychic undefined visible" id="slowpoke-galar" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10164.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">slowpoke-galar</div><div class="row type"><div class="psychic">psychic</div></div></div>
          <div class="card poke-card poison psychic visible" id="slowbro-galar" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10165.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">slowbro-galar</div><div class="row type"><div class="poison">poison</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card fighting undefined visible" id="farfetchd-galar" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10166.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">farfetchd-galar</div><div class="row type"><div class="fighting">fighting</div></div></div>
          <div class="card poke-card poison fairy visible" id="weezing-galar" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10167.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">weezing-galar</div><div class="row type"><div class="poison">poison</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card ice psychic visible" id="mr-mime-galar" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10168.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">mr-mime-galar</div><div class="row type"><div class="ice">ice</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card psychic flying visible" id="articuno-galar" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10169.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">articuno-galar</div><div class="row type"><div class="psychic">psychic</div><div class="flying">flying</div></div></div>
          <div class="card poke-card fighting flying visible" id="zapdos-galar" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10170.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">zapdos-galar</div><div class="row type"><div class="fighting">fighting</div><div class="flying">flying</div></div></div>
          <div class="card poke-card dark flying visible" id="moltres-galar" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10171.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">moltres-galar</div><div class="row type"><div class="dark">dark</div><div class="flying">flying</div></div></div>
          <div class="card poke-card poison psychic visible" id="slowking-galar" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10172.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">slowking-galar</div><div class="row type"><div class="poison">poison</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card ghost undefined visible" id="corsola-galar" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10173.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">corsola-galar</div><div class="row type"><div class="ghost">ghost</div></div></div>
          <div class="card poke-card dark normal visible" id="zigzagoon-galar" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10174.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">zigzagoon-galar</div><div class="row type"><div class="dark">dark</div><div class="normal">normal</div></div></div>
          <div class="card poke-card dark normal visible" id="linoone-galar" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10175.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">linoone-galar</div><div class="row type"><div class="dark">dark</div><div class="normal">normal</div></div></div>
          <div class="card poke-card ice undefined visible" id="darumaka-galar" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10176.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">darumaka-galar</div><div class="row type"><div class="ice">ice</div></div></div>
          <div class="card poke-card ice undefined visible" id="darmanitan-galar-standard" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10177.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">darmanitan-galar-standard</div><div class="row type"><div class="ice">ice</div></div></div>
          <div class="card poke-card ice fire visible" id="darmanitan-galar-zen" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10178.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">darmanitan-galar-zen</div><div class="row type"><div class="ice">ice</div><div class="fire">fire</div></div></div>
          <div class="card poke-card ground ghost visible" id="yamask-galar" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10179.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">yamask-galar</div><div class="row type"><div class="ground">ground</div><div class="ghost">ghost</div></div></div>
          <div class="card poke-card ground steel visible" id="stunfisk-galar" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10180.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">stunfisk-galar</div><div class="row type"><div class="ground">ground</div><div class="steel">steel</div></div></div>
          <div class="card poke-card dragon ground visible" id="zygarde-10" onclick="updatGIF()">
          <img class="p-img" src="null" alt="" style="width: 128px; height: 128px;"><div class="p-name">zygarde-10</div><div class="row type"><div class="dragon">dragon</div><div class="ground">ground</div></div></div>
          <div class="card poke-card flying water visible" id="cramorant-gulping" onclick="updatGIF()">
          <img class="p-img" src="null" alt="" style="width: 128px; height: 128px;"><div class="p-name">cramorant-gulping</div><div class="row type"><div class="flying">flying</div><div class="water">water</div></div></div>
          <div class="card poke-card flying water visible" id="cramorant-gorging" onclick="updatGIF()">
          <img class="p-img" src="null" alt="" style="width: 128px; height: 128px;"><div class="p-name">cramorant-gorging</div><div class="row type"><div class="flying">flying</div><div class="water">water</div></div></div>
          <div class="card poke-card electric poison visible" id="toxtricity-low-key" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10184.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">toxtricity-low-key</div><div class="row type"><div class="electric">electric</div><div class="poison">poison</div></div></div>
          <div class="card poke-card ice undefined visible" id="eiscue-noice" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10185.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">eiscue-noice</div><div class="row type"><div class="ice">ice</div></div></div>
          <div class="card poke-card psychic normal visible" id="indeedee-female" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10186.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">indeedee-female</div><div class="row type"><div class="psychic">psychic</div><div class="normal">normal</div></div></div>
          <div class="card poke-card electric dark visible" id="morpeko-hangry" onclick="updatGIF()">
          <img class="p-img" src="null" alt="" style="width: 128px; height: 128px;"><div class="p-name">morpeko-hangry</div><div class="row type"><div class="electric">electric</div><div class="dark">dark</div></div></div>
          <div class="card poke-card fairy steel visible" id="zacian-crowned" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10188.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">zacian-crowned</div><div class="row type"><div class="fairy">fairy</div><div class="steel">steel</div></div></div>
          <div class="card poke-card fighting steel visible" id="zamazenta-crowned" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10189.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">zamazenta-crowned</div><div class="row type"><div class="fighting">fighting</div><div class="steel">steel</div></div></div>
          <div class="card poke-card poison dragon visible" id="eternatus-eternamax" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10190.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">eternatus-eternamax</div><div class="row type"><div class="poison">poison</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card fighting water visible" id="urshifu-rapid-strike" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10191.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">urshifu-rapid-strike</div><div class="row type"><div class="fighting">fighting</div><div class="water">water</div></div></div>
          <div class="card poke-card dark grass visible" id="zarude-dada" onclick="updatGIF()">
          <img class="p-img" src="null" alt="" style="width: 128px; height: 128px;"><div class="p-name">zarude-dada</div><div class="row type"><div class="dark">dark</div><div class="grass">grass</div></div></div>
          <div class="card poke-card psychic ice visible" id="calyrex-ice" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10193.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">calyrex-ice</div><div class="row type"><div class="psychic">psychic</div><div class="ice">ice</div></div></div>
          <div class="card poke-card psychic ghost visible" id="calyrex-shadow" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10194.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">calyrex-shadow</div><div class="row type"><div class="psychic">psychic</div><div class="ghost">ghost</div></div></div>
          <div class="card poke-card grass poison visible" id="venusaur-gmax" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10195.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">venusaur-gmax</div><div class="row type"><div class="grass">grass</div><div class="poison">poison</div></div></div>
          <div class="card poke-card fire flying visible" id="charizard-gmax" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10196.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">charizard-gmax</div><div class="row type"><div class="fire">fire</div><div class="flying">flying</div></div></div>
          <div class="card poke-card water undefined visible" id="blastoise-gmax" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10197.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">blastoise-gmax</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card bug flying visible" id="butterfree-gmax" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10198.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">butterfree-gmax</div><div class="row type"><div class="bug">bug</div><div class="flying">flying</div></div></div>
          <div class="card poke-card electric undefined visible" id="pikachu-gmax" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10199.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">pikachu-gmax</div><div class="row type"><div class="electric">electric</div></div></div>
          <div class="card poke-card normal undefined visible" id="meowth-gmax" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10200.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">meowth-gmax</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card fighting undefined visible" id="machamp-gmax" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10201.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">machamp-gmax</div><div class="row type"><div class="fighting">fighting</div></div></div>
          <div class="card poke-card ghost poison visible" id="gengar-gmax" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10202.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">gengar-gmax</div><div class="row type"><div class="ghost">ghost</div><div class="poison">poison</div></div></div>
          <div class="card poke-card water undefined visible" id="kingler-gmax" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10203.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">kingler-gmax</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water ice visible" id="lapras-gmax" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10204.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">lapras-gmax</div><div class="row type"><div class="water">water</div><div class="ice">ice</div></div></div>
          <div class="card poke-card normal undefined visible" id="eevee-gmax" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10205.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">eevee-gmax</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card normal undefined visible" id="snorlax-gmax" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10206.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">snorlax-gmax</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card poison undefined visible" id="garbodor-gmax" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10207.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">garbodor-gmax</div><div class="row type"><div class="poison">poison</div></div></div>
          <div class="card poke-card steel undefined visible" id="melmetal-gmax" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10208.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">melmetal-gmax</div><div class="row type"><div class="steel">steel</div></div></div>
          <div class="card poke-card grass undefined visible" id="rillaboom-gmax" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10209.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">rillaboom-gmax</div><div class="row type"><div class="grass">grass</div></div></div>
          <div class="card poke-card fire undefined visible" id="cinderace-gmax" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10210.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">cinderace-gmax</div><div class="row type"><div class="fire">fire</div></div></div>
          <div class="card poke-card water undefined visible" id="inteleon-gmax" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10211.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">inteleon-gmax</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card flying steel visible" id="corviknight-gmax" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10212.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">corviknight-gmax</div><div class="row type"><div class="flying">flying</div><div class="steel">steel</div></div></div>
          <div class="card poke-card bug psychic visible" id="orbeetle-gmax" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10213.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">orbeetle-gmax</div><div class="row type"><div class="bug">bug</div><div class="psychic">psychic</div></div></div>
          <div class="card poke-card water rock visible" id="drednaw-gmax" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10214.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">drednaw-gmax</div><div class="row type"><div class="water">water</div><div class="rock">rock</div></div></div>
          <div class="card poke-card rock fire visible" id="coalossal-gmax" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10215.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">coalossal-gmax</div><div class="row type"><div class="rock">rock</div><div class="fire">fire</div></div></div>
          <div class="card poke-card grass dragon visible" id="flapple-gmax" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10216.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">flapple-gmax</div><div class="row type"><div class="grass">grass</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card grass dragon visible" id="appletun-gmax" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10217.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">appletun-gmax</div><div class="row type"><div class="grass">grass</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card ground undefined visible" id="sandaconda-gmax" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10218.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">sandaconda-gmax</div><div class="row type"><div class="ground">ground</div></div></div>
          <div class="card poke-card electric poison visible" id="toxtricity-amped-gmax" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10219.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">toxtricity-amped-gmax</div><div class="row type"><div class="electric">electric</div><div class="poison">poison</div></div></div>
          <div class="card poke-card fire bug visible" id="centiskorch-gmax" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10220.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">centiskorch-gmax</div><div class="row type"><div class="fire">fire</div><div class="bug">bug</div></div></div>
          <div class="card poke-card psychic fairy visible" id="hatterene-gmax" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10221.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">hatterene-gmax</div><div class="row type"><div class="psychic">psychic</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card dark fairy visible" id="grimmsnarl-gmax" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10222.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">grimmsnarl-gmax</div><div class="row type"><div class="dark">dark</div><div class="fairy">fairy</div></div></div>
          <div class="card poke-card fairy undefined visible" id="alcremie-gmax" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10223.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">alcremie-gmax</div><div class="row type"><div class="fairy">fairy</div></div></div>
          <div class="card poke-card steel undefined visible" id="copperajah-gmax" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10224.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">copperajah-gmax</div><div class="row type"><div class="steel">steel</div></div></div>
          <div class="card poke-card steel dragon visible" id="duraludon-gmax" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10225.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">duraludon-gmax</div><div class="row type"><div class="steel">steel</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card fighting dark visible" id="urshifu-single-strike-gmax" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10226.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">urshifu-single-strike-gmax</div><div class="row type"><div class="fighting">fighting</div><div class="dark">dark</div></div></div>
          <div class="card poke-card fighting water visible" id="urshifu-rapid-strike-gmax" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10227.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">urshifu-rapid-strike-gmax</div><div class="row type"><div class="fighting">fighting</div><div class="water">water</div></div></div>
          <div class="card poke-card electric poison visible" id="toxtricity-low-key-gmax" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10228.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">toxtricity-low-key-gmax</div><div class="row type"><div class="electric">electric</div><div class="poison">poison</div></div></div>
          <div class="card poke-card fire rock visible" id="growlithe-hisui" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10229.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">growlithe-hisui</div><div class="row type"><div class="fire">fire</div><div class="rock">rock</div></div></div>
          <div class="card poke-card fire rock visible" id="arcanine-hisui" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10230.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">arcanine-hisui</div><div class="row type"><div class="fire">fire</div><div class="rock">rock</div></div></div>
          <div class="card poke-card electric grass visible" id="voltorb-hisui" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10231.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">voltorb-hisui</div><div class="row type"><div class="electric">electric</div><div class="grass">grass</div></div></div>
          <div class="card poke-card electric grass visible" id="electrode-hisui" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10232.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">electrode-hisui</div><div class="row type"><div class="electric">electric</div><div class="grass">grass</div></div></div>
          <div class="card poke-card fire ghost visible" id="typhlosion-hisui" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10233.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">typhlosion-hisui</div><div class="row type"><div class="fire">fire</div><div class="ghost">ghost</div></div></div>
          <div class="card poke-card dark poison visible" id="qwilfish-hisui" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10234.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">qwilfish-hisui</div><div class="row type"><div class="dark">dark</div><div class="poison">poison</div></div></div>
          <div class="card poke-card fighting poison visible" id="sneasel-hisui" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10235.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">sneasel-hisui</div><div class="row type"><div class="fighting">fighting</div><div class="poison">poison</div></div></div>
          <div class="card poke-card water dark visible" id="samurott-hisui" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10236.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">samurott-hisui</div><div class="row type"><div class="water">water</div><div class="dark">dark</div></div></div>
          <div class="card poke-card grass fighting visible" id="lilligant-hisui" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10237.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">lilligant-hisui</div><div class="row type"><div class="grass">grass</div><div class="fighting">fighting</div></div></div>
          <div class="card poke-card normal ghost visible" id="zorua-hisui" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10238.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">zorua-hisui</div><div class="row type"><div class="normal">normal</div><div class="ghost">ghost</div></div></div>
          <div class="card poke-card normal ghost visible" id="zoroark-hisui" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10239.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">zoroark-hisui</div><div class="row type"><div class="normal">normal</div><div class="ghost">ghost</div></div></div>
          <div class="card poke-card psychic flying visible" id="braviary-hisui" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10240.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">braviary-hisui</div><div class="row type"><div class="psychic">psychic</div><div class="flying">flying</div></div></div>
          <div class="card poke-card steel dragon visible" id="sliggoo-hisui" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10241.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">sliggoo-hisui</div><div class="row type"><div class="steel">steel</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card steel dragon visible" id="goodra-hisui" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10242.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">goodra-hisui</div><div class="row type"><div class="steel">steel</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card ice rock visible" id="avalugg-hisui" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10243.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">avalugg-hisui</div><div class="row type"><div class="ice">ice</div><div class="rock">rock</div></div></div>
          <div class="card poke-card grass fighting visible" id="decidueye-hisui" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10244.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">decidueye-hisui</div><div class="row type"><div class="grass">grass</div><div class="fighting">fighting</div></div></div>
          <div class="card poke-card steel dragon visible" id="dialga-origin" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10245.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">dialga-origin</div><div class="row type"><div class="steel">steel</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card water dragon visible" id="palkia-origin" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10246.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">palkia-origin</div><div class="row type"><div class="water">water</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card water undefined visible" id="basculin-white-striped" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10247.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">basculin-white-striped</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card water ghost visible" id="basculegion-female" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10248.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">basculegion-female</div><div class="row type"><div class="water">water</div><div class="ghost">ghost</div></div></div>
          <div class="card poke-card fairy flying visible" id="enamorus-therian" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10249.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">enamorus-therian</div><div class="row type"><div class="fairy">fairy</div><div class="flying">flying</div></div></div>
          <div class="card poke-card fighting undefined visible" id="tauros-paldea-combat-breed" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10250.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">tauros-paldea-combat-breed</div><div class="row type"><div class="fighting">fighting</div></div></div>
          <div class="card poke-card fighting fire visible" id="tauros-paldea-blaze-breed" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10251.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">tauros-paldea-blaze-breed</div><div class="row type"><div class="fighting">fighting</div><div class="fire">fire</div></div></div>
          <div class="card poke-card fighting water visible" id="tauros-paldea-aqua-breed" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10252.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">tauros-paldea-aqua-breed</div><div class="row type"><div class="fighting">fighting</div><div class="water">water</div></div></div>
          <div class="card poke-card poison ground visible" id="wooper-paldea" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10253.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">wooper-paldea</div><div class="row type"><div class="poison">poison</div><div class="ground">ground</div></div></div>
          <div class="card poke-card normal undefined visible" id="oinkologne-female" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10254.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">oinkologne-female</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card normal undefined visible" id="dudunsparce-three-segment" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10255.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">dudunsparce-three-segment</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card water undefined visible" id="palafin-hero" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10256.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">palafin-hero</div><div class="row type"><div class="water">water</div></div></div>
          <div class="card poke-card normal undefined visible" id="maushold-family-of-three" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10257.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">maushold-family-of-three</div><div class="row type"><div class="normal">normal</div></div></div>
          <div class="card poke-card dragon water visible" id="tatsugiri-droopy" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10258.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">tatsugiri-droopy</div><div class="row type"><div class="dragon">dragon</div><div class="water">water</div></div></div>
          <div class="card poke-card dragon water visible" id="tatsugiri-stretchy" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10259.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">tatsugiri-stretchy</div><div class="row type"><div class="dragon">dragon</div><div class="water">water</div></div></div>
          <div class="card poke-card normal flying visible" id="squawkabilly-blue-plumage" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10260.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">squawkabilly-blue-plumage</div><div class="row type"><div class="normal">normal</div><div class="flying">flying</div></div></div>
          <div class="card poke-card normal flying visible" id="squawkabilly-yellow-plumage" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10261.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">squawkabilly-yellow-plumage</div><div class="row type"><div class="normal">normal</div><div class="flying">flying</div></div></div>
          <div class="card poke-card normal flying visible" id="squawkabilly-white-plumage" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10262.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">squawkabilly-white-plumage</div><div class="row type"><div class="normal">normal</div><div class="flying">flying</div></div></div>
          <div class="card poke-card ghost undefined visible" id="gimmighoul-roaming" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10263.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">gimmighoul-roaming</div><div class="row type"><div class="ghost">ghost</div></div></div>
          <div class="card poke-card fighting dragon visible" id="koraidon-limited-build" onclick="updatGIF()">
          <img class="p-img" src="null" alt="" style="width: 128px; height: 128px;"><div class="p-name">koraidon-limited-build</div><div class="row type"><div class="fighting">fighting</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card fighting dragon visible" id="koraidon-sprinting-build" onclick="updatGIF()">
          <img class="p-img" src="null" alt="" style="width: 128px; height: 128px;"><div class="p-name">koraidon-sprinting-build</div><div class="row type"><div class="fighting">fighting</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card fighting dragon visible" id="koraidon-swimming-build" onclick="updatGIF()">
          <img class="p-img" src="null" alt="" style="width: 128px; height: 128px;"><div class="p-name">koraidon-swimming-build</div><div class="row type"><div class="fighting">fighting</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card fighting dragon visible" id="koraidon-gliding-build" onclick="updatGIF()">
          <img class="p-img" src="null" alt="" style="width: 128px; height: 128px;"><div class="p-name">koraidon-gliding-build</div><div class="row type"><div class="fighting">fighting</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card electric dragon visible" id="miraidon-low-power-mode" onclick="updatGIF()">
          <img class="p-img" src="null" alt="" style="width: 128px; height: 128px;"><div class="p-name">miraidon-low-power-mode</div><div class="row type"><div class="electric">electric</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card electric dragon visible" id="miraidon-drive-mode" onclick="updatGIF()">
          <img class="p-img" src="null" alt="" style="width: 128px; height: 128px;"><div class="p-name">miraidon-drive-mode</div><div class="row type"><div class="electric">electric</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card electric dragon visible" id="miraidon-aquatic-mode" onclick="updatGIF()">
          <img class="p-img" src="null" alt="" style="width: 128px; height: 128px;"><div class="p-name">miraidon-aquatic-mode</div><div class="row type"><div class="electric">electric</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card electric dragon visible" id="miraidon-glide-mode" onclick="updatGIF()">
          <img class="p-img" src="null" alt="" style="width: 128px; height: 128px;"><div class="p-name">miraidon-glide-mode</div><div class="row type"><div class="electric">electric</div><div class="dragon">dragon</div></div></div>
          <div class="card poke-card ground normal visible" id="ursaluna-bloodmoon" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10272.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">ursaluna-bloodmoon</div><div class="row type"><div class="ground">ground</div><div class="normal">normal</div></div></div>
          <div class="card poke-card grass water visible" id="ogerpon-wellspring-mask" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10273.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">ogerpon-wellspring-mask</div><div class="row type"><div class="grass">grass</div><div class="water">water</div></div></div>
          <div class="card poke-card grass fire visible" id="ogerpon-hearthflame-mask" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10274.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">ogerpon-hearthflame-mask</div><div class="row type"><div class="grass">grass</div><div class="fire">fire</div></div></div>
          <div class="card poke-card grass rock visible" id="ogerpon-cornerstone-mask" onclick="updatGIF()">
          <img class="p-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10275.png" alt="" style="width: 128px; height: 128px;"><div class="p-name">ogerpon-cornerstone-mask</div><div class="row type"><div class="grass">grass</div><div class="rock">rock</div></div></div></div>
`

    function save(){
      var user = document.getElementById('Form').innerHTML
      console.log(user)
      // document.cookie = MyDiv1;
      createCookie("testCookie", user);
      let x = document.cookie; 
      console.log(x)

    }

    // function checkCookie()
    // {
    //   var user = accessCookie("testCookie");
    //   if (user!="")
    //   alert("Welcome Back " + user + "!!!");
    // }

    function accessCookie(cookieName)
    {
      var name = cookieName + "=";
      var allCookieArray = document.cookie.split(';');
      for(var i=0; i<allCookieArray.length; i++)
      {
        var temp = allCookieArray[i].trim();
        if (temp.indexOf(name)==0)
        return temp.substring(name.length,temp.length);
       }
      return "";
    }

    function createCookie(cookieName,cookieValue,daysToExpire)
    {
      var date = new Date();
      date.setTime(date.getTime()+(daysToExpire*24*60*60*1000));
      document.cookie = cookieName + "=" + cookieValue + "; expires=" + date.toGMTString();
    }

    function load(){
      var MyDiv1 = accessCookie("testCookie");
      if (MyDiv1!="")
      alert(MyDiv1);
      console.log(mewmew)
      document.getElementById("Form").outerHTML  = mewmew
    }

    function del(){
      document.cookie = "testCookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }