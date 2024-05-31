import SideBar from "@/components/shared/sideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Poorna Praneesha", lastName: "Dayaouel" };
  return (
    <main className="flex w-full h-screen font-inter">
      <SideBar />

      {/* <DashboardLayout> sidebar </DashboardLayout> */}
      {children}
    </main>
  );
}

// common layout for all the pages og the home, transctions,
