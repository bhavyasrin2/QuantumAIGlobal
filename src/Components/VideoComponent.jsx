import React,{useState, useRef} from 'react'

export default function VideoComponent(props) {
    const [toggle, setToggle] = useState(false);
    const videoRef = useRef(null);
    const MouseEnterVideo=()=>{
        if(videoRef.current){
          videoRef.current.play();
          
        }
         
       }
    const handleToggle = () => {
        setToggle(!toggle);
      };
  return (
    <div className={`w-full h-[25rem] md:h-[35rem] flex items-center  videoBackground justify-center py-3 my-6  `} onMouseEnter={MouseEnterVideo}>
          <video ref={videoRef} controls autoPlay={toggle} muted className="w-full h-[20rem] md:w-[60rem] md:h-[30rem] object-contain" poster={props.image} onClick={handleToggle}>
            <source src={props.video} type="video/mp4" />

          </video>
        </div>
  )
}
