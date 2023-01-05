import React, { useEffect, useState } from "react";
import {
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  FlatList,
  View,
} from "react-native";
import styled from "@emotion/native";
import Swiper from "react-native-swiper";
import Slides from "../components/Slides";
import TopSlides from "../components/TopSlides";
import UpcomingSlides from "../components/UpcomingSlides";
import { useQuery } from "react-query";
import { getNowPlayings, getTopRated, getUpcoming } from "../common/api";

const Movies = ({ navigation: { navigate } }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const {
    data: nowPlayingsData,
    isLoading: isLoadingNP,
    refetch: refetchNP,
  } = useQuery("NowPlayings", getNowPlayings);
  const {
    data: topRatedData,
    isLoading: isLoadingTR,
    refetch: refetchTR,
  } = useQuery("TopRated", getTopRated);
  const {
    data: upComingData,
    isLoading: isLoadingUC,
    refetch: refetchUC,
  } = useQuery("Upcoming", getUpcoming);

  //  스크롤로 새로고침 처리 - onRefresh에 넣는 함수
  const onRefresh = async () => {
    setIsRefreshing(true);
    await Promise.all([refetchNP(), refetchTR(), refetchUC()]);
    // await refetchNP();
    // await refetchTR();
    // await refetchUC();
    setIsRefreshing(false);
  };

  const isLoading = isLoadingNP || isLoadingTR || isLoadingUC;

  if (isLoading) {
    return (
      <Loader>
        <ActivityIndicator />
      </Loader>
    );
  }

  return (
    <FlatList
      refreshing={isRefreshing}
      onRefresh={onRefresh}
      ListHeaderComponent={
        <>
          <Swiper height="100%" showsPagination={false} autoplay loop>
            {nowPlayingsData.results.map((movie) => (
              <Slides key={movie.id} movie={movie} />
            ))}
          </Swiper>
          <ListTitle>Top Rated Movies</ListTitle>
          <FlatList
            horizontal
            contentContainerStyle={{ paddingHorizontal: 20 }}
            showsHorizontalScrollIndicator={false}
            data={topRatedData.results}
            renderItem={({ item }) => <TopSlides movie={item} />}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={<View style={{ width: 10 }} />}
          />

          <ListTitle>Upcoming Movies</ListTitle>
        </>
      }
      data={upComingData.results}
      renderItem={({ item }) => <UpcomingSlides movie={item} />}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={<View style={{ height: 15 }} />}
      showsVerticalScrollIndicator={false}
    />
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
