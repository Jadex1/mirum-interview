import { LOAD_SOMETHING_SUCCESS, LOAD_SOMETHING, LOAD_SOMETHING_ERROR } from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
};

function appReducer(state = initialState, action) {

  switch (action.type) {

    case LOAD_SOMETHING: {
      const newState = {
        ...state,
        // add metata data bleow
        loading: true,
        // error: false,
        // userData: {
        //   repositories: false,
        // },
      };
      return newState;
    }

    case LOAD_SOMETHING_SUCCESS: {
      const newState = {
        ...state,
        loading: false,
        //       userData: {
        //         repositories: action.repos,
        //       },
        //       currentUser: action.username,
      };
      return newState;
    }

    case LOAD_SOMETHING_ERROR: {
      // const newState = {
        // ...state,
        // add metata data bleow
        // loading: true,
        // error: false,
        // userData: {
        //   repositories: false,
        // },
      // };
      return { ...state, error: action.error, loading: false };
      // return newState;
    }

    default: {
      return state;
    }
  }
}

export default appReducer;
