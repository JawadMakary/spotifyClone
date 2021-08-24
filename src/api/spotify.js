// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = "df86b890df9f46eb9a7811d62cd1ece9";
const redirectUri = "http://localhost:3000/home/";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];
// get the token from the url
// window.location.hash=>go to the hash(/)
//substring(2)=>get scd substring
export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(2)
    .split("&")
    .reduce((initial, item) => {
      // split at equal sign
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;