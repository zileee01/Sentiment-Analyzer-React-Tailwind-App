function EmotionBar() {
    return(
        <div className="flex space-x-1 w-full max-w-xl rounded-full overflow-hidden">
            <div className="flex-1 h-6 bg-red"></div>
            <div className="flex-1 h-6 bg-orange"></div>
            <div className="flex-1 h-6 bg-yellow"></div>
            <div className="flex-1 h-6 bg-green"></div>
        </div>
    ); 
}

export default EmotionBar; 