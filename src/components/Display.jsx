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

const Display = ({ children, className = "", font = "roboto", weight = "regular", size = "sm", color = "black", aligncenter = false, handleClick = null, showpointer = false }) => {
  const defaultColor = colorMap[color];
  const defaultWeight = weightMap[weight];
  const defaultFont = textMap[font];


  return size === "xl" ? (
    <StyledH1
      font={defaultFont}
      weight={defaultWeight}
      color={defaultColor}
      className={`sk-typography ${className}`}
      onClick={handleClick}
      showpointer={showpointer}
      aligncenter={aligncenter}
    >
      {children}
    </StyledH1>
  ) : size == "lg" ? (
    <StyledH2
      font={defaultFont}
      weight={defaultWeight}
      color={defaultColor}
      className={`sk-typography ${className}`}
      onClick={handleClick}
      showpointer={showpointer}
      aligncenter={aligncenter}
    >
      {children}
    </StyledH2>
  ) : size === "md" ? (
    <StyledH3
      font={defaultFont}
      weight={defaultWeight}
      color={defaultColor}
      className={`sk-typography ${className}`}
      onClick={handleClick}
      showpointer={showpointer}
      aligncenter={aligncenter}
    >
      {children}
    </StyledH3>
  ) : size === "sm" ? (
    <StyledH4
      font={defaultFont}
      weight={defaultWeight}
      color={defaultColor}
      className={`sk-typography ${className}`}
      onClick={handleClick}
      showpointer={showpointer}
      aligncenter={aligncenter}
    >
      {children}
    </StyledH4>
  ) : size === "xs" ? (
    <StyledH5
      font={defaultFont}
      weight={defaultWeight}
      color={defaultColor}
      className={`sk-typography ${className}`}
      onClick={handleClick}
      showpointer={showpointer}
      aligncenter={aligncenter}
    >
      {children}
    </StyledH5>
  ) : (
    <StyledH6
      font={defaultFont}
      weight={defaultWeight}
      color={defaultColor}
      className={`sk-typography ${className}`}
      onClick={handleClick}
      showpointer={showpointer}
      aligncenter={aligncenter}
    >
      {children}
    </StyledH6>
  );
};

export default Display;

const StyledH1 = styled.h1`
  font-family: ${(props) => props.font}, sans-serif;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
  cursor: ${(props) => (props.showpointer ? "pointer" : "initial")};
  text-align: ${(props) => props.aligncenter ? "center" : "initial"};
  margin-block-start: 0px;
  margin-block-end: 0px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const StyledH2 = styled.h2`
  font-family: ${(props) => props.font}, sans-serif;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
  cursor: ${(props) => (props.showpointer ? "pointer" : "initial")};
  text-align: ${(props) => props.aligncenter ? "center" : "initial"};

  margin-block-start: 0px;
  margin-block-end: 0px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;
const StyledH3 = styled.h3`
  font-family: ${(props) => props.font}, sans-serif;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
  cursor: ${(props) => (props.showpointer ? "pointer" : "initial")};
  text-align: ${(props) => props.aligncenter ? "center" : "initial"};

  margin-block-start: 0px;
  margin-block-end: 0px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;
const StyledH4 = styled.h4`
  font-family: ${(props) => props.font}, sans-serif;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
  cursor: ${(props) => (props.showpointer ? "pointer" : "initial")};
  text-align: ${(props) => props.aligncenter ? "center" : "initial"};

  margin-block-start: 0px;
  margin-block-end: 0px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;
const StyledH5 = styled.h5`
  font-family: ${(props) => props.font}, sans-serif;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
  cursor: ${(props) => (props.showpointer ? "pointer" : "initial")};
  text-align: ${(props) => props.aligncenter ? "center" : "initial"};

  margin-block-start: 0px;
  margin-block-end: 0px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;
const StyledH6 = styled.h6`
  font-family: ${(props) => props.font}, sans-serif;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
  cursor: ${(props) => (props.showpointer ? "pointer" : "initial")};
  text-align: ${(props) => props.aligncenter ? "center" : "initial"};

  margin-block-start: 0px;
  margin-block-end: 0px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;
