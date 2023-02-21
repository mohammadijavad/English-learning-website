import React, { PureComponent } from 'react'
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {
    name: 'شهریور',
    uv: 2,
    pv: 2,
    amt: 2,
  },
  {
    name: 'مرداد',
    uv: 5,
    pv: 5,
    amt: 5,
  },
  {
    name: 'آبان',
    uv: 3,
    pv: 3,
    amt: 3,
  },
  {
    name: 'آذر',
    uv: 6,
    pv: 6,
    amt: 6,
  },
  {
    name: 'دی',
    uv: 9,
    pv: 9,
    amt: 9,
  },
  {
    name: 'بهمن',
    uv: 6,
    pv: 6,
    amt: 6,
  },
  {
    name: 'اسفند',
    uv: 12,
    pv: 12,
    amt: 12,
  },
]

export default class Example extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 40,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />

          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="uv" barSize={20} fill="#1d4e89" />
          <Line type="monotone" dataKey="uv" stroke="#f79256" />
        </ComposedChart>
      </ResponsiveContainer>
    )
  }
}
