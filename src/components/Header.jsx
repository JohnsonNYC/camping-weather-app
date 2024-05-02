import { useEffect, useState } from "react";
import styled from "styled-components";
import Display from "./Display"
import Text from "./Text";
import { MapPin, Menu } from "lucide-react";
import { FormControl, InputLabel, Select, MenuItem, TextField } from "@mui/material";

const Header = ({ weatherData, currLocation, selectedDay, selectedPeriod, errorMessage, getCurrentLocation, handleChangeDay, handleChangePeriod, handleGetWeatherData }) => {
  const { resolvedAddress } = weatherData || {};

  const [location, setLocation] = useState("");

  const handleLocationUpdate = (e) => {
    const newVal = e.target.value;
    setLocation(newVal)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!location || location == resolvedAddress) return;

    if (currLocation != location) {
      await handleGetWeatherData(encodeURIComponent(location))
    }
  }

  useEffect(() => {
    if (resolvedAddress) { setLocation(resolvedAddress) }
    else if (currLocation) setLocation(currLocation)
  }, [resolvedAddress, currLocation])

  return (
    <Wrapper>
      <FlexContainer>
        <Display color='red'>Weather.io</Display>
        <StyledMenu />
      </FlexContainer>
      <StyledButton onClick={getCurrentLocation}><Text size='xs' color='blue'>Get Location</Text></StyledButton>
      <InputContainer>

        <FlexContainer>
          <MapPin style={{ marginRight: '5px' }} />
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <TextField fullWidth id='standard-location' label='Location' size='small' placeholder="Address, Zipcode, or Coordinates" value={location} onChange={handleLocationUpdate} />
          </form>
        </FlexContainer>

        {errorMessage ? <Text color='red' aligncenter>Error: {errorMessage}</Text> : null}

        <FlexContainer>
          <div>
            <FormControl size='small'>
              <InputLabel id="demo-simple-select-label">Every</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedDay}
                label="Day"
                onChange={handleChangeDay}
              >
                <MenuItem value={'monday'}>Monday</MenuItem>
                <MenuItem value={'tuesday'}>Tuesday</MenuItem>
                <MenuItem value={'wednesday'}>Wednesday</MenuItem>
                <MenuItem value={'thursday'}>Thursday</MenuItem>
                <MenuItem value={'friday'}>Friday</MenuItem>
                <MenuItem value={'saturday'}>Saturday</MenuItem>
                <MenuItem value={'sunday'}>Sunday</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div style={{ marginLeft: '10px' }}>
            <FormControl size='small'>
              <InputLabel id="demo-simple-select-label">Period</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedPeriod}
                label="Period"
                onChange={handleChangePeriod}
              >
                <MenuItem value={'morning'}>Morning</MenuItem>
                <MenuItem value={'afternoon'}>Afternoon</MenuItem>
                <MenuItem value={'evening'}>Evening</MenuItem>
              </Select>
            </FormControl>
          </div>
        </FlexContainer>

      </InputContainer>
    </Wrapper>
  );
};

export default Header;

const InputContainer = styled.div`
  display: flex; 
  flex-direction: column; 

  @media screen and (min-width: 1350px){
    flex-direction: row; 
    justify-content: center; 
  }
`
const StyledButton = styled.button`
  border: 1px solid black; 
  border-radius: 8px; 
  background: white; 
  cursor: pointer; 
`
const StyledMenu = styled(Menu)`
  margin-left: auto; 
`;
const Wrapper = styled.div`
  padding: 10px; 
`;

const FlexContainer = styled.div`
  display: flex; 
  align-items: center; 
  overflow: hidden ;
  height: fit-content;
  padding: 10px;
`
