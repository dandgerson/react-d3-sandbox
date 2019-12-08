import React, { useEffect, useRef } from 'react'
import classNames from 'classnames'

import renderChart from './renderChart'

import style from './BarChart.module.scss'

const BarChart = ({ dataPath, ...props }) => {
  const refs = {
   svg: useRef(null)
  }
  useEffect(() => {
    renderChart(dataPath, refs)
  }, [dataPath, refs])
  return (
    <div
      className={classNames(
        style.root,
      )}
    >
      <h1>Bar chart</h1>
      <svg
        ref={refs.svg}
        // style={{
        //   width: '100%',
        //   height: '100%',
        // }}
      >

      </svg>
    </div>
  )
}

export default BarChart
