'use client';
import { useState, useEffect } from "react";

interface HeaderPageProps {
  onTimeUp: () => void;
}

export default function HeaderClientComponent({ onTimeUp }: HeaderPageProps) {

  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Логика памяти
    const savedEndTime = localStorage.getItem("timer_end");
    let endTime: number;

    if (savedEndTime) {
      endTime = parseInt(savedEndTime);
    } else {
      // Если это первый заход - ставим 2 минуты
      endTime = Date.now() + 120 * 1000;
      localStorage.setItem("timer_end", endTime.toString());
    }

    const now = Date.now();
    const immediateRemaining = Math.round((endTime - now) / 1000);

    if (immediateRemaining <= 0) {
        // Если время вышло - ставим 0 и меняем цены
        setTimeLeft(0);
        onTimeUp(); 
        setIsMounted(true);
        return; 
    }

    // Если время есть - ставим его текущее значение (чтобы не было 02:00)
    setTimeLeft(immediateRemaining);
    setIsMounted(true); 

    const interval = setInterval(() => {
      const currentNow = Date.now();
      const remaining = Math.round((endTime - currentNow) / 1000);

      if (remaining <= 0) {
        setTimeLeft(0);
        onTimeUp();
        clearInterval(interval);
      } else {
        setTimeLeft(remaining);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [onTimeUp]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formatTime = (val: number) => String(val).padStart(2, '0');

  // Если время вышло (или меньше 0), показываем нули
  const displayMinutes = timeLeft <= 0 ? "00" : formatTime(minutes);
  const displaySeconds = timeLeft <= 0 ? "00" : formatTime(seconds);

  return (
    <header className="sticky top-0 z-50 bg-[#01352C] p-4 text-center text-white shadow-lg">
      <div className="flex flex-col items-center justify-center">
        <p className="text-xs md:text-sm uppercase tracking-widest opacity-90 font-medium mb-1">
          Успейте открыть пробную неделю
        </p>
        
        {isMounted ? (
          <div className="flex items-center gap-3">
             <span className={`text-xl ${timeLeft < 30 ? 'text-[#FF4D4D] animate-pulse' : 'text-[#FF9B02]'}`}>✦</span>
             <h1 className={`text-3xl font-bold font-mono tracking-widest ${timeLeft < 30 ? 'text-[#FF4D4D] animate-pulse' : 'text-[#FF9B02]'}`}>
               {displayMinutes}:{displaySeconds}
             </h1>
             <span className={`text-xl ${timeLeft < 30 ? 'text-[#FF4D4D] animate-pulse' : 'text-[#FF9B02]'}`}>✦</span>
          </div>
        ) : (
          <div className="h-9 w-32 bg-[#024d40] rounded animate-pulse" />
        )}
      </div>
    </header>
  );
}``