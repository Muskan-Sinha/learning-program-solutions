import java.util.Arrays;
import java.util.Comparator;

public class e_commerce_platform_search_function {
    static class Product {
        int productId;
        String productName;
        String category;
        public Product(int productId, String productName, String category) {
            this.productId = productId;
            this.productName = productName;
            this.category = category;
        }

        @Override
        public String toString() {
            return "ID: " + productId + ", Name: " + productName + ", Category: " + category;
        }
    }
    public static Product linearSearch(Product[] products, String targetName) {
        for (Product product : products) {
            if (product.productName.equalsIgnoreCase(targetName)) {
                return product; 
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, String targetName) {
        int left = 0, right = products.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;
            int cmp = products[mid].productName.compareToIgnoreCase(targetName);

            if (cmp == 0) return products[mid];        
            else if (cmp < 0) left = mid + 1;           
            else right = mid - 1;                      
        }

        return null;
    }


    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Shoes", "Fashion"),
            new Product(103, "Coffee Maker", "Home"),
            new Product(104, "Smartphone", "Electronics"),
            new Product(105, "T-shirt", "Fashion")
        };

        String searchName = "Smartphone";

     
        Product result1 = linearSearch(products, searchName);
        System.out.println("Linear Search Result: " + (result1 != null ? result1 : "Product not found"));

        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));
        Product result2 = binarySearch(products, searchName);
        System.out.println("Binary Search Result: " + (result2 != null ? result2 : "Product not found"));

        // Time Complexity Analysis 
        /*
            Linear Search:
                Time Complexity: O(n)
                Best Case: O(1)
                Worst Case: O(n) 

            Binary Search:
                Time Complexity: O(log n)
                Requires sorted array
        */
    }
}
