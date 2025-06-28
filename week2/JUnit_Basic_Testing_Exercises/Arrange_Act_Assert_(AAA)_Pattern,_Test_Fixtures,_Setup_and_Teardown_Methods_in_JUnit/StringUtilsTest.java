package com.example;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class StringUtilsTest {
    private StringUtils stringUtils;

    @Before
    public void setUp() {
        stringUtils = new StringUtils();
    }

    @After
    public void tearDown() {
        stringUtils = null;
    }

    @Test
    public void testReverse() {
        String input = "hello";
        String expected = "olleh";

        String actual = stringUtils.reverse(input);

        assertEquals(expected, actual);
    }

    @Test
    public void testReverseWithNull() {
        String input = null;

        String actual = stringUtils.reverse(input);

        assertNull(actual);
    }

    @Test
    public void testIsEmptyWithEmptyString() {
        String input = "";

        boolean result = stringUtils.isEmpty(input);

        assertTrue(result);
    }

    @Test
    public void testIsEmptyWithNonEmptyString() {
        String input = "hello";

        boolean result = stringUtils.isEmpty(input);

        assertFalse(result);
    }
}