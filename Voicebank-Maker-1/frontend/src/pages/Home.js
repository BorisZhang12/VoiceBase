import img from "../images/note.png";
import React from "react";



function Home(){
    return (
        <div
            className="flex flex-col justify-center items-center h-screen w-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white p-8">
            <h1 className="text-center text-4xl font-extrabold mb-4 animate-fade-in">
                Welcome to VoiceBase!
            </h1>
            <p className="text-center text-xl mb-6">
                An online web application made to streamline the voicebank creation process!<br/>
                VoiceBase is meat to help you easily create a voicebank to be further used for music production!<br/>
                To start, head to the "Record" tab to begin recording some samples!
            </p>
            <img src={img} alt="note"
                 className="w-32 h-32 rounded-full shadow-lg transform hover:scale-110 transition duration-500 ease-in-out mb-6"/>
            <p className="text-center text-xl mb-6">
                Made by Alan Wu, Andrew Yan, Leo Zhang, Boris Zhang for HelloHacks 2024
            </p>
        </div>
    )
};

export default Home;



