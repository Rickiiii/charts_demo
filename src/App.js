import React from 'react';
import ReactEcharts from "echarts-for-react";
import { Chart, Interval, Tooltip, Interaction, Coordinate, Line, Point,
  Axis,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util } from 'bizcharts';
import { Data } from './constantData.js'

const { IntervalData, CoordData, IntervalOptions, CoordOptions, LineData, LineOptions } = Data

console.log(Data)
export default class Index extends React.Component {
  render() {
    return (
      <div style={{ marginTop: 20 }}>
      <div>
        <div style={{ width: '40%', display: 'inline-block', verticalAlign: 'top' }}>
          <div>
            <Chart onPlotClick={e => console.log(e, 'biz柱状图')} height={300} autoFit data={IntervalData} interactions={['active-region']} padding="auto" >
              <Interval position="year*sales" />
              <Tooltip shared />
            </Chart>
          </div>
          <div>
          <Chart
            height={300}
            data={CoordData}
            scale={{percent: {
              formatter: val => {
                val = val * 100 + '%';
                return val;
              },
            }}}
            autoFit
            onClick={e => console.log(e, 'biz饼图')}
          >
            <Coordinate type="theta" radius={0.75} />
            <Tooltip showTitle={false} />
            <Axis visible={false} />
            <Interval
              position="percent"
              adjust="stack"
              color="item"
              style={{
                lineWidth: 1,
                stroke: '#fff',
              }}
              label={['count', {
                content: (data) => {
                  return `${data.item}: ${data.percent * 100}%`;
                },
              }]}
            />
            <Interaction type='element-single-selected' />
          </Chart>
          <Chart scale={{ temperature: { min: 0 } }} padding={[10, 20, 50, 40]} autoFit height={500} data={LineData} >
            <Line shape="smooth" position="month*temperature" color="city" />
            <Point position="month*temperature" color="city" />
            <Tooltip shared={true} showCrosshairs/>
            <Legend itemName={{
              style: {
                fill: "#333"
              }
            }} />
          </Chart>
          </div>
        </div>
        <div style={{ width: '40%', display: 'inline-block', float: 'right' }}>
          <ReactEcharts
            option={IntervalOptions}
            notMerge={true}
            lazyUpdate={true}
            theme={"theme_name"}
            onEvents={{ 'click': e => console.log(e) }}
          />
          <ReactEcharts
            option={CoordOptions}
            notMerge={true}
            lazyUpdate={true}
            theme={"theme_name"}
            onEvents={{ 'click': e => console.log(e) }}
          />
          <ReactEcharts
            option={LineOptions}
            notMerge={true}
            lazyUpdate={true}
            theme={"theme_name"}
            onEvents={{ 'click': e => console.log(e) }}
          />
        </div>
      </div>
    </div>
    )
  }
}
