package com.example;

import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class calcTest {
    @Test
    public void testAddition() {
        Calculator calculator = new Calculator();
        int sum = calculator.add(2, 2);
        assertEquals(4, sum);
    }

    @Test
    public void testSubtraction() {
        Calculator calculator = new Calculator();
        int result = calculator.subtract(5, 3);
        assertEquals(2, result);
    }
}