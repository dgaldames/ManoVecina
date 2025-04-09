//import { Search } from "lucide-react";
import React, { useState, useEffect } from "react"; 
import Link from "next/link";

export default function SearchBar(){

    const [keyword, setKeyword] = useState('');
    const [results, setResults] = useState([]);
    const containerRef = React.useRef<HTMLDivElement>(null);

    const fetchResults = async (searchTerm: string) => {
        const res = await fetch(`/api/search?keyword=${encodeURIComponent(searchTerm)}`);
        const json = await res.json();
        if(json.status === 'success'){
            setResults(json.data);
        }
    };

    // useEffect para hacer debounce de la búsqueda
    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            if(keyword.trim()){
                fetchResults(keyword);
            } else {
                setResults([]);
            }
        }, 200); // 200 ms de retardo

        return () => clearTimeout(delayDebounce);
    }, [keyword]);

    // useEffect para cerrar la lista al hacer click fuera.
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if(containerRef.current && !containerRef.current.contains(event.target as Node)){
                setResults([]);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return(
        <div className="relative" ref={containerRef}>
                <div className="relative">
                    <input 
                        type="text" 
                        placeholder="Buscar en Vecindario..." 
                        onChange={(e) => setKeyword(e.target.value)}
                        value={keyword}
                        name="search"
                        className="rounded-2xl md:w-96 w-52 border border-gray-300 p-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-800 hover:border-gray-400 transition-all duration-200 ease-in-out bg-gray-50 dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 dark:placeholder-gray-400 dark:text-gray-200 dark:focus:ring-gray-200"
                    />
                    {results.length > 0 && (
                        <ul className="absolute left-0 right-0 top-full mt-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl shadow-lg z-10 max-h-96 overflow-y-auto">
                            {results.map((result: { id: string; nombre: string; nom_serv: string; descripcion: string }) => (
                                <li 
                                    key={result.id} 
                                    className="p-2 border-b border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200">
                                    <Link href={`/dashboard/dashboard-profile/${result.id}`}
                                        onClick={() => setResults([])}>
                                        <h3 className="font-semibold dark:text-gray-200">{result.nombre}</h3>
                                        <p className="text-sm text-gray-700 dark:text-gray-200">{result.nom_serv}</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-300">{result.descripcion}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
        </div>
    )
}