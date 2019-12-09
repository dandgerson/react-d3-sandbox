import * as d3 from 'd3'

import {
  simpleCompose,
} from 'helpers'

import {
  logger,
  drawRects,
  drawLabels,
} from './helpers'

const renderChart = (data, refs, elems, setData) => simpleCompose(
  logger,
  drawRects,
  drawLabels,
)({
  data,
  refs,
  elems,
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


export default renderChart
