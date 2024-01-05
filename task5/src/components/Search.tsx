import { useState, useEffect } from "react";

import { Filter } from "./index";
import { useDebounce } from "../hooks/useDebounce";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { searchMovies } from "../features/movies/Slice";
import { setIsFilterOpen } from "../features/filter/filterSlice";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const { debounceValue } = useDebounce(searchTerm, 500);

    const { isFilterOpen } = useAppSelector((state) => state.filter);

    const disp = useAppDispatch();

    useEffect(() => {
        disp(searchMovies(debounceValue));
    }, [debounceValue, disp]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        disp(setIsFilterOpen(false));
        disp(searchMovies(searchTerm));
    };

    const onFilterClick = () => {
        if (isFilterOpen) disp(searchMovies(searchTerm));
        disp(setIsFilterOpen(!isFilterOpen));
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={`py-[10px] flex flex-col gap-4 ${
                isFilterOpen && "h-full"
            }`}
        >
            <div className="flex items-center gap-3">
                <input
                    placeholder="Введите название фильма"
                    type="text"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm}
                    className="bg-[#ECF1F7] h-8  w-full p-2 rounded-lg text-xs text-black/50 outline-none"
                />
                <button
                    type="submit"
                    className="hidden md:block h-8 py-2 px-3 btn_shadow bg-[#ECF1F7] transition duration-300 active:scale-[0.95] hover:opacity-90 rounded-lg text-xs text-[#8c3ead]"
                >
                    Найти
                </button>
            </div>

            <button
                onClick={onFilterClick}
                type="button"
                className="w-full h-8 px-3 flex items-center gap-2 text-xs bg-primary transition duration-300 hover:bg-secondary btn_shadow rounded-lg text-center justify-center text-[#ffffff]"
            >
                {isFilterOpen
                    ? "Закрыть список жанров"
                    : "Открыть список жанров"}
            </button>
            {isFilterOpen && <Filter />}
        </form>
    );
};

export default Search;
