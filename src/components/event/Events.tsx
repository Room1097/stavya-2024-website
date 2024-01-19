import EventCard from "./cards/card";

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
            title:"Horizon",
            startDate:"2 Feb"
        },

    ]
  return (

    <>
      <div className="h-[35rem] border-red-500 border-2 mt-48 flex gap-x-32 flex-wrap p-8">
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
