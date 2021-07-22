 const getData = async (url = '') => {
  const response = await fetch(url, {
    method: 'GET'
  });
  return response.json();
}

const GitUser = {

  getAllUsers: () => 
      getData('https://api.github.com/users')
      .then(response => {
        return response;
      }).catch((error) => {
          console.log('error ' + error);
      })
};

export { GitUser };
