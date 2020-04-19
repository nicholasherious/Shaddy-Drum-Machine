import React, { useRef } from 'react'

function DrumPad({ item, displayTextHandler }) {
    const audioRef = useRef(null)

  const playAudio = () => {
    const audioElm = audioRef.current;
    displayTextHandler(item.id);
      audioElm.currentTime = 0
      audioElm.play()
      
  }



    return (
        <div className="p-1">
        <audio src={item.url} ref={audioRef} /> 
        <div className="drum-button col p-5 rounded" onClick={playAudio} style={{ width: '110px' }}>{item.keyTrigger}</div>
        </div>
    )
}

export default DrumPad
