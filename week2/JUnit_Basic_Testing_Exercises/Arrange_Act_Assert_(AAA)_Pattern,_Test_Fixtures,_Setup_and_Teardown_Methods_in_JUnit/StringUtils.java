package com.example;

public class StringUtils {
    public String reverse(String input) {
        if (input == null) {
            return null;
        }
        return new StringBuilder(input).reverse().toString();
    }

    public boolean isEmpty(String input) {
        return input == null || input.trim().isEmpty();
    }
}