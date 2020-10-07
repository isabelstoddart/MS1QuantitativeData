//d3 version 6 code
var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 900 - margin.left - margin.right,
    height = 380 - margin.top - margin.bottom;

var x0 = d3.scaleBand()
            .range([0,width])
            .padding(0.1);

var x1 = d3.scaleBand();

var y = d3.scaleLinear()
    .domain([height,0])
    .range([height, 0]);

var xAxis = d3.axisBottom(x0);

var yAxis = d3.axisLeft(y);

//var c = ["#264653","#2a9d8f","#e9c46a","#f4a261","#e76f51"];
var color = d3.scaleOrdinal(["#264653","#2a9d8f","#e9c46a","#f4a261","#e76f51"]);

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
    .attr('width', width)
    .attr('height', height)
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.json("topicsDataReformattedHardcoded.json").then(data => {

  var categoriesNames = data.map(function(d) { return d.year; });
  var rateNames = data[0].topics.map(function(d) { return d.topic; });

  x0.domain(categoriesNames);
  x1.domain(rateNames)
    .range([0, x0.bandwidth()]);
  y.domain([0, d3.max(data, function(categorie) { return d3.max(categorie.topics, function(d) { return d.value; }); })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

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
      .text("Topic Count");

  svg.select('.y').transition().duration(500).delay(1300).style('opacity','1');

  var slice = svg.selectAll(".slice")
      .data(data)
      .enter().append("g")
      .attr("class", "g")
      .attr("transform",function(d) { return "translate(" + x0(d.year) + ",0)"; });

  slice.selectAll("rect")
      .data(function(d) { return d.topics; })
  .enter().append("rect")
      .attr("width", x1.bandwidth() - 4)
      .attr("x", function(d) { return x1(d.topic); })
      .style("fill", function(d) { return color(d.topic) })
      .attr("y", function(d) { return y(0); })
      .attr("height", function(d) { return height - y(0); })
      .on("mouseover", function(d) {
          Tooltip
            .style("opacity",1)
            .html(d.value)
            .style("left", (d3.event.PageX + 100) + 'px')
            .style("top", (d3.event.PageY) + 'px')
          d3.select(this)
            .style("stroke", "black")
            .style("opacity",1)

      })
       //.on("mousemove", function(d) {
           //Tooltip
             //.html(d.value)
             //.style("left", (d3.mouse(this)[0]+70) + 'px')
             //.style("top", (d3.mouse(this)[1]) + 'px')
       //})
      .on("mouseout", function(d) {
          Tooltip
            .style("opacity",0)
          d3.select(this).style("stroke","none");
      });

  slice.selectAll("rect")
      .transition()
      .delay(function (d) {return Math.random()*1000;})
      .duration(1000)
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
      .attr("x", width + 10)
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", function(d) { return color(d); });

  legend.append("text")
      .attr("x", width - 24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text(function(d) {return d; });

  legend.transition().duration(500).delay(function(d,i){ return 1300 + 100 * i; }).style("opacity","1");

});
