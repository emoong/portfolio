import { coordinates } from "components/type/entity/window";
import styled from "styled-components";

export const WindowContainer = styled.div`
  position: absolute;
  top: ${({ thisCoordinates, thisSize }: { thisCoordinates: coordinates, thisSize: string[] }) => thisSize[0] === "100vw" ? 0 : thisCoordinates[1]}px;
  left: ${({ thisCoordinates, thisSize }: { thisCoordinates: coordinates, thisSize: string[] }) => thisSize[0] === "100vw" ? 0 : thisCoordinates[0]}px;
  border: 1px solid grey;
  background-color: white;
  display: grid;
  grid-template-columns: 100px 1fr;
  gird-template-rows: 100px 1fr;
`

export const WindowBody = styled.div`
  width: ${({ thisSize }: { thisSize: string[] }) => thisSize[0]};
  height: ${({ thisSize }: { thisSize: string[] }) => thisSize[1]};
`

export const WindowTitle = styled.div`
  text-align: center;
`