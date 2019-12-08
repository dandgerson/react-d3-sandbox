import * as d3 from 'd3'

export const simpleCompose = (...fns) => (...args) => fns.forEach(fn => fn(...args))

export const fetchCSVData = async (dataPath, rowConverter) => {
  const data = await d3.dsv(',', dataPath, rowConverter)

  console.log({data})
  return data
}
