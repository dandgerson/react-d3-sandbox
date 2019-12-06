import React, { useEffect, useRef } from 'react'
import classNames from 'classnames'
import * as d3 from 'd3'

import { fetchCSVData } from 'src/helpers'
import renderChart from './renderChart'

import style from './BarChart.module.scss'

const BarChart = ({ dataPath, ...props}) => {
  const svgRef = useRef(null)

  useEffect(() => {
    renderChart(fetchCSVData(dataPath), svgRef)
  }, [dataPath])
  
  const data = fetchCSVData(dataPath)

  return (
    <div
      className={classNames(
        style.root,
      )}
    >
      <svg
        ref={svgRef}
      >

      </svg>
    </div>
  )
}

export default BarChart
