import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (
    <main>
     
   <h1>My Website</h1>
   
   <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-xl"></div>
        <ul className="flex space-x-6">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/aboutus">About</Link></li>
          <li><Link href="/service">Services</Link></li>
          <li><Link href="/careers">Careers</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/support">Support</Link></li>
        </ul>
      </div>
    </nav>
   </main>
  );
}
