

import { useMemo } from 'react';
import Display from './Display';
import Text from './Text';
import styled from 'styled-components';
import { Wind, Droplets } from 'lucide-react';

import { getNumberSuffix, getDayOfWeek, capitalizeFirstLetter } from '../utils/dates.utils';
import DataVisualizer from './DataVisualizer';

import ClearDay from "../assets/clear-day.svg";
import ClearNight from "../assets/clear-night.svg";
import Cloudy from "../assets/cloudy.svg";
import Fog from "../assets/fog.svg";
import PartlyCloudyDay from "../assets/partly-cloudy-day.svg";
import PartlyCloudyNight from "../assets/partly-cloudy-night.svg";
import Rain from "../assets/rain.svg";
import Snow from "../assets/snow.svg";
import Windy from "../assets/wind.svg";

const conditionStore = { snow: Snow, rain: Rain, fog: Fog, wind: Windy, cloudy: Cloudy, 'partly-cloudy-day': PartlyCloudyDay, 'partly-cloudly-night': PartlyCloudyNight, 'clear-day': ClearDay, 'clear-night': ClearNight }
const periodMap = { "morning": [0, 11], 'afternoon': [12, 18], 'evening': [19, 23] }

const DayCell = ({ dayData, selectedPeriod }) => {

  const { icon, temp, datetime, conditions, humidity, windspeed, hours } = dayData || {};

  const dayOfMonth = getNumberSuffix(parseInt(datetime.split("-")[2]));
  const dayOfWeek = getDayOfWeek(datetime);

  const HOURS = useMemo(() => {
    if (!hours || !hours.length) return undefined;

    let start = periodMap[selectedPeriod][0];
    let end = periodMap[selectedPeriod][1] + 1;

    return hours.slice(start, end)
  }, [selectedPeriod])


  return (
    <Wrapper>
      <Display color='red' size='md' aligncenter>{capitalizeFirstLetter(dayOfWeek)} the {dayOfMonth}</Display>
      <GraphicsContainer>
        <LogoContainer>
          <img src={conditionStore[icon] || Cloudy} alt="LOGO" />
        </LogoContainer>
        <DetailsContainer>
          <Text size='md'>{conditions} {temp} F</Text>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
            <Wind size='16' style={{ marginRight: "5px" }} />
            <Text size='xs'> {windspeed}mph winds</Text>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
            <Droplets color='blue' size='16' style={{ marginRight: '5px' }} />
            <Text size='xs'>{humidity} humidity</Text>
          </div>
        </DetailsContainer>
      </GraphicsContainer>
      {HOURS && HOURS.length ? <>
        <DataVisualizer hoursData={HOURS} />
        <Text size='sm' aligncenter> {selectedPeriod.toUpperCase()}</Text>
      </> : <NoDataMessage color='red' size='md' aligncenter>No hourly data, yet! </NoDataMessage>}
    </Wrapper>);
}

export default DayCell;

const LogoContainer = styled.div`
  width: 100px; 
  height: 100px; 
`

const NoDataMessage = styled(Text)`
  margin-top: 30px; 
`
const DetailsContainer = styled.div`
  margin-left: 10px; 
`

const GraphicsContainer = styled.div`
  display: flex; 
  align-items; center; 
  justify-content: center; 
  padding: 5px 0; 
`
const Wrapper = styled.div`
  padding: 10px; 
  min-width: 100%; 
  margin: 0 5px; 
  scroll-snap-align: start;

  @media screen and (min-width: 1350px){
    border:1px solid red; 
    min-width: 48%; 
  }
`