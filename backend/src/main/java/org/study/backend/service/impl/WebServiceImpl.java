package org.study.backend.service.impl;

import java.time.LocalDate;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.study.backend.dto.StudentRequestDto;
import org.study.backend.dto.StudentResponseDto;
import org.study.backend.mapper.StudentMapper;
import org.study.backend.model.Student;
import org.study.backend.repository.StudentRepository;
import org.study.backend.service.WebService;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class WebServiceImpl implements WebService {
    private final StudentRepository studentRepository;
    private final StudentMapper studentMapper;

    @Override
    public List<StudentResponseDto> getAll() {
        return studentRepository.findAll().stream()
                .map(studentMapper::toDto)
                .toList();
    }

    @Override
    public StudentResponseDto createStudent(StudentRequestDto requestDto) {
        validate(requestDto);
        Student student = studentMapper.toModel(requestDto);
        return studentMapper.toDto(studentRepository.save(student));
    }

    @Override
    public StudentResponseDto editStudent(Long id, StudentRequestDto requestDto) {
        validate(requestDto);
        Student student = studentMapper.toModel(requestDto);
        student.setId(id);
        return studentMapper.toDto(studentRepository.save(student));
    }

    @Override
    public boolean validate(StudentRequestDto requestDto) {
        return requestDto.getBirthday()
                .isAfter(LocalDate.of(1934, 3, 5))
                && requestDto.getBirthday()
                .isBefore(LocalDate.of(2008, 3, 6));
    }

    @Override
    public void deleteStudent(Long id) {
        studentRepository.deleteById(id);
        System.out.println("Student with id: " + id + " was deleted");
    }
}
