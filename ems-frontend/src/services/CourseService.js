import api from "./api";

const REST_API_URL = "/api/courses";

export const listCourses = () => {
  return api.get(REST_API_URL);
};

export const createCourse = (course) => {
  return api.post(REST_API_URL, course);
};

export const getCourseById = (id) => {
  return api.get(REST_API_URL + "/" + id);
};

export const updateCourse = (id, course) => {
  return api.put(REST_API_URL + "/" + id, course);
};

export const deleteCourse = (id) => {
  return api.delete(REST_API_URL + "/" + id);
};
