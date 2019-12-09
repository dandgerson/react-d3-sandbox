import * as d3 from 'd3'

export const simpleCompose = (...fns) => (...args) => fns.forEach(fn => fn(...args))

export const fetchCSVData = async (dataPath, rowConverter, setData) => setData(await d3.dsv(',', dataPath, rowConverter))
