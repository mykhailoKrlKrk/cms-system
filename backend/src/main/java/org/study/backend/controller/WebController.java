package org.study.backend.controller;

import jakarta.validation.Valid;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.study.backend.dto.StudentRequestDto;
import org.study.backend.dto.StudentResponseDto;
import org.study.backend.service.WebService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/students")
@RequiredArgsConstructor
@CrossOrigin(origins = {"http://localhost:3000"},
        methods = {
                RequestMethod.GET,
                RequestMethod.DELETE,
                RequestMethod.PUT,
                RequestMethod.POST
        })
public class WebController {
    private final WebService webService;

    @PostMapping
    public StudentResponseDto createStudent(@RequestBody @Valid StudentRequestDto requestDto) {
        return webService.createStudent(requestDto);
    }

    @PutMapping("/{id}")
    public StudentResponseDto editStudent(@PathVariable Long id, @RequestBody StudentRequestDto requestDto) {
       return webService.editStudent(id, requestDto);
    }

    @GetMapping
    public List<StudentResponseDto> getAllStudents() {
        return webService.getAll();
    }

    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable Long id) {
        webService.deleteStudent(id);
    }
}
