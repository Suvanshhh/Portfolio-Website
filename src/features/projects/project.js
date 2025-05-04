import dictionary from "../../assets/images/dictionary.jpg";
import rest from "../../assets/images/rest.jpg";
import vscode from "../../assets/images/vscode.jpg";
import pizza from "../../assets/images/pizzapic.jpg";
export const project = [
  {
    title: "Vartalaap.AI | Bizowl Chatbot",
    description:
      "Developed an NLP solution for the IIT KGP NLP Challenge, incorporating text preprocessing, sentiment analysis, topic modeling, and chatbot functionality. Designed a custom NLP pipeline leveraging Transformers, achieving 92% accuracy in sentiment analysis tasks and also Implemented it on a startups website Bizowl.",
    image: vscode,
    tags: ["NLP", "transformers", "MERN","flask"],
    sourceCode: "https://github.com/Suvanshhh/bizowlchatbot",
    demo: "https://vartalaap-ai-frontend.vercel.app/",
  },
  {
    title: "MeasureMate-AI Body Measurement System",
    description:
      " MeasureMate utilizes pose estimation, OpenCV (Computer Vision), and an anthropometric approach to predict shirt and pant sizes along with 5 body measurements.",
    image: pizza,
    tags: ["react", "anthropometry", "nodejs"],
    sourceCode: "https://github.com/Suvanshhh/measuremate-backend",
    demo: "https://measure-mate-eight.vercel.app/",
  },
  {
    title: "Custom Multiplayer Chess Game",
    description:
      "– Developed a real-time multiplayer chess application using Node.js, Express, Socket.io, and Chess.js, enabling seamless gameplay with dynamic role assignment and state synchronization. Built an interactive and responsive chessboard UI with drag-and-drop functionality, real-time updates, and distinct views for players and spectators.",
    image: rest,
    tags: ["react", "nodejs", "expressjs","socket.io","chess.js","context-api"],
    sourceCode: "https://github.com/Suvanshhh/Custom-Multiplayer-Chess-Game",
    demo: "https://custom-multiplayer-chess-game-production.up.railway.app/",
  },
  // {
  //   title: "Dictionary App",
  //   description:
  //     "A Dictionary app that lets you search words in and bookmark them for future reference.",
  //   image: dictionary,
  //   tags: ["react", "axios", "material-ui"],
  //   sourceCode: "https://github.com/manavss/dictionary",
  //   demo: "https://mydictionarysearch.netlify.app/",
  // },
];
