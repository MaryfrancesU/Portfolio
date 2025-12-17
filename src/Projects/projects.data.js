import retain from "./images/retain.png";
import ravendesk from "./images/ravendesk.png";
import randomizer from "./images/randomizer.png";
import calculator from "./images/calculator.png";
import studyspot from "./images/studyspot.png";
import gotem from "./images/gotem.png";
import minigames from "./images/minigames.png";
import jlptKanjiTester from "./images/jlpt-kanji-tester.png";

export const learningGroup = {
  title: "Having Fun Studying",
  subtitle:
    "I love learning... and creating apps to help make the process just a little more efficient!",
  projects: [
    {
      title: "Retain",
      imageSrc: retain,
      description:
        "Flashcards are boring... what if we played a matching game instead?",
      techstack: "Ionic",
      available: true,
      link: "https://proj4-655a7.web.app/",
    },
    {
      title: "JLPT Kanji Tester",
      imageSrc: jlptKanjiTester,
      description:
        "I got tired of having to make and grade my own quizzes, so I made an app to do it for me!",
      techstack: "Next JS",
      available: true,
      link: "https://jlpt-kanji-tester.vercel.app/",
    },
    {
      title: "Country Flag Whiz",
      imageSrc: "",
      description:
        "And they say Americans don't care to learn about other countries!",
      techstack: "Vite, React",
      available: false,
      link: "",
    },
    {
      title: "Testlet",
      imageSrc: "",
      description: "My Quizlet dupe with a few more bells and whistles.",
      techstack: "React, Vercel",
      available: false,
      link: "",
    },
  ],
};

export const webDevGroup = {
  title: "Web Dev",
  subtitle: "This is my specialty!",
  projects: [
    {
      title: "RavenDesk",
      imageSrc: ravendesk,
      description:
        "The brain is a fickle mistress, so use the RavenDesk instead! -Edgar Allen Poe (probably)",
      techstack: "PHP",
      available: true,
      link: "https://github.com/MaryfrancesU/RavenDesk",
    },
    {
      title: "Wishlist",
      imageSrc: "",
      description: "Getting all the presents you want has never been easier!",
      techstack: "Azure, React",
      available: false,
      link: "",
    },
    {
      title: "Mini Games",
      imageSrc: minigames,
      description:
        "Featuring classic games like Hangman, Tic Tac Toe, and Unscramble!",
      techstack: "Vite, React",
      available: true,
      link: "https://classic-mini-games.vercel.app/",
    },
    {
      title: "Shopaholic",
      imageSrc: "",
      description: "I decided to try my hand at building a shopping app!",
      techstack: "React, Firebase",
      available: false,
      link: "",
    },
  ],
};

export const mobileDevGroup = {
  title: "Mobile Dev",
  subtitle: "I dabble a little in shrinking the screen size.",
  projects: [
    {
      title: "Randomizer",
      imageSrc: randomizer,
      description:
        "For those days you find yourself indecisive, roll a die... or open this app!",
      techstack: "Android Studio, Java",
      available: true,
      link: "https://github.com/MaryfrancesU/Mini-Mobile-Apps/tree/Randomizer",
    },
    {
      title: "Simple Calculator",
      imageSrc: calculator,
      description:
        "I made this project years ago to help me learn how to use Android Studio.",
      techstack: "Android Studio, Java",
      available: true,
      link: "https://github.com/MaryfrancesU/Mini-Mobile-Apps/tree/SimpleCalculator",
    },
  ],
};

export const groupProjectsGroup = {
  title: "Group Projects",
  subtitle: "Collaboration is my jam!",
  projects: [
    {
      title: "StudySpot",
      imageSrc: studyspot,
      description:
        "Ugh, the library's packed! Good thing you reserved a spot ahead of time!",
      techstack: "Flask Python, Jinja Templates",
      available: true,
      link: "https://github.com/MaryfrancesU/StudySpot",
    },
    {
      title: "Gotem",
      imageSrc: gotem,
      description:
        "Gotem allows users to quickly and efficiently schedule and obtain transportation for hospital and clinical visits.",
      techstack: "React, Firebase",
      available: true,
      link: "https://github.com/soumildatta/gotem",
    },
  ],
};
