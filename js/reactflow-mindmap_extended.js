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
    root: '#a16207',
    core: '#4d7c0f',
    mode: '#c2410c',
    combat: '#b91c1c',
    award: '#1d4ed8',
    wizard: '#7e22ce',
    bronco_loop: '#F92BE7',              // links (linker Orbit/Loop)
    river_adventure_ramp: '#00FEFE',     // links (linke Rampe)
    train_ramp: '#00C8FF',               // mitte (zentrale Rampe / Gold Mine Shot)
    sharpshooter_loop: '#0097ee',        // rechts (rechter Orbit/Loop)
    bank_robbery_ramp: '#F051DE'         // rechts (rechte Rampe)
};

const nodes = [
 { id: 'skill_shot_quick_draw', type: 'custom', data: { label: '⚡ Light Quick Draw', gameKey: 'quick_draw' }, position: { x: -540, y: 40 }, style: { background: colors.combat, color: 'white' } },
  { id: 'skill_shot_gun_fight', type: 'custom', data: { label: '🔫 Light Gun Fight', gameKey: 'gun_fight' }, position: { x: -540, y: 80 }, style: { background: colors.combat, color: 'white' } },
  { id: 'skill_shot_extra_ball', type: 'custom', data: { label: '➕ Light Extra Ball', gameKey: 'extra_ball' }, position: { x: -540, y: 120 }, style: { background: colors.combat, color: 'white' } },
  { id: 'skill_shot_bounty_award', type: 'custom', data: { label: '🏆 Light Bounty Award', gameKey: 'bounty_award' }, position: { x: -540, y: 160 }, style: { background: colors.combat, color: 'white' } },
  { id: 'skill_shot_bronco_loop', type: 'custom', data: { label: '🐎 Complete Bronco Loop', gameKey: 'bronco_loop' }, position: { x: -540, y: 340 }, style: { background: colors.core, color: 'white' } },
  { id: 'skill_shot_river_ramp', type: 'custom', data: { label: '🌊 Complete River Ramp', gameKey: 'river_ramp' }, position: { x: -540, y: 220 }, style: { background: colors.core, color: 'white' } },
  { id: 'skill_shot_train_mode', type: 'custom', data: { label: '🚂 Complete Train Mode', gameKey: 'train_mode' }, position: { x: -540, y: 280 }, style: { background: colors.core, color: 'white' } },
  { id: 'skill_shot_trick_loop', type: 'custom', data: { label: '🎯 Complete Trick Loop', gameKey: 'trick_loop' }, position: { x: -540, y: 400 }, style: { background: colors.core, color: 'white' } },
  { id: 'skill_shot_bank_ramp', type: 'custom', data: { label: '💰 Complete Bank Ramp', gameKey: 'bank_ramp' }, position: { x: -540, y: 460 }, style: { background: colors.core, color: 'white' } },
  { id: 'skill_shot_increase_rank', type: 'custom', data: { label: '⭐ Increase Rank', gameKey: 'increase_rank' }, position: { x: -540, y: 520 }, style: { background: colors.award, color: 'white' } },
  { id: 'skill_shot_bonus_x3', type: 'custom', data: { label: '✖️3 Bonus x3', gameKey: 'bonus_x3' }, position: { x: -540, y: 560 }, style: { background: colors.award, color: 'white' } },
  { id: 'skill_shot_million_points', type: 'custom', data: { label: '💎 1 Million Points', gameKey: 'million_points' }, position: { x: -540, y: 600 }, style: { background: colors.award, color: 'white' } },
  { id: 'skill_shot_light_lock', type: 'custom', data: { label: '🔒 Light Lock', gameKey: 'light_lock' }, position: { x: -540, y: 640 }, style: { background: colors.award, color: 'white' } },
 
  // --- TOP SECTION ---
  { id: 'root', type: 'custom', data: { label: '🌵 Cactus Canyon Remake', gameKey: 'root' }, position: { x: 360, y: 40 }, style: { background: colors.root, color: 'white' } },

  { id: 'skill', type: 'custom', data: { label: '🚀 Skill Shot', gameKey: 'skill' }, position: { x: -240, y: 180 }, style: { background: colors.core, color: 'white' } },
  { id: 'lanes', type: 'custom', data: { label: '🌵 Cactus Lanes', gameKey: 'lanes' }, position: { x: -240, y: 120 }, style: { background: colors.core, color: 'white' } },
  { id: 'combo', type: 'custom', data: { label: '🔗 Combos System', gameKey: 'combo' }, position: { x: 200, y: 460 }, style: { background: colors.core, color: 'white' } },

  { id: 'bronco', type: 'custom', data: { label: '🐴 Bronco Loop', gameKey: 'bronco' }, position: { x: 440, y: 540 }, style: { background: colors.core, color: 'white' } },
  { id: 'trick', type: 'custom', data: { label: '🎯 Trick Loop', gameKey: 'trick' }, position: { x: 60, y: 460 }, style: { background: colors.core, color: 'white' } },
  { id: 'beer', type: 'custom', data: { label: '🍺 Beer Mug Target', gameKey: 'beer' }, position: { x: 60, y: 600 }, style: { background: colors.core, color: 'white' } },

  { id: 'modes', type: 'custom', data: { label: '🎯 Mode System', gameKey: 'modes' }, position: { x: 600, y: 180 }, style: { background: colors.mode, color: 'white' } },
  { id: 'train', type: 'custom', data: { label: '🚂 Train Mode', gameKey: 'train' }, position: { x: 620, y: 320 }, style: { background: colors.mode, color: 'white' } },
  { id: 'river', type: 'custom', data: { label: '🌊 River Mode', gameKey: 'river' }, position: { x: 620, y: 440 }, style: { background: colors.mode, color: 'white' } },
  { id: 'bank', type: 'custom', data: { label: '🏦 Bank Mode', gameKey: 'bank' }, position: { x: 620, y: 380 }, style: { background: colors.mode, color: 'white' } },
  { id: 'cowboy', type: 'custom', data: { label: '🐎 Ride Em Cowboy', gameKey: 'cowboy' }, position: { x: 620, y: 500 }, style: { background: colors.mode, color: 'white' } },

  { id: 'award', type: 'custom', data: { label: '🏆 Bounty Award', gameKey: 'award' }, position: { x: -240, y: 240 }, style: { background: colors.award, color: 'white' } },
  { id: 'extra', type: 'custom', data: { label: '💎 Extra Ball', gameKey: 'extra' }, position: { x: 200, y: 680 }, style: { background: colors.award, color: 'white' } },
  { id: 'lock', type: 'custom', data: { label: '🔒 Ball Lock', gameKey: 'lock' }, position: { x: 380, y: 600 }, style: { background: colors.award, color: 'white' } },

  { id: 'combat', type: 'custom', data: { label: '🔫 Combat System', gameKey: 'combat' }, position: { x: 900, y: 180 }, style: { background: colors.combat, color: 'white' } },
  { id: 'quick', type: 'custom', data: { label: '⚡ Quick Draw', gameKey: 'quick' }, position: { x: 860, y: 320 }, style: { background: colors.combat, color: 'white' } },
  { id: 'gun', type: 'custom', data: { label: '🔫 Gun Fight', gameKey: 'gun' }, position: { x: 1040, y: 320 }, style: { background: colors.combat, color: 'white' } },
  { id: 'shootout', type: 'custom', data: { label: '🎯 Shootout Topper', gameKey: 'shootout' }, position: { x: 920, y: 460 }, style: { background: colors.combat, color: 'white' } },
  { id: 'outlane', type: 'custom', data: { label: '🚪 Outlane Trigger', gameKey: 'outlane' }, position: { x: 1040, y: 460 }, style: { background: colors.combat, color: 'white' } },

  { id: 'high', type: 'custom', data: { label: '⭐ High Noon', gameKey: 'high' }, position: { x: 600, y: 720 }, style: { background: colors.wizard, color: 'white' } },
  { id: 's1', type: 'custom', data: { label: '⭐ Star 1 - Bionic Bart', gameKey: 's1' }, position: { x: 1120, y: 800 }, style: { background: colors.wizard, color: 'white' } },
  { id: 's2', type: 'custom', data: { label: '⭐ Star 2 - Showdown MB', gameKey: 's2' }, position: { x: 420, y: 960 }, style: { background: colors.wizard, color: 'white' } },
  { id: 's3', type: 'custom', data: { label: '⭐ Star 3 - Mine MB', gameKey: 's3' }, position: { x: 780, y: 940 }, style: { background: colors.wizard, color: 'white' } },
  { id: 's4', type: 'custom', data: { label: '⭐ Star 4 - Stampede', gameKey: 's4' }, position: { x: 380, y: 660 }, style: { background: colors.wizard, color: 'white' } },
  { id: 's5', type: 'custom', data: { label: '⭐ Star 5 - Combos', gameKey: 's5' }, position: { x: 840, y: 660 }, style: { background: colors.wizard, color: 'white' } },

  { id: 'rank', type: 'custom', data: { label: '⭐ Rank System', gameKey: 'rank' }, position: { x: 980, y: 580 }, style: { background: colors.wizard, color: 'white' } },
  { id: 'saloon', type: 'custom', data: { label: '🚪 Saloon / Bart Bros', gameKey: 'saloon' }, position: { x: 1120, y: 840 }, style: { background: colors.wizard, color: 'white' } },
  { id: 'mine', type: 'custom', data: { label: '⛏️ Mine Multiball', gameKey: 'mine' }, position: { x: 960, y: 940 }, style: { background: colors.wizard, color: 'white' } },
    { id: '3x_bonus', type: 'custom', data: { label: '✖️ 3x Bonus', gameKey: 'bonus3' }, position: { x: -60, y: 180 }, style: { background: colors.award, color: 'white' } },
    { id: '1x_bonus', type: 'custom', data: { label: '✖️ 1x Bonus', gameKey: 'million' }, position: { x: -60, y: 120 }, style: { background: colors.award, color: 'white' } },
    { id: 'xx_bonus', type: 'custom', data: { label: '✖️ Xx Bonus', gameKey: 'beer_mug' }, position: { x: -60, y: 240 }, style: { background: colors.combat, color: 'white' } },


];

