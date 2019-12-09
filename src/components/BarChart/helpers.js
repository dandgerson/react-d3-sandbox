import * as d3 from 'd3'

import c from './constants'

import style from './BarChart.module.scss'

export const rowConverter = (d, i, self) => ({
  [self[0]]: d[self[0]],
  [self[1]]: +d[self[1]],
})

export const logger = ({ data, svg, width, height }) => {
  console.log('logger:', { data })
  console.log('logger:', { width, height })
}

export const drawRects = ({ data, svg, width, height }) =>
  svg
    .selectAll(`.${style.bar}`)
    .data(data)
    // .attr('x', (d, i) => (c.barWidth + c.barPad) * i)
    .attr('x', (d, i, self) => width / self.length * i)
    .attr('y', (d, i) => height - d.mount / 100)
    .attr('width', (d, i, self) => width / self.length - c.barXPad)
    .attr('height', (d, i) => d.mount / 100)
    .attr('fill', d => `rgb(153, 128, ${Math.round(255 - d.mount / 100)})`)

export const drawLabels = ({ data, svg, width, height }) =>
  svg
    .selectAll(`.${style.label}`)
    .data(data)
    .attr('x', (d, i, self) => i * width / self.length + (width / self.length - c.barXPad) / 2)
    .attr('y', (d, i) => height - d.mount / 100 + c.labelYPad)
