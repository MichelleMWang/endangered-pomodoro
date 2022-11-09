import Link from 'next/link';

const NavBar = () => {
    return (
<nav className="p-6 bg-white shadow-lg flex items-center justify-between space-x-4">
  <div className="text-4xl">
    Plantadoro
  </div>
  <div>
    <button className="text-3xl">
      <Link href="./pages/sign-in.tsx">Login</Link>
    </button>
    <button className="pl-8 text-3xl">
      Settings
    </button>
  </div>
</nav>
    ); 
}
export default NavBar