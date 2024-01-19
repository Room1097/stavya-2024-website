import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface EventCardProps {
  title: string;
  img: string;
  startDate: string;
  endDate?: string;
  registerUrl: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  img,
  startDate,
  endDate,
  registerUrl,
}) => {
  const renderDate = () => {
    if (endDate) {
      return `${startDate} - ${endDate}`;
    } else {
      return `On ${startDate}`;
    }
  };

  const handleRegisterClick = () => {
    // Handle registration logic, e.g., redirect to registerUrl
    window.location.href = registerUrl;
  };

  return (
    <>
      <div className="h-[24rem] w-[17rem] bg-slate-300 rounded-lg flex flex-col items-center p-5">
        <img src={img} className="h-32 w-48 rounded-md" />
        <div className="grid grid-rows-3 items-center justify-center p-3 h-full">
          <div className="flex justify-center">
            <div className="text-black text-2xl font-semibold">{title}</div>
          </div>
          <div className="text-black text-lg flex mt-3 font-semibold">
            <Calendar className="h-6 w-6 mr-3" /> <div>{renderDate()}</div>
          </div>
          <div className="mt-3 flex justify-center">
            <Button variant="secondary" onClick={handleRegisterClick}>
              Register Here !!
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCard;
