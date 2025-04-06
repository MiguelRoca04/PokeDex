import { useParams } from "react-router";
import { Loading } from "../components/Loading";
import { usePokemonDetail } from "../services/pockemonapi";

export const Details = () => {
    const { pokeid } = useParams();
    const pokemonData = usePokemonDetail(pokeid);

    if (!pokemonData) {
        return (
            <Loading />
        )
    }

    return (
        <section style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            backgroundColor: "#f1f5f9", // Fondo gris claro
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "1rem",
            minHeight: "100vh",
        }}>
            <div style={{
                maxWidth: "1024px",
                width: "100%",
                margin: "2rem auto",
                textAlign: "center",
                backgroundColor: "#ffffff", // Fondo blanco
                borderRadius: "1.5rem",
                padding: "2rem",
                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
            }}>
                {/* Imagen del Pokémon */}
                <img
                    src={pokemonData.sprites.front_default}
                    alt={`${pokemonData.name} sprite`}
                    style={{
                        width: "12rem",
                        height: "12rem",
                        objectFit: "contain",
                        border: "3px solid #1d4ed8", // Borde azul oscuro
                        borderRadius: "50%",
                        marginBottom: "1.5rem",
                        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                    }}
                />

                {/* Título con el nombre del Pokémon */}
                <h1 style={{
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                    color: "#1d4ed8",
                    marginBottom: "2rem",
                }}>
                    {pokemonData.name}
                </h1>

                {/* Puntos vitales */}
                <div style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginBottom: "2rem",
                    padding: "1rem",
                    backgroundColor: "#e0f2ff",
                    borderRadius: "1rem",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                    fontWeight: "bold",
                    color: "#2563eb",
                }}>
                    <div>HP: {pokemonData.stats[0].base_stat}</div>
                    <div>Attack: {pokemonData.stats[1].base_stat}</div>
                    <div>Defense: {pokemonData.stats[2].base_stat}</div>
                    <div>Speed: {pokemonData.stats[5].base_stat}</div>
                </div>

                {/* Lista de movimientos (limitada a 4) */}
                <ul style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "1rem",
                }}>
                    {pokemonData.moves.slice(0, 4).map((move, index) => (
                        <li key={index} style={{
                            backgroundColor: "#e5e7eb", // Fondo gris claro
                            padding: "1rem",
                            borderRadius: "0.5rem",
                            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                            fontSize: "1rem",
                            fontWeight: "bold",
                            color: "#374151", // Texto gris oscuro
                            textAlign: "center",
                        }}>
                            {move.move.name}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};