package net.fernandosalas.ems.controller;

import lombok.AllArgsConstructor;
import net.fernandosalas.ems.dto.CourseDto;
import net.fernandosalas.ems.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/courses")
@AllArgsConstructor
public class CourseController {

    @Autowired
    private CourseService courseService;

    @PostMapping
    public ResponseEntity<CourseDto> createCourse(@RequestBody CourseDto courseDto) {
        CourseDto saved = courseService.createCourse(courseDto);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<CourseDto>> getAllCourses() {
        List<CourseDto> list = courseService.getAllCourses();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<CourseDto> getCourseById(@PathVariable("id") Long courseId) {
        CourseDto dto = courseService.getCourseById(courseId);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @PutMapping("{id}")
    public ResponseEntity<CourseDto> updateCourse(@PathVariable("id") Long courseId,
                                                  @RequestBody CourseDto courseDto) {
        CourseDto updated = courseService.updateCourse(courseId, courseDto);
        return new ResponseEntity<>(updated, HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteCourse(@PathVariable("id") Long courseId) {
        courseService.deleteCourse(courseId);
        return new ResponseEntity<>("Course was successfully deleted", HttpStatus.OK);
    }
}
