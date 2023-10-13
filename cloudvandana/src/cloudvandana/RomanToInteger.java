package cloudvandana;
public class RomanToInteger {
    public static void main(String[] args) {
        int result = romanToInteger("IX");
        System.out.println("Roman numeral 'IX' is equivalent to: " + result);
    }

    public static int romanToInteger(String s) {
        int result = 0;
        int prevValue = 0;

        for (int i = s.length() - 1; i >= 0; i--) {
            char numeral = s.charAt(i);
            int value = romanToIntegerValue(numeral);

            if (value < prevValue) {
                result -= value;
            } else {
                result += value;
            }

            prevValue = value;
        }

        return result;
    }

    public static int romanToIntegerValue(char numeral) {
        if (numeral == 'I') return 1;
        if (numeral == 'V') return 5;
        if (numeral == 'X') return 10;
        if (numeral == 'L') return 50;
        if (numeral == 'C') return 100;
        if (numeral == 'D') return 500;
        if (numeral == 'M') return 1000;
        return 0;
    }
}
