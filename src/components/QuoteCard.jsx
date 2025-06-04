import React from 'react';
import defaultUnionSvg from '../../assets/images/union.svg';
import defaultTrueWisdomSvg from '../../assets/images/truewisdom.svg';

const QuoteCard = ({
                       bgColor = 'bg-[rgba(251,241,197,1.00)]',
                       borderColor = 'border-[#e68504ff]',
                       gradientClasses = '',
                       textColor = 'text-[rgba(100,59,3,1.00)]',
                       text,
                       logoUnionSvg = defaultUnionSvg,
                       logoTrueWisdomSvg = defaultTrueWisdomSvg,
                       className = '',
                       textStyle = {}
                   }) => {
    return (
        <div className={`relative overflow-hidden h-[460px] w-[298.08px] rounded-[22.08px] ${bgColor} ${className}`}>
            <div
                className={`absolute overflow-hidden h-[373.52px] w-[257.60px] left-1/2 top-[calc(50%-211.60px+22px)] -translate-x-1/2 rounded-[14.72px] border-[1.84px] border-solid ${gradientClasses} ${borderColor}`}
            ></div>
            <span
                className={`flex justify-center text-center items-center h-full w-[229.08px] absolute left-1/2 -translate-x-1/2 top-0 pt-12 pb-24 ${textColor}`}
                style={{ fontFamily: "Kaisei Decol", fontSize: '27.6px', lineHeight: '140%', ...textStyle }}
            >
        {text}
      </span>
            <div className="absolute h-[21.32px] w-[135.99px] left-1/2 -translate-x-1/2 bottom-[22px] flex flex-row justify-start items-center gap-[7px]">
                <div className="relative h-[21.32px] w-[21.32px] mt-3">
                    <img
                        src={logoUnionSvg}
                        alt="Union Icon"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[21.32px] w-[21.32px] object-contain"
                    />
                </div>
                <img
                    src={logoTrueWisdomSvg}
                    alt="TrueWisdom Logo"
                    className="relative h-[15px] mt-3"
                />
            </div>
        </div>
    );
};

export default QuoteCard;
