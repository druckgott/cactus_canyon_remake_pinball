const { useCallback } = React;
const ReactFlowLib = window.ReactFlow;

const ReactFlow = ReactFlowLib.ReactFlow;
const Background = ReactFlowLib.Background;
const Controls = ReactFlowLib.Controls;

const colors = {
    gunfight: '#b8860b',
    multiball: '#9400d3',
    locks: '#008000',
    highNoon: '#4b0082',
    skill: '#c71585',
    bart: '#b8860b'
};

// Zentrale Koordinaten-Definition
const playfieldCoords = {
    skillshot:  { x: 50, y: 5 },
    spinner:    { x: 30, y: 15 },
    gunfight:   { x: 80, y: 15 },
    marshall:   { x: 15, y: 40 },
    train:      { x: 10, y: 25 },
    mine:       { x: 50, y: 35 },
    lock1:      { x: 45, y: 25 },
    lock2:      { x: 50, y: 25 },
    lock3:      { x: 55, y: 25 },
    saloon:     { x: 75, y: 45 },
    bart_bros:  { x: 70, y: 55 },
    beer_mug:   { x: 85, y: 60 },
    polly:      { x: 30, y: 55 },
    stampede:   { x: 40, y: 65 },
    high_noon:  { x: 50, y: 85 }
};

