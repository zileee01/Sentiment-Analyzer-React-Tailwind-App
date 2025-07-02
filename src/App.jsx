import EmotionBar from "./components/EmotionBar";
import TextInput from "./components/textInput";

function App() {
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

      <EmotionBar />

      <div className="my-8 w-full max-w-xl">
        <TextInput />
      </div>

      <button className="bg-forest text-cream font-bold px-6 py-2 rounded-full hover:bg-green transition">
        Check Sentiment
      </button>
    </div>
  );
}

export default App;
