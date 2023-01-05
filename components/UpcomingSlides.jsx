import React from "react";
import styled from "@emotion/native";
import { getImgPath } from "../common/util";
import { useNavigation } from "@react-navigation/native";

const UpcomingSlides = ({ movie }) => {
  const { navigate } = useNavigation();

  return (
    <UpcomingRow
      onPress={() =>
        navigate("Stacks", { screen: "Detail", params: { movieId: movie.id } })
      }
      style={{ flexDirection: "row" }}
    >
      <UpcomingPoster
        source={{
          uri: getImgPath(movie.poster_path),
        }}
      />
      <UpcomingMovieDesc>
        <UpcomingTitle>{movie.title}</UpcomingTitle>
        <Release>{movie.release_date}</Release>
        <UpcomingOverview>
          {movie.overview.slice(0, 70)}
          {movie.overview.length > 70 && "..."}
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
