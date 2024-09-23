import React, { useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import IconSearch from "../Icon/IconSearch";

const TopProductTable = ({ products }) => {
  const data = useMemo(() => products, [products]);

  const columns = useMemo(
    () => [
      { Header: "Product Description", accessor: "description" },
      { Header: "Amount", accessor: "amt" },
      { Header: "Quantity", accessor: "qty" },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    setPageSize,
    gotoPage,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 10 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <section className="panel h-full">
      <div className="flex justify-between px-7.5 py-4.5">
        <div className="relative">
          <input
            type="text"
            value={globalFilter || ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="form-input pl-9 sm:pr-4 pr-9 peer sm:bg-transparent bg-gray-100 placeholder:tracking-widest"
            placeholder="Search here..."
          />
          <button
            type="button"
            className="absolute w-9 h-9 inset-0 right-auto rtl:left-auto appearance-none peer-focus:text-primary"
          >
            <IconSearch className="mx-auto" />
          </button>
        </div>

        <div className="flex items-center font-medium gap-3">
          <p className="dark:text-white w-max">Per Page:</p>
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="form-select w-16"
          >
            {[5, 10, 20, 50].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      </div>

      {data.length === 0 ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-500">No data available</p>
        </div>
      ) : (
        <>
          <table
            {...getTableProps()}
            className="rounded-md overflow-hidden table table-hover"
          >
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      key={column.id}
                    >
                      <div className="flex items-center">
                        <span>{column.render("Header")}</span>
                        <div className="ml-2 inline-flex flex-col space-y-[2px]">
                          <span className="inline-block">
                            <svg
                              className="fill-current"
                              width="10"
                              height="5"
                              viewBox="0 0 10 5"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M5 0L0 5H10L5 0Z" fill="" />
                            </svg>
                          </span>
                          <span className="inline-block">
                            <svg
                              className="fill-current"
                              width="10"
                              height="5"
                              viewBox="0 0 10 5"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                                fill=""
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} key={row.id}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()} key={cell.id}>
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="flex justify-between px-6 py-5">
            <p className="font-medium">
              Showing {pageIndex + 1} of {pageOptions.length} pages
            </p>
            <div className="flex">
              <button
                className="flex cursor-pointer items-center justify-center rounded-[3px] p-[7px] px-[7px] hover:bg-primary hover:text-white"
                onClick={previousPage}
                disabled={!canPreviousPage}
              >
                <svg
                  className="fill-current"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.1777 16.1156C12.009 16.1156 11.8402 16.0593 11.7277 15.9187L5.37148 9.44995C5.11836 9.19683 5.11836 8.80308 5.37148 8.54995L11.7277 2.0812C11.9809 1.82808 12.3746 1.82808 12.6277 2.0812C12.8809 2.33433 12.8809 2.72808 12.6277 2.9812L6.72148 8.99995L12.6559 15.0187C12.909 15.2718 12.909 15.6656 12.6559 15.9187C12.4871 16.0312 12.3465 16.1156 12.1777 16.1156Z"
                    fill=""
                  />
                </svg>
              </button>

              {pageOptions.map((page, index) => (
                <button
                  key={index}
                  onClick={() => gotoPage(index)}
                  className={`${
                    pageIndex === index && "bg-primary text-white"
                  } mx-1 flex cursor-pointer items-center justify-center rounded-[3px] p-1.5 px-[15px] hover:bg-primary hover:text-white`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                className="flex cursor-pointer items-center justify-center rounded-[3px] p-[7px] px-[7px] hover:bg-primary hover:text-white"
                onClick={nextPage}
                disabled={!canNextPage}
              >
                <svg
                  className="fill-current"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.82148 16.1156C5.65273 16.1156 5.51211 16.0593 5.37148 15.9468C5.11836 15.6937 5.11836 15.3 5.37148 15.0468L11.2777 8.99995L5.37148 2.9812C5.11836 2.72808 5.11836 2.33433 5.37148 2.0812C5.62461 1.82808 6.01836 1.82808 6.27148 2.0812L12.6277 8.54995C12.8809 8.80308 12.8809 9.19683 12.6277 9.44995L6.27148 15.9187C6.15898 16.0312 5.99023 16.1156 5.82148 16.1156Z"
                    fill=""
                  />
                </svg>
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default TopProductTable;
