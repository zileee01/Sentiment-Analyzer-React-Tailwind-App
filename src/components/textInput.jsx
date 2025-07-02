function TextInput({value, onChange}) {
    return(
        <textarea
        placeholder="Enter a sentence..."
        rows={4}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-4 bg-sand text-gray-800 rounded-xl  border-none focus:outline-none focus:ring-2 focus:ring-green resize-none h-32 "
        ></textarea>
    );
}

export default TextInput; 