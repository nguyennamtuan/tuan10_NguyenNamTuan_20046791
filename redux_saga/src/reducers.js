import {
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAILURE,
  ADD_JOB_SUCCESS,
  DELETE_JOB_SUCCESS,
} from '../src/actions';

const initialState = {
  jobs: [],
  error: null,
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS_SUCCESS:
      return { ...state, jobs: action.payload, error: null };
    case FETCH_JOBS_FAILURE:
      return { ...state, error: action.payload };
    case ADD_JOB_SUCCESS:
      return { ...state, jobs: [action.payload, ...state.jobs], error: null };
    case DELETE_JOB_SUCCESS:
      return { ...state, jobs: state.jobs.filter(job => job.id !== action.payload), error: null };
    default:
      return state;
  }
};

export default jobReducer;
