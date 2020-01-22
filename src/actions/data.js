export const getData = id => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then(json => {
          dispatch({
            type: 'SET_DATA',
            payload: json
          });

          resolve(true);
        })
        .catch(err => {
          alert("Error: " + (err.status || err));

          reject(err);
        });
    })
  }
};

