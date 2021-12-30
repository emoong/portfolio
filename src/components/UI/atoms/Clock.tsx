import moment from "moment"
import { useEffect, useState } from "react"
import styled from "styled-components";

export default function Clock() {
  const [time, setTime] = useState(moment());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(moment());
    }, 1000)

    return () => {
      clearInterval(timer);
    }
  }, [])

  return (
    <Container>
      {time.format("ddd MMM DD h:mm A")}
    </Container>
  )
}

const Container = styled.div`
  color: white;
`