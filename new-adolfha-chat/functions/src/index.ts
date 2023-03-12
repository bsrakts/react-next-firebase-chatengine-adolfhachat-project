import * as functions from "firebase-functions";

const axios = require("axios");

exports.createChatEngineUser = functions.auth.user().onCreate((user) => {
  axios.post(
    "https://api.chatengine.io/users/",
    {
      username: user.email,
      secret: user.uid,
      email: user.email,
      first_name: user.displayName,
    },
    { headers: { "Private-Key": "618c3af9-9a85-41f0-90e2-c65d637aacd3" } }
  );
});

exports.deleteChatEngineUser = functions.auth.user().onDelete((user) => {
  axios.delete("https://api.chatengine.io/users/me/", {
    headers: {
      "Project-ID": "bb2c09b7-1e46-4447-aeb9-0cdd073a2fe0",
      "User-Name": user.email,
      "User-Secret": user.uid,
    },
  });
});
