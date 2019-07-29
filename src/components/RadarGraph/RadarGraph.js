import React, { Component } from "react";
import Chart from "react-apexcharts";

class RadarGraph extends Component {

    constructor(props) {
      super(props);
      this.state = {
        options: {
          chart: {
            id: "radar",
            //hides ability to download chart
            toolbar: {
              show: false
            },
            fontFamily: 'IBM Plex Sans Condensed, Helvetica Neue, Arial, sans-serif'
          },
          plotOptions: {
            radar: {
              polygons: {
                //Graph colors
                strokeColors: '#e8e8e8',
                connectorColors: '#e8e8e8',
                fill: {
                  colors: undefined
                }
              }
            }
          },
          title: {
            text: 'Diversity Radar Graph',
            align: 'left',
            offsetX: 30,
            style: {
              fontSize: '20px',
              color:  '#000000'
            },
          },
          colors: ['#a66efa', '#ee538b', '#6ea6ff'],
          markers: {
            size: 0,
          },
          stroke: {
            width: 2
          },
          fill: {
            opacity: 0.5
          },
          dataLabels: {
            style: {
                fontSize: '12px',
                colors: ['#000000']
            }
          },
          legend: {
            position: 'bottom',
            horizontalAlign: 'left',
            offsetX: 20,
            offsetY: 0,
            fontSize: '14px',
            labels: {
              colors: ['#000000'],
            },
            markers: {
              width: 14,
              height: 14,
              radius: 2,
            },
            onItemClick: {
              toggleDataSeries: true
            } 
          },
          xaxis: {
            categories: ['Gender', 'Race', 'Accessibility', 'Education', 'Economic Background', 'Country of Origin', 'Sexual Identity']
          },
          yaxis: {
            show: false
          }
        },
        series: [
          {
            name: "Your Team",
            data: [30, 40, 45, 50, 20, 100, 70],
          },
          {
            name: "B.U. Average",
            data: [40, 80, 90, 35, 80, 20, 20],
          },
          {
            name: "IBM Average",
            data: [90, 80, 45, 50, 40, 90, 90],
          }
        ]
      };
    }
    render() {
      return (
        <div className="app">
          <div className="row">
            <div className="mixed-chart">
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="radar"
                width="600"
              />
            </div>
          </div>
        </div>
      );
    }
  }

export default RadarGraph;