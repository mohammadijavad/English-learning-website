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
    name: 'فروردین',
    uv: 590,
    pv: 800,
    amt: 1,
  },
  {
    name: 'اردیبهشت',
    uv: 2,
    pv: 2,
    amt: 2,
  },
  {
    name: 'خرداد',
    uv: 3,
    pv: 3,
    amt: 3,
  },
  {
    name: 'تیر',
    uv: 4,
    pv: 4,
    amt: 4,
  },
  {
    name: 'مرداد',
    uv: 5,
    pv: 5,
    amt: 5,
  },
  {
    name: 'شهریور',
    uv: 6,
    pv: 6,
    amt: 6,
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
