import axios from 'axios';
import React, { PureComponent } from 'react';
import Bar_chart from '../barChartComponent/barChart';
import Pie_chart from '../pieChartComponent/pieChart';
const baseURL = "https://s3-ap-southeast-1.amazonaws.com/he-public-data/chart2986176.json";
export default function Landing() {
    let  RenderList=[];
    const [post, setPost] = React.useState(null);
    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        setPost(response.data);
       
      });
      
    }, []);
    if (!post) return null;
    if(post) {console.log('data in post',post)
post.forEach(element => {
    console.log('elements',element.type)
    if(element.type == 'Bar'){console.log('Bar loaded',element.elements)
RenderList.push( <Bar_chart data = {element.elements}/>)
}
    if(element.type == 'Pie'){console.log('Pie Loaded')
    RenderList.push( <Pie_chart data = {element.elements}/>)}
});
}
   

    
    return (
        <div>
       {RenderList}
       {/* <Bar_chart data = {post}/> */}
        </div>
    );
  }
  