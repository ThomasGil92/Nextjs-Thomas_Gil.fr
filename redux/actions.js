export const SET_THEME = "SET_THEME";


export const setTheme = (theme) => (dispatch) => {
  if (process.browser) {
      dispatch({
        type: SET_THEME,
        payload: theme,
      });
  }
};