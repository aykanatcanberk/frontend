import axios from "axios";

const addPost = (newPost) => {
  const apiUrl = "http://localhost:5071/Post";
  const token = "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidXNlckBleGFtcGxlLmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlBlcnNvbiIsImV4cCI6MTY5MTE3Mzg2MX0.cEcqk1hYTJh5BYegUk2130qICpQN-o_bZx9JH_FVfBA";

  return axios.post(apiUrl, newPost, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default addPost;
