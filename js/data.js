const GameData = {
    // Die Mindmap-Struktur als String
    mermaidDefinition: `
        graph TD
            START((Cactus Canyon)) --> MB[Marshall Multiball]
            START --> BB[Bart Brothers]
            MB --> ST[Save the Train]
            BB --> SP[Saloon Party]

            click MB call onNodeClick("marshall")
            click ST call onNodeClick("train")
            click BB call onNodeClick("saloon")
            click SP call onNodeClick("saloon")

            style START fill:#f5e6c8,stroke:#d4a017
    `,

    // Die passenden Koordinaten für den Marker
    coordinates: {
        "marshall": { x: 50, y: 65 },
        "train":    { x: 25, y: 30 },
        "saloon":   { x: 55, y: 40 }
    }
};