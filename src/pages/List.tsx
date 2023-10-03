// import { api } from "~/utils/api";
import React, { useEffect, useRef } from 'react';
import Card from "./Card";

interface ListProps {
    heading: string;
}

export default function List({heading}: ListProps) {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const list = listRef.current;

    if (!list) return;

    let startTouchX = 0;

    const handleTouchStart: EventListener = (e) => {
      const event = e as TouchEvent;
      if (event.touches && event.touches.length > 0) {
        startTouchX = event.touches[0]!.clientX;
      }
    };

    const handleTouchMove: EventListener = (e) => {
      const event = e as TouchEvent;
      if (event.touches && event.touches.length > 0) {
        const deltaX = event.touches[0]!.clientX - startTouchX;
        
        if (Math.abs(deltaX) > 25) { //threshold
          e.preventDefault();
          window.requestAnimationFrame(() => {
            const mainElement = document.querySelector('main');
            if (mainElement)
              mainElement.scrollLeft -= deltaX*0.2;
          });
        }
      }
    };

    list.addEventListener('touchstart', handleTouchStart);
    list.addEventListener('touchmove', handleTouchMove);

    return () => {
      list.removeEventListener('touchstart', handleTouchStart);
      list.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col min-w-xl max-w-xl bg-charcoal-600 py-2 text-white flex-none basis-[32%]">
        <h3 className="h-16 text-2xl font-bold tracking-wider text-center">{heading}</h3>
        <div ref={listRef} className="bg-charcoal-500 p-5 overflow-y-auto overscroll-contain">
            <Card
                key="12"
                name="DW Corp LTDA" 
                tags={["Corp", "Work"]}
                text="We have a list of places to do just that." />
            <Card 
                key="11"
                name="Learning tasks of DW Corp LTDA" 
                tags={["DW Corp", "Learning"]}
                text="Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that." 
            />
            <Card 
                key="14"
                name="Learning tasks of DW Corp LTDA" 
                tags={["DW Corp", "Learning"]}
                text="Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that." 
            />
        </div>
      </div>
      {/* <p className="text-2xl text-white">
            {hello.data ? hello.data.greeting : "Loading tRPC query..."}
          </p> */}
    </>
  );
}
