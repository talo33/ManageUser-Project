const token = localStorage.getItem("accesstoken");

export const headers = {
  token: `Bearer ${token}`,
};
