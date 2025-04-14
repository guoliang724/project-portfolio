import SideBar from "../../components/sidebar/page";
import HeaderSmallScreen from "../../components/headerSmallScreen/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col md:flex-row p-4">
      <SideBar></SideBar>
      <HeaderSmallScreen />
      <main className="flex-1 ">{children}</main>
    </div>
  );
}
