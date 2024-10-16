import React, {useContext, useState} from 'react';
import {ReactMic} from 'react-mic';

import { GlobalListContext } from '../GlobalListContext';

function ReactRecorder() {

    const [voice, setVoice] = React.useState(false);
    const [audioLink, setAudioLink] = React.useState(false);

    const {globalList, addToList, removeFromList} = useContext(GlobalListContext);

    const handleAdd = (newItem) => {
        addToList(newItem);
    };

    const onStop = (blob) => {
        console.log(blob);
        setAudioLink(blob.blobURL);
    }

    function startHandle() {
        setVoice(true);
    }
    function stopHandle() {
        setVoice(false);
    }

    function clearHandle() {
        setVoice(false);
        setAudioLink("");
    }

    function nextHandle() {
        setVoice(false);
        handleAdd(audioLink);
        for (let i=0; i<globalList.size; i++) {
            alert(""+globalList[i]); // DO SOMETHIGN WITH THE AUDIO LINK
        }
        setAudioLink("");
    }


    return (
        <div className={'flex flex-col max-w-sm border py-4 px-6t mx-auto bg-white items-center p-2 rounded-2xl'}>
            <h4 className={"text-[18px] font-bold text-gray-700"}>Record</h4>

            <ReactMic className={"w-full mt-4 mb-3"}
                      record={voice}
                      onStop={onStop}
                      mimeType={"audio/wav"}
                      sampleRate={48000}
            />

            <div className={"p-1"}>
                {!voice ?
                    <button onClick={startHandle}
                            className={"text-center rounded-full"}>
                        <img src={"icons/play.png"} alt={"play"} width={"50"} height={"50"}/>
                    </button>
                    :
                    <button onClick={stopHandle}
                            className={"text-center rounded-full"}>
                        <img src={"icons/pause.png"} alt={"pause"} width={"50"} height={"50"}/>
                    </button>
                }

            </div>
            <div className={"mt-0"}>
                {audioLink ? <audio controls src={audioLink} className={"mt-6"}/>
                    :
                    <audio controls src={""} className={"mt-6 disabled:true"}/>}
            </div>
            <div className={"p-3 space-x-1"}>
                {audioLink ? <button onClick={clearHandle}
                                     className={"bg-red-600 px-5 py-2.5 text-center rounded-full"}>Clear</button> :
                    <button onClick={clearHandle}
                            className={"bg-red-300 px-5 py-2.5 text-center rounded-full disabled:true"}>Clear</button>}
                {audioLink ? <button onClick={nextHandle}
                                     className={"bg-green-700 px-5 py-2.5 text-center rounded-full"}>Next</button> :
                    <button onClick={nextHandle}
                            className={"bg-green-300 px-5 py-2.5 text-center rounded-full disabled:true"}>Next</button>}
            </div>
        </div>
    )
};

/*    // Testing code to see global list filling
            <ul className={"bg-gray-600"}>
                {globalList.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => removeFromList(index)}>Remove</button>
                    </li>
                ))}
            </ul>
*/

export default ReactRecorder