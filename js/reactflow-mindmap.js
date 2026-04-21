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
    gunfight: '#e9d30c',
    multiball: '#9400d3',
    locks: '#008000',
    highNoon: '#4b0082',
    skill: '#c71585',
    bart: '#800000',
    combos: '#ffffff',
    beer_mug: '#e49319',
    bronco_loop: '#F92BE7',              // links (linker Orbit/Loop)
    river_adventure_ramp: '#00FEFE',     // links (linke Rampe)
    train_ramp: '#00C8FF',               // mitte (zentrale Rampe / Gold Mine Shot)
    sharpshooter_loop: '#0097ee',        // rechts (rechter Orbit/Loop)
    bank_robbery_ramp: '#F051DE'         // rechts (rechte Rampe)
};

const nodes = [
    // --- TOP SECTION ---
    { id: 'skillshot',  type: 'custom', data: { label: 'Super Skill Shot', gameKey: 'skillshot' }, position: { x: 160, y: 0 }, style: { background: colors.skill, color: 'white' } },
    { id: 'spinner', type: 'custom', data: { label: 'Spinner', gameKey: 'spinner' }, position: { x: 420, y: 0 }, style: { background: colors.skill, color: 'white' } },
    { id: 'saloon_fight', type: 'custom', data: { label: 'Saloon Fight', gameKey: 'saloon' }, position: { x: 600, y: 0 }, style: { background: colors.skill, color: 'white' } },
    { id: 'gunfight_save', type: 'custom', data: { label: 'Gunfight Ball Save', gameKey: 'gunfight' }, position: { x: 840, y: 0 }, style: { background: colors.skill, color: 'white' } },

    // --- MARSHALL / GUNFIGHT PROGRESSION ---
    { id: 'stranger', type: 'custom', data: { label: 'Stranger' }, position: { x: 40, y: 80 }, style: { background: colors.gunfight } },
    { id: 'partner', type: 'custom', data: { label: 'Partner' }, position: { x: 40, y: 140 }, style: { background: colors.gunfight } },
    { id: 'deputy', type: 'custom', data: { label: 'Deputy' }, position: { x: 40, y: 200 }, style: { background: colors.gunfight } },
    { id: 'sheriff', type: 'custom', data: { label: 'Sheriff' }, position: { x: 40, y: 260 }, style: { background: colors.gunfight } },
    { id: 'marshall', type: 'custom', data: { label: 'Marshall', gameKey: 'marshall' }, position: { x: 240, y: 160 }, style: { background: colors.gunfight } },
    { id: 'save_train', type: 'custom', data: { label: 'Save the Train', gameKey: 'train' }, position: { x: 420, y: 160 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'marshall_multiball', type: 'custom', data: { label: 'Marshall Multiball', gameKey: 'marshall' }, position: { x: 600, y: 160 }, style: { background: colors.multiball, color: 'white' } },

    // --- GOLD MINE SECTION ---
    { id: 'lock1', type: 'custom', data: { label: 'Lock 1', gameKey: 'lock1' }, position: { x: 380, y: 320 }, style: { background: colors.locks, color: 'white' } },
    { id: 'lock2', type: 'custom', data: { label: 'Lock 2', gameKey: 'lock2' }, position: { x: 560, y: 320 }, style: { background: colors.locks, color: 'white' } },
    { id: 'lock3', type: 'custom', data: { label: 'Lock 3', gameKey: 'lock3' }, position: { x: 740, y: 320 }, style: { background: colors.locks, color: 'white' } },
    { id: 'mine_multiball', type: 'custom', data: { label: 'Gold Mine Multiball', gameKey: 'mine' }, position: { x: 560, y: 420 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'mother_lode', type: 'custom', data: { label: 'Mother Lode', gameKey: 'mine' }, position: { x: 560, y: 520 }, style: { background: colors.gunfight, color: 'white' } },

    // --- POLLY MISSIONS ---
    { id: 'ride_em', type: 'custom', data: { label: 'Ride Em Cowboy' }, position: { x: 40, y: 400 }, style: { background: colors.bronco_loop, color: 'white' } },
    { id: 'buckn_bronco', type: 'custom', data: { label: 'Save Polly' }, position: { x: 40, y: 460 }, style: { background: colors.river_adventure_ramp, color: 'black' } },
    { id: 'save_polly_river', type: 'custom', data: { label: 'Save Polly (River)', gameKey: 'polly' }, position: { x: 40, y: 520 }, style: { background: colors.train_ramp , color: 'white'} },
    { id: 'whitewater', type: 'custom', data: { label: 'Whitewater' , gameKey: 'beer_mug' }, position: { x: -320, y: 460 }, style: { background: colors.river_adventure_ramp, color: 'black' } },
    { id: 'catch_train', type: 'custom', data: { label: 'Catch Train' , gameKey: 'beer_mug' }, position: { x: -320, y: 520 }, style: { background: colors.train_ramp, color: 'white' } },
    { id: 'stampede', type: 'custom', data: { label: 'Stampede', gameKey: 'stampede' }, position: { x: 320, y: 560 }, style: { background: colors.gunfight, color: 'white' } },

    // --- CENTER PIECE ---
    { id: 'high_noon', type: 'custom', data: { label: 'High Noon', gameKey: 'high_noon' }, position: { x: 560, y: 680 }, style: { background: colors.highNoon, color: 'white', fontWeight: 'bold' } },

    // --- BART BROTHERS ---
    { id: 'bart_brothers', type: 'custom', data: { label: 'Bart Brothers', gameKey: 'bart_bros' }, position: { x: 740, y: 840 }, style: { background: colors.bart, color: 'white' } },
    { id: 'big_bart', type: 'custom', data: { label: 'Big Bart' }, position: { x: 1080, y: 720 }, style: { background: colors.bart, color: 'white' } },
    { id: 'bandolero_bart', type: 'custom', data: { label: 'Bandolero Bart' }, position: { x: 1080, y: 780 }, style: { background: colors.bart, color: 'white' } },
    { id: 'bubba_bart', type: 'custom', data: { label: 'Bubba Bart' }, position: { x: 1080, y: 840 }, style: { background: colors.bart, color: 'white' } },
    { id: 'bionic_bart', type: 'custom', data: { label: 'Bionic Bart' }, position: { x: 1080, y: 900 }, style: { background: colors.bart , color: 'white'} },
    { id: 'bella_bart', type: 'custom', data: { label: 'Bella Bart' }, position: { x: 1080, y: 960 }, style: { background: colors.bart, color: 'white' } },
    { id: 'saloon_party', type: 'custom', data: { label: 'Saloon Party', gameKey: 'saloon' }, position: { x: 900, y: 840 }, style: { background: colors.multiball, color: 'white' } },
    // --- BEER MUGS ---
    { id: '10_beer_mugs', type: 'custom', data: { label: '10 Beer Mugs' }, position: { x: 460, y: 940 }, style: { background: colors.beer_mug } },
    { id: 'franks_n_beans', type: 'custom', data: { label: 'Franks N Beans' }, position: { x: 660, y: 1000 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'shootout_2', type: 'custom', data: { label: 'Shootout 2' }, position: { x: 660, y: 940 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'drunken_multiball', type: 'custom', data: { label: 'Drunken Multiball', gameKey: 'beer_mug' }, position: { x: 660, y: 1060 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'shoot_bad_guy_1', type: 'custom', data: { label: 'Shoot Bad Guy 1', gameKey: 'beer_mug' }, position: { x: -140, y: 80 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'light_gunfight', type: 'custom', data: { label: 'Light Gunfight', gameKey: 'beer_mug' }, position: { x: -320, y: 80 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'shoot_bad_guy_2', type: 'custom', data: { label: 'Shoot Bad Guy 2', gameKey: 'beer_mug' }, position: { x: -140, y: 140 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'shoot_bad_guy_3', type: 'custom', data: { label: 'Shoot Bad Guy 3', gameKey: 'beer_mug' }, position: { x: -140, y: 200 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'shoot_bad_guy_4', type: 'custom', data: { label: 'Shoot Bad Guy 4', gameKey: 'beer_mug' }, position: { x: -140, y: 260 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'light_gunfight_2', type: 'custom', data: { label: 'Light Gunfight', gameKey: 'beer_mug' }, position: { x: -320, y: 140 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'light_gunfight_3', type: 'custom', data: { label: 'Light Gunfight', gameKey: 'beer_mug' }, position: { x: -320, y: 200 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'light_gunfight_4', type: 'custom', data: { label: 'Light Gunfight', gameKey: 'beer_mug' }, position: { x: -320, y: 260 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'light_lock', type: 'custom', data: { label: 'Light Lock', gameKey: 'beer_mug' }, position: { x: 380, y: 260 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'light_lock_2', type: 'custom', data: { label: 'Light Lock', gameKey: 'beer_mug' }, position: { x: 560, y: 260 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'light_lock_3', type: 'custom', data: { label: 'Light Lock', gameKey: 'beer_mug' }, position: { x: 740, y: 260 }, style: { background: colors.multiball, color: 'white' } },
    { id: '10_combo_shots', type: 'custom', data: { label: '10 Combo Shots', gameKey: 'beer_mug' }, position: { x: 1020, y: 580 }, style: { background: colors.combos, color: 'black' } },
    { id: 'combo', type: 'custom', data: { label: 'Combo', gameKey: 'beer_mug' }, position: { x: 820, y: 580 }, style: { background: colors.combos, color: 'black' } },
    { id: 'showdown', type: 'custom', data: { label: 'Showdown', gameKey: 'beer_mug' }, position: { x: 380, y: 840 }, style: { background: colors.multiball, color: 'white' } },
    { id: 'shoot_bad_guy_1_2', type: 'custom', data: { label: 'Shoot Bad Guy 1', gameKey: 'beer_mug' }, position: { x: 140, y: 780 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'light_quick_draw', type: 'custom', data: { label: 'Light Quick Draw', gameKey: 'beer_mug' }, position: { x: -40, y: 780 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'light_quick_draw_2', type: 'custom', data: { label: 'Light Quick Draw', gameKey: 'beer_mug' }, position: { x: -40, y: 960 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'shoot_bad_guy_4_2', type: 'custom', data: { label: 'Shoot Bad Guy 4', gameKey: 'beer_mug' }, position: { x: 140, y: 960 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'light_quick_draw_3', type: 'custom', data: { label: 'Light Quick Draw', gameKey: 'beer_mug' }, position: { x: -40, y: 900 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'shoot_bad_guy_3_2', type: 'custom', data: { label: 'Shoot Bad Guy 3', gameKey: 'beer_mug' }, position: { x: 140, y: 900 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'light_quick_draw_4', type: 'custom', data: { label: 'Light Quick Draw', gameKey: 'beer_mug' }, position: { x: -40, y: 840 }, style: { background: colors.gunfight, color: 'white' } },
    { id: 'shoot_bad_guy_2_2', type: 'custom', data: { label: 'Shoot Bad Guy 2', gameKey: 'beer_mug' }, position: { x: 140, y: 840 }, style: { background: colors.gunfight, color: 'white' } },
    { id: '15_beer_mugs', type: 'custom', data: { label: '15 Beer Mugs', gameKey: 'beer_mug' }, position: { x: 460, y: 1000 }, style: { background: colors.beer_mug, color: 'white' } },
    { id: '25_beer_mugs', type: 'custom', data: { label: '25 Beer Mugs', gameKey: 'beer_mug' }, position: { x: 460, y: 1060 }, style: { background: colors.beer_mug, color: 'white' } },
    { id: 'waterfall', type: 'custom', data: { label: 'Waterfall', gameKey: 'beer_mug' }, position: { x: -140, y: 460 }, style: { background: colors.river_adventure_ramp, color: 'black' } },
    { id: 'stop_train', type: 'custom', data: { label: 'Stop Train', gameKey: 'beer_mug' }, position: { x: -140, y: 520 }, style: { background: colors.train_ramp, color: 'white' } },
    { id: 'gunsänger', type: 'custom', data: { label: 'Gunsänger', gameKey: 'beer_mug' }, position: { x: -140, y: 580 }, style: { background: colors.sharpshooter_loop, color: 'white' } },
    { id: 'shootout', type: 'custom', data: { label: 'Shootout', gameKey: 'beer_mug' }, position: { x: -140, y: 640 }, style: { background: colors.bank_robbery_ramp, color: 'white' } },
    { id: 'buck_n_bronco', type: 'custom', data: { label: 'Buck n Bronco', gameKey: 'beer_mug' }, position: { x: -320, y: 400 }, style: { background: colors.bronco_loop, color: 'white' } },
    { id: 'good_shot', type: 'custom', data: { label: 'Good Shot', gameKey: 'beer_mug' }, position: { x: -320, y: 580 }, style: { background: colors.sharpshooter_loop, color: 'white' } },
    { id: 'sound_alarm', type: 'custom', data: { label: 'Sound Alarm', gameKey: 'beer_mug' }, position: { x: -320, y: 640 }, style: { background: colors.bank_robbery_ramp, color: 'white' } },
    { id: 'save_polly', type: 'custom', data: { label: 'Save Polly', gameKey: 'train' }, position: { x: 40, y: 640 }, style: { background: colors.bank_robbery_ramp, color: 'white' } },
    { id: 'marksman', type: 'custom', data: { label: 'Marksman', gameKey: 'beer_mug' }, position: { x: 40, y: 580 }, style: { background: colors.sharpshooter_loop, color: 'white' } },
    { id: 'wild_ride', type: 'custom', data: { label: 'Wild Ride', gameKey: 'beer_mug' }, position: { x: -140, y: 400 }, style: { background: colors.bronco_loop, color: 'white' } },
];

const edges = [
    { id: 'e-spinner-saloon', source: 'spinner', target: 'saloon_fight' },
    { id: 'e-bart_brothers-high_noon-s-top-t-right', source: 'bart_brothers', target: 'high_noon', sourceHandle: 's-top', targetHandle: 't-right' },
    { id: 'e-showdown-high_noon-s-top-t-left', source: 'showdown', target: 'high_noon', sourceHandle: 's-top', targetHandle: 't-left' },
    { id: 'e-combo-high_noon-s-left-t-right', source: 'combo', target: 'high_noon', sourceHandle: 's-left', targetHandle: 't-right' },
    { id: 'e-stampede-high_noon-s-right-t-left', source: 'stampede', target: 'high_noon', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-mother_lode-high_noon-s-bottom-t-top', source: 'mother_lode', target: 'high_noon', sourceHandle: 's-bottom', targetHandle: 't-top' },
    { id: 'e-10_combo_shots-combo-s-left-s-right', source: '10_combo_shots', target: 'combo', sourceHandle: 's-left', targetHandle: 's-right' },
    { id: 'e-saloon_party-bart_brothers-s-left-s-right', source: 'saloon_party', target: 'bart_brothers', sourceHandle: 's-left', targetHandle: 's-right' },
    { id: 'e-big_bart-saloon_party-s-left-t-top', source: 'big_bart', target: 'saloon_party', sourceHandle: 's-left', targetHandle: 't-top' },
    { id: 'e-bandolero_bart-saloon_party-s-left-t-top', source: 'bandolero_bart', target: 'saloon_party', sourceHandle: 's-left', targetHandle: 't-top' },
    { id: 'e-bubba_bart-saloon_party-s-left-t-right', source: 'bubba_bart', target: 'saloon_party', sourceHandle: 's-left', targetHandle: 't-right' },
    { id: 'e-bionic_bart-saloon_party-s-left-t-bottom', source: 'bionic_bart', target: 'saloon_party', sourceHandle: 's-left', targetHandle: 't-bottom' },
    { id: 'e-bella_bart-saloon_party-s-left-t-bottom', source: 'bella_bart', target: 'saloon_party', sourceHandle: 's-left', targetHandle: 't-bottom' },
    { id: 'e-10_beer_mugs-shootout_2-s-right-t-left', source: '10_beer_mugs', target: 'shootout_2', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-15_beer_mugs-franks_n_beans-s-right-t-left', source: '15_beer_mugs', target: 'franks_n_beans', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-25_beer_mugs-drunken_multiball-s-right-t-left', source: '25_beer_mugs', target: 'drunken_multiball', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-mine_multiball-mother_lode-s-bottom-t-top', source: 'mine_multiball', target: 'mother_lode', sourceHandle: 's-bottom', targetHandle: 't-top' },
    { id: 'e-light_gunfight-shoot_bad_guy_1-s-right-t-left', source: 'light_gunfight', target: 'shoot_bad_guy_1', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-light_gunfight_2-shoot_bad_guy_2-s-right-s-left', source: 'light_gunfight_2', target: 'shoot_bad_guy_2', sourceHandle: 's-right', targetHandle: 's-left' },
    { id: 'e-light_gunfight_3-shoot_bad_guy_3-s-right-s-left', source: 'light_gunfight_3', target: 'shoot_bad_guy_3', sourceHandle: 's-right', targetHandle: 's-left' },
    { id: 'e-light_gunfight_4-shoot_bad_guy_4-s-right-s-left', source: 'light_gunfight_4', target: 'shoot_bad_guy_4', sourceHandle: 's-right', targetHandle: 's-left' },
    { id: 'e-shoot_bad_guy_4-sheriff-s-right-s-left', source: 'shoot_bad_guy_4', target: 'sheriff', sourceHandle: 's-right', targetHandle: 's-left' },
    { id: 'e-shoot_bad_guy_3-deputy-s-right-t-left', source: 'shoot_bad_guy_3', target: 'deputy', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-shoot_bad_guy_2-partner-s-right-t-left', source: 'shoot_bad_guy_2', target: 'partner', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-shoot_bad_guy_1-stranger-s-right-t-left', source: 'shoot_bad_guy_1', target: 'stranger', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-buck_n_bronco-wild_ride-s-right-s-left', source: 'buck_n_bronco', target: 'wild_ride', sourceHandle: 's-right', targetHandle: 's-left' },
    { id: 'e-whitewater-waterfall-s-right-s-left', source: 'whitewater', target: 'waterfall', sourceHandle: 's-right', targetHandle: 's-left' },
    { id: 'e-catch_train-stop_train-s-right-t-left', source: 'catch_train', target: 'stop_train', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-good_shot-gunsänger-s-right-s-left', source: 'good_shot', target: 'gunsänger', sourceHandle: 's-right', targetHandle: 's-left' },
    { id: 'e-sound_alarm-shootout-s-right-s-left', source: 'sound_alarm', target: 'shootout', sourceHandle: 's-right', targetHandle: 's-left' },
    { id: 'e-wild_ride-ride_em-s-right-t-left', source: 'wild_ride', target: 'ride_em', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-waterfall-buckn_bronco-s-right-s-left', source: 'waterfall', target: 'buckn_bronco', sourceHandle: 's-right', targetHandle: 's-left' },
    { id: 'e-stop_train-save_polly_river-s-right-t-left', source: 'stop_train', target: 'save_polly_river', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-gunsänger-marksman-s-right-s-left', source: 'gunsänger', target: 'marksman', sourceHandle: 's-right', targetHandle: 's-left' },
    { id: 'e-shootout-save_polly-s-right-s-left', source: 'shootout', target: 'save_polly', sourceHandle: 's-right', targetHandle: 's-left' },
    { id: 'e-ride_em-stampede-s-right-t-top', source: 'ride_em', target: 'stampede', sourceHandle: 's-right', targetHandle: 't-top' },
    { id: 'e-buckn_bronco-stampede-s-right-t-top', source: 'buckn_bronco', target: 'stampede', sourceHandle: 's-right', targetHandle: 't-top' },
    { id: 'e-save_polly_river-stampede-s-right-s-left', source: 'save_polly_river', target: 'stampede', sourceHandle: 's-right', targetHandle: 's-left' },
    { id: 'e-marksman-stampede-s-right-t-bottom', source: 'marksman', target: 'stampede', sourceHandle: 's-right', targetHandle: 't-bottom' },
    { id: 'e-save_polly-stampede-s-right-t-bottom', source: 'save_polly', target: 'stampede', sourceHandle: 's-right', targetHandle: 't-bottom' },
    { id: 'e-light_quick_draw-shoot_bad_guy_1_2-s-right-t-left', source: 'light_quick_draw', target: 'shoot_bad_guy_1_2', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-light_quick_draw_4-shoot_bad_guy_2_2-s-right-s-left', source: 'light_quick_draw_4', target: 'shoot_bad_guy_2_2', sourceHandle: 's-right', targetHandle: 's-left' },
    { id: 'e-light_quick_draw_3-shoot_bad_guy_3_2-s-right-t-left', source: 'light_quick_draw_3', target: 'shoot_bad_guy_3_2', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-light_quick_draw_2-shoot_bad_guy_4_2-s-right-s-left', source: 'light_quick_draw_2', target: 'shoot_bad_guy_4_2', sourceHandle: 's-right', targetHandle: 's-left' },
    { id: 'e-shoot_bad_guy_1_2-showdown-s-right-t-left', source: 'shoot_bad_guy_1_2', target: 'showdown', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-shoot_bad_guy_2_2-showdown-s-right-t-left', source: 'shoot_bad_guy_2_2', target: 'showdown', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-shoot_bad_guy_3_2-showdown-s-right-t-left', source: 'shoot_bad_guy_3_2', target: 'showdown', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-shoot_bad_guy_4_2-showdown-s-right-s-left', source: 'shoot_bad_guy_4_2', target: 'showdown', sourceHandle: 's-right', targetHandle: 's-left' },
    { id: 'e-stranger-marshall-s-right-s-left', source: 'stranger', target: 'marshall', sourceHandle: 's-right', targetHandle: 's-left' },
    { id: 'e-partner-marshall-s-right-s-left', source: 'partner', target: 'marshall', sourceHandle: 's-right', targetHandle: 's-left' },
    { id: 'e-deputy-marshall-s-right-t-left', source: 'deputy', target: 'marshall', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-sheriff-marshall-s-right-t-left', source: 'sheriff', target: 'marshall', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-marshall-save_train-s-right-s-left', source: 'marshall', target: 'save_train', sourceHandle: 's-right', targetHandle: 's-left' },
    { id: 'e-save_train-marshall_multiball-s-right-t-left', source: 'save_train', target: 'marshall_multiball', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-light_lock-lock1-s-bottom-s-top', source: 'light_lock', target: 'lock1', sourceHandle: 's-bottom', targetHandle: 's-top' },
    { id: 'e-light_lock_2-lock2-s-bottom-s-top', source: 'light_lock_2', target: 'lock2', sourceHandle: 's-bottom', targetHandle: 's-top' },
    { id: 'e-light_lock_3-lock3-s-bottom-t-top', source: 'light_lock_3', target: 'lock3', sourceHandle: 's-bottom', targetHandle: 't-top' },
    { id: 'e-lock1-mine_multiball-s-bottom-t-left', source: 'lock1', target: 'mine_multiball', sourceHandle: 's-bottom', targetHandle: 't-left' },
    { id: 'e-lock2-mine_multiball-s-bottom-t-top', source: 'lock2', target: 'mine_multiball', sourceHandle: 's-bottom', targetHandle: 't-top' },
    { id: 'e-lock3-mine_multiball-s-bottom-t-right', source: 'lock3', target: 'mine_multiball', sourceHandle: 's-bottom', targetHandle: 't-right' }




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