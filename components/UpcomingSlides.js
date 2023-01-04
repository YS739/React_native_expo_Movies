import React from "react";
import styled from "@emotion/native";
import { getImgPath } from "../common/util";

const UpcomingSlides = ({ up }) => {
  return (
    <UpcomingRow
      onPress={() =>
        navigate("Stacks", { screen: "Detail", params: { id: 123 } })
      }
      style={{ flexDirection: "row" }}
    >
      <UpcomingPoster
        source={{
          uri: getImgPath(up.poster_path),
        }}
      />
      <UpcomingMovieDesc>
        <UpcomingTitle>{up.title}</UpcomingTitle>
        <Release>{up.release_date}</Release>
        <UpcomingOverview>
          {up.overview.slice(0, 70)}
          {up.overview.length > 70 && "..."}
        </UpcomingOverview>
      </UpcomingMovieDesc>
    </UpcomingRow>
  );
};

export default UpcomingSlides;

// Upcoming Movie section
const UpcomingRow = styled.TouchableOpacity`
  flex-direction: row;
  margin-left: 20px;
  margin-bottom: 20px;
`;
const UpcomingPoster = styled.Image`
  width: 100px;
  height: 150px;
  background-color: grey;
  border-radius: 5px;
`;
const UpcomingTitle = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: ${(props) => props.theme.upcomingText};
`;

const UpcomingOverview = styled.Text`
  font-size: 15px;
  line-height: 20px;
  font-weight: 500;
  color: ${(props) => props.theme.upcomingText};
`;

const UpcomingMovieDesc = styled.View`
  margin-left: 20px;
  width: 60%;
`;

const Release = styled.Text`
  font-size: 16px;
  font-weight: 300;
  color: ${(props) => props.theme.upcomingText};
  margin-top: 10px;
  margin-bottom: 10px;
`;
