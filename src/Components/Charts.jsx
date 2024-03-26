import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


function Charts() {

    const data = [
        {
          name: 'January',
          sales: 4000,
          expense: 2400,
          amt: 2400,
        },
        {
          name: 'February',
          sales: 3000,
          expense: 1398,
          amt: 2210,
        },
        {
          name: 'March',
          sales: 2000,
          expense: 9800,
          amt: 2290,
        },
        {
          name: 'Aprill',
          sales: 2780,
          expense: 3908,
          amt: 2000,
        },
        {
          name: 'May',
          sales: 1890,
          expense: 4800,
          amt: 2181,
        },
        {
          name: 'June',
          sales: 2390,
          expense: 3800,
          amt: 2500,
        },
      ];
  return (
    <div>
      <h1>Bar Chart showing mid year sales expense scenario of ABC Company</h1>
        <BarChart
          width={1000}
          height={600}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="expense" fill="#8884d8" activeBar={<Rectangle fill="olive" stroke="yellow" />} />
          <Bar dataKey="sales" fill="#82ca9d" activeBar={<Rectangle fill="red" stroke="purple" />} />
        </BarChart>
    </div>
  )
}

export default Charts
