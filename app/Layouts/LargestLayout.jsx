import React from "react";
import ResponsiveTable from "../ReusableComponents/Table";
import EarningsChart from "../ReusableComponents/EarningsChart";
import { FaBell, FaCar, FaClock, FaFilter, FaSearch } from "react-icons/fa";
import First_box from "../ReusableComponents/First_box";

const LargestLayout = () => {
  return (
    <>
      <div className="bg-[#FFFFFF] w-full">
        <div
          className="w-full flex justify-end items-center"
          style={{ marginTop: "20px" }}
        >
          <div className="relative w-full left-[65%] bottom-2.5">
            <FaBell size={24} className="absolute" />
            <div className="w-[6.67px] h-[6.67px] rounded-full bg-[#FF2727] absolute right-[96%] z-40"></div>
          </div>

          <div className="search_field shadow_box">
            <input
              type="text"
              placeholder="search here"
              className="border-0 outline-0 w-full h-full"
            />
            <FaSearch className="absolute right-[24px]" />
          </div>
        </div>

        {/* first box */}
        <First_box />

        <div
          className="first_box shadow_box"
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-[16px] text-[#1A1919]">
              Live Car Status
            </h2>

            <div className="flex justify-center items-center gap-3">
              <FaFilter size={24} />
              <h2 className="font-medium text-[16px] text-[#525256]">Filter</h2>
            </div>
          </div>

          <ResponsiveTable />
        </div>
        <EarningsChart />
      </div>
    </>
  );
};

export default LargestLayout;
