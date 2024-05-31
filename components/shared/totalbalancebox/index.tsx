"use client";
import { formatAmount, getAccountTypeColors } from "@/lib/utils";

import React from "react";
import AnimatedCounter from "../animatedCounter";
import DoughNutChart from "../doughNutChart";

//  used  chart.js  for chart rendenring

export default function TotalBalanceBox({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotalBalanceBoxProps) {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        {/*  first doughut chart */}
        <DoughNutChart accounts={accounts} />
        <div className="flex flex-col gap-6 px-8">
          <h2 className="header-2">BankAccount: {totalBanks}</h2>
          <div className="flex flex-col gap-2">
            <p> Total Current Balance:</p>

            <div className="gap-2 total-balance-amount flex-center">
              <AnimatedCounter amount={totalCurrentBalance} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
