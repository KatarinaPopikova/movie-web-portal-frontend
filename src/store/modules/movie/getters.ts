export const activitiesFilter = (state) => (movie_id) => {
  return state.activities.filter((activity) => {
    return movie_id;
  });
};
