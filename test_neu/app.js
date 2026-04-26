
const { useState } = React;

const data = {
    en: {
        title: "CACTUS CANYON",
        bounty: {
            title: "BOUNTY SYSTEM",
            ways: "Ways to Light",
            waysList: ["Lasso Skill Shot", "Defeating a Bad Guy in Quick Draw"],
            awards: "List of possible awards",
            awardsList: ["Extra Ball", "Light Gun Fight", "Light Quick Draw", "Light/Award Lock", "+5 Bonus Multiplier", "Increase Rank", "Points", "1 Million Bonus"]
        },
        gunFight: {
            title: "GUN FIGHT",
            ways: "Ways to Light",
            waysList: ["Bounty Award", "Left outlane, when lit", "Beating a Bart Brother", "Skill Shot"],
            logic: "Winner and flow logic:",
            info: "Winner increases Rank"
        },
        ranking: {
            title: "RANKING UP",
            ways: "Ways to increase Rank",
            waysList: ["Bounty Award", "Lasso Skill Shot", "Winning Gun Fight", "Skill Shot Award"],
            progList: ["Stranger", "Partner", "Deputy", "Sheriff", "Marshall"],
            info: "Rank affects score in Quick Draw and High Noon"
        },
        skillShot: {
            title: "SKILL SHOT",
            info: "Selected by spinning ball\nList of awards:",
            awardsList: ["Light Quick Draw", "Light Gun Fight", "Light Extra Ball", "Light Bounty Award", "Complete individual Ramps/Loops", "Increase Rank", "Increase Bonus Multiplier by 3", "1 Million Points", "Light/Award Lock"]
        },
        extraBall: {
            title: "EXTRA BALL",
            info: "Collected at Gold Mine when lit",
            ways: "Lit by:",
            waysList: ["Complete Save Polly Peril", "Skill Shot", "Start Showdown Multi-Ball", "Shooting Beer Mug"]
        },
        bonus: {
            title: "BONUS MULTIPLIER",
            ways: "Increased by:",
            waysList: ["Complete 2 lanes", "Skill Shot award (+3)", "Bounty award (+5)"]
        },
        beer: {
            title: "BIERKRUG",
            list: ["Count hits", "Extra Balls at 15 and 40 hits", "Next Bart hit increases (2X, 3X)", "Topper mode at 10 and 30 hits", "Displays New High Score"]
        },
        motherLode: { title: "MOTHER LODE", subtitle: "(Fills Blue Part)", list: ["If lock not lit, shot Gold Mine", "Bounty Award", "Lasso Skill Shot", "Gold Mine: Lock 3 Balls", "Start Gold Mine Multi-Ball", "Multi-Ball detail: hit all 5 Jackpots", "Mother Lode is lit", "Shoot Gold Mine to collect"] },
        showdown: { title: "SHOWDOWN", subtitle: "(Fills Red Part)", list: ["Complete L/R Targets", "Lasso Skill Shot", "return lane activations", "Bad Guy target", "defeat bad guy", "defeat stay lit", "Defeat ALL 4 Bad Guys", "Showdown Starts", "Also lights Extra Ball"] },
        combo: { title: "COMBO", subtitle: "(Fills Yellow Part)", list: ["Ramps/Loops have brief lights after shot", "Combo total increased by hit while lit", "Earn 10 Combos to fill badge part"] },
        stampede: { title: "STAMPEDE", subtitle: "(Fills Green Part)", list: ["Complete Center Ramp 3x to start Save Polly Peril", "Complete River Ramp 3x to start Save Polly Peril", "Complete Bank Ramp 3x to start Save Polly Peril", "Complete Horse Loop 3x to start Ride 'Em Cowboy", "Complete Trick Shooting loop 3x to start Marksman", "➔ Stampede Begins", "Multi-Ball: All ramps/loops lit for jackpot", "Lights badge part"] },
        bart: { title: "BART BROTHERS", subtitle: "(Fills Orange Part)", list: ["Attack: Jump ramp or weak loop shot", "Brothers: Big Bart, Bandolero, Bubba Bart", "Arrow progression:\n➔ defeat Bubba ➔ final brother is Bionic Bart\n➔ hit Jackpot shots & Bad Bart head", "Fills badge part"] },
        star: {
            main: "HAUPTZIEL: CENTRAL GOAL: HIGH NOON",
            list: [
                "A 30 second timed mode (+1 Second for each Bad Guy hit during the game)",
                "To start, shoot Gold Mine when badge is lit",
                "All balls returned for duration",
                "Goal is to hit 20 Bad Guy targets to win",
                "Reward: 20 Million Points"
            ]
        }
    },
    de: {
        title: "CACTUS CANYON",
        bounty: {
            title: "KOPFGELD SYSTEM",
            ways: "Aktivierung",
            waysList: ["Lasso Skill Shot", "Bad Guy im Quick Draw besiegen"],
            awards: "Mögliche Belohnungen",
            awardsList: ["Extra Ball", "Schießerei beleuchten", "Quick Draw beleuchten", "Lock beleuchten/vergeben", "+5 Bonus Multiplikator", "Rangaufstieg", "Punkte", "1 Million Bonus"]
        },
        gunFight: {
            title: "SCHIESSEREI",
            ways: "Aktivierung",
            waysList: ["Kopfgeld Belohnung", "Linke Outlane (wenn beleuchtet)", "Einen Bart-Bruder besiegen", "Skill Shot"],
            logic: "Sieger Logik:",
            info: "Sieg erhöht den Rang"
        },
        ranking: {
            title: "RANGAUFSTIEG",
            ways: "Wege zum Rangaufstieg",
            waysList: ["Kopfgeld Belohnung", "Lasso Skill Shot", "Schießerei gewinnen", "Skill Shot Belohnung"],
            progList: ["Fremder", "Partner", "Deputy", "Sheriff", "Marshall"],
            info: "Rang beeinflusst Punkte bei Quick Draw und High Noon"
        },
        skillShot: {
            title: "SKILL SHOT",
            info: "Ausgewählt durch drehenden Ball\nBelohnungen:",
            awardsList: ["Quick Draw beleuchten", "Schießerei beleuchten", "Extra Ball beleuchten", "Kopfgeld beleuchten", "Einzelne Rampen/Loops abschließen", "Rangaufstieg", "Bonus Multiplikator +3", "1 Million Punkte", "Lock beleuchten/vergeben"]
        },
        extraBall: {
            title: "EXTRA BALL",
            info: "Abgeholt in der Goldmine wenn beleuchtet",
            ways: "Beleuchtet durch:",
            waysList: ["Save Polly Peril abschließen", "Skill Shot", "Showdown Multi-Ball starten", "Bierkrug treffen"]
        },
        bonus: {
            title: "BONUS MULTIPLIKATOR",
            ways: "Erhöht durch:",
            waysList: ["2 Lanes abschließen", "Skill Shot Belohnung (+3)", "Kopfgeld Belohnung (+5)"]
        },
        beer: {
            title: "BIERKRUG",
            list: ["Treffer zählen", "Extra Bälle bei 15 und 40 Treffern", "Nächster Bart-Treffer wird erhöht (2X, 3X)", "Topper-Modus bei 10 und 30 Treffern", "Zeigt neuen Highscore an"]
        },
        motherLode: { title: "MUTTERADER", subtitle: "(Füllt blauen Bereich)", list: ["Wenn Lock aus: Goldmine treffen", "Kopfgeld Belohnung", "Lasso Skill Shot", "Goldmine: 3 Bälle einloggen", "Goldmine Multi-Ball starten", "Detail: Alle 5 Jackpots treffen", "Mutterader ist beleuchtet", "Goldmine treffen zum Sammeln"] },
        showdown: { title: "SHOWDOWN", subtitle: "(Füllt roten Bereich)", list: ["L/R Targets abschließen", "Lasso Skill Shot", "Return Lane Aktivierungen", "Bad Guy Ziel", "Bad Guy besiegen", "Besiegte bleiben beleuchtet", "ALLE 4 Bad Guys besiegen", "Showdown startet", "Beleuchtet auch Extra Ball"] },
        combo: { title: "KOMBINATION", subtitle: "(Füllt gelben Bereich)", list: ["Rampen/Loops leuchten kurz nach Schuss", "Combo-Zähler steigt bei Treffer während Licht", "10 Combos sammeln für Abzeichen"] },
        stampede: { title: "MASSENPANIK", subtitle: "(Füllt grünen Bereich)", list: ["Center Rampe 3x = Save Polly Peril", "River Rampe 3x = Save Polly Peril", "Bank Rampe 3x = Save Polly Peril", "Horse Loop 3x = Ride 'Em Cowboy", "Trick Shooting Loop 3x = Marksman", "➔ Stampede beginnt", "Multi-Ball: Rampen/Loops = Jackpot", "Beleuchtet Abzeichen-Teil"] },
        bart: { title: "BART BRÜDER", subtitle: "(Füllt orangenen Bereich)", list: ["Angriff: Jump Rampe oder Loop Schuss", "Brüder: Big Bart, Bandolero, Bubba Bart", "➔ Besiege Bubba ➔ letzter ist Bionic Bart\n➔ Triff Jackpot-Schüsse & Bad Bart Kopf", "Füllt Abzeichen-Teil"] },
        star: {
            main: "HAUPTZIEL: CENTRAL GOAL: HIGH NOON",
            list: [
                "30 Sekunden Zeitmodus (+1 Sek. für jeden im Spiel getroffenen Bad Guy)",
                "Zum Starten Goldmine treffen, wenn Abzeichen leuchtet",
                "Alle Bälle werden währenddessen zurückgegeben",
                "Ziel: 20 Bad Guy Ziele treffen um zu gewinnen",
                "Belohnung: 20 Millionen Punkte"
            ]
        }
    }
};

