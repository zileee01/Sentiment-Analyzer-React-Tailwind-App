import EmotionBar from "./components/EmotionBar";
import TextInput from "./components/textInput";
import {  useState } from "react";

function App() {

  const [loading, setLoading] = useState(false); 
  const[sentiment, setSentiment ] = useState(null); 
  const [inputText, setInputText] = useState(''); 

  const handleAnalyse = () => {
    setLoading(true); 
    setSentiment(null); // to reset old result

    setTimeout(() => {
      const fakeSentiments = ["positive", "negative", "neutral"]; 
      const random = fakeSentiments[Math.floor(Math.random()* fakeSentiments.length)]; 

      setSentiment(random); 
      setLoading(false); 
    }, 1500)

  }


  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center px-4">
      <div className="grid grid-cols-3 items-center w-full max-w-xl mb-8">
        <div className="flex justify-center">
          <img src="/finally.svg" alt="Happy" className="w-40 h-40" />
        </div>

        <h1 className="text-center text-3xl sm:text-4xl font-bold text-forest ">
          Sentiment Analyzer
        </h1>

        <div className="flex justify-center">
          <img src="/Mad.svg" alt="Confused" className="w-32 h-32" />
        </div>
      </div>

      <EmotionBar sentiment={sentiment} />

      <div className="my-8 w-full max-w-xl">
        <TextInput value={inputText} onChange={setInputText} />
      </div>

      <button 
      onClick={handleAnalyse}
      className="bg-forest text-cream font-bold px-6 py-2 rounded-full hover:bg-green transition">
        Check Sentiment
      </button>

      {loading && <p className="mt-4 text-forest font-medium">Analyzing...</p>}

      {!loading && sentiment && (
  <p className={`mt-4 text-xl font-bold ${
    sentiment === "positive"
      ? "text-green-600"
      : sentiment === "negative"
      ? "text-red-600"
      : "text-yellow-600"
  }`}>
    Sentiment: {sentiment.charAt(0).toUpperCase() + sentiment.slice(1)} 
  </p>
)}


    </div>
  );
}

export default App;
