import React from 'react'
import ApexCharts from 'react-apexcharts'

export default function Chart({valuePMI, valueSEE, date}) {
  const options = {
    chart: {
      type: 'bar',
      height: 230
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: 'top',
        },
      }
    },
    dataLabels: {
      enabled: true,
      offsetX: -6,
      style: {
        fontSize: '16px',
        colors: ['#fff']
      }
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['#fff']
    },
    tooltip: {
      shared: true,
      intersect: false
    },
    xaxis: {
      categories: date?.map(item =>  item?.date),
    },
    colors: ['#3a5a40', '#d90429'],
  }

  const series = [
    {
      name: 'PMI',
      data: valuePMI.map(item =>  item?.pmi)
    }, 
    {
      name: 'SEE',
      data: valueSEE.map(item =>  item?.see)
    }
  ]

  return (
    <ApexCharts
      options={options}
      series={series}
      type='bar'
      height={460}
    />
  )
}
