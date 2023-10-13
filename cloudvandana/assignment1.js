function reverseWords(sentence) {
    const words = sentence.split(" ");
  
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].split('').reverse().join(''); 
    }
    const reversedSentence = words.join(" ");
    return reversedSentence;
  }
  const inputSentence = "This is a sunny day";
  const reversedSentence = reverseWords(inputSentence);
  console.log(reversedSentence);  