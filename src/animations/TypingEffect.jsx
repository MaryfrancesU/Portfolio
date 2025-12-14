import { useEffect, useState } from "react";
import "./TypingEffect.scss";

const words = [
  "web developer",
  "app developer",
  "full-stack developer",
  "software engineer",
];

export default function TypingEffect() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const currentWord = words[wordIndex];

    if (
      wordIndex === words.length - 1 &&
      charIndex === currentWord.length &&
      !isDeleting
    ) {
      return;
    }

    if (!isDeleting) {
      if (charIndex < currentWord.length) {
        timeout = setTimeout(() => {
          setText((prev) => prev + currentWord[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 120);
      } 
      else {
        if (wordIndex < words.length - 1) {
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, 800);
        }
      }
    } 
    else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, 80);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => prev + 1);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <span className="typing-container">
      {text}
      <span className="cursor" />
    </span>
  );
}