// Inline SVG Components to perfectly mimic the image
const CowboyIcon = () => (
    <svg viewBox="0 0 100 100" width="100" height="100">
        <path d="M20,50 Q50,20 80,50 Q90,60 95,50 L85,40 Q50,0 15,40 L5,50 Q10,60 20,50" fill="#6d4c41" stroke="#2a1610" strokeWidth="3"/>
        <path d="M30,50 Q50,40 70,50 L75,80 Q50,100 25,80 Z" fill="#d7ccc8" stroke="#2a1610" strokeWidth="3"/>
        <path d="M40,65 Q50,60 60,65" fill="none" stroke="#2a1610" strokeWidth="2"/>
        <circle cx="40" cy="55" r="3" fill="#2a1610"/>
        <circle cx="60" cy="55" r="3" fill="#2a1610"/>
        <path d="M30,80 Q50,110 70,80" fill="#c62828" stroke="#2a1610" strokeWidth="2"/>
    </svg>
);

const BeerIcon = () => (
    <svg viewBox="0 0 100 100" width="80" height="80">
        <rect x="20" y="30" width="30" height="50" rx="5" fill="#fbc02d" stroke="#2a1610" strokeWidth="3"/>
        <rect x="55" y="25" width="35" height="55" rx="5" fill="#fbc02d" stroke="#2a1610" strokeWidth="3" transform="rotate(10 55 25)"/>
        <path d="M15,35 Q35,15 55,35" fill="white" stroke="#2a1610" strokeWidth="2"/>
        <path d="M50,25 Q70,5 90,25" fill="white" stroke="#2a1610" strokeWidth="2" transform="rotate(10 55 25)"/>
        <path d="M10,40 Q20,35 20,50 L20,70 Q10,70 10,55 Z" fill="none" stroke="#2a1610" strokeWidth="3"/>
        <path d="M95,35 Q105,30 105,45 L105,65 Q95,65 95,50 Z" fill="none" stroke="#2a1610" strokeWidth="3" transform="rotate(10 55 25)"/>
    </svg>
);

