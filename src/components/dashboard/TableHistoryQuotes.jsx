
import SharePrimarySVG from '../../../assets/images/share_primary.svg';
import DownloadHoneyYellowSVG from '../../../assets/images/download_honey_yellow.svg';
import IconChevronLeft from '../icon/ChevronLeft';
import IconChevronRight from '../icon/ChevronRight';
import IconChevronDown from '../icon/ChevronDown';

const TableHistoryQuotes = () => {
    return (
        <div className='w-full overflow-x-auto border border-gray-100 rounded-b-lg'>
            <table className='table-auto w-full'>
                <thead>
                    <tr>
                        <th>Tanggal</th>
                        <th>Quote</th>
                        <th>Hari ke</th>
                        <th>Status</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {Array(6).fill(null).map((value, index) => (
                        <tr key={index}>
                            <td>5 April 2025</td>
                            <td className='text-ellipsis'>Yang tenang bukan karena semuanya mudah, tapi karena yakin bahwa semuanya selalu cukup.</td>
                            <td>Hari ke-25</td>
                            <td>
                                <div className="flex items-center gap-2 px-2 py-1 bg-success/5 rounded-full">
                                    <div className="w-1.5 h-1.5 bg-success rounded-full"></div>
                                    <p className="text-success font-semibold text-xs">Terkirim</p>
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center gap-4">
                                    <button className="btn btn-outline rounded-lg">
                                        <img src={SharePrimarySVG} alt="Icon Share" className="object-contain" />
                                    </button>
                                    <button className="btn border-0 hover:bg-brand-honey-yellow/80 bg-brand-honey-yellow rounded-lg">
                                        <img src={DownloadHoneyYellowSVG} alt="Icon Download" className="object-contain" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
            <div className='p-4 flex justify-between items-center'>
                <div className='flex gap-6'>
                    <button className='btn btn-outline btn-sm'>
                        <IconChevronLeft />
                    </button>
                    <div className='flex items-center'>
                        <button className='btn btn-ghost btn-sm'>
                            1
                        </button>
                        <button className='btn btn-ghost btn-sm'>
                            2
                        </button>
                        <button className='btn btn-ghost btn-sm'>
                            3
                        </button>
                    </div>
                    <button className='btn btn-outline btn-sm'>
                        <IconChevronRight />
                    </button>
                </div>
                <div className='flex gap-4 items-center'>
                    <p className='text-xs'><span className='font-medium'>Menampilkan 1 hingga 5</span> dari 25 Hari</p>
                    <button className='btn btn-outline flex gap-2.5 text-xs text-black border-gray-300'>
                        <span>Tampilkan 5</span>
                        <IconChevronDown />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TableHistoryQuotes;