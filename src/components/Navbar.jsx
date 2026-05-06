import { Link } from "react-router-dom";

const links = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Cart", path: "/cart" },
];

export default function Navbar(){
    return(
        <nav className="flex justify-between p-4 bg-gray-100">
            <h1 className="font-bold">My Shop</h1>

            <ul className="flex gap-6">
                {links.map((link, index) => (
                    <li key={index}>
                        <Link to={link.path} className="hover:text-blue-500">
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}