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
          borderWidth: 2
        },
        {
          label: "Wind Speeds (mph)",
          data: hoursData.map((data) => data.windspeed),
          backgroundColor: 'orange',
          borderColor: "orange",
          borderWidth: 2
        }, {
          label: "Humidity (%)",
          data: hoursData.map((data) => data.humidity),
          backgroundColor: "blue",
          borderColor: "blue",
          borderWidth: 2
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
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020"
            }
          }
        }} />
    </Wrapper>);
}

export default DataVisualizer;

const Wrapper = styled.div`
  position: relative;
  height: 54vh;
  width: 100%;
`