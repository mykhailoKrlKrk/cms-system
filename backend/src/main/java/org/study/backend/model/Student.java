package org.study.backend.model;

import jakarta.persistence.*;
import java.time.LocalDate;
import lombok.Data;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

@Entity
@Data
@SQLDelete(sql = "UPDATE students SET is_deleted = true WHERE id=?")
@Where(clause = "is_deleted=false")
@Table(name = "students")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "`group`") // Обгортка у зворотні апострофи
    private String group;
    @Column(nullable = false, name = "first_name")
    private String firstName;
    @Column(nullable = false, name = "last_name")
    private String lastName;
    @Column(nullable = false)
    @Enumerated(value = EnumType.STRING)
    private Gender gender;
    @Column(nullable = false)
    private LocalDate birthday;
    @Column(nullable = false)
    @Enumerated(value = EnumType.STRING)
    private Status status;
    @Column(nullable = false, name = "is_deleted")
    private boolean isDeleted;
}
