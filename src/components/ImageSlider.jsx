import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageSlider = ({ ImageUrls }) => {
  const [ImageIndex, setImageIndex] = useState(0);
  let [intervalId, setIntervalId] = useState(null);
  useEffect(() => {
   setIntervalId(setInterval(() => {
    setImageIndex(index => index === ImageUrls.length - 1 ? 0 : index + 1)
    }, 5000)
    )
    return () => clearInterval(intervalId)
  }, []);
  const showPrevImage = () => {
    setIntervalId(null)
    clearInterval(intervalId)
    setImageIndex(index => {
      return index === 0 ? ImageUrls.length - 1 : index - 1
    })
  }
  
  const showNextImage = () => {
    setIntervalId(null)
    clearInterval(intervalId)
    setImageIndex(index => {
      return index === ImageUrls.length - 1 ? 0 : index + 1
    })
  }
  
  
  return (
    <>
    <div className="w-[100%] h-[100%] rounded-lg border border-black relative">
    {/*ImageUrls.map((img) => 
    <>
      <img src={img} alt={""}/>
    </>
    )}*/}
    <img className="w-[100%] h-[100%] object-cover" src={ ImageUrls[ImageIndex] }
     alt={""} />
    <button className="absolute top-0 bottom-0 left-0
    hover:bg-black hover:opacity-25 z-1 transition-opacity
    duration-300" onClick={() => showPrevImage() }>
    <ChevronLeft className="h-10 w-10 text-white" />
    </button>
    <button className="absolute top-0 bottom-0 right-0 hover:bg-black z-1
    hover:opacity-25 transition-opacity duration-300" onClick={ () =>
    showNextImage() }>
    <ChevronRight className = "h-10 w-10 text-white" />
    </button>
    
     <div className="z-[999] flex gap-4 border justify-center mt-3
     nav-btns">
        {ImageUrls.map((_, index) => {
           return (
                <button className={`h-50 w-50 bg-transparent z-[999] rounded-full
                ${index === ImageIndex ? 'active' : ''} p-2`}
                key={index}> <span className="block h-50 w-50 rounded-full
                bg-black p-2"></span>
                 </button>
                 )
        })
    }
     </div>
  </div>
  </>
  )
}

export default ImageSlider;