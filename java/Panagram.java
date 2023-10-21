import java.util.*;

public class Panagram {
  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);
    System.out.println("Enter a String");
    String s = scan.nextLine();
    // String s = "String";

    int[] array = new int[26];

    // if we need to convert a given string to lowerCase and check below line is required
    // String str = s.toLowerCase(); 

    String str = s; 

    for (int i = 0; i < str.length(); i++) {
      if (str.charAt(i) != 36 && str.charAt(i) >= 97 && str.charAt(i) <= 122) {
        array[str.charAt(i) - 97] = 1;
      }
    }

    for (int i = 0; i < 26; i++) {
      if (array[i] != 1) {
        System.out.println("Given String is Not Panagram");
        System.exit(0);
      }
    }

    System.out.println("Given String is a Panagram");
  }
}
