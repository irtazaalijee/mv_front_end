import React, { useState, useEffect } from 'react';
import ProfitCard from './ProfitCard'
import OrderOverviewCard from './OrderOverviewCard'
import Order_SuperGrid from '../../tables/orderTable/Order_SuperGrid'
import SuperGrid from '../../tables/superGridTablePack/SuperGrid'

import './style.css';
import {
    orderTableFilters,
    orderTableSortingFilters,
    orderColumn_Header_Keys,
    orderGridData,
    Data_expandableRow
} from './tableData'

const OrderScreen = () => {
    return (
        <>
            <div className="flex gap-4">
                <OrderOverviewCard />
                <ProfitCard />
            </div>
            <div className='flex mt-5'>
                <SuperGrid
                filterTags={orderTableFilters} 
                            sortingFilter={orderTableSortingFilters}
                            tableColumn={orderColumn_Header_Keys}
                            tableData={orderGridData}
                            Expandable_row={Data_expandableRow}
                />
            </div>
        </>
    )
};
export default OrderScreen;


