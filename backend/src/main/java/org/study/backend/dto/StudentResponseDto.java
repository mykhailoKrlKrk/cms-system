package org.study.backend.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.time.LocalDate;
import lombok.Data;
import org.study.backend.model.Gender;
import org.study.backend.model.Status;

@Data
public class StudentResponseDto {
    private Long id;
    private String group;
    private String firstName;
    private String lastName;
    private Gender gender;
    private Status status;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate birthday;
}
