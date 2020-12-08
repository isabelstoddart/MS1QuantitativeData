let sourceJson;
let filteredJson;

// load JSON using d3.json
d3.json('./data.json')
  .then( json => {
      // execute our 
      // display images function
      sourceJson = json;
  }); 

// Here wefilter the source json file
function filterData(mode){
    if(mode=="1900s"){
        filteredJson = sourceJson.filter(function (n){
        return (n.date == "1900s")
    })
    }else if(mode=="1910s"){
            filteredJson = sourceJson.filter(function (n){
            return (n.date == "1910s")
    })
    }else if(mode=="1920s"){
        filteredJson = sourceJson.filter(function (n){
            return (n.date == "1920s")
        })
    }else if(mode=="1930s"){
        filteredJson = sourceJson.filter(function (n){
        return (n.date == "1930s")
    })
    }else if(mode=="1940s"){
        filteredJson = sourceJson.filter(function (n){
        return (n.date == "1940s")
    })
    }else if(mode=="1950s"){
        filteredJson = sourceJson.filter(function (n){
        return (n.date == "1950s")
    })
    } else if(mode=="1960s"){
        filteredJson = sourceJson.filter(function (n){
        return (n.date == "1960s")
    })
    }else if(mode=="1970s"){
        filteredJson = sourceJson.filter(function (n){
        return (n.date == "1970s")
    })
    }else if(mode=="1980s"){
        filteredJson = sourceJson.filter(function (n){
        return (n.date == "1980s")
    })
    }else if(mode=="1990s"){
        filteredJson = sourceJson.filter(function (n){
        return (n.date == "1990s")
    })
    }else if(mode=="2000/2010s"){
        filteredJson = sourceJson.filter(function (n){
        return (n.date == "2000/2010s")
    })
    }
    // Now that the data has been filtered we can display it
    displayImages()
}

// this function creates all
// of our DOM elements
function displayImages(){
    // select a <div> with an id of "app"
    // this is where we want all of our
    // images to be added
    let app  = d3.select('#app').text('');


    // define "cards" for each item
    let card = app.selectAll('div.smithsonian-card')
                .data(filteredJson)
                .join('div')
                .attr('class', 'smithsonian-card');

    // create a div with a class of "image"
    // and populate it with an <img/> tag
    // that contains our filepath
    card.append('div')
        .attr('class', 'image')
        .append('img')
        .attr('src', d => {
            // all our images are in the "images"
            // folder which we will need to 
            // add to our filename first
            return './pictures/' + d.filename
        });

    // create a paragraph that will
    // hold the object date
    // card.append('p')
    //     .attr('class', 'object-date')
    //     .text(d=>d.topic);

    // create a heading tag
    // that will be the object title
    card.append('h2')
        .attr('class', 'title')
        .text(d=>d.title);

    card.append('h3')
        .attr('class', 'title')
        .text(d=>d.topic.slice(0,4))
}
