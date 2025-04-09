//import { Search } from "lucide-react";
import React, { useState, useEffect } from "react"; 
import Link from "next/link";

export default function SearchBar(){

    const [keyword, setKeyword] = useState('');
    const [results, setResults] = useState([]);
    const containerRef = React.useRef<HTMLDivElement>(null);

    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const res = await fetch(`/api/search?keyword=${encodeURIComponent(keyword)}`);
        const json = await res.json();
        if(json.status === 'success'){
            setResults(json.data);
        }
    }

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
            <form onSubmit={handleSearch} action="#" className="gap-2 flex items-center justify-center md:justify-start">
                {/* Contenedor del input para limitar la anchura de los resultados */}
                <div className="relative">
                    <input 
                        type="text" 
                        placeholder="Buscar en Vecindario" 
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
                <button type="submit" className="transform hover:scale-105 hover:ease-out transition duration-300 inline-flex items-center px-4 py-2 text-lg font-medium text-center text-white bg-vecino rounded-full hover:bg-orange-600 focus:ring-2 dark:focus:ring-white focus:ring-darkbg focus:outline-none">Buscar</button>
            </form>
        </div>
    )
}