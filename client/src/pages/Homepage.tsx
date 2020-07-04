import React, { FC } from "react";
import styled from "styled-components";
import { useSetRecoilState, useRecoilState } from "recoil";
import { isDarkModeAtom } from "../App";

export const Homepage: FC = () => {
  const [isDarkMode, setIsDarkMode] = useRecoilState(isDarkModeAtom);

  return (
    <>
      <Button onClick={() => setIsDarkMode(!isDarkMode)}>click</Button>
    </>
  );
};
const Button = styled.button`
  color: ${(props) => props.theme.main};
`;
