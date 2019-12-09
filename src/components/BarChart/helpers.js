import * as d3 from 'd3'

export const rowConverter = (d, i, self) => ({
  [self[0]]: d[self[0]],
  [self[1]]: +d[self[1]],
})

export const logger = ({ data, svg, width, height }) => {
  console.log('logger:', {data})
  console.log('logger:', { width, height})
}

export const drawRects = ({ data, svg, width, height }) => {
  svg
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('width', 20)
    .attr('height', (d, i) => d.mount / 100)
    .attr('x', (d, i) => (20 + 2) * i)
    .attr('y', (d, i) => height - d.mount / 100)
}
