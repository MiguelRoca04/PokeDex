import { useState } from 'react';
import { useNavigate } from 'react-router';

import { PokemonList } from '../components/Pokemon/PokemonList';
import { usePokemonList } from '../services/pockemonapi';
import { Paging } from '../components/Paging/Paging';

export const DashboardPage = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const pokemons = usePokemonList(page - 1, limit);
    const navigateTo = useNavigate();

    const viewPokemonDetail = (code) => {
        const url = `details/${code}`;
        navigateTo(url);
    };

    return (
        <section style={{
            padding: "1.5rem",
            backgroundColor: "#8B0000", // Rojo oscuro tipo sangre
            minHeight: "100vh",
        }}>
            <div style={{
                maxWidth: "1024px",
                margin: "0 auto",
                backgroundColor: "#ffffff", // Blanco para contraste
                borderRadius: "1rem",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                padding: "1.5rem",
            }}>
                <h1 style={{
                    textAlign: "center",
                    fontSize: "2rem",
                    fontWeight: "bold",
                    color: "#B22222", // Rojo intenso para el título
                    marginBottom: "1.5rem",
                }}>
                    Dashboard Pokémon
                </h1>
                <PokemonList
                    pokemonList={pokemons.results}
                    clickHandler={viewPokemonDetail}
                />
                <Paging
                    totalElements={pokemons.count}
                    limit={limit}
                    page={page}
                    onPageChange={setPage}
                    onLimitChange={setLimit}
                />
            </div>
        </section>
    );
};