package com.example.system.ExceptionHandling;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class OperatorNotFoundException extends RuntimeException {
    public OperatorNotFoundException(String message) {
        super(message);
    }
}
