import axios from "axios";

const REST_API_URL = "http://localhost:8083/api/courses";

export const listCourses = () => {
  return axios.get(REST_API_URL);
};

export const createCourse = (course) => {
  return axios.post(REST_API_URL, course);
};

export const getCourseById = (id) => {
  return axios.get(REST_API_URL + "/" + id);
};

export const updateCourse = (id, course) => {
  return axios.put(REST_API_URL + "/" + id, course);
};

export const deleteCourse = (id) => {
  return axios.delete(REST_API_URL + "/" + id);
};
