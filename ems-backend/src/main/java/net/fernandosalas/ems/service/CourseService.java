package net.fernandosalas.ems.service;

import net.fernandosalas.ems.dto.CourseDto;
import java.util.List;

public interface CourseService {
    CourseDto createCourse(CourseDto courseDto);
    CourseDto getCourseById(Long courseId);
    List<CourseDto> getAllCourses();
    CourseDto updateCourse(Long courseId, CourseDto courseDto);
    void deleteCourse(Long courseId);
}
