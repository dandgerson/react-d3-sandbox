import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'

import { fetchCSVData } from 'helpers'
import { rowConverter } from './helpers'
import renderChart from './renderChart'

import style from './BarChart.module.scss'

const BarChart = ({ dataPath, ...props }) => {
  const [data, setData] = useState([])
  const refs = {
    svg: useRef(null),
  }
  const elems = {
    bars: [],
    labels: [],
  }

  useEffect(() => {
    fetchCSVData(dataPath, rowConverter, setData)
  }, [dataPath])

  useEffect(() => {
    data.length && renderChart(data, refs, elems)
  }, [data, refs, elems])

  // console.log({data})

  return data.length && (
    <div
      className={classNames(
        style.root,
      )}
    >
      <h1>Bar - chart</h1>
      <svg
        ref={refs.svg}
      >
        {data.map((d, i) => (
          <g key={i}>
            <text
              ref={(elem) => elem && elems.labels.push(elem)}
              className={classNames(
                style.label,
              )}
            >
              {`${d.mount / 1000}k`}
            </text>
            <rect
              ref={(elem) => elem && elems.bars.push(elem)}
              className={classNames(
                style.bar,
              )}
            />
          </g>
        ))}
      </svg>
    </div>
  )
}

export default BarChart
