import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { listCourses, deleteCourse } from "../services/CourseService";

const useListCourseComponentHook = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  const fetchCourses = async () => {
    try {
      const response = await listCourses();
      setCourses(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const updateCourse = (id) => {
    navigate(`/edit-course/${id}`);
  };

  const deleteCourseById = async (id) => {
    try {
      await deleteCourse(id);
      toast.error("Course deleted successfully!");
      fetchCourses();
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete course.");
    }
  };

  return {
    courses,
    fetchCourses,
    updateCourse,
    deleteCourseById,
  };
};

export default useListCourseComponentHook;
