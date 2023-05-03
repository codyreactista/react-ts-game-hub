import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2da25bcc774e4eb9a9e235f2d1305ee7",
  },
});
