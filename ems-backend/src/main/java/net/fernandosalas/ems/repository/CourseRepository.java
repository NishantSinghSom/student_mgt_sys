package net.fernandosalas.ems.repository;

import net.fernandosalas.ems.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Long> {
}
