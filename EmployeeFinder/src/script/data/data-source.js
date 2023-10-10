class DataSource {
  static searchEmployee(keyword) {
    return fetch(`https://reqres.in/api/users=${keyword}`)
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          if (responseJson.data) {
            return Promise.resolve(responseJson.data);
          } else {
            return Promise.reject(`${keyword} is not found`);
          }
        });
  }
}
 
export default DataSource;