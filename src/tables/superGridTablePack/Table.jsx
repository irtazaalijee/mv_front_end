import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";


export default function Table({
    column_keys, tableData, Expandable_row
}) {
    const [openRow, setOpenRow] = useState(null);

    const toggleRow = (index) => {
        setOpenRow(openRow === index ? null : index);
    };

    return (
        <table className="w-full border-collapse">
            <thead>
                <tr>
                    <th></th>
                    {
                        column_keys.map(
                            (item) => {
                                return (
                                    <>
                                        <th>{item.header}</th>
                                    </>
                                )
                            }
                        )
                    }
                </tr>
            </thead>

            <tbody>
                {tableData.map((row, index) => (
                    <>
                        {/* MAIN ROW */}
                        <tr key={index} className="table-row">
                            <td className="icon-cell" onClick={() => toggleRow(index)}>
                                {openRow === index ? (
                                    <FaChevronUp size={14} />
                                ) : (
                                    <FaChevronDown size={14} />
                                )}
                            </td>
                            {
                                column_keys.map(
                                    (item) => {
                                        return (
                                            <>
                                                <td>
                                                    {/* {row[item.key]} */}
                                                    {item.tag
                                                        ? item.tag({ value: row[item.key], row })
                                                        : row[item.key]}
                                                </td>
                                            </>
                                        )
                                    }
                                )
                            }
                            {/* <td>{row.id}</td>
                            <td>{row.customer}</td>
                            <td>{row.phone}</td>
                            <td>{row.product}</td>
                            <td>{row.quantity}</td>
                            <td>{row.date}</td>
                            <td>{row.amount}</td>
                            <td>{row.status}</td> */}
                        </tr>

                        {/* EXPANDABLE ROW */}
                        <AnimatePresence>
                            {openRow === index && (
                                <motion.tr
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.25 }}
                                    className="expand-row"
                                >
                                    {
                                        <Expandable_row row={row} />
                                    }
                                </motion.tr>
                            )}
                        </AnimatePresence>

                    </>
                ))}
            </tbody>
        </table>
    );
}
