import React from "react";
import styled from "styled-components/macro";
import { useAudioPlayer, useAudioPosition } from "react-use-audio-player";
import {
  PlayFill,
  PauseFill,
  StopFill,
  ForwardTen,
  BackTen
} from "grommet-icons";

import { buttonsHeight, SideBarContainer } from "../SidebarDefinitions";
import { buttonColour, Button } from "../../../GlobalDefinitions";

const Container = styled(SideBarContainer)`
  padding-left: 7.5%;
  padding-right: 7.5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
declare type BackOrForth = "back" | "forth";

const PlaybackButtons = () => {
  const { playing, seek, stop, togglePlayPause } = useAudioPlayer();
  const { position } = useAudioPosition();

  const seek10Secs = (direction: BackOrForth) => {
    if (direction === "forth") {
      seek(position + 10);
    } else {
      seek(position - 10);
    }
  };

  const playPauseButton = (isPlaying: boolean) =>
    isPlaying ? (
      <PauseFill color={buttonColour} />
    ) : (
      <PlayFill color={buttonColour} />
    );

  return (
    <Container height={buttonsHeight} width={100}>
      <Button
        onClick={() => {
          seek10Secs("back");
        }}
      >
        <BackTen color={buttonColour} />
      </Button>
      <div>
        <Button onClick={togglePlayPause}>{playPauseButton(playing)}</Button>
        <Button onClick={() => stop()}>
          <StopFill color={buttonColour} />
        </Button>
      </div>
      <Button
        onClick={() => {
          seek10Secs("forth");
        }}
      >
        <ForwardTen color={buttonColour} />
      </Button>
    </Container>
  );
};

export default PlaybackButtons;
