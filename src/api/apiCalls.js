import axios from "axios";
export const postWithAuth = async (url, body,token) => {
  return await axios.post(url, body, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};
export const postWithoutAuth = async (url, body) => {
  return await axios.post(url, body);
};

export const putWithAuth = async (url, body,token) => {
  return await axios.put(url, body, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};
export const getWithAuth = async (url, param = {},token) => {
  return await axios.get(url, {
    param,
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};
export const getWithoutAuth = async (url, param = {}) => {
  return await axios.get(url, param);
};
export const deleteWithAuth = async (url,token) => {
  return await axios.delete(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization:token,
    },
  });
};

/*export const RefreshToken = async (user) => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  return await axios.post(
    "api/v1.0/auth/refresh",
    {
      userId: user.id,
      refreshToken: user.refreshToken,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};*/
