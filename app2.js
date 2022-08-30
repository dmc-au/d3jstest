/*  Following from app.js, this example demonstrates how to create
a simple bar chart with the svg element and scaling functions.*/

/* E.g 3: Rendering data within an svg item for co-ordinates */
const DUMMY_DATA = [
    {id: 'd1', value: 10, region: 'USA'},
    {id: 'd2', value: 7, region: 'AUS'},
    {id: 'd3', value: 5, region: 'CAN'},
    {id: 'd4', value: 3, region: 'GER'},
];

/* A function for scaling the x axis of bars */
const xScale = d3.scaleBand() // requires d3-scale
    .domain(DUMMY_DATA.map(data => data.region)) // specifies how many data points we have  
    .rangeRound([0, 250]) // uniform ordinal scale from 0 to container width
    .padding(0.1); // padding between bars

/* A function for scaling the y axis of bars */
const yScale = d3.scaleLinear()
    .domain([0, 15]) // the limits of our domain in the y axis
    .range([200, 0]); // flip of the domain (SVG 0,0 is top left)

const container = d3.select('svg') 
    .classed('container', true);

const bars = container
    .selectAll('.bar')
    .data(DUMMY_DATA)
    .enter()
    .append('rect')
    .classed('bar', true)
    .attr('width', xScale.bandwidth())
    /* offset the first point of each rectangle by the difference between
    the domain limit (200) and the scaled data value. This 'baselines' the data */
    .attr('height', (data) => 200 - yScale(data.value))
    .attr('x', data => xScale(data.region))
    .attr('y', data => yScale(data.value));

/* A function which after 2 seconds removes the remaining data items
(3 and 4), and then ejects them from the document */
setTimeout(() => {
    bars.data(DUMMY_DATA.slice(0, 2)) // takes (keeps) the first 2 items
        .exit() // selects the data that is 'no longer relevant'
        .remove(); // remove the items from the document
}, 2000);
