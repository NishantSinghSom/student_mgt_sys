import api from "./api";

const AUTH_BASE = "/add";

export const registerUser = (user) => {
  // user: { name, email, password, roles }
  return api.post(`${AUTH_BASE}/new`, user);
};

export const loginUser = (credentials) => {
  // credentials: { username, password }
  return api.post(`${AUTH_BASE}/authenticate`, credentials).then((res) => {
    // backend returns token as plain string
    const token = res.data;
    if (token) {
      localStorage.setItem("token", token);
    }
    return token;
  });
};

export const logout = () => {
  localStorage.removeItem("token");
  // Dispatch event to notify all components
  window.dispatchEvent(new Event("auth-changed"));
};

export const getToken = () => localStorage.getItem("token");
