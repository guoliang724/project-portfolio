import SideBar from "./sidebar/page";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-row m-4">
      <SideBar></SideBar>
      <main className="flex-1">{children}</main>
    </div>
  );
}
