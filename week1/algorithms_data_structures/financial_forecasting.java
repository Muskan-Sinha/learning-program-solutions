import java.util.HashMap;
import java.util.Map;
public class financial_forecasting { 
    public static double forecastRecursive(double currentValue, double growthRate, int years) {
        if (years == 0) return currentValue;
        return forecastRecursive(currentValue * (1 + growthRate), growthRate, years - 1);
    }
    public static double forecastMemo(double currentValue, double growthRate, int years, Map<Integer, Double> memo) {
        if (years == 0) return currentValue;
        if (memo.containsKey(years)) return memo.get(years);

        double nextValue = forecastMemo(currentValue * (1 + growthRate), growthRate, years - 1, memo);
        memo.put(years, nextValue);
        return nextValue;
    }
    public static void main(String[] args) {
        double initialValue = 10000;      
        double annualGrowthRate = 0.05;  
        int years = 5;
        double futureValueRecursive = forecastRecursive(initialValue, annualGrowthRate, years);
        System.out.printf("Future Value (Recursive): %.2f\n", futureValueRecursive);

        Map<Integer, Double> memo = new HashMap<>();
        double futureValueMemo = forecastMemo(initialValue, annualGrowthRate, years, memo);
        System.out.printf("Future Value (Memoized): %.2f\n", futureValueMemo);
    }
}
