import React from "react";

export default function Table({ columns, dataSource }) {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left bg-gray-500">
        <thead className="text-xs text-gray-200 uppercase bg-sky-600">
          <tr>
            {columns?.map((col, i) => (
              <th scope="col" className={`px-6 py-4 ${col?.className}`} key={i}>
                {col?.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataSource?.map((data, i) => (
            <tr className="bg-white border-b" key={i}>
              {columns?.map((col, j) => (
                <td className="px-6 py-4" key={j}>
                  {col?.render ? col.render(data) : data[col?.fieldname]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
