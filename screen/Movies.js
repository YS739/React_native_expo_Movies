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
import { useInfiniteQuery, useQuery, useQueryClient } from "react-query";
import { getNowPlayings, getTopRated, getUpcoming } from "../common/api";

const Movies = ({ navigation: { navigate } }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const queryClient = useQueryClient();

  const { data: nowPlayingsData, isLoading: isLoadingNP } = useQuery(
    ["Movies", "NowPlayings"],
    getNowPlayings
  );
  const { data: topRatedData, isLoading: isLoadingTR } = useQuery(
    ["Movies", "TopRated"],
    getTopRated
  );
  const {
    data: upComingData,
    isLoading: isLoadingUC,

    // fetch more를 위한 method 함수
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(["Movies", "Upcoming"], getUpcoming, {
    // getUpcoming 함수가 실행되면 getNextPageParam 콜백함수가 먼저 실행됨
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
    },
  });

  // flat List의 onEndReached에 넣는 함수
  const fetchMore = async () => {
    if (hasNextPage) {
      await fetchNextPage();
    }
  };

  //  스크롤로 새로고침 처리 - onRefresh에 넣는 함수
  const onRefresh = async () => {
    setIsRefreshing(true);
    await queryClient.refetchQueries(["Movies"]);
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
      onEndReached={fetchMore}
      onEndReachedThreshold={0.5}
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
            onEndReached={fetchMore}
            onEndReachedThreshold={0.5}
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
      // data = 누적되어 지는 1차원 영화 리스트 배열
      data={upComingData.pages.map((page) => page.results).flat()}
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
