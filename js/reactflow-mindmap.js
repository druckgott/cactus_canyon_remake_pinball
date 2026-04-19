const { useCallback } = React;
const ReactFlowLib = window.ReactFlow;

const ReactFlow = ReactFlowLib.ReactFlow;
const Background = ReactFlowLib.Background;
const Controls = ReactFlowLib.Controls;

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

const colors = {
    gunfight: '#b8860b',
    multiball: '#9400d3',
    locks: '#008000',
    highNoon: '#4b0082',
    skill: '#c71585',
    bart: '#b8860b'
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
    { id: 'mine_multiball', data: { label: 'Gold Mine Multiball', gameKey: 'mine' }, position: { x: 550, y: 430 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'mother_lode', data: { label: 'Mother Lode', gameKey: 'mine' }, position: { x: 550, y: 500 }, style: { background: colors.gunfight, color: 'white' } },

    // --- POLLY MISSIONS ---
    { id: 'ride_em', data: { label: 'Ride Em Cowboy' }, position: { x: 50, y: 400 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'buckn_bronco', data: { label: 'Save Polly' }, position: { x: 50, y: 450 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'save_polly_river', data: { label: 'Save Polly (River)', gameKey: 'polly' }, position: { x: 50, y: 500 }, style: { background: colors.gunfight , color: 'white'} },
    { id: 'whitewater', data: { label: 'Marksman' }, position: { x: 50, y: 550 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'save_polly_train', data: { label: 'SAve Polly', gameKey: 'train' }, position: { x: 50, y: 600 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'catch_train', data: { label: 'Wild Ride' }, position: { x: 50, y: 650 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'stampede', data: { label: 'Stampede', gameKey: 'stampede' }, position: { x: 250, y: 550 }, style: { background: colors.gunfight, color: 'white' } },

    // --- QUICK DRAW / SHOOTOUT ---
    { id: 'light_quickdraw', data: { label: 'Light Quick Draw' }, position: { x: 850, y: 100 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'shootout', data: { label: 'Shootout', gameKey: 'gunfight' }, position: { x: 850, y: 150 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'showdown', data: { label: 'Showdown', gameKey: 'showdown' }, position: { x: 850, y: 250 }, style: { background: colors.multiball, color: 'white' } },

    // --- CENTER PIECE ---
    { id: 'high_noon', data: { label: 'High Noon', gameKey: 'high_noon' }, position: { x: 550, y: 700 }, style: { background: colors.highNoon, color: 'white', fontWeight: 'bold' } },

    // --- BART BROTHERS ---
    { id: 'bart_brothers', data: { label: 'Bart Brothers', gameKey: 'bart_bros' }, position: { x: 750, y: 500 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'big_bart', data: { label: 'Big Bart' }, position: { x: 900, y: 400 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'bandolero_bart', data: { label: 'Bandolero Bart' }, position: { x: 900, y: 450 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'bubba_bart', data: { label: 'Bubba Bart' }, position: { x: 900, y: 500 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'bionic_bart', data: { label: 'Bionic Bart' }, position: { x: 900, y: 550 }, style: { background: colors.gunfight , color: 'white'} },
    { id: 'bella_bart', data: { label: 'Bella Bart' }, position: { x: 900, y: 600 }, style: { background: '#800000', color: 'white' } },
    { id: 'saloon_party', data: { label: 'Saloon Party', gameKey: 'saloon' }, position: { x: 750, y: 600 }, style: { background: colors.multiball, color: 'white' } },

    // --- BEER MUGS ---
    { id: 'mugs_10', data: { label: '10 Beer Mugs' }, position: { x: 750, y: 800 }, style: { background: colors.locks } },
    { id: 'franks_beans', data: { label: 'Franks N Beans' }, position: { x: 900, y: 800 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'shootout_2', data: { label: 'Shootout 2' }, position: { x: 750, y: 850 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'drunken_multiball', data: { label: 'Drunken Multiball', gameKey: 'beer_mug' }, position: { x: 750, y: 950 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'node_wrnfa', data: { label: 'Shoot Bad Guy 1', gameKey: 'beer_mug'  }, position: { x: -67, y: 100 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'node_71gyk', data: { label: 'Light Gunfight', gameKey: 'beer_mug'  }, position: { x: -223, y: 100 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'node_x31r8', data: { label: 'Shoot Bad Guy 2', gameKey: 'beer_mug'  }, position: { x: -63, y: 150 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'node_dfake', data: { label: 'Shoot Bad Guy 3', gameKey: 'beer_mug'  }, position: { x: -63, y: 203 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'node_59gk5', data: { label: 'Shoot Bad Guy 4', gameKey: 'beer_mug'  }, position: { x: -65, y: 251 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'node_mdw02', data: { label: 'Light Gunfight', gameKey: 'beer_mug'  }, position: { x: -223, y: 150 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'node_gkbzs', data: { label: 'Light Gunfight', gameKey: 'beer_mug'  }, position: { x: -222, y: 204 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'node_9et26', data: { label: 'Light Gunfight', gameKey: 'beer_mug'  }, position: { x: -222, y: 252 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'node_bm9a8', data: { label: 'Light Lock', gameKey: 'beer_mug'  }, position: { x: 396, y: 290 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'node_bswed', data: { label: 'Light Lock', gameKey: 'beer_mug'  }, position: { x: 554, y: 290 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'node_r05fa', data: { label: 'Light Lock', gameKey: 'beer_mug'  }, position: { x: 710, y: 290 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'node_gmlkf', data: { label: '10 Combo Shots', gameKey: 'beer_mug'  }, position: { x: 905, y: 631 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'node_dbgtq', data: { label: 'Combo', gameKey: 'beer_mug'  }, position: { x: 737, y: 630 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'node_nu3do', data: { label: 'Showdown', gameKey: 'beer_mug'  }, position: { x: 362, y: 790 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'node_o5d2z', data: { label: 'Shoot Bad Guy 1', gameKey: 'beer_mug'  }, position: { x: 156, y: 796 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'node_z1x0s', data: { label: 'Light Quick Draw', gameKey: 'beer_mug'  }, position: { x: -18, y: 794 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'node_xl8se', data: { label: 'Light Quick Draw', gameKey: 'beer_mug'  }, position: { x: -12, y: 954 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'node_kxr23', data: { label: 'Shoot Bad Guy 4', gameKey: 'beer_mug'  }, position: { x: 154, y: 952 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'node_tu2he', data: { label: 'Light Quick Draw', gameKey: 'beer_mug'  }, position: { x: -18, y: 900 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'node_es7a2', data: { label: 'Shoot Bad Guy 3', gameKey: 'beer_mug'  }, position: { x: 156, y: 898 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'node_khvwe', data: { label: 'Light Quick Draw', gameKey: 'beer_mug'  }, position: { x: -16, y: 838 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'node_i93vh', data: { label: 'Shoot Bad Guy 2', gameKey: 'beer_mug'  }, position: { x: 158, y: 844 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'node_wzgob', data: { label: '15 Beer Mugs', gameKey: 'beer_mug'  }, position: { x: 723, y: 988 }, style: { background: colors.locks, color: 'white' } },
    { id: 'node_qx79u', data: { label: '25 Beer Mugs', gameKey: 'beer_mug'  }, position: { x: 724, y: 1039 }, style: { background: colors.locks, color: 'white' } },
    { id: 'node_jks03', data: { label: 'Waterfall', gameKey: 'beer_mug'  }, position: { x: -113, y: 453 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'node_e3ex0', data: { label: 'Stop Train', gameKey: 'beer_mug'  }, position: { x: -113, y: 506 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'node_e9w07', data: { label: 'Gunsänger', gameKey: 'beer_mug'  }, position: { x: -115, y: 555 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'node_5l8xh', data: { label: 'Shootout', gameKey: 'beer_mug'  }, position: { x: -113, y: 597 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'node_zty1s', data: { label: 'Buck n Bronco', gameKey: 'beer_mug'  }, position: { x: -273, y: 397 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'node_9ija2', data: { label: 'Whitewater', gameKey: 'beer_mug'  }, position: { x: -274, y: 459 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'node_j4f2k', data: { label: 'Catch Train', gameKey: 'beer_mug'  }, position: { x: -277, y: 511 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'node_ceadw', data: { label: 'Good Shot', gameKey: 'beer_mug'  }, position: { x: -276, y: 559 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'node_a1s1x', data: { label: 'Sound Alarm', gameKey: 'beer_mug'  }, position: { x: -281, y: 605 }, style: { background: colors.gunfight, color: 'white' } },
];

const edges = [
    { id: 'e-spinner-saloon', source: 'spinner', target: 'saloon_fight' },
    { id: 'e-stranger-marshall', source: 'stranger', target: 'marshall' },
    { id: 'e-partner-marshall', source: 'partner', target: 'marshall' },
    { id: 'e-deputy-marshall', source: 'deputy', target: 'marshall' },
    { id: 'e-sheriff-marshall', source: 'sheriff', target: 'marshall' },
    { id: 'e-marshall-train', source: 'marshall', target: 'save_train' },
    { id: 'e-train-multiball', source: 'save_train', target: 'marshall_multiball' },
    { id: 'e-l1-mine', source: 'lock1', target: 'mine_multiball' },
    { id: 'e-l2-mine', source: 'lock2', target: 'mine_multiball' },
    { id: 'e-l3-mine', source: 'lock3', target: 'mine_multiball' },
    { id: 'e-mine-mother', source: 'mine_multiball', target: 'mother_lode' },
    { id: 'e-mother-highnoon', source: 'mother_lode', target: 'high_noon' },
    { id: 'e-ride-stampede', source: 'ride_em', target: 'stampede' },
    { id: 'e-pollyriver-stampede', source: 'save_polly_river', target: 'stampede' },
    { id: 'e-stampede-highnoon', source: 'stampede', target: 'high_noon' },
    { id: 'e-highnoon-bartbros', source: 'high_noon', target: 'bart_brothers' },
    { id: 'e-bartbros-saloonparty', source: 'bart_brothers', target: 'saloon_party' },
    { id: 'e-bigbart-party', source: 'big_bart', target: 'saloon_party' },
    { id: 'e-bellabart-party', source: 'bella_bart', target: 'saloon_party' },
    { id: 'e-quick-shootout', source: 'light_quickdraw', target: 'shootout' },
    { id: 'e-shootout-showdown', source: 'shootout', target: 'showdown' },
    { id: 'e-stranger-node_wrnfa', source: 'stranger', target: 'node_wrnfa' }
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