import React, { useEffect, useRef } from 'react'
import classNames from 'classnames'
import * as d3 from 'd3'

import { fetchCSVData } from '../../helpers'
import renderChart from './renderChart'

import style from './BarChart.module.scss'

const BarChart = ({ dataPath, ...props}) => {
  const svgRef = useRef(null)

  useEffect(() => {
    const data = fetchCSVData(dataPath)
    renderChart(data, svgRef)
  }, [dataPath])
  
  const data = fetchCSVData(dataPath)
  console.log({data})
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
