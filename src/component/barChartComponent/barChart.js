

import axios from 'axios';
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
var res={};
const baseURL = "https://s3-ap-southeast-1.amazonaws.com/he-public-data/chart2986176.json";

export default function Bar_chart({data}) {
    if (!data) return null;
    if(data) {console.log('data in data',data)}
     res = data.map((data,index) => {
        return {"xa": index,"ya":data}
    })
    if(res){console.log('res',res)}
    
    
    return (
        <div>
          BAR CHART
        <BarChart
          width={500}
          height={300}
          data={res}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="xa" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="ya" fill="#8884d8" />
         
        </BarChart>
        </div>
    );
  }
  