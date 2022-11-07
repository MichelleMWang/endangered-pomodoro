import React, { useEffect } from "react";

type timeProp = {
    timeProp: number 
}
const Timer = (props: timeProp) => {
    const [ minutes, setMinutes ] = React.useState(25)
    const [ secondsLeft, setSecondsLeft ] = React.useState( 25 * 60 )

    const { timeProp } = props
    const [ timer, setTimer ] = React.useState()
    const start = () => {
        const timer = setInterval(() => {
          setSecondsLeft((secondsLeft) => secondsLeft - 1);
          if (secondsLeft === 0) {
            clearInterval(timer);
          }
        }, 1000);
        setTimer(timer);
      };
      useEffect(() => {
        if (secondsLeft === 0) {
          clearInterval(timer);
        }
      }, [secondsLeft, timer]);
      useEffect(() => {
        return () => clearInterval(timer);
      }, [timer]);

    return (
        <div className="p-10 flex items-center justify-center flex-col">
            <div className="p-10 text-9xl ">
                {secondsLeft}
            </div>
            <button className="bg-white p-2 pl-8 pr-8 text-3xl rounded-full"onClick={start}>
                Start 
            </button>
        </div>
    ); 
}
export default Timer 