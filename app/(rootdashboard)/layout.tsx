export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      Sidebar
      {/* <DashboardLayout> sidebar </DashboardLayout> */}
      {children}
    </main>
  );
}

// common layout for all the pages og the home, transctions,
