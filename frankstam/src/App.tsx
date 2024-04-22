import React from 'react';

// Images imports
import profile from './images/profile.png';
import kwartet from './images/kwartet.png';
import bathunt from './images/bathunt.png';
import patternpal from './images/patternpal.png';
import pairless from './images/pairless.png';

import Project from "./components/project";

function App() {
    return (
        <div className="flex flex-col m-16 gap-7 w-9/12">
            <header>
                <h1 className="text-5xl text-slate-300 font-medium">Frank Stam</h1>
            </header>
            <main>
                <section id="my-projects" className="mb-12">
                    <div className="flex flex-col gap-4 font-light">
                        <h1 className="text-4xl text-slate-300">My Projects</h1>
                        <Project imgSrc={kwartet}
                                 title="Kwartet"
                                 description="An online editor which can be used to create your own games of quartets."/>
                        <Project imgSrc={bathunt}
                                 title="Bathunt"
                                 description="The first game I have ever released.
                                 Inspired by the old-school game Duckhunt, the objective of this game is to shoot bats to score points."/>
                    </div>
                </section>
                <section id="involved-projects" className="mb-12">
                    <div className="flex flex-col gap-4 font-light">
                        <h1 className="text-4xl text-slate-300">Projects I was involved in</h1>
                        <Project imgSrc={pairless}
                                 title="Pairless"
                                 description="Top-down pixel adventure game that does not take itself too seriously. Created during a school project."/>
                        <Project imgSrc={patternpal}
                                 title="Patternpal"
                                 description="PatternPal is a Visual Studio extension that can recognize software design patterns in your code.
                                 It also contains a step-by-step mode for learning new design patterns."/>
                    </div>
                </section>
                <section id="about" className="mb-12">
                    <div className="flex flex-col gap-4 font-light">
                        <h1 className="text-4xl text-slate-300">About me</h1>
                        <div className="flex flex-row gap-5">
                            <img src={profile} alt="Frank Stam" className="w-[200px] h-[200px]"/>
                            <p>
                                I’m a developer from the Netherlands.
                                Some of the things that I enjoy in my spare time are gaming, bouldering, geocaching and
                                photography.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
