import  { GENERATION } from './types';


export const fetchGeneration = () => dispatch => {
    dispatch({ type: GENERATION.FETCH });
    return fetch('http://localhost:4001/generation')
        .then(response => response.json())
        .then(json => {
          if (json.type === 'error') {
              dispatch({
                  type: GENERATION.FETCH_ERROR,
                  message: json.message
              });
          } else {
              dispatch({ 
                  type: GENERATION.FETCH_SUCCESS,
                  generation: json.generation 
              });
          }
        })
        .catch(error => dipatch({ 
            type: GENERATION.FETCH_ERROR,
            message: error.message
        }));
};