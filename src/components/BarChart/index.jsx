import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'

import { fetchCSVData } from 'helpers'
import { rowConverter } from './helpers'
import renderChart from './renderChart'

import style from './BarChart.module.scss'

const BarChart = ({ dataPath, ...props }) => {
  const [ data, setData ] = useState([]) 
  const refs = {
   svg: useRef(null)
  }

  useEffect(() => {
    fetchCSVData(dataPath, rowConverter, setData)
  }, [dataPath])

  useEffect(() => {
    data.length && renderChart(data, refs)
  }, [data, refs])

  console.log({data})

  return data.length && (
    <div
      className={classNames(
        style.root,
      )}
    >
      <h1>Bar chart</h1>
      <svg
        ref={refs.svg}
      >

      </svg>
    </div>
  )
}

export default BarChart
