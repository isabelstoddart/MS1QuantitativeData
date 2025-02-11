//Original d3 version 3 code
var margin = {top: 50, right: 25, bottom: 100, left: 200},
    width = 1300 - margin.left - margin.right,
    height = 700 - margin.top - margin.bottom;

var x0 = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var x1 = d3.scale.ordinal();

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x0)
    .tickSize(0)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var color = d3.scale.ordinal()
    .range(["#264653","#287271", "#2a9d8f","#8AB17D", "#e9c46a","#f4a261","#e76f51"]);

// create a tooltip
var Tooltip = d3.select('body')
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);
    // .style("opacity", 0)
    // .attr("class", "tooltip")
    // .style("background-color", "white")
    // .style("border", "solid")
    // .style("border-width", "1px")
    // .style("border-radius", "1px")
    // .style("padding", "1px")

var svg = d3.select('body').append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.json("topicsData.json", function(error, data) {

  var categoriesNames = data.map(function(d) { return d.year; });
  var rateNames = data[0].topics.map(function(d) { return d.topic; });

  x0.domain(categoriesNames);
  x1.domain(rateNames).rangeRoundBands([0, x0.rangeBand()]);
  y.domain([0, d3.max(data, function(categorie) { return d3.max(categorie.topics, function(d) { return d.value; }); })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
  .append("text")
      .attr("transform",
            "translate(" + (width/2) + " ," + (margin.bottom-50) + ")")
      .style("text-anchor","middle")
      .style("font-weight","bold")
      .style("fill","black")
      .text("Year");

  svg.append("g")
      .attr("class", "y axis")
      .style('opacity','0')
      .call(yAxis)
  .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .style('font-weight','bold')
      .text("Portrait Count");

  //svg.select('.y').transition().duration(500).delay(1300).style('opacity','1');
  svg.select('.y').style('opacity','1');

  var slice = svg.selectAll(".slice")
      .data(data)
      .enter().append("g")
      .attr("class", "g")
      .attr("transform",function(d) { return "translate(" + x0(d.year) + ",0)"; });

  slice.selectAll("rect")
      .data(function(d) { return d.topics; })
  .enter().append("rect")
      .attr("width", x1.rangeBand() - 4)
      .attr("x", function(d) { return x1(d.topic); })
      .style("fill", function(d) { return color(d.topic) })
      .attr("y", function(d) { return y(0); })
      .attr("height", function(d) { return height - y(0); })
      .on("mouseover", function(d) {
          Tooltip
            .style("opacity",1)
            .html(d.value + " Portraits")
            .style('transform', `translate(${d3.event.layerX-20}px, ${d3.event.layerY-70}px)`)
            // .style("left", (d3.event.PageX + 100) + 'px')
            // .style("top", (d3.event.PageY) + 'px')
          d3.select(this)
            .style("stroke", "black")
            .style("stroke-width", .5)
            .style("opacity",1)

      })
      .on("mouseout", function(d) {
          Tooltip
            .style("opacity",0)
          d3.select(this).style("stroke","none");
      });

   slice.selectAll("rect")
       //.delay(function (d) {return Math.random()*1000;})
       //.duration(1000)
       .attr("y", function(d) { return y(d.value); })
       .attr("height", function(d) { return height - y(d.value); });

  //Legend
  var legend = svg.selectAll(".legend")
      .data(data[0].topics.map(function(d) { return d.topic; }).reverse())
  .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d,i) { return "translate(0," + i * 20 + ")"; })
      .style("opacity","0");

  legend.append("rect")
      .attr("x", width)
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", function(d) { return color(d); });

  legend.append("text")
      .attr("x", width-6)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text(function(d) {return d; });

  legend.style("opacity","1");

});
