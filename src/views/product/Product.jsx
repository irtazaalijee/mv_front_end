import React from 'react'
import ProductCards from './ProductCards'
import SuperGrid from '../../tables/superGridTablePack/SuperGrid'
import {
    productTableFilters,
    productTableSortingFilters,
    prductColumn_Header_Keys,
    productGridData,
    Data_expandableRow
} from './tableData'
const Product = () => {
    return (
        <>
            <ProductCards />
            <SuperGrid
            filterTags={productTableFilters} 
            sortingFilter={productTableSortingFilters}
            tableColumn={prductColumn_Header_Keys}
            tableData={productGridData}
            Expandable_row={Data_expandableRow}
            />

        </>
    )
}

export default Product;