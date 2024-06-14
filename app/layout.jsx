import { Inter, Poppins } from "next/font/google";
import dynamic from "next/dynamic";
import 'bootstrap/dist/css/bootstrap.css';
import '@icon/icofont/icofont.css';
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});
const Header = dynamic(() => import('@/components/Header/Header'))
const Footer = dynamic(() => import('@/components/Footer/Footer'))



export const metadata = {
  title: "Dr Jeetu Nayak",
  description: "At our clinic, we believe that compassion is the bedrock of medical professionalism. We are dedicated to your holistic well-being, carefully tending to both your mental and physical health with the utmost attention and care.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
