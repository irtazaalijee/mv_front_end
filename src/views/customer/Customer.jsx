import React from 'react'
import SuperGrid from '../../tables/superGridTablePack/SuperGrid'
import {
    customerTableFilters,
    customerTableSortingFilters ,
    customerColumn_Header_Keys ,
    customerGridData,
    CustomerExpandableRow
} from './tableData'
const Customer = ()=>{
    return(
        <>
         <SuperGrid
            filterTags={customerTableFilters} 
            sortingFilter={customerTableSortingFilters }
            tableColumn={customerColumn_Header_Keys }
            tableData={customerGridData }
            Expandable_row={CustomerExpandableRow}
            />
        </>
    )
}
export default Customer;