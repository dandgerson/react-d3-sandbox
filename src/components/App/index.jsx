import React from 'react'
import classNames from 'classnames'

import style from './styles/App.module.scss'
// import theme from './styles/theme-default.module.scss'

import BarChart from '../BarChart'

const App = () => (
  <div
    className={classNames(
      'container',
      style.root,
    )}
  >
    <div className="row">
      <div className="col">
        <BarChart dataPath={'/data/bar-chart-data.csv'} />
    </div>
    </div>
  </div>
)


export default App
