# What Makes a Woman?
### Description
For this visualization I wanted to show how woman in the Smithsonian are represented through the topics they are tagged with. I looked at the portraits of women in The National Portrait Gallery. I chose to look at portraits because historically portraits were only painted of prominent figures and I wanted to see what women were classified as important enough to have a portrait made of them and why.

The visualization is split up into a graph showing a count of the number of portraits with each topic and a gallery of portraits showing the portraits from each year represented. 

For the graph, I split topics into 7 categories. These categories are Science and Technology, Government, Writers, Business, Sports, Entertainment, and Activism. I grouped topics pertaining to this categories into these 7 areas. 

The 7 groups have multiple topics within them. I include these below:

Science and Technology: "Engineers", "Science and Technology", "Health and Medicine", "Air pilots", "Inventors", "Scientists", "Nurses"

Government: "First Ladies", "Government", "Politics", "Daughter of US President", "Mother of US President", "Judge", "Congressmen", "Queen"

Writers: "Writers", "Journalism", "Novelists", "Pulitzer Price", "Literature", "Columnist"

Business: "Business", "Business and Finance"

Sports: "Sports and Recreation", "Olympic Medal", "Athletes"

Entertainment: "Ceramicist", "Entertainers", "Crafts", "Singer", "Artists", "Ballet", "Dancer", "Songwriter", "Violinist", "Comedian", "Musicians", "Potters", "Oscar", "Crafts and Trades", "Burlesque", "Actors and Actresses", "Television Personality", "Playwright", "Sculptors", "Illustrator", "Art"

Activism: "Women's rights advocate", "Activists", "Humanitarianism", "Humanities and Social Sciences", "Activism", "Philanthropists", "Justice", "Society and social change", "Social Reformer", "Reformers"

Many of these topics overlap, so I wrote a code to count each portrait only once for each category. Code can be found here: https://github.com/isabelstoddart/MS1QuantitativeData/blob/main/get.js

## Iteration 1
Iteration one of this project included a prototype on Adobe Xd and a coded barchart. This was my first ever project using javascript, D3.js, html, and CSS so it started at a low level and went up from there. Because of the nature of the Smithsonian API, I was not able to get any data after 1950 out to analyze, so this project started as an analysis of portraits of women 20 years before the 19th amendment and 30 years after. 

![](HighFidelityPrototype.png)

## Iteration 2
Iteration two of this project turned the above prototype into code. It also added a second element to the visualization, which is a portrait gallery to see all of the women and the topics they pertain to. I also added in portraits from the SAAM to gather more data. 

I have included screen shots below. The first shows the home page and the second and third show the graph and the portrait gallery.

![](QuantImage1.png)

![](QuantImage2.png)

![](QuantImage3.png)

Changes made from iteration 1:
* The graph now counts for portraits, not for topics. So, as before each individual topic in a category was counted, now each portrait is only counted once per category even if it has multiple tags from one category.
* I added portraits from The Smithsonian American Art Museum as well to have a bigger dataset
* I added the portrait gallery so the user can see all of the portraits from the graph

## Iteration 3
My final iteration of this project is a sample of a full analysis of portraits in the National Portrait Gallery from 1900-2010. I decided to expand the dates from my previous iteration after much comment on seeing the full picture.

For this iteration, in order to see the complete story of portrait representation I had to abandon the API and look at the Smithsonian Collections Search Center. I got my topic count by using the query All Records / Dates: 1900s - 2010s / online media:"Images" / catalog record source:"National Portrait Gallery" / topic:"Women" / topic:"Portraits" and looking by year at the different topics.

The images are also a sample containing all of the non copyrighted images I could get from the API and a sample of 20 randomly chosen portraits from 1960, 1970, 1980, 1990, and 2000/2010, resulting in a sample of 20 portraits with varying topics for each year.

A finalized version of this project would include a system like before where all topics are counted and recorded and split into categories using data. It would also include all of the images of the portraits of women. As of now, there is only a small sample of the 2,132 portrait images.

I hope this project allows users to explore these extraordinary women and notice some gaps in female representation in the Smithsonian collection and our overall women's history.

The final prototype can be found at https://isabelstoddart.github.io/MS1QuantitativeData/

** Bar chart inspired by https://bl.ocks.org/bricedev/0d95074b6d83a77dc3ad **
