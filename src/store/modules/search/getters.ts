export const categoriesFilter = (state) => (category_id) => {
  return state.activities.filter(() => {
    return category_id;
  });
};
