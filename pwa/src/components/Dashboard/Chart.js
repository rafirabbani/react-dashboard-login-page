import React from 'react';
import Highcharts from 'highcharts';

let a = [{
  date: '03-01-2021',
  value: 0.5
}, 
{
  date: '03-02-2021',
  value: 0.7
}, {
  date: '03-03-2021',
  value: 0.9
}, {
  date: '03-04-2021',
  value: 0.2
}]

let b = [];
for (var i = 0; i < a.length; i++) {
  b[i]= [a[i].value, Date.parse(a[i].date)];
}

const options = {
  chart: {
    type: 'line',
  },
  title: {
    text: 'My chart'
  }, 
  yAxis : {
    type: 'datetime'
  },
  xAxis : {
    plotLines:[{
      color: '#007bff',
      width: 2,
      value: 0.5
    }, {
      color: '#007bff',
      width: 2,
      value: 0.8
    }],
    max: 1
  },
  series: [
    {
      data: b
    }
  ]
}
class LineChart extends React.Component {

  highChartsRender() {
    Highcharts.chart('container', options )
 }
  componentDidMount() {
      this.highChartsRender();
  }
   render() {
       return (
          <div id="container">
          </div>
          
       );
   }
}    
export default LineChart;