
const { useState } = React;

const data = {
    en: {
        title: "CACTUS CANYON RULESHEET",
        bounty: {
            title: "BOUNTY SYSTEM",
            ways: "Ways to Light:",
            waysList: ["Lasso Skill Shot", "Defeating a Bad Guy in Quick Draw"],
            awards: "List of possible awards:",
            awardsList: ["Extra Ball", "Light Gun Fight", "Light Quick Draw", "Light/Award Lock", "+5 Bonus Multiplier", "Increase Rank", "Points", "1 Million Bonus"]
        },
        gunFight: {
            title: "GUN FIGHT",
            ways: "Ways to Light:",
            waysList: ["Bounty Award", "Left outlane, when lit", "Beating a Bart Brother", "Skill Shot"],
            info: "Winner increases Rank"
        },
        ranking: {
            title: "RANKING UP",
            ways: "Ways to increase Rank:",
            waysList: ["Bounty Award", "Lasso Skill Shot", "Winning Gun Fight", "Skill Shot Award"],
            progression: "Stranger ➔ Partner ➔ Deputy ➔ Sheriff ➔ Marshall",
            info: "Rank affects score in Quick Draw and High Noon"
        },
        skillShot: {
            title: "SKILL SHOT",
            info: "Selected by spinning ball",
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
            title: "BIERKRUG / BEER MUG",
            list: ["Count hits", "Extra Balls at 15 and 40 hits", "Next Bart hit increases (2X, 3X)", "Topper mode at 10 and 30 hits", "Displays New High Score"]
        },
        motherLode: {
            title: "MOTHER LODE",
            subtitle: "(Fills Blue Part)",
            list: ["If lock not lit, shot Gold Mine", "Bounty Award", "Lasso Skill Shot", "Gold Mine: Lock 3 Balls", "Start Gold Mine Multi-Ball", "Multi-Ball detail: hit all 5 Jackpots", "Mother Lode is lit", "Shoot Gold Mine to collect"]
        },
        showdown: {
            title: "SHOWDOWN",
            subtitle: "(Fills Red Part)",
            list: ["Complete L/R Targets", "Lasso Skill Shot", "return lane activations", "Bad Guy target", "defeat bad guy", "defeat stay lit", "Defeat ALL 4 Bad Guys", "Showdown Starts", "Also lights Extra Ball"]
        },
        combo: {
            title: "COMBO",
            subtitle: "(Fills Yellow Part)",
            list: ["Ramps/Loops have brief lights after shot", "Combo total increased by hit while lit", "Earn 10 Combos to fill badge part"]
        },
        stampede: {
            title: "STAMPEDE",
            subtitle: "(Fills Green Part)",
            list: ["Complete Center Ramp 3x to start Save Polly Peril", "Complete River Ramp 3x to start Save Polly Peril", "Complete Bank Ramp 3x to start Save Polly Peril", "Complete Horse Loop 3x to start Ride 'Em Cowboy", "Complete Trick Shooting loop 3x to start Marksman", "➔ Stampede Begins", "Multi-Ball: All ramps/loops lit for jackpot", "Lights badge part"]
        },
        bart: {
            title: "BART BROTHERS",
            subtitle: "(Fills Orange Part)",
            list: ["Attack: Jump ramp or weak loop shot", "Brothers: Big Bart, Bandolero, Bubba Bart", "Arrow progression: defeat Bubba ➔ final brother is Bionic Bart", "hit Jackpot shots & Bad Bart head", "Fills badge part"]
        },
        star: {
            title: "CENTRAL GOAL: HIGH NOON",
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
        title: "CACTUS CANYON REGELWERK",
        bounty: {
            title: "KOPFGELD SYSTEM",
            ways: "Wege zum Aktivieren:",
            waysList: ["Lasso Skill Shot", "Bad Guy im Quick Draw besiegen"],
            awards: "Mögliche Belohnungen:",
            awardsList: ["Extra Ball", "Schießerei beleuchten", "Quick Draw beleuchten", "Lock beleuchten/vergeben", "+5 Bonus Multiplikator", "Rangaufstieg", "Punkte", "1 Million Bonus"]
        },
        gunFight: {
            title: "SCHIESSEREI (GUN FIGHT)",
            ways: "Wege zum Aktivieren:",
            waysList: ["Kopfgeld Belohnung", "Linke Outlane (wenn beleuchtet)", "Einen Bart-Bruder besiegen", "Skill Shot"],
            info: "Sieg erhöht den Rang"
        },
        ranking: {
            title: "RANGAUFSTIEG",
            ways: "Wege zum Rangaufstieg:",
            waysList: ["Kopfgeld Belohnung", "Lasso Skill Shot", "Schießerei gewinnen", "Skill Shot Belohnung"],
            progression: "Fremder ➔ Partner ➔ Deputy ➔ Sheriff ➔ Marshall",
            info: "Rang beeinflusst Punkte bei Quick Draw und High Noon"
        },
        skillShot: {
            title: "SKILL SHOT",
            info: "Wird durch den drehenden Ball ausgewählt",
            awardsList: ["Quick Draw beleuchten", "Schießerei beleuchten", "Extra Ball beleuchten", "Kopfgeld beleuchten", "Einzelne Rampen/Loops abschließen", "Rangaufstieg", "Bonus Multiplikator +3", "1 Million Punkte", "Lock beleuchten/vergeben"]
        },
        extraBall: {
            title: "EXTRA BALL",
            info: "Wird in der Goldmine abgeholt (wenn beleuchtet)",
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
        motherLode: {
            title: "MUTTERADER (MOTHER LODE)",
            subtitle: "(Füllt blauen Bereich)",
            list: ["Wenn Lock aus: Goldmine treffen", "Kopfgeld Belohnung", "Lasso Skill Shot", "Goldmine: 3 Bälle einloggen", "Goldmine Multi-Ball starten", "Multi-Ball Detail: Alle 5 Jackpots treffen", "Mutterader ist beleuchtet", "Goldmine treffen zum Sammeln"]
        },
        showdown: {
            title: "SHOWDOWN",
            subtitle: "(Füllt roten Bereich)",
            list: ["L/R Targets abschließen", "Lasso Skill Shot", "Return Lane Aktivierungen", "Bad Guy Ziel", "Bad Guy besiegen", "Besiegte bleiben beleuchtet", "ALLE 4 Bad Guys besiegen", "Showdown startet", "Beleuchtet auch den Extra Ball"]
        },
        combo: {
            title: "KOMBINATION (COMBO)",
            subtitle: "(Füllt gelben Bereich)",
            list: ["Rampen/Loops leuchten kurz nach Schuss", "Combo-Zähler steigt bei Treffer während es leuchtet", "10 Combos sammeln, um Abzeichen zu füllen"]
        },
        stampede: {
            title: "MASSENPANIK (STAMPEDE)",
            subtitle: "(Füllt grünen Bereich)",
            list: ["Center Rampe 3x = Save Polly Peril", "River Rampe 3x = Save Polly Peril", "Bank Rampe 3x = Save Polly Peril", "Horse Loop 3x = Ride 'Em Cowboy", "Trick Shooting Loop 3x = Marksman", "➔ Stampede beginnt", "Multi-Ball: Alle Rampen/Loops leuchten für Jackpot", "Beleuchtet Abzeichen-Teil"]
        },
        bart: {
            title: "BART BRÜDER",
            subtitle: "(Füllt orangenen Bereich)",
            list: ["Angriff: Jump Rampe oder schwacher Loop Schuss", "Brüder: Big Bart, Bandolero, Bubba Bart", "Reihenfolge: Besiege Bubba ➔ letzter ist Bionic Bart", "Triff Jackpot-Schüsse & Bad Bart Kopf", "Füllt Abzeichen-Teil"]
        },
        star: {
            title: "HAUPTZIEL: HIGH NOON",
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

const App = () => {
    const [lang, setLang] = useState('de');
    const t = data[lang];

    return (
        <div className="container">
            <div className="header">
                <h1>{t.title}</h1>
                <div className="lang-switch">
                    <button onClick={() => setLang('de')} style={{opacity: lang === 'de' ? 1 : 0.6}}>Deutsch</button>
                    <button onClick={() => setLang('en')} style={{opacity: lang === 'en' ? 1 : 0.6}}>English</button>
                </div>
            </div>

            <div className="main-grid">
                <div className="left-col">
                    <div className="box">
                        <h2>{t.bounty.title}</h2>
                        <div className="flex-row">
                            <div>
                                <h3>{t.bounty.ways}</h3>
                                <ul>{t.bounty.waysList.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
                            </div>
                            <div>
                                <h3>{t.bounty.awards}</h3>
                                <ul>{t.bounty.awardsList.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="box">
                        <h2>{t.gunFight.title}</h2>
                        <h3>{t.gunFight.ways}</h3>
                        <ul>{t.gunFight.waysList.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
                        <p style={{fontWeight: 'bold', textAlign: 'center'}}>{t.gunFight.info}</p>
                    </div>

                    <div className="box">
                        <h2>{t.ranking.title}</h2>
                        <h3>{t.ranking.ways}</h3>
                        <ul>{t.ranking.waysList.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
                        <p style={{textAlign: 'center', color: '#c62828', fontWeight: 'bold'}}>{t.ranking.progression}</p>
                        <p style={{fontSize: '0.8rem', textAlign: 'center'}}>{t.ranking.info}</p>
                    </div>
                </div>

                <div className="center-col">
                    <div className="star-container">
                        <div className="star-content">
                            <h2>{t.star.title}</h2>
                            <ul>{t.star.list.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
                        </div>
                    </div>
                </div>

                <div className="right-col">
                    <div className="box">
                        <h2>{t.skillShot.title}</h2>
                        <p style={{fontStyle: 'italic', margin: '0 0 5px 0'}}>{t.skillShot.info}</p>
                        <ul>{t.skillShot.awardsList.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
                    </div>

                    <div className="box">
                        <h2>{t.extraBall.title}</h2>
                        <p style={{margin: '0 0 5px 0'}}>{t.extraBall.info}</p>
                        <h3>{t.extraBall.ways}</h3>
                        <ul>{t.extraBall.waysList.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
                    </div>

                    <div className="box">
                        <h2>{t.bonus.title}</h2>
                        <h3>{t.bonus.ways}</h3>
                        <ul>{t.bonus.waysList.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
                    </div>

                    <div className="box">
                        <h2>{t.beer.title}</h2>
                        <ul>{t.beer.list.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
                    </div>
                </div>
            </div>

            <div className="bottom-grid">
                <div className="box box-blue">
                    <h2>{t.motherLode.title}</h2>
                    <p style={{textAlign: 'center', fontSize: '0.8rem', margin: '0 0 10px 0'}}>{t.motherLode.subtitle}</p>
                    <ul>{t.motherLode.list.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
                </div>
                <div className="box box-red">
                    <h2>{t.showdown.title}</h2>
                    <p style={{textAlign: 'center', fontSize: '0.8rem', margin: '0 0 10px 0'}}>{t.showdown.subtitle}</p>
                    <ul>{t.showdown.list.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
                </div>
                <div className="box box-yellow">
                    <h2>{t.combo.title}</h2>
                    <p style={{textAlign: 'center', fontSize: '0.8rem', margin: '0 0 10px 0'}}>{t.combo.subtitle}</p>
                    <ul>{t.combo.list.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
                </div>
                <div className="box box-green">
                    <h2>{t.stampede.title}</h2>
                    <p style={{textAlign: 'center', fontSize: '0.8rem', margin: '0 0 10px 0'}}>{t.stampede.subtitle}</p>
                    <ul>{t.stampede.list.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
                </div>
                <div className="box box-orange">
                    <h2>{t.bart.title}</h2>
                    <p style={{textAlign: 'center', fontSize: '0.8rem', margin: '0 0 10px 0'}}>{t.bart.subtitle}</p>
                    <ul>{t.bart.list.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
