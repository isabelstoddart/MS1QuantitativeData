const fs = require("fs");
var async = require("async");
var yearData = fs.readFileSync("/Users/isabelstoddart/Desktop/MS1QuantitiveData/data.json");
yearData = JSON.parse(yearData);
//console.log(musicData);

let st1990 = 0;
let wife1990 = 0;
let ent1990 = 0;
let sport1990 = 0;
let writ1990 = 0;
let ssc1990 = 0;
let gov1900 = 0;

for(let prop in yearData){
     if(yearData[prop].date == "1950s"){
         let files = [];
         yearData[prop].topic.forEach(element => {
             if(element == "Ceramicist" || element == "Entertainers" || element == "Crafts" || element == "Singer" || element == "Artists" || element == "Ballet" || element == "Dancer" || element == "Songwriter" || element == "Violinist" || element == "Comedian" || element == "Musicians" || element == "Potters" || element == "Oscar" || element == "Crafts and Trades" || element == "Burlesque" || element == "Actors and Actresses" || element == "Television Personality" || element == "Playwright" || element == "Sculptors" || element == "Illustrator" || element == "Art"){
                 if(files.includes(yearData[prop].filename)) {
                     return;
                 }
                 else{
                     ent1990 = ent1990 + 1;
                     files.push(yearData[prop].filename);
                     console.log(yearData[prop].title);
                 }
                 //topicObject.value += 1;
             }
         })
     }
    //  if(yearData[prop].date == "1950s"){
    //      let files = [];
    //      yearData[prop].topic.forEach(element => {
    //          if(element == "Writers" || element == "Journalism" || element == "Novelists" || element == "Pulitzer Price" || element == "Literature" || element == "Columnist"){
    //              if(files.includes(yearData[prop].filename)) {
    //                  return;
    //              }
    //              else{
    //                  writ1990 = writ1990 + 1;
    //                  files.push(yearData[prop].filename);
    //                  console.log(yearData[prop].title);
    //              }
    //              //topicObject.value += 1;
    //          }
    //      })
    //  }

    //   if(yearData[prop].date == "1950s"){
    //      let files = [];
    //      yearData[prop].topic.forEach(element => {
    //          if(element == "First Ladies" || element == "Government" || element == "Politics" || element == "Daughter of US President" || element == "Mother of US President"){
    //              if(files.includes(yearData[prop].filename)) {
    //                  return;
    //              }
    //              else{
    //                  gov1900 = gov1900 + 1;
    //                  files.push(yearData[prop].filename);
    //                  console.log(yearData[prop].title);
    //              }
    //              //topicObject.value += 1;
    //          }
    //      })
    //  }
    //  if(yearData[prop].date == "1900s"){
    //      let files = [];
    //      yearData[prop].topic.forEach(element => {
    //          if(element == "Wife" || element == "Children" || element == "Mother and child" || element == "Domestic"){
    //              if(files.includes(yearData[prop].filename)) {
    //                  return;
    //              }
    //              else{
    //                  wife1990 = wife1990 + 1;
    //                  files.push(yearData[prop].filename);
    //                  console.log(yearData[prop].title);
    //              }
    //              //topicObject.value += 1;
    //          }
    //      })
    //  }

    //  if(yearData[prop].date == "1950s"){
    //       let files = [];
    //       yearData[prop].topic.forEach(element => {
    //           if(element == "Engineers" || element == "Science and Technology" || element == "Health and Medicine" || element == "Air pilots" || element == "Inventors" || element == "Scientists"){
    //               if(files.includes(yearData[prop].filename)) {
    //                   return;
    //               }
    //               else{
    //                   st1990 = st1990 + 1;
    //                   files.push(yearData[prop].filename);
    //                   console.log(yearData[prop].title);
    //               }
    //               //topicObject.value += 1;
    //           }
    //       })
    //   }

    //   if(yearData[prop].date == "1900s"){
    //       let files = [];
    //       yearData[prop].topic.forEach(element => {
    //           if(element == "Women's rights advocate" || element == "Activists" || element == "Aristocracy (Social class)" || element == "Humanitarianism" || element == "Humanities and Social Sciences" || element == "Activism" || element == "Philanthropists" || element == "Justice" || element == "Society and social change" || element == "Social Reformer" || element == "Reformers"){
    //               if(files.includes(yearData[prop].filename)) {
    //                   return;
    //               }
    //               else{
    //                   ssc1990 = ssc1990 + 1;
    //                   files.push(yearData[prop].filename);
    //                   console.log(yearData[prop].title);
    //               }
    //               //topicObject.value += 1;
    //           }
    //       })
    //   }

    //  if(yearData[prop].date == "1950s"){
    //      let files = [];
    //      yearData[prop].topic.forEach(element => {
    //          if(element == "Sports and Recreation" || element == "Olympic Medal" || element == "Athletes"){
    //              if(files.includes(yearData[prop].filename)) {
    //                  return;
    //              }
    //              else{
    //                  sport1990 = sport1990 + 1;
    //                  files.push(yearData[prop].filename);
    //                  console.log(yearData[prop].title);
    //              }
    //              //topicObject.value += 1;
    //          }
    //      })
    //  }





}

//JSON.yearData.topic.forEach(element => {
    
//});

// async.eachSeries(yearData, function(value, callback) {
//     console.log(value.length);
//     for(let i = 0; i < value.length; i++){
//         console.log(value.date);
//     }
    //console.log(value.date);
//});

console.log(ent1990);