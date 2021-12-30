import { State } from "modules"
import { useSelector } from "react-redux"
import styled from "styled-components"

// assets
import apple from "assets/apple.png";
import bluetooth from "assets/bluetooth.png";
import wifi from "assets/wifi.png";
import siri from "assets/siri.png";
import Clock from "../atoms/Clock";

export default function TopBar() {
  const { dock, file } = useSelector((state: State) => state)

  const curFile = dock.files[file.files[file.files.length - 1].name];

  return (
    <Container>
      <FileBlock>
        <FileIcon src={apple} />
        <Title>{curFile.name}</Title>
        <Option />
      </FileBlock>
      <RestBlock>
        <Icon src={bluetooth} />
        <Icon src={wifi} />
        <Icon src={siri} />
        <Clock />
      </RestBlock>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  top:0px;
  left:0px;
  width: 100vw;
  height: 40px;
  background-color: rgba(255,255,255,0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FileBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;

const FileIcon = styled.img`
  display: block;
  width: 30px;
  height: 30px;
`;

const Title = styled.div`
  color: white;
`;

const Option = styled.div`
  color: white;
`;

const RestBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const Icon = styled.img`
  display: block;
  width: 30px;
  height: 30px;
`;