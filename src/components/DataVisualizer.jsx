import { useMemo } from 'react'
import { Chart } from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import { militaryTo12Hours } from '../utils/dates.utils';

Chart.register(CategoryScale);

const DataVisualizer = ({ hoursData }) => {
  const CHART_DATA = useMemo(() => {
    return {
      labels: hoursData.map((data) => militaryTo12Hours(data.datetime)),
      datasets: [
        {
          label: "Temperature (F)",
          data: hoursData.map((data) => data.temp),
          backgroundColor: 'red',
          borderColor: "red",
          borderWidth: 2,
          tension: 0.4
        },
        {
          label: "Wind Speeds (mph)",
          data: hoursData.map((data) => data.windspeed),
          backgroundColor: 'orange',
          borderColor: "orange",
          borderWidth: 2,
          tension: 0.4
        }, {
          label: "Humidity (%)",
          data: hoursData.map((data) => data.humidity),
          backgroundColor: "blue",
          borderColor: "blue",
          borderWidth: 2,
          tension: 0.4
        }
      ]
    }
  }, [hoursData])


  return (
    <Wrapper>
      <Line
        data={CHART_DATA}
        options={{
          maintainAspectRatio: false,
          scales: {
            x: {
              grid: {
                display: false,
              }
            },
            y: {
              display: false,
              grid: {
                display: false
              }
            }
          },
        }} />
    </Wrapper>);
}

export default DataVisualizer;

const Wrapper = styled.div`
  position: relative;
  height: 54vh;
  width: 94%;
  border-left: 2px dashed black;
  border-right: 2px dashed black;
`