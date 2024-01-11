import car1 from "./Images/car-1.jpg"
import car2 from "./Images/car-2.jpg"
import car3 from "./Images/car-3.jpg"
import car4 from "./Images/car-4.jpg"
import car5 from "./Images/car-5.jpg"
import ImageSlider from "../src/components/ImageSlider.jsx";
const App = () => {
  const ImageUrls = [car1, car2, car3, car4, car5];
  
  return (
    <>
    <div className="mx-auto max-w-[900px] h-[600px] rounded-lg shadow-lg mt-20
    p-8 pb-16 bg-gray-200">
    <ImageSlider ImageUrls={ImageUrls} />
    </div>
    </>
  )
}

export default App;