import React, { useState } from "react";

import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const ReusedBoxes = ({
  type,
  day,
  amount,
  rate,
  reason,
  prev_day,
  prev_amount,
  showChart,
  chartComponent = null,
}) => {
  const isCurrentValue = 3000;

  const accurateValue = amount < isCurrentValue;

  return (
    <>
      <div
        className={`box_column shadow_box w-[288px] ${
          showChart ? "h-fit" : " h-[190px]"
        }`}
      >
        <div className=" parent_box">
          <h3 className="text-[18px] font-medium text-center text-[#656575]">
            {type}
          </h3>
          <div className="today">
            <h2 className="text-[12px] font-normal text-center text-[#656575]">
              {day}
            </h2>
          </div>
        </div>

        {showChart ? (
          chartComponent
        ) : (
          <>
            <hr className="w-full h-[1px] bg-[#656575]" />
            {/* amount */}
            <div className="amount">
              <h2 className="text-[28px] font-bold text-[#01150C] text-center">
                ${amount}
              </h2>
              <div className="flex items-center justify-center gap-1.5">
                {accurateValue ? (
                  <FaArrowDown
                    size={16}
                    className="text-[#FF2727] font-medium"
                  />
                ) : (
                  <FaArrowUp size={16} className="text-[#52C93F] font-medium" />
                )}

                <h2
                  className={` ${
                    accurateValue ? "text-[#FF2727]" : "text-[#52C93F]"
                  }  font-medium`}
                >
                  {rate}
                </h2>
              </div>
            </div>
            {/* ord text */}
            <p className="text-[#656575] font-light text-[14px]">{reason}</p>

            {/* previous amount */}
            <div className=" previous_amt">
              <h3 className="text-[14px] font-medium text-center text-[#525256]">
                {prev_day}
              </h3>
              <h3 className="text-[14px] font-medium text-center text-[#525256]">
                {prev_amount}
              </h3>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ReusedBoxes;
