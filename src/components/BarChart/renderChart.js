import * as d3 from 'd3'

import {
  simpleCompose,
} from 'helpers'

import {
  logger,
  drawRects,
} from './helpers'

const renderChart = async (dataPath, refs) => {
  let data = []
  try {
    data = await d3.dsv(',', dataPath, (d, i, self) => {
      return ({
        [self[0]]: d[self[0]],
        [self[1]]: +d[self[1]],
      })
    })
  } catch (error) {
    console.warn(error)
  }
  simpleCompose(
    logger,
    drawRects,
  )({
    data,
    svg: d3.select(refs.svg.current),

    get width() {
      return refs.svg.current.getBoundingClientRect().width
    },
    get height() {
      return refs.svg.current.getBoundingClientRect().height
    },

    xScale() {
      return d3.scaleLinear()
        .domain([0, (d, i) => i])
        .range([0, this.width])
    },
    yScale() {
      return d3.scaleLinear()
        .domain([0, d3.max(d => d[1])])
        .range([0, this.height])
    },
  })
}


export default renderChart
