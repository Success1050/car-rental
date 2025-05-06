import React from "react";
import ReusedBoxes from "../ReusableComponents/ReusedBoxes";
import Example from "../ReusableComponents/myCharts";

const MiddleLayout = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-start bg-[rgb(248,247,241)] sidebar gap-[2rem]  w-[344px]">
        <div className="text-left w-full">
          <h2 className="text-[20px] font-medium text-[#525256]">
            Todays Statistics
          </h2>
          <h2 className="text-[14px] font-normal text-[#A3A3A3]">
            Tue, 14 Nov, 2022, 11.30 AM
          </h2>
        </div>

        {/* components */}
        <div className="flex flex-col gap-3">
          <ReusedBoxes
            type={"Income"}
            day={"Today"}
            amount={1200}
            rate={"1.5%"}
            reason={"Compared to $9940 yesterday"}
            prev_day={"Last week income"}
            prev_amount={"$466464"}
          />

          <ReusedBoxes
            type={"Expenses"}
            day={"Today"}
            amount={5600}
            rate={"2.5%"}
            reason={"Compared to $5240 yesterday"}
            prev_day={"Last week expenses"}
            prev_amount={"$22658"}
          />
          <ReusedBoxes
            type={"Expenses"}
            day={"Today"}
            amount={5600}
            rate={"2.5%"}
            reason={"Compared to $5240 yesterday"}
            prev_day={"Last week expenses"}
            prev_amount={"$22658"}
            showChart={true}
            chartComponent={<Example />}
          />
        </div>
      </div>
    </>
  );
};

export default MiddleLayout;
