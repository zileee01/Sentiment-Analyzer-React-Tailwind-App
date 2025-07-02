import { useEffect, useState } from "react";

function EmotionBar({ sentiment }) {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (sentiment) {
      // Slight delay to trigger animation
      setTimeout(() => {
        setShowAnimation(true);
      }, 100); // Feel free to adjust this
    } else {
      setShowAnimation(false); // Reset if sentiment is cleared
    }
  }, [sentiment]);

  let color = "bg-gray-300";

  if (sentiment === "positive") color = "bg-green";
  else if (sentiment === "neutral") color = "bg-yellow";
  else if (sentiment === "negative") color = "bg-red";

  return (
    <div className="w-full max-w-xl h-6 rounded-full overflow-hidden transition-all duration-700">
      {sentiment ? (
        <div
          className={` h-full transform origin-left ${color} transition-transform duration-700 ease-out ${
            showAnimation ? "scale-x-100" : "scale-x-0"
          }`}
        ></div>
      ) : (
        <div className="flex w-full h-full space-x-1">
          <div className="flex-1 h-full bg-red"></div>
          <div className="flex-1 h-full bg-yellow"></div>
          <div className="flex-1 h-full bg-green"></div>
        </div>
      )}
    </div>
  );
}

export default EmotionBar;
