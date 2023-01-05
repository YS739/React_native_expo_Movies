const BASE_URL = "https://api.themoviedb.org/3/movie";
const API_KEY = "cac58e014429ea0819e52ec164529d1c";

// Movie.jsx
export const getNowPlayings = () =>
  fetch(
    `${BASE_URL}/now_playing?api_key=${API_KEY}&language=en-US&page=1`
  ).then((res) => res.json());

export const getTopRated = ({ pageParam }) =>
  fetch(
    `${BASE_URL}/top_rated?api_key=${API_KEY}&language=en-US&page=${pageParam}`
  ).then((res) => res.json());

export const getUpcoming = ({ pageParam }) =>
  fetch(
    `${BASE_URL}/upcoming?api_key=${API_KEY}&language=en-US&page=${pageParam}`
  ).then((res) => res.json());

// Detail.jsx
export const getDetail = ({ queryKey }) => {
  const [, movieId] = queryKey;
  return fetch(
    `${BASE_URL}/${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=videos`
  ).then((res) => res.json());
};

// ReviewEdit.jsx
export const deleteReview = async (reviewId) => {
  await deleteDoc(doc(dbService, "reviews", reviewId));
};

export const editReview = async ({ reviewId, editingObj }) => {
  await updateDoc(doc(dbService, "reviews", reviewId), editingObj);
};
