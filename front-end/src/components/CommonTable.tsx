import React from "react";

interface TableProps<T> {
  fields: string[];
  data: T[];
  formatRow: (item: T, index: number) => React.ReactNode;
}

export const CommonTable = <T,>({ fields, data, formatRow }: TableProps<T>) => {
  return (
    <table className="w-full border-collapse border-2 border-black bg-white">
      <thead>
        <tr className="text-lg font-semibold text-black bg-slate-200">
          {/* <th>SI.NO</th> */}
          {fields.map((field, index) => (
            <th key={index} className="border-2 border-black p-2">
              {field}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data
          ?.slice()
          .reverse()
          .map((item, index) => formatRow(item, index))}
      </tbody>
    </table>
  );
};
