import ProfitPieChart from './ProfitPieChart'
const ProfitCard = () => {
    return (
        <div className="bg-white rounded-xl border p-6 shadow-sm basis-[40%]">
            {/* header */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Profit</h2>

                <select className="border rounded-lg px-3 py-1 text-sm">
                    <option>Last Month</option>
                    <option>This Month</option>
                    <option>This Year</option>
                </select>
            </div>

            <div className="flex justify-between items-center gap-10 mt-1">
                {/* TOTAL REVENUE */}
                <div className="flex flex-col items-start gap-3">
                    <h1 className="text-4xl font-bold">$116K</h1>
                    <div className="text-red-600 font-semibold text-sm">
                        -7.2%
                    </div>
                    <span className="text-gray-500 text-sm">Compared to last week</span>
                </div>
                <ProfitPieChart />
            </div>
            
        </div>
    );
};

export default ProfitCard;
