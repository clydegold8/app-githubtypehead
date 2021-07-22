 const getData = async (url = '') => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer '+process.env.REACT_APP_TOKEN_APIGIT
    }
  });
  return response.json();
}

const getIndividualData = async (url = '') => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer '+process.env.REACT_APP_TOKEN_APIGIT
    }
  });
  return response.json();
}

const GitUser = {

  getAllUsers: () => 
      getData('https://api.github.com/users')
      .then(response => {
        if(response.length){
          return response;
        }else{
          let resp = undefined;
          return resp;
        }
        
      }).catch((error) => {
          console.log('error ' + error);
      }),

  getIndividualUser: (url) => 
    getIndividualData(url)
        .then(response => {
          return response;
        }).catch((error) => {
            console.log('error ' + error);
        })
};

export { GitUser };
