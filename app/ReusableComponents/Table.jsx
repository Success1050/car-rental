import { drivers } from "../constants/menu";

export default function ResponsiveTable() {
  const tableHeaders = ["No.", "Car no.", "Driver", "Status", "Earning", ""];

  return (
    <div className="w-full overflow-x-auto">
      <table className=" w-full divide-y divide-gray-200">
        <thead>
          <tr>
            {tableHeaders.map((heading, index) => (
              <th
                key={index}
                scope="col"
                className={`table_header ${
                  heading === "Status" ? "text-center" : ""
                } ${heading === "" ? "w-24" : ""}`}
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {drivers.map((driver) => {
            const { id, no, carNo, image, name, status, earnings, color } =
              driver;

            return (
              <tr key={id} className="hover:bg-gray-50 transition-colors">
                <td className="td_space text-sm font-medium text-gray-900">
                  {no}
                </td>
                <td className="td_space text-sm text-gray-700">{carNo}</td>
                <td className="td_space">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 h-8 w-8">
                      <img
                        className="h-8 w-8 rounded-full"
                        src={image}
                        alt={name}
                      />
                    </div>
                    <div className="text-sm font-normal text-gray-800">
                      {name}
                    </div>
                  </div>
                </td>
                <td className="td_space">
                  <div className="flex justify-start items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${color}`}></div>
                    <div className="text-sm font-normal text-gray-800">
                      {status}
                    </div>
                  </div>
                </td>
                <td className="td_space text-sm text-gray-700">{earnings}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="table_btn">Details</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
