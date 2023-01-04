import React, { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import styled from "@emotion/native";
import { LinearGradient } from "expo-linear-gradient";
import Swiper from "react-native-swiper";
import SCREEN_HEIGHT from "../common/util";

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
      <Swiper height="100%" showsPagination={false} autoplay loop>
        <SwiperChildView>
          <MainImg
            style={StyleSheet.absoluteFill}
            source={{
              uri: moviePoster,
            }}
          />
          <LinearGradient
            style={StyleSheet.absoluteFill}
            colors={["transparent", "black"]}
          />
          <Row
            onPress={() =>
              navigate("Stacks", { screen: "Detail", params: { id: 123 } })
            }
          >
            <Poster
              source={{
                uri: moviePoster,
              }}
            />
            <MainMovieDesc>
              <Title>Everything Everywhere All at Once</Title>
              <Rating>⭐ 10/10</Rating>
              <Overview numberOfLines={4} ellipsizeMode="tail">
                The plot centers on a Chinese-American immigrant (played by
                Michelle Yeoh) who, while being audited by the IRS, discovers
                that she must connect with parallel universe versions of herself
                to prevent a powerful being from destroying the multiverse.
              </Overview>
            </MainMovieDesc>
          </Row>
        </SwiperChildView>
        <SwiperChildView>
          <MainImg
            style={StyleSheet.absoluteFill}
            source={{
              uri: moviePoster,
            }}
          />
          <LinearGradient
            style={StyleSheet.absoluteFill}
            colors={["transparent", "black"]}
          />
          <Row
            onPress={() =>
              navigate("Stacks", { screen: "Detail", params: { id: 123 } })
            }
          >
            <Poster
              source={{
                uri: moviePoster,
              }}
            />
            <MainMovieDesc>
              <Title>Everything Everywhere All at Once</Title>
              <Rating>⭐ 10/10</Rating>
              <Overview numberOfLines={4} ellipsizeMode="tail">
                The plot centers on a Chinese-American immigrant (played by
                Michelle Yeoh) who, while being audited by the IRS, discovers
                that she must connect with parallel universe versions of herself
                to prevent a powerful being from destroying the multiverse.
              </Overview>
            </MainMovieDesc>
          </Row>
        </SwiperChildView>
        <SwiperChildView>
          <MainImg
            style={StyleSheet.absoluteFill}
            source={{
              uri: moviePoster,
            }}
          />
          <LinearGradient
            style={StyleSheet.absoluteFill}
            colors={["transparent", "black"]}
          />
          <Row
            onPress={() =>
              navigate("Stacks", { screen: "Detail", params: { id: 123 } })
            }
          >
            <Poster
              source={{
                uri: moviePoster,
              }}
            />
            <MainMovieDesc>
              <Title>Everything Everywhere All at Once</Title>
              <Rating>⭐ 10/10</Rating>
              <Overview numberOfLines={4} ellipsizeMode="tail">
                The plot centers on a Chinese-American immigrant (played by
                Michelle Yeoh) who, while being audited by the IRS, discovers
                that she must connect with parallel universe versions of herself
                to prevent a powerful being from destroying the multiverse.
              </Overview>
            </MainMovieDesc>
          </Row>
        </SwiperChildView>
      </Swiper>

      <ListTitle>Top Rated Movies</ListTitle>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20 }}
      >
        <TRWrapper
          onPress={() =>
            navigate("Stacks", { screen: "Detail", params: { id: 123 } })
          }
        >
          <TRPoster
            source={{
              uri: moviePoster,
            }}
          />
          <TRMovieDesc>
            <Rating>⭐ 10/10</Rating>
            <TRTitle>Everything Everywhere All at Once</TRTitle>
          </TRMovieDesc>
        </TRWrapper>
      </ScrollView>
      <ListTitle>Upcoming Movies</ListTitle>
      <UpcomingRow
        onPress={() =>
          navigate("Stacks", { screen: "Detail", params: { id: 123 } })
        }
        style={{ flexDirection: "row" }}
      >
        <UpcomingPoster
          source={{
            uri: moviePoster,
            width: "30%",
            height: 180,
          }}
        />
        <UpcomingMovieDesc>
          <UpcomingTitle>Everything Everywhere All at Once</UpcomingTitle>
          <Release>2022-10-12</Release>
          <UpcomingOverview numberOfLines={3} ellipsizeMode="tail">
            The plot centers on a Chinese-American immigrant (played by Michelle
            Yeoh) who, while being audited by the IRS, discovers that she must
            connect with parallel universe versions of herself to prevent a
            powerful being from destroying the multiverse.
          </UpcomingOverview>
        </UpcomingMovieDesc>
      </UpcomingRow>
    </ScrollView>
  );
};

export default Movies;

// Styled components
const moviePoster = "http://img.movist.com/?img=/x00/05/61/19_p1.jpg";

// Main section
const SwiperChildView = styled.View`
  flex: 1;
  justify-content: flex-end;
  height: ${SCREEN_HEIGHT / 3 + "px"};
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

// Top movie section

const TRWrapper = styled.TouchableOpacity`
  background-color: black;
  border-radius: 5px;
  margin-right: 10px;
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

// 공통 적용
const ListTitle = styled.Text`
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  font-size: 20px;
  font-weight: 500;
  color: ${(props) => props.theme.title};
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: white;
`;

const Rating = styled.Text`
  color: white;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const Overview = styled.Text`
  font-size: 12px;
  color: white;
`;
