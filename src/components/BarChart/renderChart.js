import * as d3 from 'd3'

import {
  simpleCompose,
} from '../../helpers'

const renderChart = (data, svgRef) => simpleCompose(

)({
  svg: svgRef.current,

  get width() {
    return this.svg.getBoundingClientRect().width
  },
  get height() {
    return this.svg.getBoundingClientRect().height
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
