import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="h-[52px] drop-shadow-md bg-zinc-50">
            <nav className="px-6 h-full flex items-center justify-between">
                <Link
                    to="/"
                    className="font-medium text-2xl text-black t_shadow"
                >
                    Админка фильмотеки
                </Link>
                <a
                    href="https://github.com/SmekAna/WebProg2023"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-primary transition duration-300 hover:bg-secondary py-[10px] px-[18px] rounded-lg text-sm font-normal text-[#ffffff]"
                >
                    Смекалина Анастасия
                </a>
            </nav>
        </header>
    );
};

export default Navbar;
