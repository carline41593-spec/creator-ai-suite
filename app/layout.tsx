import '../globals.css';
import Sidebar from '../components/Sidebar';
export const metadata={title:'Creator AI Suite'};
export default function RootLayout({children}){return(<html><body className='bg-black text-white flex'><Sidebar/><main className='flex-1 p-8'>{children}</main></body></html>)}