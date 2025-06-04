import React, { useRef, useEffect, useState } from 'react';
import QuoteCard from './QuoteCard';

// Import all necessary SVGs for logos
import unionYellow from '../../assets/images/union.svg';
import trueWisdomYellow from '../../assets/images/truewisdom.svg';
import unionRed from '../../assets/images/union_1.svg';
import trueWisdomRed from '../../assets/images/truewisdom_1.svg';
import unionPurple from '../../assets/images/union_2.svg';
import trueWisdomPurple from '../../assets/images/truewisdom_2.svg';
import unionTeal from '../../assets/images/union_3.svg';
import trueWisdomTeal from '../../assets/images/truewisdom_3.svg';
import unionPink from '../../assets/images/union_4.svg';
import trueWisdomPink from '../../assets/images/truewisdom_4.svg';
import unionGreen from '../../assets/images/union_5.svg';
import trueWisdomGreen from '../../assets/images/truewisdom_5.svg';

const quotesData = [
  {
    id: 1,
    bgColor: 'bg-[rgba(251,241,197,1.00)]',
    borderColor: 'border-[#e68504ff]',
    gradientClasses: 'bg-[linear-gradient(0deg,rgba(255,255,255,0.40)0%,rgba(255,255,255,0.40)100%),radial-gradient(ellipse,rgba(255,228,49,1.00)_0.0%,rgba(254,242,190,1.00)_51.89789533615112%,rgba(247,165,57,1.00)_93.75925660133362%)]',
    textColor: 'text-[rgba(100,59,3,1.00)]',
    text: "Cinta yang dewasa tak selalu butuh kata, cukup hadir dan bertahan di waktu-waktu terberat.",
    logoUnionSvg: unionYellow,
    logoTrueWisdomSvg: trueWisdomYellow,
  },
  {
    id: 2,
    bgColor: 'bg-[rgba(251,197,197,1.00)]',
    borderColor: 'border-[#e60404ff]',
    gradientClasses: 'bg-[linear-gradient(0deg,rgba(255,255,255,0.40)0%,rgba(255,255,255,0.40)100%),radial-gradient(ellipse,rgba(218,100,241,1.00)_0.0%,rgba(255,213,180,1.00)_50.0%,rgba(241,35,133,1.00)_100.0%)]',
    textColor: 'text-[rgba(106,7,7,1.00)]',
    text: "Kadang, mencintai dengan tenang lebih berarti daripada mencintai dengan gegap gempita.",
    logoUnionSvg: unionRed,
    logoTrueWisdomSvg: trueWisdomRed,
  },
  {
    id: 3,
    bgColor: 'bg-[rgba(203,197,251,1.00)]',
    borderColor: 'border-[#8042fdff]',
    gradientClasses: 'bg-[linear-gradient(0deg,rgba(255,255,255,0.40)0%,rgba(255,255,255,0.40)100%),radial-gradient(ellipse,rgba(218,100,241,1.00)_0.0%,rgba(227,213,226,1.00)_50.0%,rgba(120,55,255,1.00)_100.0%)]',
    textColor: 'text-black',
    text: "Kita tak selalu bisa saling memiliki, tapi kita bisa saling memahami.",
    logoUnionSvg: unionPurple,
    logoTrueWisdomSvg: trueWisdomPurple,
  },
  {
    id: 4,
    bgColor: 'bg-[rgba(212,251,197,1.00)]',
    borderColor: 'border-[#3c9891ff]',
    gradientClasses: 'bg-[linear-gradient(0deg,rgba(255,255,255,0.40)0%,rgba(255,255,255,0.40)100%),radial-gradient(ellipse,rgba(148,205,199,1.00)_0.0%,rgba(214,236,110,1.00)_51.7%,rgba(44,143,149,1.00)_100.0%)]',
    textColor: 'text-[rgba(1,45,58,1.00)]',
    text: "Yang tenang bukan karena semuanya mudah, tapi karena yakin bahwa semuanya selalu cukup.",
    logoUnionSvg: unionTeal,
    logoTrueWisdomSvg: trueWisdomTeal,
  },
  {
    id: 5,
    bgColor: 'bg-[rgba(251,197,245,1.00)]',
    borderColor: 'border-[#983c88ff]',
    gradientClasses: 'bg-[linear-gradient(0deg,rgba(255,255,255,0.40)0%,rgba(255,255,255,0.40)100%),radial-gradient(ellipse,rgba(254,110,208,1.00)_0.0%,rgba(245,227,255,1.00)_50.0%,rgba(241,35,133,1.00)_100.0%)]',
    textColor: 'text-[rgba(106,7,7,1.00)]',
    text: "Ketika tak tahu harus melangkah ke mana, duduklah sejenak. Mungkin Tuhan sedang mengatur ulang arah.",
    logoUnionSvg: unionPink,
    logoTrueWisdomSvg: trueWisdomPink,
  },
  {
    id: 6,
    bgColor: 'bg-[rgba(195,255,216,1.00)]',
    borderColor: 'border-[#3c9891ff]',
    gradientClasses: 'bg-[linear-gradient(0deg,rgba(255,255,255,0.40)0%,rgba(255,255,255,0.40)100%),radial-gradient(ellipse,rgba(190,249,191,1.00)_0.0%,rgba(254,247,213,1.00)_48.5%,rgba(67,177,140,1.00)_100.0%)]',
    textColor: 'text-[rgba(7,83,106,1.00)]',
    text: "Proses tak selalu cepat, tapi selalu membawa kamu ke versi dirimu yang lebih kuat.",
    logoUnionSvg: unionGreen,
    logoTrueWisdomSvg: trueWisdomGreen,
  },
];

const QuoteCarousel = () => {
  const scrollContainerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  // Calculate and update the container width on mount and resize
  useEffect(() => {
    const updateWidth = () => {
      setContainerWidth(window.innerWidth);
    };

    // Initial calculation
    updateWidth();

    // Add event listener for window resize
    window.addEventListener('resize', updateWidth);

    // Cleanup
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
      <div className="relative w-full overflow-hidden ">
        <div
            ref={scrollContainerRef}
            className="flex w-full overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
        >
          <div className="flex gap-5 pl-5 py-5">
            {quotesData.map((quote, index) => (
                <QuoteCard
                    key={quote.id}
                    {...quote}
                    className={`snap-start shrink-0 ${
                        index === quotesData.length - 1 ? 'snap-end pr-5' : ''
                    }`}
                />
            ))}
          </div>
        </div>

        {/* Custom scrollbar indicator (optional) */}
        <style jsx global>{`
          /* Hide scrollbar for Chrome, Safari and Opera */
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }

          /* Hide scrollbar for IE, Edge and Firefox */
          .scrollbar-hide {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
        `}</style>
      </div>
  );
};

export default QuoteCarousel;