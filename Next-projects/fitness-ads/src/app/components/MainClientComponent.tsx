'use client'

import { useState } from "react";
import { ITariff } from "../types/types";
import Image from "next/image";

interface MainProps {
    tariffs: ITariff[];
    isExpired: boolean;
}

export default function MainClientComponent({ tariffs, isExpired }: MainProps) {

    // 1. Находим Хит
    const bestTariff = tariffs.find(t => t.is_best);
    
    // 2. Берем остальные и сортируем их по цене (от большего к меньшему), 
    // чтобы порядок был: 3 месяца -> 1 месяц -> 1 неделя
    const otherTariffs = tariffs
        .filter(t => !t.is_best)
        .sort((a, b) => b.price - a.price);

    const [isCheckboxMark, setIsCheckBoxMark] = useState(false);
    const [isError, setIsError] = useState(false);
    const [selectedCard, setSelectedCard] = useState<string>('Навсегда');

    const handleBuy = () => {
        if (!isCheckboxMark) {
            setIsError(true);
            return;
        }
        console.log(`Куплен тариф: ${selectedCard}`);
        alert(`Тариф "${selectedCard}" успешно оформлен!`);
    }

    // Функция для расчета скидки: (1 - 149/999) * 100 = 85%
    const getDiscount = (price: number, fullPrice: number) => {
        return Math.round((1 - price / fullPrice) * 100);
    }

    return (
        <main className="max-w-7xl mx-auto p-4 md:p-8 text-white font-sans">
            
            {/* Заголовок */}
            <div className="w-full text-center py-6 md:py-10">
                <h1 className="text-2xl md:text-4xl font-extrabold uppercase leading-tight">
                    Выберите подходящий для себя <span className="text-[#FF9B02]">тариф</span>
                </h1>
            </div>        

            <div className="flex flex-col md:flex-row gap-10 items-start justify-center">

                {/* Картинка */}
                <div className="w-full md:w-1/3 flex justify-center md:sticky md:top-32">
                    <Image 
                        width={400} 
                        height={600} 
                        src='/man.png' 
                        alt="Атлет" 
                        className="object-contain max-h-320 drop-shadow-2xl"
                        priority
                    />
                </div>

                {/*  Карточки тарифов  */}
                <div className="w-full md:w-2/3 flex flex-col gap-6">
                    
                    {/* ХИТ (Большая плашка) */}
                    {bestTariff && (
                        <div 
                            onClick={() => setSelectedCard(bestTariff.period)}
                            className={`relative p-8 rounded-4xl border-4 cursor-pointer transition-all duration-300 hover:scale-[1.01] bg-[#2D2D30]
                            ${selectedCard === bestTariff.period 
                                ? 'border-[#FF9B02] shadow-[0_0_25px_rgba(255,155,2,0.2)]' 
                                : 'border-gray-600 opacity-90'}`}
                            >
                            {
                                !isExpired && (
                                <div className="absolute -top-5 left-8 bg-[#FF4D4D] text-white text-sm font-black px-4 py-1.5 rounded-xl shadow-lg">
                                    -{getDiscount(bestTariff.price, bestTariff.full_price)}%
                                </div>
                            )}

                            <div className="absolute top-5 right-8 text-[#FF9B02] text-sm font-black uppercase tracking-tighter">
                                хит!
                            </div>
                                
                            {/* Левая часть ХИТ карточки */}
                            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4 mt-2">
                                
                                {/* : Заголовок + Цена */}
                                <div className="flex flex-col">
                                    <h2 className="text-2xl font-bold uppercase mb-4 tracking-tight">
                                        {bestTariff.period}
                                    </h2>

                                    <div className="flex flex-col">
                                        <p className="text-6xl font-black text-[#FF9B02] leading-none mb-2">
                                            {isExpired ? bestTariff.full_price : bestTariff.price} ₽
                                        </p>

                                        {!isExpired && (
                                            <p className="text-gray-500 line-through text-2xl font-bold ml-1">
                                                {bestTariff.full_price} ₽
                                            </p>
                                        )}
                                    </div>
                                </div>
                                    
                                {/* Правая часть ХИТ карточки, описание */}
                                <div className="w-1/2 max-w-70">
                                    <p className="text-sm md:text-base text-gray-300 leading-relaxed font-medium">
                                        {bestTariff.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Сетка обычных карточек (сортировка по цене) */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                        {otherTariffs.map((item, index) => (
                            <div    
                                key={`${item.id}-${index}`} 
                                onClick={() => setSelectedCard(item.period)}
                                className={`relative p-5 pt-8 rounded-3xl border-2 cursor-pointer flex flex-col w-full transition-all 
                                ${selectedCard === item.period ? 'border-[#FF9B02]' : 'border-gray-700'}`}
                            >
                                {
                                !isExpired && (
                                    <div className="absolute -top-5 left-8 bg-[#FF4D4D] text-white text-sm font-black px-4 py-1.5 rounded-xl shadow-lg">
                                        -{getDiscount(item.price, item.full_price)}%
                                    </div>
                                )}

                                <div className="text-center">
                                    <h2 className="text-lg font-bold uppercase mb-2">{item.period}</h2>
                                    <p className="text-3xl font-black text-white">
                                        {isExpired ? item.full_price : item.price} ₽
                                    </p>
                                    {!isExpired && (
                                        <p className="text-gray-500 line-through text-sm font-medium">{item.full_price} ₽</p>
                                    )}
                                </div>
                                
                                <p className="text-[10px] text-gray-400 text-center leading-tight mt-auto pt-4">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Текст ВНИМАНИЕ */}
                    <div className="flex items-start gap-4 p-4 bg-[#2D2D30] rounded-xl border border-gray-700/50 w-auto">
                        <span className="text-[#FF9B02] text-2xl font-bold">!</span>
                        <p className="text-[16px] text-gray-300 leading-snug pt-1 max-m-[375px]">
                            Следуя плану на 3 месяца и более, 
                            люди получают в 2 раза лучший результат, чем за 1 месяц.
                        </p>
                    </div>

                    {/* Чекбокс и кнопка покупки */}
                    <div className="flex flex-col gap-5 mt-4 items-center">
                        <label className="flex items-center gap-3 cursor-pointer group select-none transition-opacity hover:opacity-80">
                            <div className="relative">
                                <input 
                                    type="checkbox"
                                    className="peer sr-only"
                                    checked={isCheckboxMark}
                                    onChange={() => {
                                        setIsCheckBoxMark(!isCheckboxMark);
                                        setIsError(false);
                                    }} 
                                />
                                <div className={`w-6 h-6 border-2 rounded transition-colors flex items-center justify-center
                                    ${isCheckboxMark ? 'bg-[#FF9B02] border-[#FF9B02]' : 'bg-transparent border-gray-500'}`}>
                                    {isCheckboxMark && (
                                        <svg 
                                            className="w-4 h-4 text-black" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            strokeWidth="3" 
                                            viewBox="0 0 24 24"
                                        >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    )}
                                </div>
                            </div>
                            <span 
                                className={`${isError 
                                    ? 'text-red animate-puls text-decoration-line: underline' 
                                    : 'text-gray-400 text-xs sm:text-sm '
                                }`}>
                                Я согласен с офертой рекуррентных платежей и Политикой конфиденциальности 
                            </span>
                        </label>  

                        <button 
                            onClick={handleBuy}
                            className={`w-full sm:w-2/3 py-4 rounded-full font-extrabold text-lg uppercase tracking-wide transition-all transform active:scale-95
                            ${isError 
                                ? 'bg-[#FF4D4D] text-white animate-[shake_0.5s_ease-in-out]' 
                                : 'bg-[#FF9B02] text-black hover:bg-[#ffb03b] shadow-[0_0_20px_rgnba(255,155,2,0.3)] animate-pulse'
                            }`}
                        >
                            Купить
                        </button>

                        <p className="text-[16px] text-gray-600 ">
                            Нажимая кнопку «Купить», Пользователь соглашается на разовое списание денежных
                            средств для получения пожизненного доступа к приложению.
                            Пользователь соглашается, что данные кредитной/дебетовой 
                            карты будут сохранены для осуществления покупок дополнительных услуг сервиса в случае желания пользователя.
                        </p>
                    </div>

                </div>
            </div>
        </main>
    )
}