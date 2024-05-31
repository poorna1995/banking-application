import HeaderBox from "@/components/shared/headerbox";
import TotalBalanceBox from "@/components/shared/totalbalancebox";
import React from "react";

export default function DashboardLayout() {
  const loggedIn = { firstName: "Poorna Praneesha" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "guest"}
            description="Access and manage your account and transctration"
          />
        </header>

        <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1245.23}
        />
      </div>
    </section>
  );
}
