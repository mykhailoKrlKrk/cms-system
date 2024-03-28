package org.study.backend.validation;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import java.util.regex.Pattern;

public class StringValidator implements ConstraintValidator<Formatter, String> {
    public static final String NAME_PATTERN = "^[a-zA-Zа-яА-ЯіІїЇґҐёЁ\\s]+$";

    @Override
    public boolean isValid(String comment, ConstraintValidatorContext constraintValidatorContext) {
        return comment != null && Pattern.compile(NAME_PATTERN).matcher(comment).matches();
    }
}
