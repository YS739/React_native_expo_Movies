import React from "react";
import { View } from "react-native";
import styled from "@emotion/native";
import { getImgPath } from "../common/util";

const TopSlides = ({ top }) => {
  return (
    <TRWrapper
      onPress={() =>
        navigate("Stacks", { screen: "Detail", params: { id: 123 } })
      }
    >
      <TRPoster
        source={{
          uri: getImgPath(top.poster_path),
        }}
      />
      <TRMovieDesc>
        <Rating>⭐ {top.vote_average}/10</Rating>
        <TRTitle>
          {top.title.slice(0, 11)}
          {top.title.length > 11 && "..."}
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
