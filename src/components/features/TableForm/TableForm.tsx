import { SelectType } from "../../../../type";
const TableForm = ({ data, handleFilter, filters }: any) => {
  return (
    <div className="grid grid-cols-12 xl:px-5 mt-10 ">
      {data?.selectData?.resultType && (
        <div className="hidden xl:block col-span-6 xl:col-span-2">
          <div className="flex flex-col gap- font-semibold text-lg">
            <div className="border-l-4 border-red-500 p-2">Race</div>
            {data?.selectData?.resultType?.map(
              (item: SelectType, index: number) => (
                <div
                  key={index}
                  className={`${
                    item.value === filters?.race &&
                    "border-l-4 border-gray-500 border-b-0"
                  } p-2 cursor-pointer border-b-2 hover:bg-slate-200`}
                  onClick={() => handleFilter("race", item)}
                >
                  {item.text}
                </div>
              )
            )}
          </div>
        </div>
      )}
      <div
        className={`${
          data?.selectData?.resultType
            ? "col-span-full xl:col-span-10"
            : "col-span-full"
        }  overflow-x-auto`}
      >
        <table className="divide-y divide-gray-200 w-full">
          <thead className="bg-gray-50">
            <tr>
              {data?.tableData?.headData
                ?.slice(1, -1)
                .map((item: SelectType, index: number) => (
                  <th
                    key={index}
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-800 uppercase tracking-wider"
                  >
                    {item.text}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data?.tableData?.bodyData?.map((item: any, index: number) => (
              <tr key={index}>
                {data?.tableData.headData
                  .slice(1, -1)
                  .map((key: SelectType, index: number) => (
                    <td
                      key={index}
                      className="px-6 py-4 whitespace-nowrap text-xs lg:text-base"
                    >
                      <span className="hidden lg:inline-block">
                        {key.text === "Driver" &&
                          item[key.text]
                            .split("\n")
                            .filter(
                              (item: string) => item.trim() !== "" && item
                            )
                            .slice(0, 2)}
                      </span>
                      <span className="hidden md:inline-block lg:hidden">
                        {key.text === "Driver" &&
                          item[key.text]
                            .split("\n")
                            .filter(
                              (item: string) => item.trim() !== "" && item
                            )[1]}
                      </span>
                      <span className="inline-block md:hidden">
                        {key.text === "Driver" &&
                          item[key.text]
                            .split("\n")
                            .filter(
                              (item: string) => item.trim() !== "" && item
                            )[2]}
                      </span>
                      {key.text !== "Driver" && item[key.text]}
                    </td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableForm;
