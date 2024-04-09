import styled from "styled-components";
import PostingForm from "../components/posting-form";
import Timeline from "../components/timeline";
const Wrapper = styled.div`
  display: grid;
  gap: 50px;
  overflow-y: scroll;
  grid-template-rows: 1fr 5fr;
`;

export default function Home() {
  return (
    <>
      <Wrapper>
        <Timeline />
      </Wrapper>
    </>
  );
}
