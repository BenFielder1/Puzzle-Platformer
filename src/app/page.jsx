"use client"

import dynamic from "next/dynamic";

const Game1 = dynamic(() => import("./Game1"), {
    ssr: false,
    loading: () => <div>Loading Game...</div>
});

const Game2 = dynamic(() => import("./Game2"), {
    ssr: false,
    loading: () => <div>Loading Game...</div>
});

export default function GamePage() {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Game1 /><Game2 />
        </div>
    );
}

