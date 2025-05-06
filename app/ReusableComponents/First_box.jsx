import React from "react";
import { FaCar, FaClock } from "react-icons/fa";

const First_box = () => {
  return (
    <>
      <div
        className="first_box shadow_box"
        style={{ marginTop: "70px", paddingBottom: "30px" }}
      >
        <h2 className="text-[#1A1919] font-semibold text-[16px]">
          Car Availabilty
        </h2>
        <div className="flex flex-wrap items-center gap-5">
          {/* first sslect */}
          <div className="w-[213px] h-[48px] border rounded flex items-center parent_select gap-2.5">
            <FaCar size={24} className="text-[#656575]" />
            <select className="w-full text-[#656575] text-[16px]">
              <option value="apple">Apple</option>
              <option value="banana">Banana</option>
              <option value="orange">Orange</option>
            </select>
          </div>

          {/* second select */}
          <div className="flex gap-0 items-center justify-center">
            <div className="w-[213px] h-[48px] border flex justify-center parent_select gap-2.5">
              <input
                type="date"
                defaultValue="2025-05-06"
                className="text-[16px] font-normal text-[#656575]"
              />
            </div>

            <div className="w-[213px] h-[48px] border rounded flex items-center parent_select gap-2.5">
              <FaClock size={24} className="text-[#656575]" />
              <select className="w-full text-[#656575] text-[16px]">
                <option value="apple">3:00AM</option>
                <option value="banana">5:00AM</option>
                <option value="orange">11:00AM</option>
              </select>
            </div>
          </div>

          <button className="w-[121px] h-[48px] flex justify-center items-center bg-[#006AFF] text-[16px] font-normal text-[#FFFFFF] rounded-[4px]">
            Check
          </button>
        </div>
      </div>
    </>
  );
};

export default First_box;