const StarIcon = ({ color = "#fbc02d" }) => (
    <svg viewBox="0 0 100 100" width="30" height="30">
        <polygon points="50,5 61,35 95,35 68,54 78,85 50,66 22,85 32,54 5,35 39,35" fill={color} stroke="#2a1610" strokeWidth="4"/>
        <circle cx="50" cy="5" r="5" fill="#fff" stroke="#2a1610" strokeWidth="2"/>
        <circle cx="95" cy="35" r="5" fill="#fff" stroke="#2a1610" strokeWidth="2"/>
        <circle cx="78" cy="85" r="5" fill="#fff" stroke="#2a1610" strokeWidth="2"/>
        <circle cx="22" cy="85" r="5" fill="#fff" stroke="#2a1610" strokeWidth="2"/>
        <circle cx="5" cy="35" r="5" fill="#fff" stroke="#2a1610" strokeWidth="2"/>
    </svg>
);

const CenterSheriffStar = ({ title, list }) => (
    <div style={{ position: 'relative', width: '450px', height: '450px' }}>
        {/* Flames Background */}
        <svg viewBox="0 0 200 200" style={{ position: 'absolute', top: '-10%', left: '-10%', width: '120%', height: '120%', zIndex: 0 }}>
            <path d="M100,10 Q120,40 140,30 Q130,60 160,50 Q140,80 180,80 Q150,110 170,140 Q130,120 100,180 Q70,120 30,140 Q50,110 20,80 Q60,80 40,50 Q70,60 60,30 Q80,40 100,10" fill="#e65100" />
            <path d="M100,30 Q115,50 130,45 Q125,70 145,65 Q130,85 160,90 Q135,110 150,135 Q120,120 100,160 Q80,120 50,135 Q65,110 40,90 Q70,85 55,65 Q75,70 70,45 Q85,50 100,30" fill="#ffb300" />
        </svg>
        {/* Star Body */}
        <svg viewBox="0 0 100 100" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
            <polygon points="50,5 65,35 95,40 70,60 80,90 50,75 20,90 30,60 5,40 35,35" fill="#ffee58" stroke="#2a1610" strokeWidth="2"/>
            {/* Color segments inside star */}
            <polygon points="50,50 65,35 95,40" fill="#ff9800"/>
            <polygon points="50,50 95,40 70,60" fill="#ffca28"/>
            <polygon points="50,50 70,60 80,90" fill="#4caf50"/>
            <polygon points="50,50 80,90 50,75" fill="#f44336"/>
            <polygon points="50,50 50,75 20,90" fill="#e53935"/>
            <polygon points="50,50 20,90 30,60" fill="#42a5f5"/>
            <polygon points="50,50 30,60 5,40" fill="#29b6f6"/>
            <polygon points="50,50 5,40 35,35" fill="#ff9800"/>
            <polygon points="50,50 35,35 50,5" fill="#ffca28"/>
            <polygon points="50,50 50,5 65,35" fill="#ff9800"/>
            
            {/* Inner White Box */}
            <circle cx="50" cy="50" r="30" fill="#fff" stroke="#2a1610" strokeWidth="2"/>
            
            <circle cx="50" cy="5" r="3" fill="#fff" stroke="#2a1610" strokeWidth="1"/>
            <circle cx="95" cy="40" r="3" fill="#fff" stroke="#2a1610" strokeWidth="1"/>
            <circle cx="80" cy="90" r="3" fill="#fff" stroke="#2a1610" strokeWidth="1"/>
            <circle cx="20" cy="90" r="3" fill="#fff" stroke="#2a1610" strokeWidth="1"/>
            <circle cx="5" cy="40" r="3" fill="#fff" stroke="#2a1610" strokeWidth="1"/>
        </svg>
        
        {/* Inner Content */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2, textAlign: 'center', width: '220px' }}>
            <h2 style={{ fontFamily: 'Anton', fontSize: '1.2rem', margin: '0 0 5px 0', lineHeight: 1.1 }}>{title.split(': ').map((t, i) => <div key={i}>{t}</div>)}</h2>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.65rem', margin: 0, textAlign: 'center' }}>
                {list.map((item, idx) => <li key={idx} style={{ justifyContent: 'center', marginBottom: '2px' }}>{item}</li>)}
            </ul>
        </div>
    </div>
);

