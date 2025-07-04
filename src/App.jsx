import EmotionBar from "./components/EmotionBar";
import TextInput from "./components/textInput";
import { useState } from "react";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(false);
  const [sentiment, setSentiment] = useState(null);
  const [inputText, setInputText] = useState("");

  const handleAnalyse = async () => {
    if (!inputText.trim()) return;

    setLoading(true);
    setSentiment(null);

    try {
      const response = await axios.post("http://localhost:8000/analyse", {
        text: inputText,
      });

      const result = response.data.sentiment?.toLowerCase(); // safe & normalized
      setSentiment(result);
    } catch (error) {
      console.error("Error analyzing sentiment:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center px-4">
      {/* Header with icons and title */}
      <div className="grid grid-cols-3 items-center w-full max-w-xl mb-8">
        <div className="flex justify-center">
          <img src="/finally.svg" alt="Happy" className="w-40 h-40" />
        </div>

        <h1 className="text-center text-3xl sm:text-4xl font-bold text-forest">
          Sentiment Analyzer
        </h1>

        <div className="flex justify-center">
          <img src="/Mad.svg" alt="Confused" className="w-32 h-32" />
        </div>
      </div>

      {/* Animated Sentiment Bar */}
      <EmotionBar sentiment={sentiment} />

      {/* Textarea Input */}
      <div className="my-8 w-full max-w-xl">
        <TextInput value={inputText} onChange={setInputText} />
      </div>

      {/* Analyze Button */}
      <button
        onClick={handleAnalyse}
        disabled={loading}
        className="bg-forest text-cream font-bold px-6 py-2 rounded-full hover:bg-green transition disabled:opacity-50"
      >
        {loading ? "Analyzing..." : "Check Sentiment"}
      </button>

      {/* Result Display */}
      {!loading && sentiment && (
        <p
          className={`mt-4 text-xl font-bold ${
            sentiment === "positive"
              ? "text-green-600"
              : sentiment === "negative"
              ? "text-red-600"
              : "text-yellow-600"
          }`}
        >
          Sentiment: {sentiment.charAt(0).toUpperCase() + sentiment.slice(1)}
        </p>
      )}
    </div>
  );
}

export default App;
