
import { Link, useLocation } from 'react-router-dom';


const Sidebar = () => {
    const location = useLocation();

    const menuItems = [
        { name: 'CONCEPT', path: '/' },
        { name: 'SALON', path: '/' }, // Will be anchor link later
        { name: 'MENU', path: '/' },  // Will be anchor link later
        { name: 'RECRUIT', path: '/recruit' },
    ];

    return (
        <aside className="fixed left-0 top-0 h-full w-16 md:w-64 bg-barbar-black border-r border-[#222] z-50 flex flex-col justify-between py-10">
            {/* Brand */}
            <div className="px-4 md:px-8 text-center md:text-left">
                <Link to="/">
                    <h1 className="text-xl md:text-3xl font-oswald tracking-[0.2em] text-white">BARBAR</h1>
                    <p className="hidden md:block text-[10px] text-barbar-green tracking-[0.3em] mt-2">PREMIUM BARBER</p>
                </Link>
            </div>

            {/* Navigation */}
            <nav className="flex-1 flex flex-col justify-center px-0 md:px-8 space-y-6 md:space-y-8">
                {menuItems.map((item) => (
                    <Link
                        key={item.name}
                        to={item.path}
                        className="group flex items-center md:space-x-4 justify-center md:justify-start"
                    >
                        <span className="hidden md:block h-[1px] w-4 bg-gray-600 transition-all duration-300 group-hover:bg-barbar-gold group-hover:w-8"></span>
                        <span className={`font-oswald text-xs md:text-lg tracking-widest transition-colors duration-300 ${location.pathname === item.path && item.name === 'RECRUIT' ? 'text-barbar-gold' : 'text-gray-400 group-hover:text-white'
                            }`}>
                            {item.name}
                        </span>
                    </Link>
                ))}
            </nav>

            {/* Social / Footer */}
            <div className="px-4 md:px-8 hidden md:block">
                <div className="flex flex-col space-y-2 text-[10px] text-gray-600 tracking-wider">
                    <a href="#" className="hover:text-barbar-gold transition-colors">INSTAGRAM</a>
                    <p>&copy; 2026 BARBAR</p>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
