public class RomanToInt {
    public static void main(String[] args) {
        String romanNo = "VII"; 
        int result = romanToInt(romanNo);
        System.out.println(result);
    }
    public static int romanToInt(String s1) {
        int result = 0;
        for (int i = 0; i < s1.length(); i++) {
            char currentChar = s1.charAt(i);
            switch (currentChar) {
                case 'I':
                    if (i + 1 < s1.length() && (s1.charAt(i + 1) == 'V' || s1.charAt(i + 1) == 'X')) {
                        result = result-1;
                    } else {
                        result = result+1;
                    }
                    break;
                case 'V':
                    result = result+5;
                    break;
                case 'X':
                    if (i + 1 < s1.length() && (s1.charAt(i + 1) == 'L' || s1.charAt(i + 1) == 'C')) {
                        result = result-10;
                    } else {
                        result = result+10;
                    }
                    break;
                case 'L':
                    result = result+50;
                    break;
                case 'C':
                    if (i + 1 < s1.length() && (s1.charAt(i + 1) == 'D' || s1.charAt(i + 1) == 'M')) {
                        result = result-100;
                    } else {
                        result = result+100;
                    }
                    break;
                default:
                    return -1;
            }
        }
        return result;
    }
}
