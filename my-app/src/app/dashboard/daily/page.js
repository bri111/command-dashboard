import React from 'react';

const classNames = (...className) => {
  return className.filter(Boolean).join(' ');
}
const Page = () => {
  const tableStuff = {
    header: ['column1', 'column2', 'column3', 'column4',],
    row: [
      ['stuff1', 'stuff2', 'stuff3', 'stuff4'],
      ['stuff1', 'stuff2', 'stuff3', 'stuff4'],
      ['stuff1', 'stuff2', 'stuff3', 'stuff4'],
      ['stuff1', 'stuff2', 'stuff3', 'stuff4'],
    ]
  }

  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8 h-screen">
      <div className="mx-auto max-w2xl text-center">
        Daily
        <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {tableStuff.header.map((e, index) => (
              <th key={e} scope="col" className={"px-6 py3 text-center"}>{e}</th>
            ))}
          </tr>
          </thead>
          <tbody>
          {tableStuff.row.map((row, index) => (
            <tr key={row} className={classNames(index % 2 === 0 ? "bg-gray-400" : "bg-gray-200",  "bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center text-black")}>
              {row.map((rowStuff) => (
                <td key={rowStuff}>{rowStuff}</td>
              ))}

            </tr>
          ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default Page;