const nodes = [
    // --- TOP SECTION ---
    { id: 'A', data: { label: 'Super Skill Shot', gameKey: 'skillshot' }, position: { x: 250, y: 0 }, style: { background: colors.skill, color: 'white' } },
    { id: 'B', data: { label: 'Spinner', gameKey: 'spinner' }, position: { x: 450, y: 0 }, style: { background: colors.skill, color: 'white' } },
    { id: 'C', data: { label: 'Saloon Fight', gameKey: 'saloon' }, position: { x: 580, y: 0 }, style: { background: colors.skill, color: 'white' } },
    { id: 'D', data: { label: 'Gunfight Ball Save', gameKey: 'gunfight' }, position: { x: 800, y: 0 }, style: { background: colors.skill, color: 'white' } },

    // --- MARSHALL / GUNFIGHT PROGRESSION ---
    { id: 'G', data: { label: 'Stranger' }, position: { x: 100, y: 100 }, style: { background: colors.gunfight } },
    { id: 'J', data: { label: 'Partner' }, position: { x: 100, y: 150 }, style: { background: colors.gunfight } },
    { id: 'M', data: { label: 'Deputy' }, position: { x: 100, y: 200 }, style: { background: colors.gunfight } },
    { id: 'P', data: { label: 'Sheriff' }, position: { x: 100, y: 250 }, style: { background: colors.gunfight } },
    { id: 'Q', data: { label: 'Marshall', gameKey: 'marshall' }, position: { x: 250, y: 175 }, style: { background: colors.gunfight } },
    { id: 'R', data: { label: 'Save the Train', gameKey: 'train' }, position: { x: 400, y: 175 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'S', data: { label: 'Marshall Multiball', gameKey: 'marshall' }, position: { x: 550, y: 175 }, style: { background: colors.multiball, color: 'white' } },

    // --- GOLD MINE SECTION ---
    { id: 'T', data: { label: 'Lock 1', gameKey: 'lock1' }, position: { x: 400, y: 350 }, style: { background: colors.locks, color: 'white' } },
    { id: 'U', data: { label: 'Lock 2', gameKey: 'lock2' }, position: { x: 550, y: 350 }, style: { background: colors.locks, color: 'white' } },
    { id: 'V', data: { label: 'Lock 3', gameKey: 'lock3' }, position: { x: 700, y: 350 }, style: { background: colors.locks, color: 'white' } },
    { id: 'W', data: { label: 'Gold Mine Multiball', gameKey: 'mine' }, position: { x: 550, y: 430 }, style: { background: colors.gunfight } },
    { id: 'X', data: { label: 'Mother Lode', gameKey: 'mine' }, position: { x: 550, y: 500 }, style: { background: colors.gunfight } },

    // --- POLLY MISSIONS (Extended) ---
    { id: 'A1', data: { label: 'Ride Em Cowboy' }, position: { x: 50, y: 400 }, style: { background: colors.gunfight } },
    { id: 'Y',  data: { label: 'Buckn Bronco' }, position: { x: 50, y: 450 }, style: { background: colors.gunfight } },
    { id: 'A4', data: { label: 'Save Polly (River)', gameKey: 'polly' }, position: { x: 50, y: 500 }, style: { background: colors.gunfight } },
    { id: 'A2', data: { label: 'Whitewater' }, position: { x: 50, y: 550 }, style: { background: colors.gunfight } },
    { id: 'A7', data: { label: 'Save Polly (Train)', gameKey: 'train' }, position: { x: 50, y: 600 }, style: { background: colors.gunfight } },
    { id: 'A5', data: { label: 'Catch Train' }, position: { x: 50, y: 650 }, style: { background: colors.gunfight } },
    { id: 'A14', data: { label: 'Stampede', gameKey: 'stampede' }, position: { x: 250, y: 550 }, style: { background: colors.gunfight } },

    // --- QUICK DRAW SECTION (New) ---
    { id: 'A26', data: { label: 'Light Quick Draw' }, position: { x: 850, y: 100 }, style: { background: colors.gunfight } },
    { id: 'A12', data: { label: 'Shootout', gameKey: 'gunfight' }, position: { x: 850, y: 150 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'A18', data: { label: 'Showdown', gameKey: 'showdown' }, position: { x: 850, y: 250 }, style: { background: colors.multiball, color: 'white' } },

    // --- CENTER PIECE ---
    { id: 'A15', data: { label: 'High Noon', gameKey: 'high_noon' }, position: { x: 550, y: 700 }, style: { background: colors.highNoon, color: 'white', fontWeight: 'bold' } },

    // --- BART BROTHERS (Complete Family) ---
    { id: 'A19', data: { label: 'Bart Brothers', gameKey: 'bart_bros' }, position: { x: 750, y: 500 }, style: { background: colors.gunfight } },
    { id: 'A21', data: { label: 'Big Bart' }, position: { x: 900, y: 400 }, style: { background: colors.gunfight } },
    { id: 'A22', data: { label: 'Bandolero Bart' }, position: { x: 900, y: 450 }, style: { background: colors.gunfight } },
    { id: 'A23', data: { label: 'Bubba Bart' }, position: { x: 900, y: 500 }, style: { background: colors.gunfight } },
    { id: 'A24', data: { label: 'Bionic Bart' }, position: { x: 900, y: 550 }, style: { background: colors.gunfight } },
    { id: 'A25', data: { label: 'Bella Bart' }, position: { x: 900, y: 600 }, style: { background: '#800000', color: 'white' } },
    { id: 'A20', data: { label: 'Saloon Party', gameKey: 'saloon' }, position: { x: 750, y: 600 }, style: { background: colors.multiball, color: 'white' } },

    // --- BEER MUGS SECTION ---
    { id: 'A34', data: { label: '10 Beer Mugs' }, position: { x: 750, y: 800 }, style: { background: colors.locks } },
    { id: 'A37', data: { label: 'Franks N Beans' }, position: { x: 900, y: 800 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'A35', data: { label: 'Shootout 2' }, position: { x: 750, y: 850 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'A39', data: { label: 'Drunken Multiball', gameKey: 'beer_mug' }, position: { x: 750, y: 950 }, style: { background: colors.multiball, color: 'white' } }
];

const edges = [
    { id: 'eB-C', source: 'B', target: 'C' },
    { id: 'eG-Q', source: 'G', target: 'Q' },
    { id: 'eJ-Q', source: 'J', target: 'Q' },
    { id: 'eM-Q', source: 'M', target: 'Q' },
    { id: 'eP-Q', source: 'P', target: 'Q' },
    { id: 'eQ-R', source: 'Q', target: 'R' },
    { id: 'eR-S', source: 'R', target: 'S' },
    { id: 'eT-W', source: 'T', target: 'W' },
    { id: 'eU-W', source: 'U', target: 'W' },
    { id: 'eV-W', source: 'V', target: 'W' },
    { id: 'eW-X', source: 'W', target: 'X' },
    { id: 'eX-A15', source: 'X', target: 'A15' },
    { id: 'eA1-A14', source: 'A1', target: 'A14' },
    { id: 'eA4-A14', source: 'A4', target: 'A14' },
    { id: 'eA14-A15', source: 'A14', target: 'A15' },
    { id: 'eA15-A19', source: 'A15', target: 'A19' },
    { id: 'eA19-A20', source: 'A19', target: 'A20' },
    { id: 'eA21-A20', source: 'A21', target: 'A20' },
    { id: 'eA25-A20', source: 'A25', target: 'A20' }
];

function App() {
    const onNodeClickFlow = useCallback((event, node) => {
        const gameKey = node.data.gameKey;
        
        // Wenn ein gameKey vorhanden ist, triggere die Playfield-Action
        if (gameKey && playfieldCoords[gameKey]) {
            console.log(`Action: ${gameKey}`);
            if (typeof onNodeClick === 'function') {
                onNodeClick(gameKey);
            }
        }
    }, []);

    return React.createElement(
        ReactFlow,
        {
            nodes,
            edges,
            onNodeClick: onNodeClickFlow,
            fitView: true,
            defaultEdgeOptions: { type: 'smoothstep' }
        },
        React.createElement(Background, { color: '#333', variant: 'dots' }),
        React.createElement(Controls)
    );
}

const root = ReactDOM.createRoot(document.getElementById('reactflow-root'));
root.render(React.createElement(App));