import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import SCREEN_HEIGHT, { getImgPath } from "../common/util";
import styled from "@emotion/native";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Slides = ({ movie }) => {
  const { navigate } = useNavigation();

  return (
    <SwiperChildView>
      <MainImg
        style={StyleSheet.absoluteFill}
        source={{
          uri: getImgPath(movie.backdrop_path),
        }}
      />
      <LinearGradient
        style={StyleSheet.absoluteFill}
        colors={["transparent", "black"]}
      />
      <Row
        onPress={() =>
          navigate("Stacks", {
            screen: "Detail",
            params: { movieId: movie.id },
          })
        }
      >
        <Poster
          source={{
            uri: getImgPath(movie.poster_path || ""),
          }}
        />
        <MainMovieDesc>
          <Title>{movie.title}</Title>
          <Rating>⭐ {movie.vote_average}/10</Rating>
          <Overview>
            {movie.overview.slice(0, 150)}
            {movie.overview.length > 150 && "..."}
          </Overview>
        </MainMovieDesc>
      </Row>
    </SwiperChildView>
  );
};

export default Slides;

// Main section
const SwiperChildView = styled.View`
  flex: 1;
  justify-content: flex-end;
  height: 250px;
  /* FIXME: SCREEN HEIGHT로 하면 오류 */
  background-color: green;
`;

const Row = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
`;

const MainImg = styled.Image`
  height: 100%;
  width: 100%;
`;

const Poster = styled.Image`
  width: 100px;
  height: 160px;
  margin-left: 10px;
  margin-bottom: 10px;
`;

const MainMovieDesc = styled.View`
  width: 65%;
  margin-left: 10px;
  margin-bottom: 10px;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: white;
`;

const Overview = styled.Text`
  font-size: 12px;
  color: white;
`;

// 공통
const Rating = styled.Text`
  color: white;
  margin-top: 5px;
  margin-bottom: 5px;
`;
