import React from "react";
import styled from "@emotion/native";
import { getImgPath } from "../common/utils";
import { useNavigation } from "@react-navigation/native";

const TopSlides = ({ movie }) => {
  const { navigate } = useNavigation();

  return (
    <TRWrapper
      onPress={() =>
        navigate("Stacks", { screen: "Detail", params: { movieId: movie.id } })
      }
    >
      <TRPoster
        source={{
          uri: getImgPath(movie.poster_path),
        }}
      />
      <TRMovieDesc>
        <Rating>⭐ {movie.vote_average}/10</Rating>
        <TRTitle>
          {movie.title.slice(0, 11)}
          {movie.title.length > 11 && "..."}
        </TRTitle>
      </TRMovieDesc>
    </TRWrapper>
  );
};

export default TopSlides;
// Top movie section

const TRWrapper = styled.TouchableOpacity`
  background-color: #353b48;
  border-radius: 5px;
`;

const TRPoster = styled.Image`
  width: 120px;
  height: 170px;
  background-color: grey;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
const TRTitle = styled.Text`
  font-size: 13px;
  font-weight: 600;
  color: white;
`;

const TRMovieDesc = styled.View`
  padding: 10px;
`;

// 공통
const Rating = styled.Text`
  color: white;
  margin-top: 5px;
  margin-bottom: 5px;
`;
