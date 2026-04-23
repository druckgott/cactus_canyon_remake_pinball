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
  { id: 'combo', type: 'custom', data: { label: '🔗 Combos System', gameKey: 'combo' }, position: { x: 560, y: 40 }, style: { background: colors.core, color: 'white' } },

  { id: 'bronco', type: 'custom', data: { label: '🐴 Bronco Loop', gameKey: 'bronco' }, position: { x: 160, y: 240 }, style: { background: colors.core, color: 'white' } },
  { id: 'trick', type: 'custom', data: { label: '🎯 Trick Loop', gameKey: 'trick' }, position: { x: 740, y: 60 }, style: { background: colors.core, color: 'white' } },
  { id: 'beer', type: 'custom', data: { label: '🍺 Beer Mug Target', gameKey: 'beer' }, position: { x: 400, y: 120 }, style: { background: colors.core, color: 'white' } },

  { id: 'modes', type: 'custom', data: { label: '🎯 Mode System', gameKey: 'modes' }, position: { x: 600, y: 180 }, style: { background: colors.mode, color: 'white' } },
  { id: 'train', type: 'custom', data: { label: '🚂 Train Mode', gameKey: 'train' }, position: { x: 1260, y: 180 }, style: { background: colors.mode, color: 'white' } },
  { id: 'river', type: 'custom', data: { label: '🌊 River Mode', gameKey: 'river' }, position: { x: 1260, y: 300 }, style: { background: colors.mode, color: 'white' } },
  { id: 'bank', type: 'custom', data: { label: '🏦 Bank Mode', gameKey: 'bank' }, position: { x: 1260, y: 240 }, style: { background: colors.mode, color: 'white' } },
  { id: 'cowboy', type: 'custom', data: { label: '🐎 Ride Em Cowboy', gameKey: 'cowboy' }, position: { x: 1260, y: 360 }, style: { background: colors.mode, color: 'white' } },

  { id: 'award', type: 'custom', data: { label: '🏆 Bounty Award', gameKey: 'award' }, position: { x: -240, y: 240 }, style: { background: colors.award, color: 'white' } },
  { id: 'extra', type: 'custom', data: { label: '💎 Extra Ball', gameKey: 'extra' }, position: { x: 260, y: 1060 }, style: { background: colors.award, color: 'white' } },
  { id: 'lock', type: 'custom', data: { label: '🔒 Ball Lock', gameKey: 'lock' }, position: { x: 140, y: 340 }, style: { background: colors.award, color: 'white' } },

  { id: 'combat', type: 'custom', data: { label: '🔫 Combat System', gameKey: 'combat' }, position: { x: 900, y: 180 }, style: { background: colors.combat, color: 'white' } },
  { id: 'quick', type: 'custom', data: { label: '⚡ Quick Draw', gameKey: 'quick' }, position: { x: 860, y: 320 }, style: { background: colors.combat, color: 'white' } },
  { id: 'gun', type: 'custom', data: { label: '🔫 Gun Fight', gameKey: 'gun' }, position: { x: 1040, y: 320 }, style: { background: colors.combat, color: 'white' } },
  { id: 'outlane', type: 'custom', data: { label: '🚪 Outlane Trigger', gameKey: 'outlane' }, position: { x: 1040, y: 460 }, style: { background: colors.combat, color: 'white' } },

  { id: 'high', type: 'custom', data: { label: '⭐ High Noon', gameKey: 'high' }, position: { x: 600, y: 720 }, style: { background: colors.wizard, color: 'white' } },
  { id: 's2', type: 'custom', data: { label: '⭐ Star 2 - Showdown MB', gameKey: 's2' }, position: { x: 380, y: 860 }, style: { background: colors.wizard, color: 'white' } },
  { id: 's3', type: 'custom', data: { label: '⭐ Star 3 - Mine MB', gameKey: 's3' }, position: { x: 600, y: 580 }, style: { background: colors.wizard, color: 'white' } },
  { id: 's4', type: 'custom', data: { label: '⭐ Star 4 - Stampede', gameKey: 's4' }, position: { x: 380, y: 640 }, style: { background: colors.wizard, color: 'white' } },
  { id: 's5', type: 'custom', data: { label: '⭐ Star 5 - Combos', gameKey: 's5' }, position: { x: 800, y: 640 }, style: { background: colors.wizard, color: 'white' } },

  { id: 'rank', type: 'custom', data: { label: '⭐ Rank System', gameKey: 'rank' }, position: { x: 1300, y: 560 }, style: { background: colors.wizard, color: 'white' } },
  { id: 'saloon', type: 'custom', data: { label: '🚪 Saloon / Bart Bros', gameKey: 'saloon' }, position: { x: 1300, y: 620 }, style: { background: colors.wizard, color: 'white' } },
  { id: 'mine', type: 'custom', data: { label: '⛏️ Mine Multiball', gameKey: 'mine' }, position: { x: 600, y: 500 }, style: { background: colors.wizard, color: 'white' } },
    { id: '3x_bonus', type: 'custom', data: { label: '✖️ 3x Bonus', gameKey: 'bonus3' }, position: { x: -60, y: 180 }, style: { background: colors.award, color: 'white' } },
    { id: '1x_bonus', type: 'custom', data: { label: '✖️ 1x Bonus', gameKey: 'million' }, position: { x: -60, y: 120 }, style: { background: colors.award, color: 'white' } },
    { id: 'xx_bonus', type: 'custom', data: { label: '✖️ Xx Bonus', gameKey: 'beer_mug' }, position: { x: -60, y: 240 }, style: { background: colors.combat, color: 'white' } },
    { id: 'star_1_bart_brothers', type: 'custom', data: { label: '⭐ Star 1 - Bart Brothers', gameKey: 's1' }, position: { x: 820, y: 800 }, style: { background: colors.wizard, color: 'white' } },
    { id: 'big_bart', type: 'custom', data: { label: 'Big Bart', gameKey: 'beer_mug' }, position: { x: 1020, y: 720 }, style: { background: '#eb34e1', color: 'white' } },
    { id: 'bandolero', type: 'custom', data: { label: 'Bandolero', gameKey: 'beer_mug' }, position: { x: 1020, y: 780 }, style: { background: '#eb34e1', color: 'white' } },
    { id: 'bubba_bart', type: 'custom', data: { label: 'Bubba Bart', gameKey: 'beer_mug' }, position: { x: 1020, y: 840 }, style: { background: '#eb34e1', color: 'white' } },
    { id: 'bionic_bart', type: 'custom', data: { label: 'Bionic Bart', gameKey: 'beer_mug' }, position: { x: 1020, y: 900 }, style: { background: '#eb34e1', color: 'white' } },
    { id: '10_combos', type: 'custom', data: { label: '10 Combos', gameKey: 'beer_mug' }, position: { x: 1020, y: 640 }, style: { background: '#eb34e1', color: 'white' } },
    { id: '4_bad_guys', type: 'custom', data: { label: '4 Bad Guys', gameKey: 'beer_mug' }, position: { x: 180, y: 860 }, style: { background: '#eb34e1', color: 'white' } },
    { id: 'quick_draw', type: 'custom', data: { label: 'Quick Draw', gameKey: 'beer_mug' }, position: { x: 0, y: 860 }, style: { background: '#eb34e1', color: 'white' } },

    // --- POLLY MISSIONS ---
    { id: 'ride_em', type: 'custom', data: { label: 'Ride Em Cowboy' }, position: { x: 180, y: 520 }, style: { background: colors.bronco_loop, color: 'white' } },
    { id: 'buckn_bronco', type: 'custom', data: { label: 'Save Polly' }, position: { x: 180, y: 580 }, style: { background: colors.river_adventure_ramp, color: 'black' } },
    { id: 'save_polly_river', type: 'custom', data: { label: 'Save Polly (River)', gameKey: 'polly' }, position: { x: 180, y: 640 }, style: { background: colors.train_ramp , color: 'white'} },
    { id: 'whitewater', type: 'custom', data: { label: 'Whitewater' , gameKey: 'beer_mug' }, position: { x: -180, y: 580 }, style: { background: colors.river_adventure_ramp, color: 'black' } },
    { id: 'catch_train', type: 'custom', data: { label: 'Catch Train' , gameKey: 'beer_mug' }, position: { x: -180, y: 640 }, style: { background: colors.train_ramp, color: 'white' } },
  
    { id: 'waterfall', type: 'custom', data: { label: 'Waterfall', gameKey: 'beer_mug' }, position: { x: 0, y: 580 }, style: { background: colors.river_adventure_ramp, color: 'black' } },
    { id: 'stop_train', type: 'custom', data: { label: 'Stop Train', gameKey: 'beer_mug' }, position: { x: 0, y: 640 }, style: { background: colors.train_ramp, color: 'white' } },
    { id: 'gunsänger', type: 'custom', data: { label: 'Gunsänger', gameKey: 'beer_mug' }, position: { x: 0, y: 700 }, style: { background: colors.sharpshooter_loop, color: 'white' } },
    { id: 'shootout', type: 'custom', data: { label: 'Shootout', gameKey: 'beer_mug' }, position: { x: 0, y: 760 }, style: { background: colors.bank_robbery_ramp, color: 'white' } },
    { id: 'buck_n_bronco', type: 'custom', data: { label: 'Buck n Bronco', gameKey: 'beer_mug' }, position: { x: -180, y: 520 }, style: { background: colors.bronco_loop, color: 'white' } },
    { id: 'good_shot', type: 'custom', data: { label: 'Good Shot', gameKey: 'beer_mug' }, position: { x: -180, y: 700 }, style: { background: colors.sharpshooter_loop, color: 'white' } },
    { id: 'sound_alarm', type: 'custom', data: { label: 'Sound Alarm', gameKey: 'beer_mug' }, position: { x: -180, y: 760 }, style: { background: colors.bank_robbery_ramp, color: 'white' } },
    { id: 'save_polly', type: 'custom', data: { label: 'Save Polly', gameKey: 'train' }, position: { x: 180, y: 760 }, style: { background: colors.bank_robbery_ramp, color: 'white' } },
    { id: 'marksman', type: 'custom', data: { label: 'Marksman', gameKey: 'beer_mug' }, position: { x: 180, y: 700 }, style: { background: colors.sharpshooter_loop, color: 'white' } },
    { id: 'wild_ride', type: 'custom', data: { label: 'Wild Ride', gameKey: 'beer_mug' }, position: { x: 0, y: 520 }, style: { background: colors.bronco_loop, color: 'white' } },


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
    { id: 'e-award-xx_bonus-s-right-t-left', source: 'award', target: 'xx_bonus', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-s4-high-s-right-t-left', source: 's4', target: 'high', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-s5-high-s-left-t-right', source: 's5', target: 'high', sourceHandle: 's-left', targetHandle: 't-right' },
    { id: 'e-star_1_bart_brothers-high-s-left-s-right', source: 'star_1_bart_brothers', target: 'high', sourceHandle: 's-left', targetHandle: 's-right' },
    { id: 'e-s2-high-s-right-t-left', source: 's2', target: 'high', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-s3-high-s-bottom-t-top', source: 's3', target: 'high', sourceHandle: 's-bottom', targetHandle: 't-top' },
    { id: 'e-mine-s3-s-bottom-t-top', source: 'mine', target: 's3', sourceHandle: 's-bottom', targetHandle: 't-top' },
    { id: 'e-big_bart-star_1_bart_brothers-s-left-t-right', source: 'big_bart', target: 'star_1_bart_brothers', sourceHandle: 's-left', targetHandle: 't-right' },
    { id: 'e-bandolero-star_1_bart_brothers-s-left-t-right', source: 'bandolero', target: 'star_1_bart_brothers', sourceHandle: 's-left', targetHandle: 't-right' },
    { id: 'e-bubba_bart-star_1_bart_brothers-s-left-t-right', source: 'bubba_bart', target: 'star_1_bart_brothers', sourceHandle: 's-left', targetHandle: 't-right' },
    { id: 'e-bionic_bart-star_1_bart_brothers-s-left-t-right', source: 'bionic_bart', target: 'star_1_bart_brothers', sourceHandle: 's-left', targetHandle: 't-right' },
    { id: 'e-10_combos-s5-s-left-t-right', source: '10_combos', target: 's5', sourceHandle: 's-left', targetHandle: 't-right' },
    { id: 'e-quick_draw-4_bad_guys-s-right-s-left', source: 'quick_draw', target: '4_bad_guys', sourceHandle: 's-right', targetHandle: 's-left' },
    { id: 'e-4_bad_guys-s2-s-right-t-left', source: '4_bad_guys', target: 's2', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-river_adventure_ramp-s4-s-right-s-left', source: 'river_adventure_ramp', target: 's4', sourceHandle: 's-right', targetHandle: 's-left' },
    { id: 'e-train_ramp-s4-s-right-t-left', source: 'train_ramp', target: 's4', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-trick_shooting_loop-s4-s-right-t-left', source: 'trick_shooting_loop', target: 's4', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-horse_loop-s4-s-right-t-left', source: 'horse_loop', target: 's4', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-bank_robbery_ramp-s4-s-right-t-left', source: 'bank_robbery_ramp', target: 's4', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-buck_n_bronco-wild_ride-s-right-t-left', source: 'buck_n_bronco', target: 'wild_ride', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-whitewater-waterfall-s-right-t-left', source: 'whitewater', target: 'waterfall', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-catch_train-stop_train-s-right-s-left', source: 'catch_train', target: 'stop_train', sourceHandle: 's-right', targetHandle: 's-left' },
    { id: 'e-good_shot-gunsänger-s-right-t-left', source: 'good_shot', target: 'gunsänger', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-sound_alarm-shootout-s-right-t-left', source: 'sound_alarm', target: 'shootout', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-shootout-save_polly-s-right-s-left', source: 'shootout', target: 'save_polly', sourceHandle: 's-right', targetHandle: 's-left' },
    { id: 'e-save_polly_river-s4-s-right-s-left', source: 'save_polly_river', target: 's4', sourceHandle: 's-right', targetHandle: 's-left' },
    { id: 'e-buckn_bronco-s4-s-right-t-left', source: 'buckn_bronco', target: 's4', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-ride_em-s4-s-right-t-left', source: 'ride_em', target: 's4', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-marksman-s4-s-right-t-left', source: 'marksman', target: 's4', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-save_polly-s4-s-right-s-left', source: 'save_polly', target: 's4', sourceHandle: 's-right', targetHandle: 's-left' },
    { id: 'e-gunsänger-marksman-s-right-t-left', source: 'gunsänger', target: 'marksman', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-stop_train-save_polly_river-s-right-t-left', source: 'stop_train', target: 'save_polly_river', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-waterfall-buckn_bronco-s-right-t-left', source: 'waterfall', target: 'buckn_bronco', sourceHandle: 's-right', targetHandle: 't-left' },
    { id: 'e-wild_ride-ride_em-s-right-t-left', source: 'wild_ride', target: 'ride_em', sourceHandle: 's-right', targetHandle: 't-left' }

  
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