import axios from "axios";

const GitUser = {
  getAllUsers: () =>
    // axios.get(`https://api.github.com/users`).then(resp => {
    //     console.log(resp,'EE')
    //     return resp;
    // })

    axios.get("https://api.github.com/users", {
        params: {
          token: "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",
        },
      }).then((resp) => {
        return resp;

      }).catch((e) => console.log(e)),
};

export { GitUser };
