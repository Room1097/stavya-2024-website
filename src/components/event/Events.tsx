import EventCard from "./cards/card";
import { Separator } from "../ui/separator";

const Events = () => {
    const data = [
        {
            img:"https://www.freecodecamp.org/news/content/images/2021/08/imgTag.png",
            registerUrl:"https://www.google.com",
            title:"Stavya",
            startDate:"26 Jan",
            endDate:"30 Jan",
        },
        {
            img:"https://www.freecodecamp.org/news/content/images/2021/08/imgTag.png",
            registerUrl:"https://www.google.com",
            title:"Stavya",
            startDate:"26 Jan",
            endDate:"30 Jan",
        },
        {
            img:"https://www.freecodecamp.org/news/content/images/2021/08/imgTag.png",
            registerUrl:"https://www.google.com",
            title:"Stavya",
            startDate:"26 Jan",
            endDate:"30 Jan",
        },
        {
            img:"https://www.freecodecamp.org/news/content/images/2021/08/imgTag.png",
            registerUrl:"https://www.google.com",
            title:"Stavya",
            startDate:"26 Jan",
            endDate:"30 Jan",
        },
        {
            img:"https://www.freecodecamp.org/news/content/images/2021/08/imgTag.png",
            registerUrl:"https://www.google.com",
            title:"Stavya",
            startDate:"26 Jan",
            endDate:"30 Jan",
        },
        {
            img:"https://www.freecodecamp.org/news/content/images/2021/08/imgTag.png",
            registerUrl:"https://www.google.com",
            title:"Stavya",
            startDate:"26 Jan",
            endDate:"30 Jan",
        },
        {
            img:"https://www.freecodecamp.org/news/content/images/2021/08/imgTag.png",
            registerUrl:"https://www.google.com",
            title:"Horizon",
            startDate:"2 Feb"
        },

    ]
  return (

    <>
      <div className="w-full flex justify-center items-center text-white font-mono h-24 text-4xl">
        Events for Stavya 2K24

      </div>
      <Separator
      className="w-[80vw] m-auto"
      />
      <div className="h-[35rem] mt-48 flex gap-x-16 gap-y-14 flex-wrap p-12 justify-around">

      {
            data.map((item,index)=>(
                <EventCard img={item.img} registerUrl={item.registerUrl} startDate={item.startDate} endDate={item.endDate} title={item.title}/>
            ))
            }
      </div>
    </>
  );
};

export default Events;
