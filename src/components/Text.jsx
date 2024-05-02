import styled from "styled-components";

const textMap = { roboto: "Roboto" };

const colorMap = {
  "dark-black": "#28282B",
  black: "#36454f",
  white: "#fff",
  "dark-orange": "#9E3500",
  "red": "#D11919"
};
const weightMap = {
  regular: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
};

const sizeMap = {
  xxs: "12px",
  xs: "14px",
  sm: "16px",
  md: "18px",
  lg: "20px",
  xl: "24px",
};

const Text = ({ children, className = "", font = "roboto", weight = "regular", size = "sm", color = "black", handleClick = null, showpointer = false, aligncenter = false }
) => {
  const defaultColor = colorMap[color];
  const defaultSize = sizeMap[size];
  const defaultWeight = weightMap[weight];
  const defaultFont = textMap[font];

  return (
    <StyledDiv
      font={defaultFont}
      weight={defaultWeight}
      size={defaultSize}
      color={defaultColor}
      className={`sk-typography ${className}`}
      onClick={handleClick}
      showpointer={showpointer}
      aligncenter={aligncenter}
    >
      {children}
    </StyledDiv>
  );
};

export default Text;

const StyledDiv = styled.div`
  font-family: ${(props) => props.font}, sans-serif;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
  cursor: ${(props) => (props.showpointer ? "pointer" : "initial")};
  text-align: ${(props) => props.aligncenter ? 'center' : 'initial'}
`;