import '../App.css';
import { Routes, Route, Link, Outlet, useLocation } from 'react-router-dom';

function Layout() {

    const location = useLocation()
    function check(path) {
        console.log(location.pathname.slice(0,9))
        if(location.pathname.startsWith(path)) {
            return 'bg-gray-400 ml-2'
        } else {
            return 'ml-2'
        }
    }
return (
    <>
    <nav>
        <Link className={check('/products')} to="products">Products</Link>
        <Link className={check('/about')} to="about">About</Link>
        <Link className={check('/contact')} to="contact">Contact</Link>
    </nav>
        
        <Outlet />
    </>
);
}

export default Layout;
