
const { useState } = React;

const data = {
    en: {
        title: "CACTUS CANYON",
        bounty: {
            title: "BOUNTY SYSTEM",
            ways: "Ways to Light",
            waysList: ["Lasso Skill Shot [cite: 34]", "Defeating a Bad Guy in Quick Draw [cite: 35]"],
            awards: "List of possible awards",
            awardsList: ["Extra Ball [cite: 37]", "Light Gun Fight [cite: 38]", "Light Quick Draw [cite: 40]", "Light/Award Lock [cite: 41]", "+5 Bonus Multiplier [cite: 42]", "Increase Rank [cite: 43]", "Points [cite: 44]", "1 Million Bonus [cite: 45]"]
        },
        gunFight: {
            title: "GUN FIGHT",
            ways: "Ways to Light",
            waysList: ["Bounty Award [cite: 55]", "Left outlane, when lit [cite: 56]", "Beating a Bart Brother [cite: 57]", "Skill Shot [cite: 7]"],
            logic: "Winner and flow logic:",
            info: "Winner increases Rank [cite: 62]"
        },
        ranking: {
            title: "RANKING UP",
            ways: "Ways to increase Rank",
            waysList: ["Bounty Award [cite: 66]", "Lasso Skill Shot [cite: 67]", "Winning Gun Fight [cite: 68]", "Skill Shot Award [cite: 15]"],
            progList: ["Stranger", "Partner", "Deputy", "Sheriff", "Marshall"],
            info: "Rank affects score in Quick Draw and High Noon [cite: 78]"
        },
        skillShot: {
            title: "SKILL SHOT",
            info: "Selected by spinning ball\nList of awards:",
            awardsList: ["Light Quick Draw [cite: 6]", "Light Gun Fight [cite: 7]", "Light Extra Ball [cite: 8]", "Light Bounty Award [cite: 9]", "Complete individual Ramps/Loops [cite: 10]", "Increase Rank [cite: 15]", "Increase Bonus Multiplier by 3 [cite: 16]", "1 Million Points [cite: 17]", "Light/Award Lock [cite: 18]"]
        },
        extraBall: {
            title: "EXTRA BALL",
            info: "Collected at Gold Mine when lit [cite: 26]",
            ways: "Lit by:",
            waysList: ["Complete Save Polly Peril [cite: 28]", "Skill Shot [cite: 29]", "Start Showdown Multi-Ball [cite: 30]", "Shooting Beer Mug [cite: 31]"]
        },
        bonus: {
            title: "BONUS MULTIPLIER",
            ways: "Increased by:",
            waysList: ["Complete 2 lanes [cite: 22]", "Skill Shot award (+3) [cite: 23]", "Bounty award (+5) [cite: 24]"]
        },
        beer: {
            title: "BIERKRUG",
            list: ["Count hits [cite: 86]", "Extra Balls at 15 and 40 hits [cite: 88]", "Next Bart hit increases (2X, 3X) [cite: 89]", "Topper mode at 10 and 30 hits [cite: 90]", "Displays New High Score [cite: 99]"]
        },
        motherLode: { title: "MOTHER LODE", subtitle: "(Fills Blue Part)", list: ["If lock not lit, shot Gold Mine [cite: 94]", "Bounty Award [cite: 95]", "Lasso Skill Shot [cite: 90]", "Gold Mine: Lock 3 Balls [cite: 92]", "Start Gold Mine Multi-Ball [cite: 91]", "Multi-Ball detail: hit all 5 Jackpots [cite: 100]", "Mother Lode is lit [cite: 100]", "Shoot Gold Mine to collect [cite: 103]"] },
        showdown: { title: "SHOWDOWN", subtitle: "(Fills Red Part)", list: ["Complete L/R Targets [cite: 164]", "Lasso Skill Shot [cite: 168]", "return lane activations", "Bad Guy target [cite: 169]", "defeat bad guy [cite: 171]", "defeat stay lit [cite: 182]", "Defeat ALL 4 Bad Guys [cite: 183]", "Showdown Starts [cite: 186]", "Also lights Extra Ball [cite: 191]"] },
        combo: { title: "COMBO", subtitle: "(Fills Yellow Part)", list: ["Ramps/Loops have brief lights after shot [cite: 81]", "Combo total increased by hit while lit [cite: 84]", "Earn 10 Combos to fill badge part [cite: 85]"] },
        stampede: { title: "STAMPEDE", subtitle: "(Fills Green Part)", list: ["Complete Center Ramp 3x to start Save Polly Peril [cite: 107]", "Complete River Ramp 3x to start Save Polly Peril [cite: 116]", "Complete Bank Ramp 3x to start Save Polly Peril [cite: 123]", "Complete Horse Loop 3x to start Ride 'Em Cowboy [cite: 129]", "Complete Trick Shooting loop 3x to start Marksman [cite: 137]", "➔ Stampede Begins [cite: 143]", "Multi-Ball: All ramps/loops lit for jackpot [cite: 147]", "Lights badge part [cite: 148]"] },
        bart: { title: "BART BROTHERS", subtitle: "(Fills Orange Part)", list: ["Attack: Jump ramp or weak loop shot [cite: 153]", "Brothers: Big Bart, Bandolero, Bubba Bart [cite: 156]", "Arrow progression:\n➔ defeat Bubba ➔ final brother is Bionic Bart [cite: 160]\n➔ hit Jackpot shots & Bad Bart head [cite: 161]", "Fills badge part [cite: 157]"] },
        star: {
            main: "HAUPTZIEL: CENTRAL GOAL: HIGH NOON [cite: 193, 194]",
            list: [
                "A 30 second timed mode (+1 Second for each Bad Guy hit during the game) [cite: 201, 203]",
                "To start, shoot Gold Mine when badge is lit [cite: 196]",
                "All balls returned for duration [cite: 197]",
                "Goal is to hit 20 Bad Guy targets to win [cite: 200]",
                "Reward: 20 Million Points [cite: 200]"
            ]
        }
    },
    de: {
        title: "CACTUS CANYON",
        bounty: {
            title: "KOPFGELD SYSTEM",
            ways: "Aktivierung",
            waysList: ["Lasso Skill Shot [cite: 34]", "Bad Guy im Quick Draw besiegen [cite: 35]"],
            awards: "Mögliche Belohnungen",
            awardsList: ["Extra Ball [cite: 37]", "Schießerei beleuchten [cite: 38]", "Quick Draw beleuchten [cite: 40]", "Lock beleuchten/vergeben [cite: 41]", "+5 Bonus Multiplikator [cite: 42]", "Rangaufstieg [cite: 43]", "Punkte [cite: 44]", "1 Million Bonus [cite: 45]"]
        },
        gunFight: {
            title: "SCHIESSEREI",
            ways: "Aktivierung",
            waysList: ["Kopfgeld Belohnung [cite: 55]", "Linke Outlane (wenn beleuchtet) [cite: 56]", "Einen Bart-Bruder besiegen [cite: 57]", "Skill Shot [cite: 7]"],
            logic: "Sieger Logik:",
            info: "Sieg erhöht den Rang [cite: 62]"
        },
        ranking: {
            title: "RANGAUFSTIEG",
            ways: "Wege zum Rangaufstieg",
            waysList: ["Kopfgeld Belohnung [cite: 66]", "Lasso Skill Shot [cite: 67]", "Schießerei gewinnen [cite: 68]", "Skill Shot Belohnung [cite: 15]"],
            progList: ["Fremder", "Partner", "Deputy", "Sheriff", "Marshall"],
            info: "Rang beeinflusst Punkte bei Quick Draw und High Noon [cite: 78]"
        },
        skillShot: {
            title: "SKILL SHOT",
            info: "Ausgewählt durch drehenden Ball\nBelohnungen:",
            awardsList: ["Quick Draw beleuchten [cite: 6]", "Schießerei beleuchten [cite: 7]", "Extra Ball beleuchten [cite: 8]", "Kopfgeld beleuchten [cite: 9]", "Einzelne Rampen/Loops abschließen [cite: 10]", "Rangaufstieg [cite: 15]", "Bonus Multiplikator +3 [cite: 16]", "1 Million Punkte [cite: 17]", "Lock beleuchten/vergeben [cite: 18]"]
        },
        extraBall: {
            title: "EXTRA BALL",
            info: "Abgeholt in der Goldmine wenn beleuchtet [cite: 26]",
            ways: "Beleuchtet durch:",
            waysList: ["Save Polly Peril abschließen [cite: 28]", "Skill Shot [cite: 29]", "Showdown Multi-Ball starten [cite: 30]", "Bierkrug treffen [cite: 31]"]
        },
        bonus: {
            title: "BONUS MULTIPLIKATOR",
            ways: "Erhöht durch:",
            waysList: ["2 Lanes abschließen [cite: 22]", "Skill Shot Belohnung (+3) [cite: 23]", "Kopfgeld Belohnung (+5) [cite: 24]"]
        },
        beer: {
            title: "BIERKRUG",
            list: ["Treffer zählen [cite: 86]", "Extra Bälle bei 15 und 40 Treffern [cite: 88]", "Nächster Bart-Treffer wird erhöht (2X, 3X) [cite: 89]", "Topper-Modus bei 10 und 30 Treffern [cite: 90]", "Zeigt neuen Highscore an [cite: 99]"]
        },
        motherLode: { title: "MUTTERADER", subtitle: "(Füllt blauen Bereich)", list: ["Wenn Lock aus: Goldmine treffen [cite: 94]", "Kopfgeld Belohnung [cite: 95]", "Lasso Skill Shot [cite: 90]", "Goldmine: 3 Bälle einloggen [cite: 92]", "Goldmine Multi-Ball starten [cite: 91]", "Detail: Alle 5 Jackpots treffen [cite: 100]", "Mutterader ist beleuchtet [cite: 100]", "Goldmine treffen zum Sammeln [cite: 103]"] },
        showdown: { title: "SHOWDOWN", subtitle: "(Füllt roten Bereich)", list: ["L/R Targets abschließen [cite: 164]", "Lasso Skill Shot [cite: 168]", "Return Lane Aktivierungen", "Bad Guy Ziel [cite: 169]", "Bad Guy besiegen [cite: 171]", "Besiegte bleiben beleuchtet [cite: 182]", "ALLE 4 Bad Guys besiegen [cite: 183]", "Showdown startet [cite: 186]", "Beleuchtet auch Extra Ball [cite: 191]"] },
        combo: { title: "KOMBINATION", subtitle: "(Füllt gelben Bereich)", list: ["Rampen/Loops leuchten kurz nach Schuss [cite: 81]", "Combo-Zähler steigt bei Treffer während Licht [cite: 84]", "10 Combos sammeln für Abzeichen [cite: 85]"] },
        stampede: { title: "MASSENPANIK", subtitle: "(Füllt grünen Bereich)", list: ["Center Rampe 3x = Save Polly Peril [cite: 107]", "River Rampe 3x = Save Polly Peril [cite: 116]", "Bank Rampe 3x = Save Polly Peril [cite: 123]", "Horse Loop 3x = Ride 'Em Cowboy [cite: 129]", "Trick Shooting Loop 3x = Marksman [cite: 137]", "➔ Stampede beginnt [cite: 143]", "Multi-Ball: Rampen/Loops = Jackpot [cite: 147]", "Beleuchtet Abzeichen-Teil [cite: 148]"] },
        bart: { title: "BART BRÜDER", subtitle: "(Füllt orangenen Bereich)", list: ["Angriff: Jump Rampe oder Loop Schuss [cite: 153]", "Brüder: Big Bart, Bandolero, Bubba Bart [cite: 156]", "➔ Besiege Bubba ➔ letzter ist Bionic Bart [cite: 160]\n➔ Triff Jackpot-Schüsse & Bad Bart Kopf [cite: 161]", "Füllt Abzeichen-Teil [cite: 157]"] },
        star: {
            main: "HAUPTZIEL: CENTRAL GOAL: HIGH NOON [cite: 193, 194]",
            list: [
                "30 Sekunden Zeitmodus (+1 Sek. für jeden im Spiel getroffenen Bad Guy) [cite: 201, 203]",
                "Zum Starten Goldmine treffen, wenn Abzeichen leuchtet [cite: 196]",
                "Alle Bälle werden währenddessen zurückgegeben [cite: 197]",
                "Ziel: 20 Bad Guy Ziele treffen um zu gewinnen [cite: 200]",
                "Belohnung: 20 Millionen Punkte [cite: 200]"
            ]
        }
    }
};

