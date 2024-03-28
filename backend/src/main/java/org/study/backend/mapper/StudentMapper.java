package org.study.backend.mapper;

import org.study.backend.config.MapperConfig;
import org.study.backend.dto.StudentRequestDto;
import org.study.backend.dto.StudentResponseDto;
import org.study.backend.model.Student;
import org.mapstruct.Mapper;

@Mapper(config = MapperConfig.class)
public interface StudentMapper {

    StudentResponseDto toDto(Student student);

    Student toModel(StudentRequestDto requestDto);
}
