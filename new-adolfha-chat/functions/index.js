const functions = require("firebase-functions");
const axios = require("axios");

exports.createChatEngineUser = functions.region('europe-west1').auth.user().onCreate((user) => {
  axios.post(
    "https://api.chatengine.io/users/",
    {
      username: user.email,
      secret: user.uid,
      email: user.email,
      first_name: user.displayName,
    },
    { headers: { "Private-Key": "bd1a63f4-afee-4438-95b8-8f5defd190c8" } }
  );
});

exports.deleteChatEngineUser = functions.region('europe-west1').auth.user().onDelete((user) => {
  axios.delete("https://api.chatengine.io/users/me/", {
    headers: {
      "Project-ID":"dd624cae-6882-4aaa-ac59-359f97972aba",
      "User-Name": user.email,
      "User-Secret": user.uid,
    },
  });
});