const edges = [
    { id: 'e-skill_shot_quick_draw-skill-s-right-t-left', source: 'skill_shot_quick_draw', target: 'skill', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-skill_shot_gun_fight-skill-s-right-t-left', source: 'skill_shot_gun_fight', target: 'skill', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-skill_shot_extra_ball-skill-s-right-s-left', source: 'skill_shot_extra_ball', target: 'skill', sourceHandle: 's-right', targetHandle: 's-left' },
    { id: 'e-skill_shot_bounty_award-skill-s-right-t-left', source: 'skill_shot_bounty_award', target: 'skill', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-skill_shot_river_ramp-skill-s-right-t-left', source: 'skill_shot_river_ramp', target: 'skill', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-skill_shot_train_mode-skill-s-right-s-left', source: 'skill_shot_train_mode', target: 'skill', sourceHandle: 's-right', targetHandle: 's-left' },
    { id: 'e-skill_shot_bronco_loop-skill-s-right-t-left', source: 'skill_shot_bronco_loop', target: 'skill', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-skill_shot_trick_loop-skill-s-right-t-left', source: 'skill_shot_trick_loop', target: 'skill', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-skill_shot_bank_ramp-skill-s-right-s-left', source: 'skill_shot_bank_ramp', target: 'skill', sourceHandle: 's-right', targetHandle: 's-left' },
    { id: 'e-skill_shot_increase_rank-skill-s-right-t-left', source: 'skill_shot_increase_rank', target: 'skill', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-skill_shot_bonus_x3-skill-s-right-t-left', source: 'skill_shot_bonus_x3', target: 'skill', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-skill_shot_million_points-skill-s-right-t-left', source: 'skill_shot_million_points', target: 'skill', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-skill_shot_light_lock-skill-s-right-t-left', source: 'skill_shot_light_lock', target: 'skill', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-award-bonus3-s-right-t-left', source: 'award', target: 'bonus3', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-lanes-1x_bonus-s-right-s-left', source: 'lanes', target: '1x_bonus', sourceHandle: 's-right', targetHandle: 's-left' },
    { id: 'e-skill-3x_bonus-s-right-t-left', source: 'skill', target: '3x_bonus', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-award-node_ro26x9t3-s-right-s-left', source: 'award', target: 'node_ro26x9t3', sourceHandle: 's-right', targetHandle: 's-left' },
    { id: 'e-award-xx_bonus-s-right-t-left', source: 'award', target: 'xx_bonus', sourceHandle: 's-right', targetHandle: 't-left' }

   
];


const edgeOptions = {
  type: 'step',
  style: { strokeWidth: 3 },
  markerEnd: {
    type: 'arrowclosed',
    color: '#999',
  },
pathOptions: { borderRadius: 10 },
};

const CustomNode = ({ data }) => {
  return React.createElement(
    "div",
    {
      style: {
        width: 150,
        padding: 10,
        fontSize: 12,
        borderRadius: 3,
        border: "1px solid #1a192b",
        textAlign: "center",
        boxSizing: "border-box"
      }
    },

    React.createElement(ReactFlowLib.Handle, {
      type: "source",
      position: "top",
      id: "s-top"
    }),
    React.createElement(ReactFlowLib.Handle, {
      type: "source",
      position: "left",
      id: "s-left"
    }),
    React.createElement(ReactFlowLib.Handle, {
      type: "source",
      position: "right",
      id: "s-right"
    }),
    React.createElement(ReactFlowLib.Handle, {
      type: "source",
      position: "bottom",
      id: "s-bottom"
    }),

    React.createElement(ReactFlowLib.Handle, {
      type: "target",
      position: "top",
      id: "t-top"
    }),
    React.createElement(ReactFlowLib.Handle, {
      type: "target",
      position: "left",
      id: "t-left"
    }),
    React.createElement(ReactFlowLib.Handle, {
      type: "target",
      position: "right",
      id: "t-right"
    }),
    React.createElement(ReactFlowLib.Handle, {
      type: "target",
      position: "bottom",
      id: "t-bottom"
    }),

    React.createElement("div", null, data.label)
  );
};

const nodeTypes = { custom: CustomNode };

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
            connectionMode: "loose",
            nodeTypes: nodeTypes,
            edges,
            onNodeClick: onNodeClickFlow,
            fitView: true,
            defaultEdgeOptions: edgeOptions,
            connectionMode: 'loose'
        },
        React.createElement(Background, { color: '#333', variant: 'dots' }),
        React.createElement(Controls)
    );
}

const root = ReactDOM.createRoot(document.getElementById('reactflow-root'));
root.render(React.createElement(App));