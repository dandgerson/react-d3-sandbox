import * as d3 from 'd3'

export const simpleCompose = (...fns) => (...args) => fns.forEach(fn => fn(...args))
export const fetchCSVData = async (CSVDataPath) => await d3.csv(CSVDataPath)
