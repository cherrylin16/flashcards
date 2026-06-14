import { useState } from 'react'
import './App.css'

const App = () => {
  const flashcards = [
    { question: "What does MCP stand for?", 
      answer: "MCP (Model Context Protocol) is an open-source standard for connecting AI applications to external systems.",
      color: "#98C064", // easy
      image: "/mcp.png" 
    }, 
    { question: "What are the 3 main components of MCP architecture?", 
      answer: "Host, Client, Server", 
      color: "#98C064", // easy
      image: "/mcp-arch.png" 
    },
    { question: "What is an MCP Host?", 
      answer: "The AI application that coordinates and manages one or multiple MCP clients.",
      color: "#FFFFC5", // medium 
      image: "/host.jpg"
    },
    { question: "What is an MCP Client?", 
      answer: "A component that maintains a connection to an MCP server and obtains context from an MCP server for the MCP host to use.",
      color: "#98C064", // easy
      image: "/client.png" 
    },
    { question: "What is an MCP Server?", 
      answer: "A program that provides context to MCP clients.",
      color: "#98C064", // easy
      image: "/server.jpg" 
    },
    { question: "What layers does MCP consist of?", 
      answer: "Data layer and transport layer", 
      color: "#FFFFC5", // medium 
      image: "/layers.png" 
    },
    { question: "What are MCP primitives?", 
      answer: "Primitives define what clients and servers can offer each other. These primitives specify the types of contextual information that can be shared with AI applications and the range of actions that can be performed.",
      color: "#FFFFC5", // medium 
      image: "/primitives.png" 
    },
    { question: "What are the three types of MCP primitives?", 
      answer: "Tools, Resources, Prompts",
      color: "#FF6666", // hard 
      image: "/primitives.png" 

    },
    { question: "What are MCP tools?", 
      answer: "Executable functions that AI applications can invoke to perform actions (e.g., file operations, API calls, database queries).",
      color: "#FFFFC5", // medium 
      image: "/tools.png" 
    },
    { question: "What are MCP resources?", 
      answer: "Data sources that provide contextual information to AI applications (e.g., file contents, database records, API responses).",
      color: "#FF6666", // hard
      image: "/resources.png" 
    },
    { question: "What are MCP prompts?", 
      answer: "Reusable templates that help structure interactions with language models (e.g., system prompts, few-shot examples).",
      color: "#FF6666", // hard
      image: "/prompts.png" 
    },
  ];

  function Flashcard() {
    const [currIndex, setCurrIndex] = useState(0);
    const[isFlipped, setIsFlipped] = useState(false);

    function cardFlip() {
    setIsFlipped(prev => !prev);
    }

    function nextCard() {
      setIsFlipped(false);
      const randIndex = Math.floor(Math.random() * flashcards.length);
      setCurrIndex(randIndex);
    }

    const currCard = flashcards[currIndex];

    return (
      <div className="App">
        <h1>Learn About Model Context Protocol!</h1>
        <h2>Need to learn about the foundations of MCP quickly? Use these flashcards to familiarize yourself with Model Context Protocol terms and concepts.</h2>
        <h3>Card Count: 11</h3>

        <div className="flashcard" onClick={cardFlip} style={{ backgroundColor: currCard.color }}>
          <p className="card-text">
            {isFlipped ? currCard.answer : currCard.question}
          </p>

          {isFlipped && (
            <img src={currCard.image} alt="" style={{ width: '180px', height: '150px', objectFit: 'cover', borderRadius: '10px' }}
            />
          )}
        </div>
        <button className="button" onClick={nextCard}>Next → </button>
      </div>
    )
  }

  return (
    Flashcard()
  )
}

export default App
