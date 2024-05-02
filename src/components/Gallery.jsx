import { useMemo } from "react";
import styled from "styled-components";
import DayCell from "./DayCell";
import { getDayOfWeek } from "../utils/dates.utils";



const Gallery = ({ weatherData, selectedDay, selectedPeriod }) => {
  const { days } = weatherData || {};

  const DAYS = useMemo(() => {
    if (!days) return;
    return days.filter((day) => {
      const { datetime } = day || {};

      if (getDayOfWeek(datetime) === selectedDay) {
        return day
      }
    })
  }, [days, selectedDay])

  return <Wrapper>
    <SliderContainer>
      {DAYS && DAYS.map((date) => <DayCell key={date.datetime} dayData={date} selectedPeriod={selectedPeriod} />)}
    </SliderContainer>
  </Wrapper>;
};

export default Gallery;

const SliderContainer = styled.div`
  display: flex; 
  overflow-x: auto; 
  scroll-snap-type: x mandatory;
`
const Wrapper = styled.div`
`;
