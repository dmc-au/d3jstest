/* D3.js is a general purpose library that helps
to manipulate the DOM with relation to data. Common use
cases are for graphs and charts, but D3 isn't limited to that. */

/* E.g. 1: Rendering 3 new paragraphs based on data */
// d3.select('div') // select any CSS selectable items
//     .selectAll('p') // selects all p elements inside the div
//     .data([1,2,3]) // all paragraphs are now bound to this data
//     .enter() // which paragraphs are missing given the data bind? (3)
//     .append('p') // append missing paragraphs as per 'enter'
//     .text(dta => dta) // for every created paragraph, set the text (item per item)

/* E.g. 2: Rendering data as bars with div elements*/
const DUMMY_DATA = [
    {id: 'd1', value: 10, region: 'USA'},
    {id: 'd2', value: 7, region: 'AUS'},
    {id: 'd3', value: 5, region: 'CAN'},
    {id: 'd4', value: 3, region: 'GER'},
];

const container = d3.select('div') 
    .classed('container', true)
    .style('border', '1px solid red');

const bars = container
    .selectAll('.bar')
    .data(DUMMY_DATA)
    .enter()
    .append('div')
    .classed('bar', true)
    .style('width', '50px')
    .style('height', data => (data.value * 15) + 'px')
    .text(data => data.region);
