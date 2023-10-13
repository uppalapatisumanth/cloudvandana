package cloudvandana;
public class PangramChecker {
    public static void main(String[] args) {
        String inputSentence = "The quick brown fox jumps over the lazy dog.";
        boolean isPangram = isPangram(inputSentence);
        
        if (isPangram) {
            System.out.println("It's a pangram!");
        } else {
            System.out.println("It's not a pangram.");
        }
    }

    public static boolean isPangram(String sentence) {
        sentence = sentence.toLowerCase();

        for (char letter = 'a'; letter <= 'z'; letter++) {
            if (sentence.indexOf(letter) == -1) {
                return false;
            }
        }
        
        return true;
    }
}
