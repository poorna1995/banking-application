export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      Authentication
      {children}
    </main>
  );
}

//  this layout is exclsuively for the authentication page
