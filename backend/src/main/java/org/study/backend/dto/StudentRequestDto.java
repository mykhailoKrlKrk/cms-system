package org.study.backend.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.time.LocalDate;
import lombok.Data;
import org.study.backend.model.Gender;
import org.study.backend.model.Status;
import org.study.backend.validation.Formatter;

@Data
public class StudentRequestDto {
    private String group;
    @Formatter
    private String firstName;
    @Formatter
    private String lastName;
    private Gender gender;
    private Status status;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate birthday;
}
