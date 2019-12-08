import React from 'react'
import classNames from 'classnames'

import style from './styles/App.module.scss'
// import theme from './styles/theme-default.module.scss'

import BarChart from '../BarChart'
import barChartData from '../../data/bar-chart-data.csv'

const App = () => (
  <div
    className={classNames(
      'container',
      style.root,
    )}
  >
    <div className="row">
      <div className="col">
        <BarChart dataPath={barChartData} />
    </div>
    </div>
  </div>
)


export default App