const App = () => {
    const [lang, setLang] = useState('de');
    const t = data[lang];

    return (
        <div className="canvas">
            {/* Header */}
            <div className="header-bar">
                <h1>{t.title} [DE/EN]</h1>
                <div className="lang-switch">
                    <button onClick={() => setLang('de')} style={{opacity: lang === 'de' ? 1 : 0.6}}>DE</button>
                    <button onClick={() => setLang('en')} style={{opacity: lang === 'en' ? 1 : 0.6}}>EN</button>
                </div>
            </div>

            {/* --- LEFT COLUMN --- */}
            <div className="box bounty-box">
                <h2>{t.bounty.title}</h2>
                <div className="flex-row">
                    <div style={{width: '40%'}}>
                        <h3>{t.bounty.ways}</h3>
                        <ul className="bullet-blue">{t.bounty.waysList.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
                    </div>
                    <div className="collect-arrow">➔ Collect ➔</div>
                    <div style={{width: '40%'}}>
                        <ul className="bullet-orange">{t.bounty.awardsList.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
                    </div>
                </div>
                <div style={{marginTop: '10px', display: 'flex', alignItems: 'center'}}>
                    <div style={{border: '1px solid black', padding: '2px 5px', borderRadius: '5px', background: 'white', marginRight: '10px'}}>Saloon</div>
                    <div className="sprite s-cowboy" style={{marginLeft: 'auto'}}></div>
                </div>
            </div>
            
            <div className="box gun-fight-box">
                <h2>{t.gunFight.title}</h2>
                <div className="flex-row">
                    <div>
                        <h3>{t.gunFight.ways}</h3>
                        <ul className="bullet-orange">{t.gunFight.waysList.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
                    </div>
                    <div className="winner-logic">
                        {t.gunFight.logic}<br/>➔
                    </div>
                </div>
                <p style={{fontWeight: 'bold', borderTop: '2px solid #2a1610', paddingTop: '5px', marginTop: '5px'}}>➔ {t.gunFight.info}</p>
            </div>

            {/* Connecting line gun fight -> ranking up */}
            <div className="flow-arrow-down"></div>

            <div className="box ranking-up-box">
                <h2>{t.ranking.title}</h2>
                <ul className="bullet-orange" style={{columnCount: 2}}>{t.ranking.waysList.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
                
                <div className="star-progression">
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}><div className="sprite s-star-blue" style={{transform: 'scale(0.5)'}}></div><span>{t.ranking.progList[0]}</span></div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}><div className="sprite s-star-red" style={{transform: 'scale(0.5)'}}></div><span>{t.ranking.progList[1]}</span></div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}><div className="sprite s-star-bronze" style={{transform: 'scale(0.5)'}}></div><span>{t.ranking.progList[2]}</span></div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}><div className="sprite s-star-yellow" style={{transform: 'scale(0.5)'}}></div><span>{t.ranking.progList[3]}</span></div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}><div className="sprite s-star-orange" style={{transform: 'scale(0.5)'}}></div><span>{t.ranking.progList[4]}</span></div>
                </div>
                <p style={{textAlign: 'center', fontSize: '0.8rem', marginTop: '5px'}}>{t.ranking.info}</p>
            </div>


            {/* --- RIGHT COLUMN --- */}
            <div className="box skill-shot-box">
                <h2>{t.skillShot.title}</h2>
                <p style={{fontStyle: 'italic'}}>{t.skillShot.info.split('\n')[0]}</p>
                <ul className="bullet-orange">{t.skillShot.awardsList.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
            </div>

            <div className="box extra-ball-box">
                <h2>{t.extraBall.title}</h2>
                <p>{t.extraBall.info}</p>
                <h3>{t.extraBall.ways}</h3>
                <ul className="bullet-red">{t.extraBall.waysList.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
            </div>

            <div className="sprite s-beer abs-beer"></div>

            <div className="box bonus-box">
                <h2>{t.bonus.title}</h2>
                <h3>{t.bonus.ways}</h3>
                <ul className="bullet-green">{t.bonus.waysList.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
            </div>

            <div className="box bierkrug-box">
                <h2>{t.beer.title}</h2>
                <ul className="bullet-orange">{t.beer.list.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
            </div>


            {/* --- CENTER MAIN STAR --- */}
            <div className="center-star-area">
                <div className="sprite s-main-star"></div>
                <div className="center-star-text">
                    <h2>{t.star.main.split(': ').map((x,i)=><div key={i}>{x}</div>)}</h2>
                    <ul>{t.star.list.map((rule, idx) => <li key={idx}>{rule}</li>)}</ul>
                </div>
            </div>

            {/* --- SPRITE ARROWS FROM BOTTOM BOXES --- */}
            <div className="sprite s-arrow-blue arr-blue"></div>
            <div className="sprite s-arrow-red arr-red"></div>
            <div className="sprite s-arrow-yellow arr-yellow"></div>
            <div className="sprite s-arrow-green arr-green"></div>
            <div className="sprite s-arrow-orange arr-orange"></div>

            {/* --- BOTTOM ROW (5 BOXES) --- */}
            <div className="bottom-boxes-container">
                <div className="box bottom-box box-blue">
                    <h2>{t.motherLode.title}</h2><span className="subtext">{t.motherLode.subtitle}</span>
                    <ul className="bullet-blue">{t.motherLode.list.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
                </div>
                <div className="box bottom-box box-red">
                    <h2>{t.showdown.title}</h2><span className="subtext">{t.showdown.subtitle}</span>
                    <ul className="bullet-red">{t.showdown.list.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
                </div>
                <div className="box bottom-box box-yellow">
                    <h2>{t.combo.title}</h2><span className="subtext">{t.combo.subtitle}</span>
                    <ul className="bullet-yellow">{t.combo.list.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
                </div>
                <div className="box bottom-box box-green">
                    <h2>{t.stampede.title}</h2><span className="subtext">{t.stampede.subtitle}</span>
                    <ul className="bullet-green">{t.stampede.list.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
                </div>
                <div className="box bottom-box box-orange">
                    <h2>{t.bart.title}</h2><span className="subtext">{t.bart.subtitle}</span>
                    <ul className="bullet-orange">
                        {t.bart.list.map((i, idx) => <li key={idx}>{i.split('\n').map((line, lidx) => <div key={lidx}>{line}</div>)}</li>)}
                    </ul>
                </div>
            </div>

        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
