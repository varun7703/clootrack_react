import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip,Cell} from 'recharts';
var res={};
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

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
            data={res}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="ya"
          >
            {res.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        </div>
    );
  }
  