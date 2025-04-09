import SideBar from "./sidebar/page";
import HeaderSmallScreen from "./headerSmallScreen/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col md:flex-row p-4">
      <SideBar></SideBar>
      <HeaderSmallScreen />
      <main className="flex-1">{children}</main>
    </div>
  );
}
