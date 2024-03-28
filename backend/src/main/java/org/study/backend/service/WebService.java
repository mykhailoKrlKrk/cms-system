package org.study.backend.service;

import java.util.List;
import org.study.backend.dto.StudentRequestDto;
import org.study.backend.dto.StudentResponseDto;

public interface WebService {
    List<StudentResponseDto> getAll();
    StudentResponseDto createStudent(StudentRequestDto requestDto);
    StudentResponseDto editStudent(Long id, StudentRequestDto requestDto);

    boolean validate(StudentRequestDto requestDto);

    void deleteStudent(Long id);
}
