

import axios from 'axios';
import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
var res={};

export default function Pie_chart({data}) {
    if (!data) return null;
    if(data) {console.log('data in data',data)}
     res = data.map((data,index) => {
        return {"xa": index,"ya":data}
    })
    if(res){console.log('res',res)}
    
    
    return (
        <div>
          PIE CHART
          <PieChart width={400} height={400}>
          <Pie
            dataKey="ya"
            isAnimationActive={false}
            data={res}
            cx="50%"
            cy="50%"
            outerRadius={80}
            
            label
          />
            <Tooltip />
        </PieChart>
        </div>
    );
  }
  