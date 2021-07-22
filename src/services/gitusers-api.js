import axios from "axios";

const GitUser = {
  getAllUsers: () => 
      axios.get('https://api.github.com/users', { headers: { Authorization: 'Bearer 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' } })
      .then(response => {
          return response;
        })
      .catch((error) => {
          console.log('error ' + error);
      })
};

export { GitUser };