const UpArrow = ({ color }) => (
    <div className="arrow-up">
        <svg viewBox="0 0 100 100">
            <path d="M50,10 L90,50 L65,50 L65,90 L35,90 L35,50 L10,50 Z" fill={color} stroke="#2a1610" strokeWidth="4"/>
        </svg>
    </div>
);

const App = () => {
    const [lang, setLang] = useState('de');
    const t = data[lang];

    return (
        <div className="container">
            <div className="header-bar">
                <h1>{t.title} [DE/EN]</h1>
                <div className="lang-switch">
                    <button onClick={() => setLang('de')} style={{opacity: lang === 'de' ? 1 : 0.6}}>DE</button>
                    <button onClick={() => setLang('en')} style={{opacity: lang === 'en' ? 1 : 0.6}}>EN</button>
                </div>
            </div>

            <div className="main-grid">
                {/* LEFT COLUMN */}
                <div className="left-col">
                    <div className="box">
                        <h2>{t.bounty.title}</h2>
                        <div className="flex-row" style={{alignItems: 'flex-start'}}>
                            <div style={{width: '40%'}}>
                                <h3>{t.bounty.ways}</h3>
                                <ul className="bullet-blue">{t.bounty.waysList.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
                            </div>
                            <div className="collect-arrow">
                                ➔ Collect ➔
                            </div>
                            <div style={{width: '40%'}}>
                                <ul className="bullet-orange">{t.bounty.awardsList.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
                            </div>
                        </div>
                        <div style={{marginTop: '10px', display: 'flex', alignItems: 'center'}}>
                            <div style={{border: '1px solid black', padding: '2px 5px', borderRadius: '5px', background: 'white', marginRight: '10px'}}>Saloon</div>
                            <CowboyIcon />
                        </div>
                    </div>
                    
                    <div className="box">
                        <h2>{t.gunFight.title}</h2>
                        <div className="flex-row">
                            <div>
                                <h3>{t.gunFight.ways}</h3>
                                <ul className="bullet-orange">{t.gunFight.waysList.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
                            </div>
                            <div className="winner-logic">
                                {t.gunFight.logic}
                                <br/>➔
                            </div>
                        </div>
                        <p style={{fontWeight: 'bold', borderTop: '2px solid #2a1610', paddingTop: '5px', marginTop: '5px'}}>➔ {t.gunFight.info}</p>
                    </div>

                    <div className="box">
                        <h2>{t.ranking.title}</h2>
                        <ul className="bullet-orange" style={{columnCount: 2}}>{t.ranking.waysList.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
                        
                        <div className="star-progression">
                            {t.ranking.progList.map((rank, i) => (
                                <div key={i} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                    <StarIcon color={i > 0 ? "#ff9800" : "#d7ccc8"}/>
                                    <span>{rank}</span>
                                </div>
                            ))}
                        </div>
                        <p style={{textAlign: 'center', fontSize: '0.8rem', marginTop: '10px'}}>{t.ranking.info}</p>
                    </div>
                </div>

                {/* CENTER COLUMN */}
                <div className="center-col">
                    <CenterSheriffStar title={t.star.main} list={t.star.list} />
                </div>

                {/* RIGHT COLUMN */}
                <div className="right-col">
                    <div className="box">
                        <h2>{t.skillShot.title}</h2>
                        <p style={{fontStyle: 'italic'}}>{t.skillShot.info.split('\n')[0]}</p>
                        <ul className="bullet-orange">{t.skillShot.awardsList.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
                    </div>

                    <div className="box">
                        <h2>{t.extraBall.title}</h2>
                        <p>{t.extraBall.info}</p>
                        <h3>{t.extraBall.ways}</h3>
                        <ul className="bullet-red">{t.extraBall.waysList.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
                    </div>

                    <div className="box">
                        <h2>{t.bonus.title}</h2>
                        <h3>{t.bonus.ways}</h3>
                        <ul className="bullet-green">{t.bonus.waysList.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
                    </div>

                    <div className="box" style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                        <div>
                            <h2>{t.beer.title}</h2>
                            <ul className="bullet-orange">{t.beer.list.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
                        </div>
                        <BeerIcon />
                    </div>
                </div>
            </div>

            {/* BOTTOM ARROWS & GRID */}
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px'}}>
                <UpArrow color="var(--blue-bullet)" />
                <UpArrow color="var(--red-bullet)" />
                <UpArrow color="var(--yellow-bullet)" />
                <UpArrow color="var(--green-bullet)" />
                <UpArrow color="var(--orange-bullet)" />
            </div>

            <div className="bottom-grid">
                <div className="box box-blue">
                    <h2>{t.motherLode.title} <br/><span style={{fontSize: '0.7rem'}}>{t.motherLode.subtitle}</span></h2>
                    <ul className="bullet-blue">{t.motherLode.list.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
                </div>
                <div className="box box-red">
                    <h2>{t.showdown.title} <br/><span style={{fontSize: '0.7rem'}}>{t.showdown.subtitle}</span></h2>
                    <ul className="bullet-red">{t.showdown.list.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
                </div>
                <div className="box box-yellow">
                    <h2>{t.combo.title} <br/><span style={{fontSize: '0.7rem'}}>{t.combo.subtitle}</span></h2>
                    <ul className="bullet-yellow">{t.combo.list.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
                </div>
                <div className="box box-green">
                    <h2>{t.stampede.title} <br/><span style={{fontSize: '0.7rem'}}>{t.stampede.subtitle}</span></h2>
                    <ul className="bullet-green">{t.stampede.list.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
                </div>
                <div className="box box-orange">
                    <h2>{t.bart.title} <br/><span style={{fontSize: '0.7rem'}}>{t.bart.subtitle}</span></h2>
                    <ul className="bullet-orange">
                        {t.bart.list.map((i, idx) => <li key={idx}>{i.split('\n').map((line, lidx) => <div key={lidx}>{line}</div>)}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
