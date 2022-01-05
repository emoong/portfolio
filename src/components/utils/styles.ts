import { coordinates } from "components/type/entity/window";
import styled from "styled-components";

export const WindowContainer = styled.div`
  position: absolute;
  top: ${({ thisCoordinates, thisSize }: { thisCoordinates: coordinates, thisSize: string[] }) => thisSize[0] === "100vw" ? 0 : thisCoordinates[1]}px;
  left: ${({ thisCoordinates, thisSize }: { thisCoordinates: coordinates, thisSize: string[] }) => thisSize[0] === "100vw" ? 0 : thisCoordinates[0]}px;
  border: 1px solid grey;
  background-color: white;
`

export const WindowBody = styled.div`
  width: ${({ thisSize }: { thisSize: string[] }) => thisSize[0]};
  height: ${({ thisSize }: { thisSize: string[] }) => thisSize[1]};
`