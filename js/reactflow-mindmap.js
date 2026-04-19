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
    { id: 'skillshot', data: { label: 'Super Skill Shot', gameKey: 'skillshot' }, position: { x: 250, y: 0 }, style: { background: colors.skill, color: 'white' } },
    { id: 'spinner', data: { label: 'Spinner', gameKey: 'spinner' }, position: { x: 450, y: 0 }, style: { background: colors.skill, color: 'white' } },
    { id: 'saloon_fight', data: { label: 'Saloon Fight', gameKey: 'saloon' }, position: { x: 580, y: 0 }, style: { background: colors.skill, color: 'white' } },
    { id: 'gunfight_save', data: { label: 'Gunfight Ball Save', gameKey: 'gunfight' }, position: { x: 800, y: 0 }, style: { background: colors.skill, color: 'white' } },

    // --- MARSHALL / GUNFIGHT PROGRESSION ---
    { id: 'stranger', data: { label: 'Stranger' }, position: { x: 100, y: 100 }, style: { background: colors.gunfight } },
    { id: 'partner', data: { label: 'Partner' }, position: { x: 100, y: 150 }, style: { background: colors.gunfight } },
    { id: 'deputy', data: { label: 'Deputy' }, position: { x: 100, y: 200 }, style: { background: colors.gunfight } },
    { id: 'sheriff', data: { label: 'Sheriff' }, position: { x: 100, y: 250 }, style: { background: colors.gunfight } },
    { id: 'marshall', data: { label: 'Marshall', gameKey: 'marshall' }, position: { x: 250, y: 175 }, style: { background: colors.gunfight } },
    { id: 'save_train', data: { label: 'Save the Train', gameKey: 'train' }, position: { x: 400, y: 175 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'marshall_multiball', data: { label: 'Marshall Multiball', gameKey: 'marshall' }, position: { x: 550, y: 175 }, style: { background: colors.multiball, color: 'white' } },

    // --- GOLD MINE SECTION ---
    { id: 'lock1', data: { label: 'Lock 1', gameKey: 'lock1' }, position: { x: 400, y: 350 }, style: { background: colors.locks, color: 'white' } },
    { id: 'lock2', data: { label: 'Lock 2', gameKey: 'lock2' }, position: { x: 550, y: 350 }, style: { background: colors.locks, color: 'white' } },
    { id: 'lock3', data: { label: 'Lock 3', gameKey: 'lock3' }, position: { x: 700, y: 350 }, style: { background: colors.locks, color: 'white' } },
    { id: 'mine_multiball', data: { label: 'Gold Mine Multiball', gameKey: 'mine' }, position: { x: 550, y: 430 }, style: { background: colors.gunfight } },
    { id: 'mother_lode', data: { label: 'Mother Lode', gameKey: 'mine' }, position: { x: 550, y: 500 }, style: { background: colors.gunfight } },

    // --- POLLY MISSIONS ---
    { id: 'ride_em', data: { label: 'Ride Em Cowboy' }, position: { x: 50, y: 400 }, style: { background: colors.gunfight } },
    { id: 'buckn_bronco', data: { label: 'Buckn Bronco' }, position: { x: 50, y: 450 }, style: { background: colors.gunfight } },
    { id: 'save_polly_river', data: { label: 'Save Polly (River)', gameKey: 'polly' }, position: { x: 50, y: 500 }, style: { background: colors.gunfight } },
    { id: 'whitewater', data: { label: 'Whitewater' }, position: { x: 50, y: 550 }, style: { background: colors.gunfight } },
    { id: 'save_polly_train', data: { label: 'Save Polly (Train)', gameKey: 'train' }, position: { x: 50, y: 600 }, style: { background: colors.gunfight } },
    { id: 'catch_train', data: { label: 'Catch Train' }, position: { x: 50, y: 650 }, style: { background: colors.gunfight } },
    { id: 'stampede', data: { label: 'Stampede', gameKey: 'stampede' }, position: { x: 250, y: 550 }, style: { background: colors.gunfight } },

    // --- QUICK DRAW / SHOOTOUT ---
    { id: 'light_quickdraw', data: { label: 'Light Quick Draw' }, position: { x: 850, y: 100 }, style: { background: colors.gunfight } },
    { id: 'shootout', data: { label: 'Shootout', gameKey: 'gunfight' }, position: { x: 850, y: 150 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'showdown', data: { label: 'Showdown', gameKey: 'showdown' }, position: { x: 850, y: 250 }, style: { background: colors.multiball, color: 'white' } },

    // --- CENTER PIECE ---
    { id: 'high_noon', data: { label: 'High Noon', gameKey: 'high_noon' }, position: { x: 550, y: 700 }, style: { background: colors.highNoon, color: 'white', fontWeight: 'bold' } },

    // --- BART BROTHERS ---
    { id: 'bart_brothers', data: { label: 'Bart Brothers', gameKey: 'bart_bros' }, position: { x: 750, y: 500 }, style: { background: colors.gunfight } },
    { id: 'big_bart', data: { label: 'Big Bart' }, position: { x: 900, y: 400 }, style: { background: colors.gunfight } },
    { id: 'bandolero_bart', data: { label: 'Bandolero Bart' }, position: { x: 900, y: 450 }, style: { background: colors.gunfight } },
    { id: 'bubba_bart', data: { label: 'Bubba Bart' }, position: { x: 900, y: 500 }, style: { background: colors.gunfight } },
    { id: 'bionic_bart', data: { label: 'Bionic Bart' }, position: { x: 900, y: 550 }, style: { background: colors.gunfight } },
    { id: 'bella_bart', data: { label: 'Bella Bart' }, position: { x: 900, y: 600 }, style: { background: '#800000', color: 'white' } },
    { id: 'saloon_party', data: { label: 'Saloon Party', gameKey: 'saloon' }, position: { x: 750, y: 600 }, style: { background: colors.multiball, color: 'white' } },

    // --- BEER MUGS ---
    { id: 'mugs_10', data: { label: '10 Beer Mugs' }, position: { x: 750, y: 800 }, style: { background: colors.locks } },
    { id: 'franks_beans', data: { label: 'Franks N Beans' }, position: { x: 900, y: 800 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'shootout_2', data: { label: 'Shootout 2' }, position: { x: 750, y: 850 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'drunken_multiball', data: { label: 'Drunken Multiball', gameKey: 'beer_mug' }, position: { x: 750, y: 950 }, style: { background: colors.multiball, color: 'white' } }
];


const edges = [
    { id: 'e-spinner-saloon', source: 'spinner', target: 'saloon_fight' },
    // Marshall Pfad
    { id: 'e-stranger-marshall', source: 'stranger', target: 'marshall' },
    { id: 'e-partner-marshall', source: 'partner', target: 'marshall' },
    { id: 'e-deputy-marshall', source: 'deputy', target: 'marshall' },
    { id: 'e-sheriff-marshall', source: 'sheriff', target: 'marshall' },
    { id: 'e-marshall-train', source: 'marshall', target: 'save_train' },
    { id: 'e-train-multiball', source: 'save_train', target: 'marshall_multiball' },
    // Mine Pfad
    { id: 'e-l1-mine', source: 'lock1', target: 'mine_multiball' },
    { id: 'e-l2-mine', source: 'lock2', target: 'mine_multiball' },
    { id: 'e-l3-mine', source: 'lock3', target: 'mine_multiball' },
    { id: 'e-mine-mother', source: 'mine_multiball', target: 'mother_lode' },
    { id: 'e-mother-highnoon', source: 'mother_lode', target: 'high_noon' },
    // Polly Pfad
    { id: 'e-ride-stampede', source: 'ride_em', target: 'stampede' },
    { id: 'e-pollyriver-stampede', source: 'save_polly_river', target: 'stampede' },
    { id: 'e-stampede-highnoon', source: 'stampede', target: 'high_noon' },
    // Bart Pfad
    { id: 'e-highnoon-bartbros', source: 'high_noon', target: 'bart_brothers' },
    { id: 'e-bartbros-saloonparty', source: 'bart_brothers', target: 'saloon_party' },
    { id: 'e-bigbart-party', source: 'big_bart', target: 'saloon_party' },
    { id: 'e-bellabart-party', source: 'bella_bart', target: 'saloon_party' },
    // Quickdraw Pfad
    { id: 'e-quick-shootout', source: 'light_quickdraw', target: 'shootout' },
    { id: 'e-shootout-showdown', source: 'shootout', target: 'showdown' }
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