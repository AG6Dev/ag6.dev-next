import './globals.css'
import Navbar from "@/components/Navbar";

export const metadata = {
    title: 'AG6Dev\'s',
    description: 'AG6Dev',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {

    return (
        <html lang="en">
        <Navbar/>
        {children}
        </html>
    )
};
