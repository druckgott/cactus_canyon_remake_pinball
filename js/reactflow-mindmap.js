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
    { id: 'skillshot', data: { label: 'Super Skill Shot', gameKey: 'skillshot' }, position: { x: 160, y: 0 }, style: { background: colors.skill, color: 'white' } },
    { id: 'spinner', data: { label: 'Spinner', gameKey: 'spinner' }, position: { x: 420, y: 0 }, style: { background: colors.skill, color: 'white' } },
    { id: 'saloon_fight', data: { label: 'Saloon Fight', gameKey: 'saloon' }, position: { x: 600, y: 0 }, style: { background: colors.skill, color: 'white' } },
    { id: 'gunfight_save', data: { label: 'Gunfight Ball Save', gameKey: 'gunfight' }, position: { x: 840, y: 0 }, style: { background: colors.skill, color: 'white' } },

    // --- MARSHALL / GUNFIGHT PROGRESSION ---
    { id: 'stranger', data: { label: 'Stranger' }, position: { x: 60, y: 80 }, style: { background: colors.gunfight } },
    { id: 'partner', data: { label: 'Partner' }, position: { x: 60, y: 140 }, style: { background: colors.gunfight } },
    { id: 'deputy', data: { label: 'Deputy' }, position: { x: 60, y: 200 }, style: { background: colors.gunfight } },
    { id: 'sheriff', data: { label: 'Sheriff' }, position: { x: 60, y: 260 }, style: { background: colors.gunfight } },
    { id: 'marshall', data: { label: 'Marshall', gameKey: 'marshall' }, position: { x: 240, y: 160 }, style: { background: colors.gunfight } },
    { id: 'save_train', data: { label: 'Save the Train', gameKey: 'train' }, position: { x: 420, y: 160 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'marshall_multiball', data: { label: 'Marshall Multiball', gameKey: 'marshall' }, position: { x: 600, y: 160 }, style: { background: colors.multiball, color: 'white' } },

    // --- GOLD MINE SECTION ---
    { id: 'lock1', data: { label: 'Lock 1', gameKey: 'lock1' }, position: { x: 380, y: 340 }, style: { background: colors.locks, color: 'white' } },
    { id: 'lock2', data: { label: 'Lock 2', gameKey: 'lock2' }, position: { x: 560, y: 340 }, style: { background: colors.locks, color: 'white' } },
    { id: 'lock3', data: { label: 'Lock 3', gameKey: 'lock3' }, position: { x: 740, y: 340 }, style: { background: colors.locks, color: 'white' } },
    { id: 'mine_multiball', data: { label: 'Gold Mine Multiball', gameKey: 'mine' }, position: { x: 560, y: 420 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'mother_lode', data: { label: 'Mother Lode', gameKey: 'mine' }, position: { x: 560, y: 520 }, style: { background: colors.gunfight, color: 'white' } },

    // --- POLLY MISSIONS ---
    { id: 'ride_em', data: { label: 'Ride Em Cowboy' }, position: { x: 40, y: 400 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'buckn_bronco', data: { label: 'Save Polly' }, position: { x: 40, y: 460 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'save_polly_river', data: { label: 'Save Polly (River)', gameKey: 'polly' }, position: { x: 40, y: 520 }, style: { background: colors.gunfight , color: 'white'} },
    { id: 'whitewater', data: { label: 'Marksman' }, position: { x: 40, y: 580 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'save_polly_train', data: { label: 'SAve Polly', gameKey: 'train' }, position: { x: 40, y: 640 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'catch_train', data: { label: 'Wild Ride' }, position: { x: -120, y: 400 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'stampede', data: { label: 'Stampede', gameKey: 'stampede' }, position: { x: 320, y: 580 }, style: { background: colors.gunfight, color: 'white' } },

    // --- CENTER PIECE ---
    { id: 'high_noon', data: { label: 'High Noon', gameKey: 'high_noon' }, position: { x: 560, y: 680 }, style: { background: colors.highNoon, color: 'white', fontWeight: 'bold' } },

    // --- BART BROTHERS ---
    { id: 'bart_brothers', data: { label: 'Bart Brothers', gameKey: 'bart_bros' }, position: { x: 740, y: 840 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'big_bart', data: { label: 'Big Bart' }, position: { x: 1080, y: 700 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'bandolero_bart', data: { label: 'Bandolero Bart' }, position: { x: 1080, y: 760 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'bubba_bart', data: { label: 'Bubba Bart' }, position: { x: 1080, y: 820 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'bionic_bart', data: { label: 'Bionic Bart' }, position: { x: 1080, y: 880 }, style: { background: colors.gunfight , color: 'white'} },
    { id: 'bella_bart', data: { label: 'Bella Bart' }, position: { x: 1080, y: 940 }, style: { background: '#800000', color: 'white' } },
    { id: 'saloon_party', data: { label: 'Saloon Party', gameKey: 'saloon' }, position: { x: 900, y: 840 }, style: { background: colors.multiball, color: 'white' } },

    // --- BEER MUGS ---
    { id: 'mugs_10', data: { label: '10 Beer Mugs' }, position: { x: 460, y: 940 }, style: { background: colors.locks } },
    { id: 'franks_beans', data: { label: 'Franks N Beans' }, position: { x: 660, y: 1000 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'shootout_2', data: { label: 'Shootout 2' }, position: { x: 660, y: 940 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'drunken_multiball', data: { label: 'Drunken Multiball', gameKey: 'beer_mug' }, position: { x: 660, y: 1060 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'node_wrnfa', data: { label: 'Shoot Bad Guy 1', gameKey: 'beer_mug'  }, position: { x: -100, y: 80 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'node_71gyk', data: { label: 'Light Gunfight', gameKey: 'beer_mug'  }, position: { x: -260, y: 80 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'node_x31r8', data: { label: 'Shoot Bad Guy 2', gameKey: 'beer_mug'  }, position: { x: -100, y: 140 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'node_dfake', data: { label: 'Shoot Bad Guy 3', gameKey: 'beer_mug'  }, position: { x: -100, y: 200 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'node_59gk5', data: { label: 'Shoot Bad Guy 4', gameKey: 'beer_mug'  }, position: { x: -100, y: 260 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'node_mdw02', data: { label: 'Light Gunfight', gameKey: 'beer_mug'  }, position: { x: -260, y: 140 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'node_gkbzs', data: { label: 'Light Gunfight', gameKey: 'beer_mug'  }, position: { x: -260, y: 200 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'node_9et26', data: { label: 'Light Gunfight', gameKey: 'beer_mug'  }, position: { x: -260, y: 260 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'node_bm9a8', data: { label: 'Light Lock', gameKey: 'beer_mug'  }, position: { x: 380, y: 280 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'node_bswed', data: { label: 'Light Lock', gameKey: 'beer_mug'  }, position: { x: 560, y: 280 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'node_r05fa', data: { label: 'Light Lock', gameKey: 'beer_mug'  }, position: { x: 740, y: 280 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'node_gmlkf', data: { label: '10 Combo Shots', gameKey: 'beer_mug'  }, position: { x: 1020, y: 580 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'node_dbgtq', data: { label: 'Combo', gameKey: 'beer_mug'  }, position: { x: 820, y: 580 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'node_nu3do', data: { label: 'Showdown', gameKey: 'beer_mug'  }, position: { x: 380, y: 840 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'node_o5d2z', data: { label: 'Shoot Bad Guy 1', gameKey: 'beer_mug'  }, position: { x: 140, y: 780 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'node_z1x0s', data: { label: 'Light Quick Draw', gameKey: 'beer_mug'  }, position: { x: -20, y: 780 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'node_xl8se', data: { label: 'Light Quick Draw', gameKey: 'beer_mug'  }, position: { x: -20, y: 960 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'node_kxr23', data: { label: 'Shoot Bad Guy 4', gameKey: 'beer_mug'  }, position: { x: 140, y: 960 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'node_tu2he', data: { label: 'Light Quick Draw', gameKey: 'beer_mug'  }, position: { x: -20, y: 900 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'node_es7a2', data: { label: 'Shoot Bad Guy 3', gameKey: 'beer_mug'  }, position: { x: 140, y: 900 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'node_khvwe', data: { label: 'Light Quick Draw', gameKey: 'beer_mug'  }, position: { x: -20, y: 840 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'node_i93vh', data: { label: 'Shoot Bad Guy 2', gameKey: 'beer_mug'  }, position: { x: 140, y: 840 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'node_wzgob', data: { label: '15 Beer Mugs', gameKey: 'beer_mug'  }, position: { x: 460, y: 1000 }, style: { background: colors.locks, color: 'white' } },
    { id: 'node_qx79u', data: { label: '25 Beer Mugs', gameKey: 'beer_mug'  }, position: { x: 460, y: 1060 }, style: { background: colors.locks, color: 'white' } },
    { id: 'node_jks03', data: { label: 'Waterfall', gameKey: 'beer_mug'  }, position: { x: -120, y: 460 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'node_e3ex0', data: { label: 'Stop Train', gameKey: 'beer_mug'  }, position: { x: -120, y: 520 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'node_e9w07', data: { label: 'Gunsänger', gameKey: 'beer_mug'  }, position: { x: -120, y: 580 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'node_5l8xh', data: { label: 'Shootout', gameKey: 'beer_mug'  }, position: { x: -120, y: 640 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'node_zty1s', data: { label: 'Buck n Bronco', gameKey: 'beer_mug'  }, position: { x: -280, y: 400 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'node_9ija2', data: { label: 'Whitewater', gameKey: 'beer_mug'  }, position: { x: -280, y: 460 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'node_j4f2k', data: { label: 'Catch Train', gameKey: 'beer_mug'  }, position: { x: -280, y: 520 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'node_ceadw', data: { label: 'Good Shot', gameKey: 'beer_mug'  }, position: { x: -280, y: 580 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'node_a1s1x', data: { label: 'Sound Alarm', gameKey: 'beer_mug'  }, position: { x: -280, y: 640 }, style: { background: colors.gunfight, color: 'white' } },
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
    { id: 'e-stranger-node_wrnfa', source: 'stranger', target: 'node_wrnfa' },
    { id: 'e-node_gmlkf-node_dbgtq', source: 'node_gmlkf', target: 'node_dbgtq' },
    { id: 'e-node_dbgtq-high_noon', source: 'node_dbgtq', target: 'high_noon' },
    { id: 'e-high_noon-node_nu3do', source: 'high_noon', target: 'node_nu3do' },
    { id: 'e-node_o5d2z-node_z1x0s', source: 'node_o5d2z', target: 'node_z1x0s' },
    { id: 'e-node_i93vh-node_khvwe', source: 'node_i93vh', target: 'node_khvwe' },
    { id: 'e-node_es7a2-node_tu2he', source: 'node_es7a2', target: 'node_tu2he' },
    { id: 'e-node_kxr23-node_xl8se', source: 'node_kxr23', target: 'node_xl8se' },
    { id: 'e-node_nu3do-node_o5d2z', source: 'node_nu3do', target: 'node_o5d2z' },
    { id: 'e-node_nu3do-node_i93vh', source: 'node_nu3do', target: 'node_i93vh' },
    { id: 'e-node_nu3do-node_es7a2', source: 'node_nu3do', target: 'node_es7a2' },
    { id: 'e-node_nu3do-node_kxr23', source: 'node_nu3do', target: 'node_kxr23' },
    { id: 'e-shootout_2-mugs_10', source: 'shootout_2', target: 'mugs_10' },
    { id: 'e-franks_beans-node_wzgob', source: 'franks_beans', target: 'node_wzgob' },
    { id: 'e-drunken_multiball-node_qx79u', source: 'drunken_multiball', target: 'node_qx79u' }
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