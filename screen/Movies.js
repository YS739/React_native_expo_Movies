import React, { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native";
import styled from "@emotion/native";

const Movies = ({ navigation: { navigate, reset } }) => {
  useFocusEffect(
    useCallback(() => {
      console.log("Focus");
      return () => {
        console.log("Blur");
      };
    }, [])
  );

  return (
    <ScrollView>
      <TouchableOpacity
        onPress={() =>
          navigate("Stacks", { screen: "Detail", params: { id: 123 } })
        }
      >
        <View>
          <Image
            style={{ opacity: 0.6 }}
            source={{
              uri: moviePoster,
              width: "100%",
              height: 260,
            }}
          />
          <MainMovieWrap style={{ flexDirection: "row" }}>
            <Image
              source={{
                uri: moviePoster,
                width: "30%",
                height: "100%",
              }}
            />
            <MainMovieDesc>
              <MovieTitle>Everything Everywhere All at Once</MovieTitle>
              <MovieText>⭐ 10/10</MovieText>
              <MovieText numberOfLines={4} ellipsizeMode="tail">
                The plot centers on a Chinese-American immigrant (played by
                Michelle Yeoh) who, while being audited by the IRS, discovers
                that she must connect with parallel universe versions of herself
                to prevent a powerful being from destroying the multiverse.
                {/* TODO: overflow:hidden, 말줄임표 넣기 style component */}
              </MovieText>
            </MainMovieDesc>
          </MainMovieWrap>
        </View>
      </TouchableOpacity>
      <IntroTitle>Top Rated Movies</IntroTitle>
      <ScrollView horizontal={true}>
        <View style={{ flexDirection: "row", margin: 10 }}>
          <TouchableOpacity
            onPress={() =>
              navigate("Stacks", { screen: "Detail", params: { id: 123 } })
            }
          >
            <TopMovieCard>
              <TopMoviePoster>
                <Image
                  source={{
                    uri: moviePoster,
                    width: "100%",
                    height: "100%",
                  }}
                />
              </TopMoviePoster>
              <TopMovieDesc>
                <Text>⭐ 10/10</Text>
                <Text numberOfLines={1} ellipsizeMode="tail">
                  The plot centers on a Chinese-American immigrant (played by
                  Michelle Yeoh) who, while being audited by the IRS
                </Text>
              </TopMovieDesc>
            </TopMovieCard>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <IntroTitle>Upcoming Movies</IntroTitle>
      <View style={{ width: "100%" }}>
        <UpMovieWrap
          onPress={() =>
            navigate("Stacks", { screen: "Detail", params: { id: 123 } })
          }
          style={{ flexDirection: "row" }}
        >
          <Image
            source={{
              uri: moviePoster,
              width: "30%",
              height: 180,
            }}
          />
          <UpMovieDesc>
            <MovieTitle>Everything Everywhere All at Once</MovieTitle>
            <MovieText>2022-10-12</MovieText>
            <MovieText numberOfLines={3} ellipsizeMode="tail">
              The plot centers on a Chinese-American immigrant (played by
              Michelle Yeoh) who, while being audited by the IRS, discovers that
              she must connect with parallel universe versions of herself to
              prevent a powerful being from destroying the multiverse.
              {/* TODO: overflow:hidden, 말줄임표 넣기 style component */}
            </MovieText>
          </UpMovieDesc>
        </UpMovieWrap>
        <UpMovieWrap
          onPress={() =>
            navigate("Stacks", { screen: "Detail", params: { id: 123 } })
          }
          style={{ flexDirection: "row" }}
        >
          <Image
            source={{
              uri: moviePoster,
              width: "30%",
              height: 180,
            }}
          />
          <UpMovieDesc>
            <MovieTitle>Everything Everywhere All at Once</MovieTitle>
            <MovieText>2022-10-12</MovieText>
            <MovieText numberOfLines={3} ellipsizeMode="tail">
              The plot centers on a Chinese-American immigrant (played by
              Michelle Yeoh) who, while being audited by the IRS, discovers that
              she must connect with parallel universe versions of herself to
              prevent a powerful being from destroying the multiverse.
              {/* TODO: overflow:hidden, 말줄임표 넣기 style component */}
            </MovieText>
          </UpMovieDesc>
        </UpMovieWrap>
      </View>
    </ScrollView>
  );
};

export default Movies;

// Styled components
const moviePoster = "http://img.movist.com/?img=/x00/05/61/19_p1.jpg";

// Main section

const MainMovieWrap = styled.View`
  width: 100%;
  height: 180px;
  flex-direction: "row";
  align-items: left;
  position: absolute;
  top: 80px;
  margin: 0 10px;
`;

const MainMovieDesc = styled.View`
  width: 70%;
  padding: 20px 20px 0 5px;
  align-items: flex-start;
`;

// Top movie section
const TopMovieCard = styled.View`
  width: 140px;
  height: 220px;
`;

const TopMoviePoster = styled.View`
  width: 140px;
  height: 180px;
`;

const TopMovieDesc = styled.View`
  background-color: #58b19f;
  width: 140px;
  height: 50px;
  justify-content: space-evenly;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;

// Upcoming Movie section
const UpMovieWrap = styled.TouchableOpacity`
  margin: 10px;
`;

const UpMovieDesc = styled.View`
  width: 70%;
  justify-content: space-around;
  padding: 0 10px;
`;

// 공통 적용
const IntroTitle = styled.Text`
  font-size: 25px;
  margin: 10px;
  color: ${(props) => props.theme.title};
`;

const MovieTitle = styled.Text`
  font-size: 25px;
  color: white;
`;

const MovieText = styled.Text`
  color: white;
`;
