
import React, { useRef, useEffect, useState } from "react";
import { CalendarDays, MapPin } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TimeLineCard from "../timeline/TimelineCard";
import "./Landing.css";

gsap.registerPlugin(ScrollTrigger);

const days = [1, 2, 3, 4, 5, 6, 7, 8];

const Landing: React.FC = () => {
  const tlRef = useRef<HTMLDivElement>(null);

  const [render, isRender] = useState(false);

  useEffect(() => {
    const cards = Array.from(tlRef.current?.children || []);

    gsap.fromTo('.text-box-item', {
      opacity: 0,
      y: -50,
    }, {
      delay: 0.5,
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.5, 
    }); 
    
    if (window.innerWidth > 768) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          ease: "expo",
          duration: 2.5,
          scrollTrigger: {
            trigger: tlRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1,
          },
        }
      );

      cards.forEach((card: Element, index) => {
        gsap.fromTo(
          card,
          { x: index % 2 === 0 ? "100%" : "-100%" },
          {
            x: "0%",
            ease: "power3.out",
            duration: 1.5,
            scrollTrigger: {
              trigger: card,
              start: "top 100%", 
              end: "bottom 0%",
              scrub: 1,
            },
            stagger: 1,
          }
        );
      });
    } else {
        if(cards.length > 0){
          cards.forEach((card: Element) => {
            gsap.fromTo(
              card,
              { opacity: 0, y: 50 },
              {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                  trigger: card,
                  start: "top 100%",
                  end: "bottom 0%",
                  scrub: 1,
                },
              }
            );
          });
        }
    }
  }, []);


  const newLocal = <h3 className="uppercase flex gap-2 text-box-item">
      Event Ground
    <MapPin />
  </h3>;
  return (
    <div>
      <div className="main-image lg:h-[100vh] h-[65vh] home-container text-white">
        <div className="overlay absolute top-0 right-0 bottom-0 left-0 w-full h-full">

        </div>
        <div className="flex flex-col justify-center items-center lg:pt-[5vh] pt-[8vh] lg:gap-[0px] gap-[10px] text-box-landing">
          <div className="uppercase font-Undev flex gap-[0px] text-box-item">
            <span className="lg:text-[10rem] text-5xl ">stavya</span>
            <span className="lg:text-[10rem] text-5xl ">2024</span>
          </div>
          <div className="uppercase lg:text-4xl font-NetHouse flex gap-[20px] text-box-item">
            <span className="lg:text-5xl text-xl">Retro </span>
            <span className="lg:text-5xl text-xl">Rythms</span>
            <span className="lg:text-5xl text-xl">Revisited</span>
          </div>
          <div>
            {newLocal}
          </div>
        </div>
      </div>

      <div className="part-2 pb-10 bg-amber-600 ">
        <div className="flex flex-col lg:gap-[20px] justify-center items-center pt-[6vh]">
          <h1 className="lg:text-3xl uppercase font-bold">about the event</h1>
          <p className="lg:w-[40vw] w-[60vw] text-center pb-10 lg:pb-2">
          Stavya, the annual literature and cultural fest at IIITV ICD, encapsulates the dynamic spirit of student creativity. A fusion of artistic expression and intellectual pursuits, the event features diverse cultural performances, engaging literary activities, and captivating art exhibitions. Stavya isn't just a celebration; it's a platform for students to explore their talents through competitions, workshops, and outreach initiatives. From traditional dances to contemporary debates, the fest embraces inclusivity, connecting with the broader community. Stavya not only provides a break from the technical routine but also fosters a sense of community, leaving a lasting impact on the cultural fabric of IIITV ICD.
          </p>
        </div>
      </div>

      <div className="timeline-super-div">
        <div className="flex flex-col justify-center items-center pb-10 timeline-pattern">
          <div>
            <h1 className="lg:text-4xl text-2xl my-[20px] font-Rialto">
              Event Timeline
            </h1>
          </div>

          <div className="timeline-container" ref={tlRef}>
            {days.map((day) => (
              <div
                key={day}
                className="timeline-wrapper my-[2rem] flex flex-col lg:flex-row gap-[10vw]"
              >
                <div className="time-line-item-main lg:w-[50%]">
                  <TimeLineCard day={day} />
                </div>
                <div className="lg:flex justify-center items-center lg:w-[50%] hidden">
                  <h1 className="lg:text-5xl text-xl font-bold day-text lg:block hidden">
                    {" "}
                    Day {day}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
