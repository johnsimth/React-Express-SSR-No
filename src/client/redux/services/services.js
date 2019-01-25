// export const userService = {
//      login,
//      logout,
//      register,
// };

// function login(username, password){{
//      return dispatch => {
//          var configuration = {
//              method: 'POST',
//              headers: {
//                  'Content-Type': 'applicaton/json'
//              },
//              body: JSON.stringify({username, password})
//          };
//          return fetch('${config.apiUrl/api/users/',configuration)
//              .then((res) => {
//                  res.json()
//                  .then((res2) => {
//                      dispatch ({
//                          type: "SOME_DISPATCH_NAME",
//                          payload: {
//                              abc: res2.variable1,
//                              xyz: res2.variable2
//                          }
//                      })
//                  })
//              })
//      }
//  }
