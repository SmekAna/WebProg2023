import { useAppDispatch, useAppSelector } from "../app/hooks";

import {
    addToIncludedGenres,
    removeFromIncludedGenres,
} from "../features/movies/Slice";

const Filter = () => {
    const { genres, includedGenres } = useAppSelector((state) => state.movies);

    const dispatch = useAppDispatch();

    return (
        <div className="flex flex-col gap-4 h-[0] flex-grow overflow-scroll">
            <div className="flex flex-col gap-2 text-sm">
                <h1>Жанры</h1>
                {genres.map((g, i) => (
                    <div key={i} className="flex items-center">
                        <input
                            id={`genre-${g}`}
                            type="checkbox"
                            onChange={() => {
                                includedGenres.includes(g)
                                    ? dispatch(removeFromIncludedGenres(g))
                                    : dispatch(addToIncludedGenres(g));
                            }}
                            checked={includedGenres.includes(g)}
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300"
                        />
                        <label
                            htmlFor={`genre-${g}`}
                            className="ml-2 flex-grow text-sm text-gray-900"
                        >
                            {g}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Filter;
