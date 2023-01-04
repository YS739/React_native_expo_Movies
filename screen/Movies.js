import React, { useEffect, useState } from "react";
import { ScrollView, ActivityIndicator } from "react-native";
import styled from "@emotion/native";
import Swiper from "react-native-swiper";
import Slides from "../components/Slides";
import TopSlides from "../components/TopSlides";
import UpcomingSlides from "../components/UpcomingSlides";

const Movies = ({ navigation: { navigate } }) => {
  const [nowPlayings, setNowPlayings] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upComing, setUpComing] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const BASE_URL = "https://api.themoviedb.org/3/movie";
  const API_KEY = "cac58e014429ea0819e52ec164529d1c";
  const getNowPlayings = async () => {
    const { results } = await fetch(
      `${BASE_URL}/now_playing?api_key=${API_KEY}&language=en-US&page=1`
    ).then((res) => res.json());
    setNowPlayings(results);
  };

  const getTopRated = async () => {
    const { results } = await fetch(
      `${BASE_URL}/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    ).then((res) => res.json());
    setTopRated(results);
  };

  const getUpcoming = async () => {
    const { results } = await fetch(
      `${BASE_URL}/upcoming?api_key=${API_KEY}&language=en-US&page=1`
    ).then((res) => res.json());
    setUpComing(results);
  };

  //   모든 함수가 실행 되면 isLoading(false)로 만들기
  const getData = async () => {
    await Promise.all([getNowPlayings(), getTopRated(), getUpcoming()]);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return (
      <Loader>
        <ActivityIndicator />
      </Loader>
    );
  }

  return (
    <ScrollView>
      <Swiper height="100%" showsPagination={false} autoplay loop>
        {nowPlayings.map((movie) => (
          <Slides key={movie.id} movie={movie} />
        ))}
      </Swiper>

      <ListTitle>Top Rated Movies</ListTitle>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20 }}
      >
        {topRated.map((top) => (
          <TopSlides key={top.id} top={top} />
        ))}
      </ScrollView>
      <ListTitle>Upcoming Movies</ListTitle>
      {upComing.map((up) => (
        <UpcomingSlides key={up.id} up={up} />
      ))}
    </ScrollView>
  );
};

export default Movies;

// Styled components
const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ListTitle = styled.Text`
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  font-size: 20px;
  font-weight: 500;
  color: ${(props) => props.theme.title};
`;
