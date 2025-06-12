import SharePrimarySVG from '../../../assets/images/share_primary.svg';
import DownloadHoneyYellowSVG from '../../../assets/images/download_honey_yellow.svg';

const GridHistoryQuotes = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {Array(6).fill(null).map((value, index) =>
                <div className="px-8 pt-8 pb-5 bg-[#FBF1FF] rounded-lg" key={index}>
                    <div className="flex justify-between items-center text-brand-purple-dark mb-5">
                        <p>Quote</p>
                        <p>5 April 2025</p>
                    </div>
                    <p className="text-brand-purple-dark font-semibold text-xl mb-11">
                        "Ketenangan bukanlah hidup tanpa tantangan, melainkan keyakinan bahwa segalanya akan berada pada tempatnya."
                    </p>
                    <hr className="mb-5" />
                    <div className="flex justify-end items-center gap-4">
                        <button className="btn btn-ghost btn-sm">
                            <img src={SharePrimarySVG} alt="Icon Share" className="object-contain" />
                        </button>
                        <button className="hover:bg-brand-honey-yellow/80 bg-brand-honey-yellow rounded-full px-5 py-3 font-semibold flex gap-2 text-brand-honey-yellow-dark">
                            <img src={DownloadHoneyYellowSVG} alt="Icon Download" className="object-contain" />
                            <span>Unduh Photocard</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default GridHistoryQuotes;