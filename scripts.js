const blogPosts = {
    zorth: {
        title: "Zorth - Journey to the Core",
        date: "November 14, 2021",
        summary: "The first time I was happy with the result of a group project",
        thumbnail: "images/blog/zorth-thumbnail.jpg",
        content: `
        <p>This was probably the first game that came out to a quality I was relatively happy with. It certainly has some bugs, but most things work as intended and it actually has an endpoint.</p>
        <br>
        <p>I created this with a group of 6 - although only 4 that contributed including myself. Specifically, I handled the generalised design and level design (although this wasn't fully realised due to time constraints), as  well as the trailer for the game.</p>
        <br>
        <img src='images/blog/zorth-core.jpg' alt='Zorth at the core'>
        <br>
        <p><a href="https://itsvenom.itch.io/zorth" target="_blank" class="blog-play-btn">PLAY</a></p>
        `,
        tldr: `
        <b>About</b>
        <p>Zorth: Journey to the core is a 2D platformer created with a team of 6 in the first year. It was simplistic, but was the first project I was happy with the outcome and my contribution</p><br>
        <b>Responsibilities</b>
            <ul>
                <li>Working collaboratively to design the game, meeting remotely on discord</li>
                <li>Level design, creating paper mockups and iterating</li>
            </ul><br>
        <b>Lessons</b>
            <ul>
            <li>Working with a small team to create a finished product</li>
            <li>Importance of even work distribution to avoid burnout</li>
            <li>Importance of QA testing, as the final version had a game breaking bug preventing respawns</li>
        </ul>
        <br>
        <p><a href="https://itsvenom.itch.io/zorth" target="_blank" class="blog-play-btn">PLAY</a></p>
        `,
        type: 'none'
    },
    galacticFeline: {
        title: "Galactic Feline",
        date: "Nov 30, 2021",
        summary: "A large group project aimed at replicating Starfox",
        thumbnail: "images/blog/galacticFeline-thumbnail.jpg",
        content: `
        <p>This was the first longer form project that we worked on in the group development module. It was themed around being a game similar to Starfox.</p>
        <br>
        <p>I worked with a group of 12 to create this over 2 weeks, and it came out relatively well, even if the crunch toward the end meant that my designs for the level were cut for the sake of time preservation, even though they were blocked out in the editor. I also worked on the code for the game and enemy pathing/design.</p>
        <br>
        <img src='images/blog/galacticFeline-gameplay.jpg' width="80%" alt='Gameplay of Galactic Feline'>
        <br>
        <p><a href="https://mbutcher.itch.io/galactic-feline" target="_blank" class="blog-play-btn">PLAY</a></p>
        `,
        tldr: `
        <b>About</b>
        <p>Galactic Feline was made in 2 weeks for an internal university game jam aimed at replicating Starfox. I worked in a team of 12, and the game was well received by both peers and the lecturer</p><br>
        <b>Responsibilities</b>
            <ul>
                <li>Effective communication with a large team remotely through Discord, and in a handful of scheduled in person meetings</li>
                <li>Level design and implementation in Engine</li>
                <li>Enemy design/Combat design and implementation in Engine</li>
                <li>Documentation using Google Docs</li>
            </ul><br>
        <b>Lessons</b>
            <ul>
                <li>Working with a large team</li>
                <li>Working within the Unity Engine, as my experience was limited at the beginning of the project</li>
                <li>Importance of communication to avoid overscoping, as my level designs were ultimately slimmed down for the sake of time</li>
            </ul>
        <br>
        <p><a href="https://mbutcher.itch.io/galactic-feline" target="_blank" class="blog-play-btn">PLAY</a></p>
        `,
        type: 'none'
    },
    pcModel: {
        title: "PC 3D model",
        date: "April 30, 2022",
        summary: "I created a 3D model of my PC for my Foundations in 3D Modelling module",
        thumbnail: "images/blog/pcModel-thumbnail.jpg",
        content: `
        <p>The final 3D modelling project of my first year was to create a model of an object of our choice. I was not very confident with my modelling skills, as art definitely isn’t my choice of discipline, but I chose to recreate my PC in 3DS MAX. I am pretty happy with the result - as a designer and programmer, something recognisable is great! This project received a 75.</p><br>
        <video width="560" height="315" controls>
            <source src="images/blog/pcModel-render.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <br>
        <p><a href="https://www.youtube.com/watch?v=nOAB_lQPyyA" target="_blank" class="blog-video-btn">Video</a></p>
        <br>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/nOAB_lQPyyA?si=3_YaasZFSnaXIWs-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,
        tldr: `
        <b>About</b>
        <p>For my 3D modelling module, I used 3DS max to create a model of my PC</p><br>
        <b>Responsibilities</b>
            <ul>
                <li>Effectively producing reference photos of my PC</li>
                <li>Creating a 3D model to an industry standard</li>
                <li>Using a renderer to produce a rendered clip</li>
                <li>Scripting, recording, and editing an accompanying video</li>
            </ul><br>
        <b>Lessons</b>
            <ul>
                <li>Use of 3DS max</li>
                <li>Finding areas of a model that are problematic (unnecessary polygon usage etc.)</li>
                <li>Saving and backing up frequently</li>
            </ul>
        <br>
        <p><a href="https://www.youtube.com/watch?v=nOAB_lQPyyA" target="_blank" class="blog-video-btn">Video</a></p>
        `,
        type: 'none'
    },
    maze: {
        title: "C++ Maze Game",
        date: "May 10, 2022",
        summary: "A maze game aimed at establishing foundations in C++",
        thumbnail: "images/blog/maze-thumbnail.jpg",
        content: `
        <p>For the final coding project of year 1, we were tasked with creating a simple console based game to show off our knowledge of C++. I chose to create a game that generated a maze to be traversed by the player. The goal is to collect all of the coins to unlock the exit.</p><br>
        <p>It took around 30 hours or so to complete, but a lot of the time was related research. Once I completed the game, I was very happy with the result. The ability to set the parameters of the maze generation added a lot of depth to the game, making it fun to replay.</p><br>
        <img src='images/blog/maze-options.jpg' alt='Maze options'><br>
        <p>The algorithmic approach was an improvement over an old system that I created as part of coursework in college. Originally, I planned to use a similar implementation to generate the maze, but instead ended up rewriting it much more efficiently (cutting down a few hundred lines of code). The result was an object oriented approach using recursion, then using a player class to handle user behaviour.</p><br>
        <p>I received 78/100 marks on this project.</p><br>
        
        <p><a href="https://github.com/OllieGuy/TOGA-Artefact" target="_blank" class="blog-github-btn">Github</a></p>
        <br>
        <p><a href="https://www.youtube.com/watch?v=e1PF0aQS3zY" target="_blank" class="blog-video-btn">Video</a></p>
        <br>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/e1PF0aQS3zY?si=B5_1zmFIGvy9a95R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,
        tldr: `
        <b>About</b>
        <p>I created a game based on a random maze generator in C++</p><br>
        <b>Responsibilities</b>
            <ul>
                <li>Researching methods of maze generation, eventually using recursive backtracking</li>
                <li>Use C++ to optimise code from an old project created in college (I reduced the generation algorithm by hundreds of lines)</li>
                <li>Adding replayability by allowing users to customise the maze</li>
                <li>Object oriented implementation</li>
                <li>Scripting, recording, and editing an accompanying video</li>
            </ul><br>
        <b>Lessons</b>
            <ul>
                <li>Using C++, including memory management and pointers</li>
            </ul>
        
        <br>
        <p><a href="https://github.com/OllieGuy/TOGA-Artefact" target="_blank" class="blog-github-btn">Github</a></p>
        <br>
        <p><a href="https://www.youtube.com/watch?v=e1PF0aQS3zY" target="_blank" class="blog-video-btn">Video</a></p>
        `,
        type: 'none'
    },
    elements: {
        title: "The 4 Elements - An Inflection Point",
        date: "May 20, 2022",
        summary: "A group project that didn't go to plan",
        thumbnail: "images/blog/elements-thumbnail.jpg",
        content: `
        <p><i>This section was written on 3/8/24:</i><br>The 4 elements was the final group project in my first year. It was the project with the longest time between the brief and the deadline in that year, yet it had very few hours committed to it compared to the recommended amount. Normally, I would be reluctant to include it due to not being to a standard that I would deem presentable, but I think projects such as this are important learning experiences.</p><br>
        <p>Even in the original write up below, you can see my failing to take responsibility for the results of the project. Whilst I contributed what I could, I was still complacent as a designer, in that I should have been working in-engine far earlier than I did. I should have set up prototypes and blockouts earlier on in the process, and taken more initiative in rallying the group, despite not being the leader.</p><br>
        <p>The project produced from this module was sub-par comparatively to all other work that I submitted prior and since, but without the lessons taught by this failure, I could not be where I am now. The lessons I learned on proactivity rather than reactivity, and the wake up call of receiving a 2-2 on the project (I luckily got high marks on the solo section resulting in a 2-1 overall) pushed me to dedicate much more time to making sure that never happened afterwards, receiving firsts on every project bar one in the following two years.</p><br>
        <img src='images/blog/elements-desert.jpg' alt='Gameplay from the 4 elements'><br>
        <p>The following was originally written in May 2022 as part of the TDEMO group project module, as the solo section of the assessment:</p><br>
        
        <div class="quote">
            <b>Intro</b>
                <p>I was the lead designer of The 4 Elements, the final TDEMO project by the team Twinkie Finger 2. My primary role was to provide direction to the other members of the team with regard to the planning, level design, general design, assets required, and work division. We were given about 3 months on this project, although actual work was mostly concentrated between the first 2 weeks and the final 3 - the majority of my work as a designer was completed in the prior block, the latter is mostly the other miscellaneous jobs I took on in order to to contribute the maximum amount I could to the team. I also handled the creation of the final video that displayed and explained the project.</p><br>
            <b>Planning</b>
                <p>The first step of the project, after selecting which brief we were going to follow, was to create an outline of the final product as soon as possible, in order to allow our programmers and artists to begin their jobs early on. The reality of this might not be so glamorous, but the idea was that the more time they're given during the project, chances are the better it would come out.</p><br>
                <p>I thought an asset list and feature list would be applicable for the project, as it allowed me to clearly lay out and categorise all the required and optional additions. I knew this would be a useful piece of the game design document, as I had both worked as an artist and coder in previous TDEMO projects, as well as talking to other students in teams with plans that weren’t as robust as those set out by our design team. It could be argued that this contributed to the over-scoping that the team dealt with throughout the process, although I would counter with that we were tasked with creating a game based on a relatively robust blueprint, and the objective I was setting out was to attempt to conform to that firstly, and the feasibility took a back seat - better to plan more than is possible than to reach the end of your plan and have a dull, flat game.</p><br>
            <b>Implementation</b>
                <p>Once the barebones design document was created, I set about making it more readable and useful for the rest of the team, by bullet-pointing the lists and elaborating on certain features to make them more descriptive, and therefore slightly more abstracted for the coders. Work was then more accurately and personally divided in order to streamline the workflow, since an asset list that's a free-for-all could result in two versions of the same thing being worked on in parallel.</p><br>
                <p>The implementation of sound within the project was done in two steps - the first was to create them, and the second was to actually put them into the project. I used a free program called BFXR(Stephen Lavelle, 2021), as it allows me to create and manipulate 8-bit sounds using a range of modifiers. This allows for a consistent theme throughout all the sound effects, resulting in a finished product that was of a satisfactory standard, even if the majority of the sounds were cut due to time constraints.</p><br>
                <p>Implementing within the Unity editor(Unity Technologies, 2022) came a lot later, due to a lot of issues with version control; that came about due to a lack of communication - which I will talk about later. Also in regard to the engine, my final contributions came in the form of the implementation of the level design. I achieved this by placing the assets created by the art team to conform roughly to the plans set out by myself and the other designer in the design document. I took on this role in order to reduce the workload on the coders, who were already overwhelmed by the amount of work that they needed to complete before the deadline.</p><br>
                <p>Additionally, I attempted to act as QA, which is an integral part of the development of games(Ruuska, 2015). However, both that and the level design were yet other victims of the sub-par team time management - in that the levels were unable to be iterated on prior to being shipped in the final product, and the testing wasn’t carried out to the industry standard. These are both certainly areas for improvement if we had more time or were to complete the project again.</p><br>
                <img src='images/blog/elements-levels.jpg' alt='A zoomed out view of the levels'><br>
            <b>Reflection</b>
                <p>I am quite pleased with my personal performance in team Twinkie Finger 2, even if the final game was not up to the standards that I would have wished it to be. The aforementioned time related issues mostly stemmed from the issues with one of our coders not responding to any messages, so the other coder was reluctant to start the project without his input, as no one in the group was sure as to what work he had already completed, and later the lead coder wasn’t able to use a computer properly due to an injury restricting his arm. The work from the absent coder ended up being only a small amount, but that fact was only revealed with a minimal amount of time left before the deadline. Once this happened, the source control was set up and in-engine work began - in my opinion - way too close to the end. This meant that the ability of myself and the team to QA test and implement advanced features, such as dynamic aiming and the switching of elemental powers, which was originally an integral part of the game, became severely deprecated. This resulted in my ability as a designer being hindered from an outside perspective due to the issues related to the code of the game.</p><br>
                <p>The design document is well detailed, and I feel as if my work in Unity is about as good as it could have been considering the severe constraints. Although, more work could certainly have gone into the marketing and research sections, which were left without much information, as neither of the designers were producers. My work on the sounds was good, and I think they are "readable" in that each sound is relatively accurate as to what it is attempting to portray. Lastly, the final video was alright - but yet again put together on too small of a time frame.</p><br>
            <b>Conclusion</b>
                <p>In conclusion, I believe that this project was a moderate success, most of the elements created outside of the game’s Unity project (the design and art) came out to a high standard, yet within the engine the quality suffered due to a lack of time and expertise (for example, when scaling objects they no longer fit a tight visual theme, as the pixels were seemingly missized). If this project were to be completed again, time management would absolutely be the key area for improvement, as most of the pitfalls stemmed from this. I personally found that my skills in design have greatly improved since participating in this project, especially in the planning phase, consolidating what I already know and allowing me to communicate with a team more effectively due to my increased experiences within each field.</p><br>
            <b>Appendix/Bibliography</b>
                <p>Ruuska, E. (2015). QUALITY ASSURANCE TESTING IN VIDEO GAMES. Thesus, 62.</p>
                <p>Stephen Lavelle. (2021). BFXR (1.5.1) [Windows, macOS]. https://www.bfxr.net/</p>
                <p>Unity Technologies. (2022). Unity (2021.3.1f1) [Windows]. Unity Technologies. unity.com</p>
        </div>

        <br>
        <p><a href="https://www.youtube.com/watch?v=Cw12vUXyIEU" target="_blank" class="blog-video-btn">Video</a></p><br>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Cw12vUXyIEU?si=WS5a1odIZyIfrgYR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,
        tldr: `
        <b>About</b>
        <p>The 4 Elements was the final group project undertaken in my first year with a group of 6 including myself. It was a major inflection point for my attitude to work, as it was largely disappointing</p><br>
        <b>Responsibilities</b>
            <ul>
                <li>Communication with team and quasi-leadership when a teammate was absent for an extended period of time</li>
                <li>Collaborating with another designer to produce documentation</li>
                <li>Implementing designs into engine as a prototype</li>
                <li>QA testing the game</li>
            </ul><br>
        <b>Lessons</b>
            <ul>
                <li>Respecting and working around deadlines to avoid massive crunch</li>
                <li>Importance of accepting responsibility for failure</li>
                <li>Methods of testing the game, although a number of bugs were not able to be fixed by the deadline</li>
            </ul>
        <br>
        <p><a href="https://www.youtube.com/watch?v=Cw12vUXyIEU" target="_blank" class="blog-video-btn">Video</a></p>
        `,
        type: 'none'
    },
    goldrush: {
        title: "GOLDRUSH",
        date: "Dec 30, 2022",
        summary: "A simplistic shoot 'em up to improve my skills in the Unity engine",
        thumbnail: "images/blog/goldrush-thumbnail.jpg",
        content: `
        <p>GOLDRUSH is the piece of work that I am most proud of in terms of my self-improvement on the project. It was created for my Gameplay Programming module. The submission for the module was a ~15 minute video based on the game. An excerpt from the script is below:</p><br>
        <div class="quote">
            <p>Billy-Bob is a cowboy in gold rush era California. Strapped for cash and with no sense of empathy, he decides to go on a theft spree - stealing from all those who have managed to scrape together even the smallest amount of gold. Mostly by shooting them in the back as they flee.</p><br>
            <p>The game was created over the course of about 3 weeks in Unity, including creation of the art assets - which were all originally created by myself for the project. The player spawns in a world full of enemies and piles of gold, which they must collect in order to increase their score, before they die or have “won” by killing all enemies and collecting all gold. It features a menu with options for the creation of the level within the game, as well as a death summary screen. Enemies dynamically react to the player actions using a finite state machine, and the game can be paused and quit or resumed at any time.</p><br>
        </div>
        <img src='images/blog/goldrush-options.jpg' alt='Options for gameplay'><br>
        <p>I learnt a lot throughout the project, mostly related to working within the Unity engine. Already having a decent proficiency in C#, it was a case of applying it to the systems within Unity. The experience provided by this project should mean that my creation of future games in the engine is optimised greatly, as this taught me a lot of the foundational elements of the engine, allowing me to experiment whilst working towards an end goal.</p><br>
        <p>This project received a grade of 75/100. Although that was the final mark, the game itself was awarded 85/100, with the final mark received being lowered by certain elements of my evaluation in the video.</p><br>
        <img src='images/blog/goldrush-gameplay.jpg' alt='Options for gameplay'>

        <br>
        <p><a href="https://olliewright.itch.io/goldrush" target="_blank" class="blog-play-btn">Play</a></p>
        <br>
        <p><a href="https://github.com/OllieGuy/GOLDRUSH" target="_blank" class="blog-github-btn">Github</a></p>
        <br>
        <p><a href="https://www.youtube.com/watch?v=Nbdb4g8cxTM" target="_blank" class="blog-video-btn">Video</a></p><br>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Nbdb4g8cxTM?si=jUNPPGcosz60ZQ5l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,
        tldr: `
        <b>About</b>
        <p>Goldrush was created as part of the Gameplay Programming module. It is a 2D shoot-em-up created in the Unity engine</p><br>
        <b>Responsibilities</b>
            <ul>
                <li>Designing and implementing a number of features, such as customisation, animations, and enemy AI</li>
                <li>Work within the Unity engine to create a complete game by myself from beginning to end</li>
                <li>Scripting, recording, and editing an accompanying video</li>
            </ul><br>
        <b>Lessons</b>
            <ul>
                <li>Using a finite state machine to control enemy behaviour</li>
                <li>Adapting my prior knowledge of C# to the Unity engine</li>
                <li>Using version control (GitHub)</li>
            </ul>
        <br>
        <p><a href="https://olliewright.itch.io/goldrush" target="_blank" class="blog-play-btn">Play</a></p>
        <br>
        <p><a href="https://github.com/OllieGuy/GOLDRUSH" target="_blank" class="blog-github-btn">Github</a></p>
        <br>
        <p><a href="https://www.youtube.com/watch?v=Nbdb4g8cxTM" target="_blank" class="blog-video-btn">Video</a></p><br>
        `,
        type: 'none'
    },
    cedriksCrown: {
        title: "Cedrik's Crown - Iterating Game Designs",
        date: "Febuary 12, 2023",
        summary: "A board game created with a group of 5, where I acted as the lead designer, and carried out extensive testing and iteration",
        thumbnail: "images/blog/cedriksCrown-thumbnail.jpg",
        content: `
        <div class="quote">
            <p>A small group of adventurers enter a dark dungeon deep underground, and must each fight their way through hordes of enemies, and each other, in hopes of leaving with Cedrik’s Crown.</p><br>
            <p>In Cedrik's Crown, players compete to be the first to traverse the dungeon, level up their stats, defeat enemies, and finally defeat the boss, Cedrik, before taking his crown and fighting the other players trying to steal it so they can make it back to their entrance and win. The unique selling point of this game is that the board is constructed between turns, as each player places a map tile which is then turned over when a player reaches it to reveal the amount of enemies at that position that they can choose to fight or evade.</p><br>
        </div>
        <img src='images/blog/cedriksCrown-table.jpg' alt='Players around a table'><br>
        <p>As the final assessment for the Prototyping and Iterating Game Designs module, we were required to create a board game of any genre. Whilst seeming like a relatively simple task in concept, it required 100's of combined hours of work across the team of 5. I acted as a team leader and co-lead designer on the project with another student, with 3 others helping out with smaller roles on the project.</p><br>
        <p>The initial design was proposed by my groupmate, but I proposed many heavy iterations on her original concept, namely the creation of the USP of the game, a dynamic map that changes with each playthrough, which keeps the game fresh and exciting every time, alongside randomised loot systems and enemy encounters that scale in difficulty as the game goes on.</p><br>
        <p>I spent a lot of time balancing the latter using my custom made battle simulator that took player and enemy stats, then simulated a given number of battles in order to get an average of the battles won by the player with approximate stats they would have at given points in the game. The result of this was a well balanced roster of enemies, and during playtesting the players both won and lost the way that was intended, with most fights ending with intense dice rolling, but never to the point where enemies felt too easy or hard to beat.</p><br>
        <p>This program was written in C# and later ported to C++, and uses the console to display the results of the battles. The link for the GitHub page for the program is below.</p><br>
        <img src='images/blog/cedriksCrown-battle.jpg' alt='Battle simulator'><br>
        <p>In relation to the actual gameplay itself, 8 major Game Design Documents were created before the final rulebook, which itself had some last minute edge case corrections. This project allowed me to develop my skills of iteration, collaboration, and leadership.</p><br>
        <p>The game was a fun but eye-opening venture into the pure theory behind game design, and we ended up with a game that we were very pleased with after all the time that was put into it. This project received a grade of 81/100, and my personal grade was 90/100.</p>

        <br>
        <p><a href="https://docs.google.com/presentation/d/1tfI_2-UYEN5rVomET5nU_kgLp3g023vW1F2vUyQo4Pw/edit?usp=sharing" target="_blank" class="blog-document-btn">Presentation Slides</a></p>
        <br>
        <p><a href="https://github.com/OllieGuy/Cedriks-Crown-Battle-Simulator" target="_blank" class="blog-github-btn">Battle Sim on Github</a></p>
        <br>
        <p><a href="https://www.youtube.com/watch?v=WXZz9AHTzcU" target="_blank" class="blog-video-btn">Video</a></p>
        <br>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/WXZz9AHTzcU?si=F6PY-lrzZXFA9x6N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,
        tldr: `
        <b>About</b>
        <p>Cedrik’s Crown is a board game created with a group of 5, where I acted as the lead designer, and carried out extensive iteration and testing</p><br>
        <b>Responsibilities</b>
            <ul>
                <li>Produce and iterate design documents - there were 8 created in total, as well as a final rulebook</li>
                <li>Collaborate with the rest of the team to develop concepts and elements of the game</li>
                <li>Balance all systems of the game</li>
                <li>QA test the entire experience across multiple iterations</li>
            </ul><br>
        <b>Lessons</b>
            <ul>
                <li>Creating structured design documents</li>
                <li>The importance of “Killing your darlings” for the good of a project - I was forced to scrap substantial systems throughout development</li>
                <li>The process of QA testing</li>
            </ul>
        <br>
        <p><a href="https://docs.google.com/presentation/d/1tfI_2-UYEN5rVomET5nU_kgLp3g023vW1F2vUyQo4Pw/edit?usp=sharing" target="_blank" class="blog-document-btn">Presentation Slides</a></p>
        <br>
        <p><a href="https://github.com/OllieGuy/Cedriks-Crown-Battle-Simulator" target="_blank" class="blog-github-btn">Battle Sim on Github</a></p>
        <br>
        <p><a href="https://www.youtube.com/watch?v=WXZz9AHTzcU" target="_blank" class="blog-video-btn">Video</a></p>
        `,
        type: 'none'
    },
    perlinNoise: {
        title: "Procedural Terrain Generation - Maths for Games",
        date: "May 25, 2023",
        summary: "A recreation of Unity's inbuilt perlin noise maths function, using vectors, matrices, and quaternions",
        thumbnail: "images/blog/perlinNoise-thumbnail.jpg",
        content: `
        <p>For my final Mathematical Elements for Games (MEGA), I created a program that rewrote the inbuilt Unity Mathf.PerlinNoise function to create pseudo-randomly generated terrain, that then had a coloured map projected onto it to appear to have lakes, grassy areas, and mountains. It used vectors extensively, and matrices were also used to display a small billboarded exclamation point at the highest point on the terrain.</p><br>
        <p>The implementation was created with the aim of creating customisable terrain that could be controlled by a seed system. This means that the same terrain could be generated when the same parameters were passed to the function:</p><br>
        <img src='images/blog/perlinNoise-playing.jpg' alt='Perlin noise on a 2D plane'><br>

        <ul>
            <li>Frequency is very similar to zooming out on the same size of grid, as it causes the cell size to essentially be multiplied by the reciprocal</li>
            <li>Amplitude dictates a multiplier to the height, higher amplitudes result in higher peaks, used in conjunction with octaves produces a texture to the terrain as each layer has reducing effect on the final output</li>
            <li>Octaves is the amount of times that the noise function is run and layered over itself at different frequencies and amplitudes to create a more noisy image with more detail, rather than being perfectly smooth</li>
            <li>Persistence and lacunarity both dictate the magnitude of the effect of the different frequencies and amplitudes respectively</li>
        </ul><br>

        <p>The project received an 80, receiving the following comments:</p><br>
        <div class="quote">
            <p>The video illustrates an excellent understanding of the mathematical techniques. Great work! The terrain looks great and looks really customizable, excellent stuff! Good to see you used Matrices/billboarding as well but it would've been good to have seen more use of some of the other mathematical techniques to score even higher marks for this section.  Excellent analysis of Perlin noise - well researched, and justified. Generally a really good and well contextualised analysis. Good work!  Good discussion around the issues you faced, and I appreciate all the images showcasing the different iterations of your Perlin noise generator! Good suggestions for improvement, and good to see you did some research for this as well!  Overall, this is an outstanding project. The artefact is great, and you've made honest, well researched and well spoken analysis and reflection on all the relevant parts of your artefact. Great work!</p><br>
        </div>

        <p>I was very happy with the outcome of this project. I learned a lot about a common technique used to facilitate "random" generation, whilst also greatly improving my understanding of vectors and matrices, whilst touching on more general skills, such as mesh manipulation and texturing. I also scored a 100 on the exam for this module.</p><br>
        <img src='images/blog/perlinNoise-2d.jpg' alt='Perlin noise on a 2D plane'>

        <br>
        <p><a href="https://github.com/OllieGuy/Perlin-Generation" target="_blank" class="blog-github-btn">Github</a></p>
        <br>
        <p><a href="https://www.youtube.com/watch?v=iog9GgOUovI" target="_blank" class="blog-video-btn">Video</a></p>
        <br>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/iog9GgOUovI?si=j-Y0QBbMb788IH3b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,
        tldr: `
        <b>About</b>
        <p>I created a terrain generator using perlin noise, with lots of configuration options, manipulated meshes/textures, and dealt with mathematical concepts like vectors, matrices, and quaternions</p><br>
        <b>Responsibilities</b>
            <ul>
                <li>Carrying out thorough research to justify methods used to implement features</li>
                <li>Using mathematical concepts to recreate inbuilt functions in Unity to gain insight into how they function</li>
                <li>Displaying the back-end mathematics to the user</li>
                <li>Scripting, recording, and editing an accompanying video</li>
            </ul><br>
        <b>Lessons</b>
            <ul>
                <li>Learned more about mathematical concepts such as Vectors, Matrices, and Quaternions</li>
                <li>How to manipulate meshes and generate textures through code</li>
                <li>Testing edge cases and accounting for such in the calculations</li>
            </ul>
        <br>
        <p><a href="https://github.com/OllieGuy/Perlin-Generation" target="_blank" class="blog-github-btn">Github</a></p>
        <br>
        <p><a href="https://www.youtube.com/watch?v=iog9GgOUovI" target="_blank" class="blog-video-btn">Video</a></p>
        `,
        type: 'none'
    },
    pressSpace: {
        title: "Press Space",
        date: "June 30, 2023",
        summary: "A branching narrative satire, encompassing all areas of design",
        thumbnail: "images/blog/pressSpace-thumbnail.jpg",
        content: `
        <p>Press space is a satirical narrative game that comments on the nature of player freedom, as well as the unquenchable thirst for content that players have in relation to games. The player starts with a blank screen, but more elements will gradually be added as they play through, while being talked to by the narrator. The game becomes more "personal" and introspective as the player goes further through, from text based (2D) to 3rd person to 1st person in a (very) simple environment to either a void or a more visually appealing environment, depending on the ending.</p><br>
        <p>This game was made entirely by myself, featuring my own voice (unfortunately) as the narrator of the game. Here is the story tree for the game (spoilers!):</p><br>
        <img src='images/blog/pressSpace-c1.jpg' alt='Chapter 1'><br>
        <img src='images/blog/pressSpace-c2.jpg' alt='Chapter 2'><br>
        <img src='images/blog/pressSpace-c3.jpg' alt='Chapter 3'><br>
        <p>This game was by far my biggest undertaking to the time of writing, both in time and scope. I knew that I wanted to craft an engaging narrative, within which the player would hopefully come away from the game learning something about themselves, or at the very least their relationship towards games. My process for creating the game is covered in a lot more detail in the video linked below.</p><br>
        <p>I also presented this game at the university Grad Show, allowing members of the public and industry professionals to play through, and I learnt a great deal about the game in the process - which should hopefully allow me to develop it further, improving elements such as the slower paced first chapter, and the slight narrative discrepancies that exist within the game.</p><br>
        <img src='images/blog/pressSpace-garden.jpg' alt='Garden ending'><br>

        <p>Lecturer comments on the design document:</p><br>
        <div class="quote">
            <p>A thoroughly detailed design document for this type of game. It provides a clear breakdown of the game's structure, with each narrative pathway clearly defined and the game flow evident. The only thing missing on the diagram is indicating that the chapter progression is based on non-space-bar inputs. The asset list is similarly detailed and comprehensive with a sensible naming convention used throughout. This document could easily be used by developers to guide the dev process with minimal difficulty.</p><br>
            <p>The comparative research is thorough in terms of the analysis of the 3 selected games, but other games could have been considered too potentially - there's also no academic or industrial design literature used to support some of the design decisions and justifications, which would have been useful to see.</p><br>
            <p>The justification for the game's uniqueness is nevertheless solid and the discussion around audience and target platform similarly is very well considered.</p><br>
            <p>79/100</p><br>
        </div>

        <p>Lecturer comments on the game and video:</p><br>
        <div class="quote">
            <p>An excellent prototype that could (and should!) be worked through into a fully finished product. Design justifications are thorough and clearly explained, and your links to literature and other media really helps demonstrate the depth of thought that has gone into the game scenes, themes, and structure.</p><br>
            <p>Design challenges are discussed at great length and with very detailed consideration of the possible alternative solutions and their technical and thematic consequences. Almost all solutions decided upon seem to be the most optimal given the justifications provided and show excellent design thinking.</p><br>
            <p>Overall, an excellent discussion of a very interesting prototype!</p><br>
            <p>88/100</p><br>
        </div>

        <br>
        <p><a href="https://docs.google.com/document/d/19V3mbFz-ypqlpFYI4P9UQ7mxb9qY_NHfu21vyWFO18w/edit?usp=sharing" target="_blank" class="blog-document-btn">Game Design Document</a></p>
        <br>
        <p><a href="https://olliewright.itch.io/press-space" target="_blank" class="blog-play-btn">Play</a></p>
        <br>
        <p><a href="https://github.com/OllieGuy/Press-Space" target="_blank" class="blog-github-btn">Github</a></p>
        <br>
        <p><a href="https://www.youtube.com/watch?v=D0zBu3vQZxQ" target="_blank" class="blog-video-btn">Video</a></p>
        <br>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/D0zBu3vQZxQ?si=qClN5ZOxddWvzXRi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,
        tldr: `
        <b>About</b>
        <p>Press space is a satirical branching narrative game created as a solo project. I handled all elements of design, implementation, asset usage, and audio</p><br>
        <b>Responsibilities</b>
            <ul>
                <li>Full stack design and documentation - creating a design document, flow charts and visual aids so that future designers could take on the project</li>
                <li>Code, design, art, and audio implementation, as well as voice acting the entire game as the Narrator</li>
                <li>Scripting, recording, and editing an accompanying video</li>
            </ul><br>
        <b>Lessons</b>
            <ul>
                <li>Dealing with complex player behaviour and understanding intent of players, and accounting for such</li>
                <li>Presenting the game to the public and industry at a University event</li>
                <li>Time and resource management for a project with a larger scope than any previous</li>
            </ul>
        <br>
        <p><a href="https://docs.google.com/document/d/19V3mbFz-ypqlpFYI4P9UQ7mxb9qY_NHfu21vyWFO18w/edit?usp=sharing" target="_blank" class="blog-document-btn">Game Design Document</a></p>
        <br>
        <p><a href="https://olliewright.itch.io/press-space" target="_blank" class="blog-play-btn">Play</a></p>
        <br>
        <p><a href="https://github.com/OllieGuy/Press-Space" target="_blank" class="blog-github-btn">Github</a></p>
        <br>
        <p><a href="https://www.youtube.com/watch?v=D0zBu3vQZxQ" target="_blank" class="blog-video-btn">Video</a></p>
        `,
        type: 'none'
    },
    gradShow: {
        title: "2023 Portsmouth University Graduate Showcase",
        date: "August 2, 2023",
        summary: "I exhibited Press Space at the Portsmouth University Grad Show to a great reception, and met developers from Larian Studios",
        thumbnail: "images/blog/gradShow-thumbnail.jpg",
        content: `
        <p>After being <s>called a bum</s> asked nicely by Matt (my lecturer for the Design Games module) to submit Press Space to the grad show, I sent in my application, which was accepted after just a couple of days. I had to quickly polish up an executable for the game so that I could upload it to one of the arcade-style cabinet machines that were at the event (which wouldn’t have internet access - so it was important that I got the build right).</p><br>
        <img src='images/blog/gradShow-conversation.jpg' alt='An inspirational conversation'><br>
        <p>I rushed to improve some of the UX from the original, abstract (pretentious) theming, and make the game a little more accessible to new players, and especially those without formal experience with games. The addition of the ability to skip around chapters was incredibly useful, due to some of my observations during the day (that the first chapter of the game was NOT engaging and desperately needed a reworking), whilst the second and third chapters were pretty interesting, so I could just skip people to that point without losing much in terms of gameplay and saving them 5 minutes of tedium.</p><br>
        <p>The show was relatively busy at the peak times, with a near constant stream of people coming and checking out all the exhibits. I spent the entire time right next to my machine just in case players needed help in navigating the admittedly difficult game, or if any industry professionals visited.</p><br>
        <p>It paid off though, I was lucky enough to be approached by a small group of developers from Larian Studios (Baldur’s Gate III), who wanted to know more about the game I was exhibiting at the time. I spoke about the ideation and process when creating the game and got on very well with all of them. Leah, the Lead Cinematic Animator, said I should get in touch, and handed me a business card (see the next blog post for this).</p><br>
        <img src='images/blog/gradShow-larian.jpg' alt='Larian Studios logo'><br>
        <p>Other than that, I met a number of interesting people throughout the day, and it was great to see others playing and enjoying something that I made. If I take press space forward, I should have some great feedback to work off of when altering the first chapter.</p><br>
        <img src='images/blog/gradShow-machines.jpg' alt='Machines at the grad show'><br>
        `,
        tldr: `
        <b>About</b>
        <p>I presented my game, Press Space, at the 2023 University Creative and Cultural Industries Graduate Showcase</p><br>
        <b>Responsibilities</b>
            <ul>
                <li>Prepare and package the game to be demonstrated</li>
                <li>Presenting myself professionally</li>
                <li>Interacting with members of the public, especially those without prior knowledge of games</li>
            </ul><br>
        <b>Lessons</b>
            <ul>
                <li>Presenting my own work to the public in a formalised setting</li>
                <li>Guiding newer players through the game, and later improvising solutions to their confusion</li>
                <li>Speaking to industry professionals from Larian, who invited me to the Guildford studio as a result</li>
            </ul>
        `,
        type: 'none'
    },
    visitingLarian: {
        title: "Visiting Larian",
        date: "August 29, 2023",
        summary: "I was invited to visit Larian Studios and speak to a Senior Systems Designer on the back of the Grad Show",
        thumbnail: "images/blog/visitingLarian-thumbnail.jpg",
        content: `
        <p>During the Grad showcase event at the university, I was approached by some developers from Larian, and I ended up getting in contact with one of them, Leah, after the show. After talking for a little, I was invited to visit the studio in Guildford in August, just after the release of Baldur’s Gate 3.</p><br>
        <p>Truthfully, I hadn’t heard a great deal about BG3 before the Grad Show (other than briefly viewing the steam page before thinking it wasn’t my genre), but picked the game up and played around 25 hours between the release and my visit, where I realised what a masterpiece the game actually was. I was almost disappointed in myself that I couldn’t squeeze in any more playtime - if I went back now I would certainly have a plethora of questions!</p><br>
        <p>When I arrived I had to sign an NDA so, unfortunately, I cannot disclose exactly what happened during the conversations I had. However, I will say that talking to Ross, a Senior Systems designer, altered my view on the discipline and was incredibly informative and has changed my outlook on where my specialisation goals lie going forwards in design.</p><br>
        <p>I am super thankful for the team at the studio for bringing me in and letting me see the studio first hand. The developers that I met were all wonderful people and had such interesting conversations with me, it changed the course of my career and I wish the team the best of luck with everything going forward!</p><br>
        `,
        tldr: `
        <b>About</b>
        <p>On the back of exhibiting my game at the Grad Show, I was invited to visit Larian’s Guildford studio and speak to one of their designers</p><br>
        <b>Responsibilities</b>
            <ul>
                <li>Organise an in person meeting with industry professionals</li>
                <li>Show up punctually and present myself well</li>
                <li>Meeting a lot of new people, all industry professionals</li>
            </ul><br>
        <b>Lessons</b>
            <ul>
                <li>Signing an NDA for the first time</li>
                <li>Behind the scenes look at industry standard game development</li>
                <li>A deep look at elements of system and technical design, which changed my view on the discipline as a whole</li>
            </ul>
        `,
        type: 'none'
    },
    aiPrototype: {
        title: "AI programming prototype",
        date: "January 24, 2024",
        summary: "I created a prototype capable of simulating thousands of museum visitors in Unity C#, using pathfinding, utility theory, and perception systems alongside methods of optimisation",
        thumbnail: "images/blog/aiPrototype-thumbnail.jpg",
        content: `
        <p>During the first term of my final year, we had an AI for Games module, where we had to create a system of autonomous agents. I chose to combine the work with the prototyping phase from the year-long group project, where I would be designing and implementing the AI for a management game. We hadn’t yet completed the design phase, so they began as a generic NPC that would enter, wander, and leave.</p><br>
        <p>As the group project neared the first hand-in, we settled on the it being a museum management game - to be titled “Curation”. Knowing this, I developed the design further, adding the ‘visit’, ‘donate’, and ‘panic’ behaviours to adapt agents further to the project it was intended for.</p><br>
        
        <p><b>Grid based world</b><br>
            <p>The grid was the backbone of the placement of ‘artefacts’ by the user and the walls placed by the code (coding wall placement was beyond the scope of the project). When placing something, it would generate ‘interaction points’ which were the actual positions visited by the NPCs</p><br>
        <p><b>Dynamic Room Detection</b><br>
            <p>Used a flood fill algorithm to detect rooms on wall placement/deletion. When detected, they were indexed in an array which would update itself when a room was removed</p><br>
            <img src='images/blog/aiPrototype-rooms.jpg' alt='A visualisation of room detection'><br>
        <p><b>A* Pathfinding Algorithm</b><br>
            <p>The program ran A* pathfinding on the grid to determine if a path between 2 positions was possible. I thought that the inbuilt pathfinding was bugged, as it would return true even if a path was not possible, but I found out after the project was done that I was just missing an argument to exclude partial paths. Even though it was redundant, writing an A* implementation was good practice for future projects</p><br>
            <img src='images/blog/aiPrototype-pathfinding.jpg' alt='A visualisation of the pathfinding'><br>
        <p><b>Navmesh Integration</b><br>
            <p>Used the inbuilt navmesh component to dynamically generate a navmesh on the ground around the objects placed by the user and to calculate NPCs paths when they were deemed possible by the A* pathfinding. This generated a number of points along the path, which were then followed by the NPC to preserve resources over the .SetDestination function of the navMeshAgent, which updates dynamically whenever the navmesh changes and can avoid other agents, but is incredibly resource intensive</p><br>
            <img src='images/blog/aiPrototype-navmesh.jpg' alt='A visualisation of the pathfinding'><br>
        <p><b>NPC Perception</b><br>
            <p>Implemented a sensor-based perception system using raycasts to simulate NPCs' field of view, updating a number of times a second (but not each frame for performance’s sake, to have a number of agents working at once)
            <img src='images/blog/aiPrototype-raycasts.jpg' alt='NPC using raycasts to simulate perception'><br>
        <p><b>NPC Desires and Behavior</b><br>
            <p>Utilised utility theory to determine NPC desires, incorporating factors like object type, distance, and potential happiness gain. Finite State Machines were used to execute these desires, as they were were easily implemented and adaptable - but they did get messy as the project got larger in scope</p><br>
            <img src='images/blog/aiPrototype-desire.jpg' alt='A graph displaying how desires work'><br>
        <p><b>Optimised NPC Interaction</b><br>
            <p>The systems were all split into Frame, Tick, and Turn updates, with frame updates being for functions such as moving, Tick for perception and validation that the artefact that they are visiting still exists, and Turn for the more complex calculations, such as their next desire. These optimisations allowed ~2000 agents to be on screen at one time at a playable framerate</p><br>
            <video width="560" height="315" controls>
                <source src="images/blog/aiPrototype-optimisation.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        <p><b>Emergent Gameplay Elements</b><br>
            <p>Behaviour was designed in such a way to encourage emergent and unpredictable behaviours through the use of randomness. Also, the state of panic will spread to other NPCs when they see another panicking</p><br>
        
        <p>The project was overall a great success, receiving an 85. Jay, my lecturer, left this comment on the project:</p><br>
        <div class="quote">
            <p>Your video is demonstrating an outstanding understanding of many different techniques. It's clear you've worked incredibly hard on this project, great work! Very well presented as well. And the panic behaviour was quite funny!</p><br>
            <p>Report Intro - Excellent introduction. Well researched, well defined artefact and good level of contextualisation.</p><br>
            <p>Outstanding analysis section - you've discussed the pros and cons of every technique you're planning to look at, justified your choices and contextualised. Exactly what we're looking for!</p><br>
            <p>Excellent and relevant reflections. Great research informed suggestions for improvement. A bit more on the evaluation of your own performance would've been good (like did you manage your time effectively? Did you keep motivated? etc.).</p><br>
            <p>Overall, this is an incredibly good project, something you should be very proud of! Nice job!</p>
        </div>

        <br>
        <p><a href="https://docs.google.com/document/d/1_CmVVuVnZ_SF30aROeygN9QYSlTI90ruAuic0oOsNi0/edit?usp=sharing" target="_blank" class="blog-document-btn">Documentation</a></p>
        <br>
        <p><a href="https://github.com/OllieGuy/GAMAI" target="_blank" class="blog-github-btn">Github</a></p>
        <br>
        <p><a href="https://www.youtube.com/watch?v=RHzt8AeO3JM" target="_blank" class="blog-video-btn">Video</a></p>
        <br>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/RHzt8AeO3JM?si=nlAOIihDz6c_bgK_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 
        `,
        tldr: `
        <b>About</b>
        <p>I created a prototype for what would later become Curation, using Finite State Machines to simulate agents and encourage emergent behaviours. Also using flood fill, A* pathfinding, navmesh, perception systems, utility theory and optimisation techniques</p><br>
        <b>Responsibilities</b>
            <ul>
                <li>Allowing users to alter the environment the NPCs were in</li>
                <li>Object oriented C# usage to create the NPCs</li>
                <li>Scripting, recording, and editing an accompanying video</li>
            </ul><br>
        <b>Lessons</b>
            <ul>
                <li>Utilising Finite State Machines, Flood fill, A* pathfinding, Navmesh, Perception systems, Utility theory</li>
                <li>Research of industry standards of AI agent development for games</li>
                <li>Optimising for simulation of thousands of agents</li>
            </ul>
        <br>
        <p><a href="https://docs.google.com/document/d/1_CmVVuVnZ_SF30aROeygN9QYSlTI90ruAuic0oOsNi0/edit?usp=sharing" target="_blank" class="blog-document-btn">Documentation</a></p>
        <br>
        <p><a href="https://github.com/OllieGuy/GAMAI" target="_blank" class="blog-github-btn">Github</a></p>
        <br>
        <p><a href="https://www.youtube.com/watch?v=RHzt8AeO3JM" target="_blank" class="blog-video-btn">Video</a></p>
        `,
        type: 'none'
    },
    dissertation: {
        title: "Dissertation - Verticality in Games",
        date: "April 25, 2024",
        summary: "I wrote a dissertation exploring verticality within games, developing a framework for its implementation",
        thumbnail: "images/blog/dissertation-thumbnail.jpg",
        content: `
        <p>For my final year project, I studied verticality in system and level design in my paper “Don’t Look Up: The Underlooked Value In Verticality”. Supervised by Matt Higgins (my design lecturer from second year, and my tutor), the project had the abstract:</p><br>
        <div class="quote"> 
            <p>Verticality within 3 Dimensional games is a massively underrepresented topic in both academia and design literature. This study targets existing academia, knowledge from industry practitioners and utilises practice-lead research to perform an integrative literature review before constructing a framework for the implementation of verticality within a 3D game. Its effectiveness is then assessed in a practical context through the creation of a design concept document for the game Neon Prison and a prototype of a single level. The outcome is the establishment of the BATH framework (Balance, Affordances, Tutorialisation, Holism), which offers designers a template for the consideration of verticality within their design and academics a lens through which to view verticality. It lastly develops an understanding of contextual importance when utilising the model, as differing intended player experiences alter the ways in which the model should be applied.</p><br>
        </div>
        <p>The project was completed between November and April, with the majority of the work being undertaken throughout March, early April. It was an incredibly taxing project to complete, as the study section was heavily reliant on information that was considered even by my lecturers to be “tacit knowledge”, thus finding academic sources was incredibly difficult. Because of this limitation, my original draft had a literature review that was 9000 words, in an attempt to include as much information as possible. Obviously, a literature review towards the upper bound of the recommended word count for the entire paper was unacceptable, so a lot of the irrelevant content was cut and replaced with more of a focus on my case studies, resulting in an 8000 word long literature review in the final version that was much more relevant.</p><br>
        <p>In the second part of the project, I went about creating a game design that would evidence the findings from the literature review - coming up with the game “Neon Prison”, a cyberpunk stealth-action game set in a fictional city-scraper, which allowed me to display the elements of verticality investigated in the first section. I wrote a partial concept document, omitting content irrelevant to the verticality.</p><br>
        <img src='images/blog/dissertation-greybox.jpg' alt='Blockout of the level'><br>
        <p>Once defined, it was time to go into the engine to implement the features. The first step was to create a viable movement system; I knew my game was going to be heavily reliant on it, so it was important to get right. I started with a custom implementation, getting the basics down relatively quickly, but burned myself out trying to get the more advanced movement working. After trying and failing to push through, I decided to create a fresh version of the project with a pre-existing movement controller, and I ended up using one created by the youtuber <i>Dave / GameDevelopment</i> which had most of the mechanics that I wanted, although I did write some custom ones such as the wire clipping (similar to a zipline). The introduction level design was created with a blockout, and work was started on another before it was abandoned for the sake of time at the advice of Matt.</p><br>
        <video width="560" height="315" controls>
            <source src="images/blog/dissertation-wire.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <p>Overall, I was decently happy with how the project came out. My main problem was the overly long word count (the bulk of the project was 15k words, and the whole thing including references and all was 21k). If I could repeat it, I would try and bring this down to around 11/12k - reducing the unnecessary literature review length and also having a more clear vision of what would be included in the demo before starting production.</p><br>
        <p>This project received a 73, the feedback is below (it’s very long):</p><br>
        <div class="quote">
            <p>Introduction is quick to give immediate context and an overarching question that is appropriately challenging and, demonstrably, original. There is some research around this, but it IS limited. Clear and informed plan for the dissertation provided.</p><br>
            <p>Some really balanced discussion of methodology - great consideration of the subjectivity of the subject matter here, and some informed approaches to accounting for this. There's some very thorough discussion of the approach to literature review and case studies, with a lot of literature informing this too. For the literature review, it would have also been useful to clarify what it was you were specifically trying to understand through the lit review.
            Much of the discussion here is beyond what I'd expect at undergrad - detailed consideration of key words and other lit review tools especially.
            Project management is a little brief, but some fair justification for the approach taken, with some evidence of it being followed with Trello.
            A useful comparison of a few potential approaches to data collection in the methodology, but there's no decision really made here - it seems that you didn't choose to collect any data because of a fear of a lack of participants (or time, maybe?).</p><br>
            <p>Lit review starts very broad, covering some areas that don't seem entirely relevant in more detail than is really necessary. It does get to some more relevant topics, such as the player experience, but it could definitely be more concise - there's also much more discussion that could be had of what constitutes the player experience beyond the idea of player-centric design; theories of immersion, satisfaction of needs, the Gameplay Experience Questionnaire, might have been more useful foci. 
            There's some jumps between topics here, and some messier, brief discussion of some of these too, making for a somewhat disjointed lit review.
            Quality of sources is generally excellent, with a range of academic and industry sources (though leaning more towards industry, which is fair in this context). Some referencing of lectures etc., which isn't the most reliable way of citing those sources - cite the lecturer, or even better, cite the source the lecturer has cited! (Which you do in most cases!).
            However, there's also a lot more relevant critique here, especially when getting to the meat of the verticality discussion, with a good range of literature drawn in here. There's some insightful comparisons of theory here that lead to some interesting conclusions - I like the argument that theories such as those from architecture can't be simply adopted for games due to the differing expectations of players - nicely done.</p><br>
            <p>Case studies are discussed in good detail and also offer some interesting insights - you bring together all of these games to make some novel recommendations for vertical level design, which all make a lot of sense. I love the BATH acronym too :)</p><br>
            <p>Definitions need a little more thought, as terms such as planar and stack verticality are still a little tricky to piece together. But I like that you're trying to coin novel, useful terms.</p><br>
            <p>Design of the artefact demonstrates the use of the BATH system, with some good design thinking employed here. It's a shame not all of this made it in the final playable version, though elements of everything planned is present to some degree. This plays more like a proof of concept at this stage - still  useful, but not quite complete. Your design approach is clear in the prototype, and it seems to me that you have effectively encouraged players to engage with vertical elements in the game - the only thing missing is some actual playtesting to gauge this properly!
            Love the audio, by the way! :)</p><br>
            <p>Conclusion offers a reflective summary of each step of the project before more conclusive closing remarks. You're a little hard on yourself, but it's a very honest reflection in some cases. There's a strong argument for some useful findings here, well contextualised in the games industry and in design practices.</p><br>
            <p>20k words is a little bit much, but it's very well written and largely well structured. It does get a little messy in structure in places, such as in the lit review, and there's some thought needed towards the 'flow' of the argument here.</p><br>
            <p>Overall, there's a good amount of work here - yes your time could have been managed better but you've still made some great progress. While a bit messy in places, there's a lot of critical and reflective discussion here with a genuine attempt to explore an underexplored area of game studies. </p>
        </div>

        <br>
        <p><a href="https://docs.google.com/document/d/1sbb-E0_SwEKddX39DzQPaJ5sL67WbSWTooxL5XghPB4/edit?usp=sharing" target="_blank" class="blog-document-btn">Full Paper</a></p>
        <br>
        <p><a href="https://www.youtube.com/watch?v=NzSinHGyk4g" target="_blank" class="blog-video-btn">Video</a></p>
        <br>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/NzSinHGyk4g?si=D1CjRpHXMZ9R2plS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,
        tldr: `
        <b>About</b>
        <p>I researched verticality in system and level design for my dissertation, wrote an extensive literature review and made use of my findings in a design document and prototype</p><br>
        <b>Responsibilities</b>
            <ul>
                <li>Academic rigour for sources</li>
                <li>Researching a massively underrepresented and under researched facet of game design</li>
                <li>Presenting the findings in a cohesive way</li>
                <li>Creating a tangible game design and playable demo</li>
            </ul><br>
        <b>Lessons</b>
            <ul>
                <li>Resource allocation - far too long was spent researching comparatively to prototyping</li>
                <li>Cutting excess content</li>
                <li>Adapting and building on existing systems for my own use</li>
            </ul>
        <br>
        <p><a href="https://docs.google.com/document/d/1sbb-E0_SwEKddX39DzQPaJ5sL67WbSWTooxL5XghPB4/edit?usp=sharing" target="_blank" class="blog-document-btn">Full Paper</a></p>
        <br>
        <p><a href="https://www.youtube.com/watch?v=NzSinHGyk4g" target="_blank" class="blog-video-btn">Video</a></p>
        `,
        type: 'none'
    },
    pressSpaceRedux: {
        title: "Press Space Redux",
        date: "May 19, 2024",
        summary: "I reworked the first chapter of Press Space using psychological theory to inform design decisions",
        thumbnail: "images/blog/pressSpaceRedux-thumbnail.jpg",
        content: `
        <p>For the Psychological Theory for Games module (a design-based module), I decided to rework the opening section (Chapter 1) of Press Space. The implementation section of the assessment was relatively small, so it fit quite well with the scope of the original game. I decided to reapproach the original with a mindset of cutting down the amount of ‘runway’ leading up to the more interesting section of the game, chapter 2. I ended up scrapping some of the original endings, since they were far less engaging than I would have liked, and felt more like an afterthought.</p><br>

        <p><b>Old:</b></p><br>
            <img src='images/blog/pressSpaceRedux-old.jpg' alt='Old Chapter 1 flow'><br><br>
        <p><b>New:</b></p><br>
            <img src='images/blog/pressSpaceRedux-new.jpg' alt='New Chapter 1 flow'><br><br>
        
        <p>The biggest change was moving the narrator's introduction to right at the beginning of the game in order to guide players more than in the original version. Navigating the original section before his introduction seemed to be the largest roadblock for new players, as evidenced by players at the Grad Show last year. I was careful to try and preserve the theming and general progression of the game, with the more abstract theming of the first section and the lack of visual fidelity - which did helpfully speed up development time!</p><br>
        <p>The project (alongside 2 essays) received a 74. Pete, my lecturer, made this comment on the implementation section:</p><br>
        <div class="quote">The implementation video demonstrates the new features well - your solution to presenting a difficult to present game is very good and your voiceover is professional and well-spoken. You do make correct references to transludic knowledge here too. The explanation of your implementation is linked well to the psychological concepts and you offer good evaluative reflection on both the implementation and on the additional playtesting feedback. Gathering new feedback wasn't a necessary part of the module so it's excellent that you've gone out and done this, even if it is from a limited pool of participants. Your identification of areas for further potential improvements was also well-reasoned and shows good design thinking and self-reflection on your work.</p></div>

        <br>
        <p><a href="https://docs.google.com/document/d/1w4tAvlb7YQn-YbCAyw4L6X3tf6YQPRPrFCh2h-FJ-JQ/edit?usp=sharing" target="_blank" class="blog-document-btn">Associated Document</a></p>
        <br>
        <p><a href="https://olliewright.itch.io/press-space-redux" target="_blank" class="blog-play-btn">Play</a></p>
        <br>
        <p><a href="https://www.youtube.com/watch?v=85wy4JD-oBY" target="_blank" class="blog-video-btn">Video</a></p>
        <br>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/85wy4JD-oBY?si=TDrrL_2Map9R9hje" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,
        tldr: `
        <b>About</b>
        <p>I redesigned certain elements of Press Space based on psychological principles and to make the opening of the game more engaging</p><br>
        <b>Responsibilities</b>
            <ul>
                <li>Documenting and creating visual aids for the redesign of a section of the game</li>
                <li>Employing psychological principles, stemming from the cognitive and behavioural schools of game psychology</li>
                <li>Scripting, recording, and editing an accompanying video</li>
            </ul><br>
        <b>Lessons</b>
            <ul>
                <li>Working on a legacy codebase, one that I had to remind myself if its functionality</li>
                <li>Designing with player psychology in mind</li>
                <li>Using existing feedback (from the Grad Show) to iterate a design</li>
                <li>Identifying areas of weakness within an existing design</li>
            </ul>
        <br>
        <p><a href="https://docs.google.com/document/d/1w4tAvlb7YQn-YbCAyw4L6X3tf6YQPRPrFCh2h-FJ-JQ/edit?usp=sharing" target="_blank" class="blog-document-btn">Associated Document</a></p>
        <br>
        <p><a href="https://olliewright.itch.io/press-space-redux" target="_blank" class="blog-play-btn">Play</a></p>
        <br>
        <p><a href="https://www.youtube.com/watch?v=85wy4JD-oBY" target="_blank" class="blog-video-btn">Video</a></p>
        `,
        type: 'recommended'
    },
    curation: {
        title: "Curation",
        date: "May 21, 2024",
        summary: "Curation is a museum management game created alongside Frontier Developments! It is nearing a steam release",
        thumbnail: "images/blog/curation-thumbnail.jpg",
        content: `
        <p>Curation is by far the largest project that I have worked on over the course of university. It was for the year-long “Real-time Interactive Group Project” (RIGPR), where students work with a client to create a game or experience. Curation is a museum management game created alongside Frontier Developments PLC, with correspondence throughout the year helping to shape the direction of the game.</p><br>
        <img src='images/blog/curation-museum.jpg' alt='A typical museum'><br>
        <p>The group was selected using the results by previous year’s assessments to determine group and project. There were 8 or so projects total, but only 2 were working alongside studios - Frontier and Rebellion. Naturally, everyone gravitated towards them, and I was lucky enough to be selected by Ted (the lecturer) to work alongside some of the most talented students on the course on the project with the highest expectations - the previous year’s project, Malltopia, won the TIGA education award for Student Game of the Year (and blew me away when I played at the Grad Show in 2023).</p><br>
        <img src='images/blog/curation-malltopia.jpg' alt='Malltopia's award'><br>
        <p>I worked alongside 8 others (6 devs and 2 producers) for a split of 3 designers / 4 coders / 3 artists (all of the designers contributed to the codebase as well). After a number of weeks of deliberation, we decided on the museum theme. During the pre-christmas period, the devs were very intent on beginning prototyping as early as possible, whilst the producers held back for fear of burnout or undirected work. As a result, we had a long pre-production period involving the creation of asset lists and administrative tasks, such as starting jira and confluence pages.</p><br>
        <img src='images/blog/curation-feature.jpg' alt='Feature list'><br>
        <p>The other designers and myself created a Game Design Document for the game during this period, developing the pillars, loops, progression, systems, and technical elements before translating that into a pitch deck for the game that we presented to the client in December 2023.</p><br>
        <p>As I was so eager to get started, I decided to combine the work created for my AI module with the work created for the RIGPR module, so based the work for that module on the intended behaviour of the NPCs visiting the museum (see the AI blog post). This meant that I had a lot of time, resulting in a decently advanced prototype for the NPCs before production began in January. A number of other prototypes were developed during this time, namely for the camera and a few basic placement systems.</p><br>
        <img src='images/blog/curation-proto.jpg' alt='The NPC prototype'><br>
        <p>From the experience of creating the prototype, I knew that I would have to overhaul the technical design of the system, as whilst it worked for the smaller scope of the prototype, it was nowhere near as scalable as I would have liked for the final project. I rewrote every bit of code as compared to the prototype, moving to a modular behaviour tree based implementation of the AI behaviours. Here are some code snippets from that implementation:</p><br>
        <img src='images/blog/curation-desire.jpg' alt='The NPC prototype'><br>
        <img src='images/blog/curation-node.jpg' alt='The NPC prototype'><br>
        <p>This was undoubtedly the hardest part of the project for me, as I was writing a lot of back end code and behaviours with no real way to test them as systems were not yet connected together. This was around the midpoint of the project, and early in production. I eventually managed to port over the functionality from the prototype, and could begin testing with agents, which made the process from that point onwards much easier.</p><br>
        <p>The idea of Frame, Tick, and Turn updates still persisted as they had proved themselves to be incredibly useful for the optimisation of agents, so they persisted through from the prototype, as well as manually handling pathing and recalculation outside of the inbuilt NavMeshAgent. The latter was simplified over the prototype, using the agent class to calculate a path a single time and store it, following along unless there was an update in the navmesh. All things considered, including models and visuals, it allowed up to 1000 NPCs to be simulated at the same time at above 40FPS.</p><br>
        <video width="560" height="315" controls>
            <source src="images/blog/curation-stress.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video><br>
        <p>I also designed and programmed a number of cosmetic and game feel systems:</p><br>

        <p>NPC cosmetics, where each NPC had different skins and accessories which made the game a lot more visually appealing</p><br>
        <img src='images/blog/curation-accessories.jpg' alt='Accessorised NPCs'><br>
        <p>A weather system, where rain had a small chance to appear every few in game hours and would stick around for a random amount of time</p><br>
        <video width="560" height="315" controls>
            <source src="images/blog/curation-rain.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video><br>
        <p>A day/night system, changing the lighting of the scene and helping players have a grasp on the passage of time</p><br>
        <video width="560" height="315" controls>
            <source src="images/blog/curation-days.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video><br>
        <p>A rating system, which scored players up to 5 starts, affecting the amount of NPCs that come to visit the museum. There are 4 stars available for NPC happiness, and 2 available for the diversity of artefacts</p><br>
        <img src='images/blog/curation-rating.jpg' alt='Star system'><br>
        <p>Hints, which appear when a player completes certain in-game actions to trigger them, such as placing a room triggering the hint to place a door</p><br>
        <img src='images/blog/curation-hints.jpg' alt='Accessorised NPCs'><br>
        <p>A number of these cosmetic systems were added very late into production - with only 2 weeks left before final submission of the game. Despite this, they added a lot to the game feel and really pushed it over the bounds of professionalism according to playtesters at the time. There were also a number of additions from the other developers around this time - namely settings and sounds, massively polishing the final product.</p><br>
        <p>After submission, we received feedback from a number of places, including Frontier:</p><br>
        <div class="quote">
            <p>I was incredibly impressed with the final product the team were able to produce - in my opinion it's in a great state to start to show off publicly and to be used as a base of something that can be pitched to publishers and to accelerator programmes for further funding, should the team choose to take this approach.
            Both technically and visually the game is solid, the early game design loop is presented well and shows how it can expand to a mid-game loop, though the late game loop is still a little undefined by this prototype, which is generally to be expected at this stage.
            The team did really well to include a functional and visually pleasing UI as well as to include audio, two elements which are typically overlooked in these projects.
            There was also thought and detail put into how to make the game CVAA compliant, which is great news in regards to accessibility.
            Modular asset designs work well for leaving room to expand on what already exists and makes it easy to add to this; assets from characters, to props, to textures were all handled well and with complimentary art styles.
            I truly believe this game could be taken further if the team chooses to pursue this, and the style of game leaves room for expansion into similar spin-offs comfortably if the team decides they want to.</p><br>
        </div>

        <p>In addition to this, peer feedback was overwhelmingly positive, and the feedback from both Ted the lecturer, and the client was that it surpassed the previous year’s TIGA award winning game. At the time of writing, Curation has been submitted to the 2024 TIGA awards. The team has continued to make small improvements, such as adding a saving functionality, and my personal addition of the ability to create rooms rather than just walls, as we aim to release the game onto steam at some point in the future.</p><br>

        <p>To reflect on the project, I am really happy with where it ended up. As we produced it, I was actually enjoying it so much that I was working on it in my spare time. The project received an 84, and I received an 86 - the highest mark in the class - due to the effort I put in. This was probably my proudest achievement throughout university.</p>

        <br>
        <p><a href="https://docs.google.com/presentation/d/1JH_x2XiCNdlVglXmklDvu-IFaZFURyzQNhObVEcRerU/edit?usp=sharing" target="_blank" class="blog-document-btn">Concept Presentation</a></p>
        <br>
        <p><a href="https://docs.google.com/presentation/d/1gCTpSsGxZvFgb5-vvrgV1SekaVFannUppGAb24cFktU/edit?usp=sharing" target="_blank" class="blog-document-btn">Presentation Slides (December Prototype)</a></p>
        <br>
        <p><a href="https://docs.google.com/presentation/d/19dCsmTmjanVfMWSCc1Fcx9vdcAwuAU2TDN27mYeKmK4/edit?usp=sharing" target="_blank" class="blog-document-btn">Presentation Slides (Final)</a></p>
        <br>
        <p><a href="https://emunday.itch.io/curation" target="_blank" class="blog-play-btn">Play</a></p>
        <br>
        <p><a href="https://www.youtube.com/watch?v=bym75FN01M8" target="_blank" class="blog-video-btn">Video</a></p>
        <br>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/bym75FN01M8?si=VQG0DpoBOCd3zhcU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><br>
        
        <p>Due to potential release, the game is not open source. If you want to know more about the codebase or design documents, please <a href="mailto:contact@ollieportfolio.com" target="_blank">contact me</a>! </p><br>
        `,
        tldr: `
        <b>About</b>
        <p>Curation is a museum management sim developed with a team of 7 developers and 2 producers alongside Frontier Developments, I worked on areas of design and code and focused on that of the visitors (AI agents), but did design/implement a number of other systems</p><br>
        <b>Responsibilities</b>
            <ul>
                <li>Design documentation and constant collaboration throughout the whole process</li>
                <li>Designing and implementing AI agents</li>
                <li>Collaborating on pitch deck materials to present to the client</li>
                <li>QA testing the product, as well as enlisting outside playtesters</li>
            </ul><br>
        <b>Lessons</b>
            <ul>
                <li>Using behaviour trees (and many other techniques) to control behaviour of AI agents</li>
                <li>Full stack development, working from the inception and pre-production through to final product (now nearing release)</li>
                <li>Working alongside a professional client</li>
            </ul>
        <br>
        <p><a href="https://docs.google.com/presentation/d/1JH_x2XiCNdlVglXmklDvu-IFaZFURyzQNhObVEcRerU/edit?usp=sharing" target="_blank" class="blog-document-btn">Concept Presentation</a></p>
        <br>
        <p><a href="https://docs.google.com/presentation/d/1gCTpSsGxZvFgb5-vvrgV1SekaVFannUppGAb24cFktU/edit?usp=sharing" target="_blank" class="blog-document-btn">Presentation Slides (December Prototype)</a></p>
        <br>
        <p><a href="https://docs.google.com/presentation/d/19dCsmTmjanVfMWSCc1Fcx9vdcAwuAU2TDN27mYeKmK4/edit?usp=sharing" target="_blank" class="blog-document-btn">Presentation Slides (Final)</a></p>
        <br>
        <p><a href="https://emunday.itch.io/curation" target="_blank" class="blog-play-btn">Play</a></p>
        <br>
        <p><a href="https://www.youtube.com/watch?v=bym75FN01M8" target="_blank" class="blog-video-btn">Video</a></p>
        <br>
        `,
        type: 'recommended'
    },
    barclays: {
        title: "Barclays Game Frenzy",
        date: "June 10, 2024",
        summary: "My team and I were invited to the 2024 Barclays Game Frenzy event at their headquaters in Canary Wharf, London",
        thumbnail: "images/blog/barclays-thumbnail.jpg",
        content: `
        <p>After the success of final year group project Curation, the university encouraged the team to submit the game to be showcased at the Barclays Game Frenzy taking place at the Barclays headquarters in Canary Wharf in London. After applying, we were selected alongside two other projects to showcase in the university section.</p><br>
        <p>I got a lift there with the producers (thanks Gabe!). Once we arrived, we set up at the table and began to socialise with the other attendees. Our room was solely uni students, so it was interesting to learn about the games courses at other universities that I considered when applying for university way back in 2021.</p><br>
        <p>After socialising with the other students, it was time to examine the rest of the event - there were a number of rooms full of games-adjacent companies to talk to, and I spent the majority of my time in the indie dev room. I had some great conversations with solo developers, and met people applying for the Transfuser game grant whose game I already knew of thanks to acting as a consultant to one of their rival games. I came away with some business cards and a lot of newfound knowledge!</p><br>
        <img src='images/blog/barclays-me.jpg' alt='Me at the event'><br>
        <p>Overall, the day was a great experience of networking with others and getting insight on entering the industry!</p><br>
        `,
        tldr: `
        <b>About</b>
        <p>The Curation team was invited to exhibit the game at the Barclays Headquarters in Canary Wharf, London</p><br>
        <b>Responsibilities</b>
            <ul>
                <li>Talk professionally/confidently and conversate with other students and industry professionals</li>
                <li>Network with others</li>
            </ul><br>
        <b>Lessons</b>
            <ul>
                <li>Presenting at an industry event</li>
                <li>Networking with those in industry</li>
            </ul>
        `,
        type: 'none'
    },
    graduation: {
        title: "Graduation",
        date: "July 28, 2024",
        summary: "I graduated from the University of Portsmouth with a first class degree in Computer Game Technology",
        thumbnail: "images/blog/graduation-thumbnail.jpg",
        content: `
        <p>Graduating with a first was no easy feat. Receiving an average mark of 73 in first year, an 81 in second year (the highest average of any student that year) and a 77 in my third year for a 4.16 GPA, I am incredibly proud of these results as an expression of my attitude and effort that I put into my work, both on and off the metaphorical clock.</p><br>
        <p>The ceremony itself was a blur - but I know I had a good time. The day started with a 2 hour drive down to Portsmouth, before racing to get my cap and gown with enough time to get to the ceremony. After sitting in the Guildhall’s main floor for an hour, following the names being called and counting down to my own, we were ushered out to a holding area for all the new graduates, and sent onto stage one by one in a conveyor belt of new graduates.</p><br>
        <img src='images/blog/graduation-me.jpg' width=50% alt='Me at graduation'><br>
        <p>As my name was called - the final one on my course, thanks to my surname - I briskly walked across the stage to the polite applause of hundreds of parents eagerly waiting for their own children to pass into the post-student life (as well as a few hollers from my friends of course). After the ceremony and photos were complete, I had a final night out with a number of my coursemates who I had become good friends with over the preceding three years as we shared memories of our times on the course over drinks.</p><br>
        <p>I am extremely grateful for my time at Portsmouth University. My journey began when a college friend of mine offhandedly mentioned a video game course at university, and has ended with a first class degree in a subject that I love. I would like to extend my thanks to the university staff, who have been nothing but supportive during my time on the course, my friends, who had my back whenever I needed them, and my parents for their support throughout my journey. I’m excited to see where this next chapter of my life takes me; but into industry is definitely the goal!</p><br>
        `,
        tldr: `
        <b>About</b>
        <p>I graduated from Portsmouth University with a First Class Degree in Computer Games Development</p><br>
        <b>Responsibilities</b>
            <ul>
                <li>Graduate</li>
                <li>Don’t fall over on stage</li>
            </ul><br>
        <b>Lessons</b>
            <ul>
                <li>It was great to see all of the friends I had made throughout the course! I also needed to extend a thank you to all of my wonderful lecturers, my friends, and my parents</li>
            </ul>
        `,
        type: 'none'
    },
    website: {
        title: "Creating my own site",
        date: "August 2, 2024",
        summary: "I learned HTML, CSS and JavaScript in order to create this website!",
        thumbnail: "images/blog/website-thumbnail.jpg",
        content: `
        <p>As my first post-graduate project, I wanted to teach myself a valuable new skill in my free time, opting to learn how to create a website from scratch. The natural project would be to create a portfolio of my development experience - which you are looking at now!</p><br>
        <p>I already had a portfolio, but it was hideously outdated and built very quickly for an assessment in my first year - naturally not to a quality I can say I would be happy to show anyone in industry. I decided against wordpress and similar website builders purely because I wanted to learn web development by myself without a reliance on any third parties.</p><br>
        <p>I began by following a number of tutorials to learn the structure of HTML, allowing me to quickly create a basic demo site featuring a number of features - a task that was surprisingly simple. Next was CSS, which showed itself to be a relatively simple but more repetitive task than writing HTML. After creating a number of tests using the style sheet language, I decided that it would greatly increase the speed at which I could work if I employed artificial intelligence to deal with the tedium.</p><br>
        <img src='images/blog/website-try.jpg' alt='The first website attempt'><br>
        <p>So using AI to help me with the foundation of the site, I tweaked, reworked, and built on until I was content with the results. At the time of writing, the site is mostly complete and just in need of polishing before it goes live, but if you are seeing this it means that I deemed it worthy to publish!</p><br>
        `,
        tldr: `
        <b>About</b>
        <p>I created a portfolio website using HTML, CSS, and JavaScript. I then connected a custom domain and hosted the site</p><br>
        <b>Responsibilities</b>
            <ul>
                <li>Create a functioning website</li>
                <li>Work on the UI/X of said website</li>
                <li>Test the website to ensure minimal bugs and no vulnerabilities</li>
            </ul><br>
        <b>Lessons</b>
            <ul>
                <li>Full stack web development</li>
                <li>Utilising Artificial Intelligence to speed up workflows</li>
            </ul>
        `,
        type: 'most-recent'
    },
};

function createBlogCardElement(postId) {
    const post = blogPosts[postId]; // Get the post object using the ID
    if (!post) return; // If the post doesn't exist, exit the function

    const postWrapper = document.createElement('div');
    postWrapper.className = post.type;

    const postElement = document.createElement('div');
    postElement.className = 'blog-post-card';

    postElement.setAttribute('onclick', `openModal('${postId}')`);

    const imgElement = document.createElement('img');
    imgElement.src = post.thumbnail;
    imgElement.alt = post.title;

    const infoElement = document.createElement('div');
    infoElement.className = 'blog-info';

    const titleWrapper = document.createElement('div');
    titleWrapper.className = 'title-wrapper';

    const titleElement = document.createElement('h3');
    titleElement.innerText = post.title;

    const dateElement = document.createElement('span');
    dateElement.className = 'post-date';
    dateElement.innerText = post.date; // Assuming the date is stored as a string in the post object

    titleWrapper.appendChild(titleElement);
    titleWrapper.appendChild(dateElement);

    const summaryElement = document.createElement('p');
    summaryElement.innerText = post.summary;

    infoElement.appendChild(titleWrapper);
    infoElement.appendChild(summaryElement);
    postElement.appendChild(imgElement);
    postElement.appendChild(infoElement);
    postWrapper.appendChild(postElement);

    return postWrapper;
}

function createNormalPostElement(postId) {
    const post = blogPosts[postId]; // Get the post object using the ID
    if (!post) return; // If the post doesn't exist, exit the function

    const postElement = document.createElement('div');
    postElement.className = 'full-width-post';

    postElement.setAttribute('onclick', `openModal('${postId}')`); // Use the ID here

    const imgElement = document.createElement('img');
    imgElement.src = post.thumbnail;
    imgElement.alt = post.title;
    imgElement.className = 'thumbnail-16-9';

    const infoElement = document.createElement('div');
    infoElement.className = 'blog-info';

    const titleElement = document.createElement('h3');
    titleElement.innerText = post.title;

    const dateElement = document.createElement('p');
    dateElement.className = 'post-date';
    dateElement.innerText = post.date;

    const summaryElement = document.createElement('p');
    summaryElement.innerText = post.summary;

    infoElement.appendChild(titleElement);
    infoElement.appendChild(dateElement);
    infoElement.appendChild(summaryElement);
    postElement.appendChild(imgElement);
    postElement.appendChild(infoElement);

    return postElement;
}

let currentPost = null;
let showingTLDR = false;

function openModal(postId) {
    const post = blogPosts[postId]; // Use the ID to get the post
    currentPost = post;
    showingTLDR = false;

    if (post) {
        const modal = document.getElementById("modal");
        const title = document.getElementById("modal-title");
        const date = document.getElementById("modal-date");
        const body = document.getElementById("modal-body");
        const tldrButton = document.querySelector(".tldr-button");

        title.innerHTML = post.title;
        date.innerHTML = `${post.date}`;
        date.classList.add("post-date");
        body.innerHTML = "<br>" + post.content;
        tldrButton.innerHTML = "TLDR";

        // Blur the background sections
        document.getElementById('blog-title').classList.add('blurred-background');
        document.getElementById('blog-banner').classList.add('blurred-background');
        document.getElementById('blog-list').classList.add('blurred-background');

        // Show modal with animation
        modal.style.display = "block";
        setTimeout(() => {
            modal.classList.add('visible');
        }, 10); // slight delay to trigger CSS animation
    }
}

function toggleTLDR() {
    if (!currentPost) return;

    const body = document.getElementById("modal-body");
    const tldrButton = document.querySelector(".tldr-button");

    if (showingTLDR) {
        body.innerHTML = "<br>" + currentPost.content;
        tldrButton.innerHTML = "TLDR";
    } else {
        body.innerHTML = "<br>" + currentPost.tldr;
        tldrButton.innerHTML = "Long";
    }

    showingTLDR = !showingTLDR;
}

document.addEventListener('DOMContentLoaded', function () {
    const blogBanner = document.getElementById('blog-banner');
    const blogList = document.getElementById('blog-list');

    // Separate posts by type
    const bannerPosts = {
        'most-recent': [],
        'recommended': []
    };
    const listPosts = [];

    for (const postId in blogPosts) {
        if (blogPosts.hasOwnProperty(postId)) {
            const post = blogPosts[postId];

            if (post.type === 'most-recent' || post.type === 'recommended') {
                bannerPosts[post.type].push(postId);
            }
            listPosts.push(postId);
        }
    }

    // Sort listPosts by date
    listPosts.sort((a, b) => new Date(blogPosts[b].date) - new Date(blogPosts[a].date));

    // Create highlights section
    const highlightsSection = document.createElement('div');
    highlightsSection.className = 'blog-highlights';

    // Create sections for most recent posts
    bannerPosts['most-recent'].forEach(postId => {
        const postSection = document.createElement('div');
        postSection.className = 'highlight-section';

        const postTitle = document.createElement('div');
        postTitle.className = 'highlight-title';
        postTitle.innerHTML = `<h2>Most Recent</h2>`;

        postSection.appendChild(postTitle);
        postSection.appendChild(createBlogCardElement(postId));

        highlightsSection.appendChild(postSection);
    });

    // Create sections for recommended posts
    bannerPosts['recommended'].forEach(postId => {
        const postSection = document.createElement('div');
        postSection.className = 'highlight-section';

        const postTitle = document.createElement('div');
        postTitle.className = 'highlight-title';
        postTitle.innerHTML = `<h2>Recommended</h2>`;

        postSection.appendChild(postTitle);
        postSection.appendChild(createBlogCardElement(postId));

        highlightsSection.appendChild(postSection);
    });

    blogBanner.appendChild(highlightsSection);

    // Create "All Posts" section
    const allPostsTitle = document.createElement('div');
    allPostsTitle.className = 'all-posts-title';
    allPostsTitle.innerHTML = `<h2>All Posts</h2>`;

    const allPostsSection = document.createElement('div');
    allPostsSection.className = 'all-posts-background';

    listPosts.forEach(postId => {
        const postElement = (window.innerWidth > 768) ? createNormalPostElement(postId) : createBlogCardElement(postId);
        allPostsSection.appendChild(postElement);
    });

    blogList.appendChild(allPostsTitle);
    blogList.appendChild(allPostsSection);
});
       

document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileNav = document.querySelector('.mobile-nav');
    
    // Function to toggle the mobile navigation
    function toggleMobileNav() {
        const isVisible = mobileNav.getAttribute('data-visible') === 'true';
        mobileNav.setAttribute('data-visible', isVisible ? 'false' : 'true');
    }

    // Event listener for the burger menu click
    burgerMenu.addEventListener('click', function (event) {
        toggleMobileNav();
        event.stopPropagation(); // Prevent click from bubbling up to the document
    });

    // Event listener to close the mobile menu if clicking outside of it
    document.addEventListener('click', function (event) {
        const isVisible = mobileNav.getAttribute('data-visible') === 'true';
        if (isVisible && !mobileNav.contains(event.target) && !burgerMenu.contains(event.target)) {
            mobileNav.setAttribute('data-visible', 'false');
        }
    });
});

const tagColors = {
    "Unity": "#FFBEBC",
    "Unreal": "#FFBEBC",
    "Physical": "#FFBEBC",
    "Console": "#FFBEBC",
    "3DS MAX": "#FFBEBC",
    
    "Research": "#BFFCC6",
    "Design": "#BFFCC6",
    "Code": "#BFFCC6",
    "Modelling": "#BFFCC6",
    "2D Art": "#BFFCC6",
    "QA/Testing": "#BFFCC6",
    
    "C#": "#85E3FF",
    "C++": "#85E3FF",
    "HTML": "#85E3FF",
    "CSS": "#85E3FF",
    "JavaScript": "#85E3FF",
    "Documentation": "#85E3FF",

    "Solo": "#FF9CEE",
    "Collaborative": "#FF9CEE"
};
  
const projects = [
    {
        title: "Galactic Feline",
        thumbnail: "images/projects/galacticFeline-thumbnail.jpg",
        video: "images/projects/galacticFeline-video.mp4",
        date: "2021-11-30",
        shortDescription: "A large group project aimed at replicating Starfox.",
        longDescription: `
        <p><b>This project involved being/resulted in:</b></p>
        <ul>
            <li>Effective remote communication with a team of 12</li>
            <li>Level and enemy design in documentation and Unity Engine</li>
            <li>Game documentation in Google Docs</li>
            <li>Experience in large team collaboration</li>
            <li>Unity Engine proficiency</li>
            <li>Importance of clear communication to prevent overscoping</li>
        </ul>
        `,
        tags: ["Unity", "Design", "Code", "C#", "Collaborative"],
        link: `https://mbutcher.itch.io/galactic-feline`,
        blogPostId: "galacticFeline",
        group: "Collaborative Games"
    },
    {
        title: "PC 3D Model",
        thumbnail: "images/projects/pcModel-thumbnail.jpg",
        video: "images/projects/pcModel-video.mp4",
        date: "2022-04-30",
        shortDescription: "For my 3D modelling module, I used 3DS max to create a model of my PC",
        longDescription: `
        <p><b>This project involved being/resulted in:</b></p>
        <ul>
            <li>Created an industry-standard 3D model using 3DS Max</li>
            <li>Produced reference photos and a rendered video</li>
            <li>Identified and resolved model issues (unnecessary poly usage)</li>
            <li>Gained experience of a modelling pipeline</li>
        </ul>
        `,
        tags: ["3DS MAX", "Modelling", "Solo"],
        link: `nolink`,
        blogPostId: "pcModel",
        group: "Solo Projects"
    },
    {
        title: "C++ Maze Game",
        thumbnail: "images/projects/maze-thumbnail.jpg",
        video: "images/projects/maze-video.mp4",
        date: "2022-05-10",
        shortDescription: "I created a game based on a random maze generator in C++",
        longDescription: `
        <p><b>This project involved being/resulted in:</b></p>
        <ul>
            <li>Implemented maze generation using recursive backtracking in C++</li>
            <li>Optimised an algorithm I have previously implemented</li>
            <li>Added customisation for replayability</li>
            <li>Object-oriented implementation</li>
            <li>Gained foundational C++ skills, including memory management</li>
        </ul>
        `,
        tags: ["Console", "Code", "C++", "Solo"],
        link: `nolink`,
        blogPostId: "maze",
        group: "Solo Projects"
    },
    {
        title: "GOLDRUSH",
        thumbnail: "images/projects/goldrush-thumbnail.jpg",
        video: "images/projects/goldrush-video.mp4",
        date: "2022-12-30",
        shortDescription: "Goldrush was created as part of the Gameplay Programming module. It is a 2D shoot-em-up created in the Unity engine",
        longDescription: `
        <p><b>This project involved being/resulted in:</b></p>
        <ul>
            <li>Designed and implemented features like level customisation, animations, and enemy AI</li>
            <li>Developed a complete 2D game solo in Unity Engine</li>
            <li>Used finite state machines for enemy behaviour</li>
            <li>Adapted C# skills to Unity</li>
            <li>Version control with GitHub</li>
        </ul>
        `,
        tags: ["Unity", "Code", "2D Art", "Design", "C#", "Solo"],
        link: `https://olliewright.itch.io/goldrush`,
        blogPostId: "goldrush",
        group: "Solo Games"
    },
    {
        title: "Cedrik's Crown",
        thumbnail: "images/projects/cedriksCrown-thumbnail.jpg",
        video: "images/projects/cedriksCrown-video.mp4",
        date: "2023-02-12",
        shortDescription: "Cedrik’s Crown is a board game created with a group of 5, where I acted as the lead designer, and carried out extensive testing and iteration",
        longDescription: `
        <p><b>This project involved being/resulted in:</b></p>
        <ul>
            <li>Lead designer in a team of 5, performing testing and iteration</li>
            <li>Produced and iterated multiple design documents</li>
            <li>Balanced game systems using a simulation program I wrote in C++</li>
            <li>Created structured design documentation</li>
            <li>Developed understanding of the QA testing process, testing across multiple iterations</li>
        </ul>
        `,
        tags: ["Physical", "Design", "QA/Testing", "C++", "Documentation", "Collaborative", "Highlight"],
        link: `nolink`,
        blogPostId: "cedriksCrown",
        group: "Collaborative Games"
    },
    {
        title: "Procedural Terrain Generation",
        thumbnail: "images/projects/perlinNoise-thumbnail.jpg",
        video: "images/projects/perlinNoise-video.mp4",
        date: "2023-05-25",
        shortDescription: "I created a terrain generator using perlin noise, with lots of configuration options, manipulated meshes/textures, and dealt with mathematical concepts like vectors, matrices, and quaternions",
        longDescription: `
        <p><b>This project involved being/resulted in:</b></p>
        <ul>
            <li>Developed terrain generator with Perlin noise in Unity</li>
            <li>Used advanced mathematical concepts (Vectors, Matrices, Quaternions)</li>
            <li>Allowed users to manipulate variables in the generation for different results</li>
            <li>Mesh manipulation and texture generation through code</li>
            <li>Tested and accounted for edge cases</li>
        </ul>
        `,
        tags: ["Unity", "Code", "C#", "Solo"],
        link: `nolink`,
        blogPostId: "perlinNoise",
        group: "Solo Projects"
    },
    {
        title: "Press Space",
        thumbnail: "images/projects/pressSpace-thumbnail.jpg",
        video: "images/projects/pressSpace-video.mp4",
        date: "2023-06-30",
        shortDescription: "Press space is a satirical branching narrative game created as a solo project. I handled all elements of design, implementation, asset usage, and audio",
        longDescription: `
        <p><b>This project involved being/resulted in:</b></p>
        <ul>
            <li>Designed, implemented, and documented a satirical branching narrative game</li>
            <li>Full stack development including art, design, code, audio, and voice acting</li>
            <li>Created detailed design documents and visual aids</li>
            <li>Managed time and resources for a large scope project</li>
            <li>Accounted for complex player behaviour through QA testing</li>
            <li>Presented the game publicly</li>
        </ul>
        `,
        tags: ["Unity", "Code", "2D Art", "Design", "QA/Testing", "C#", "Documentation", "Solo"],
        link: `https://olliewright.itch.io/press-space`,
        blogPostId: "pressSpace",
        group: "Solo Games"
    },
    {
        title: "Programming AI Prototype",
        thumbnail: "images/projects/aiPrototype-thumbnail.jpg",
        video: "images/projects/aiPrototype-video.mp4",
        date: "2024-01-24",
        shortDescription: "Creating a prototype for what would later become Creation, using Finite State Machines to simulate agents and encourage emergent behaviours. Also using flood fill, A* pathfinding, Navmesh, Perception systems, Utility theory and optimisation techniques",
        longDescription: `
        <p><b>This project involved being/resulted in:</b></p>
        <ul>
            <li>Created AI agents using finite state machines, flood fill, A* pathfinding, navmeshes, perception systems, and utility theory</li>
            <li>Allowed user interaction with the NPC environment</li>
            <li>Object-oriented C# implementation</li>
            <li>Optimised simulation for thousands of agents</li>
            <li>Researched industry AI agent development standards</li>
        </ul>
        `,
        tags: ["Unity", "Code", "Design", "C#", "Solo"],
        link: `nolink`,
        blogPostId: "aiPrototype",
        group: "Solo Projects"
    },
    {
        title: "Dissertation - Verticality in Games",
        thumbnail: "images/projects/dissertation-thumbnail.jpg",
        video: "images/projects/dissertation-video.mp4",
        date: "2024-04-25",
        shortDescription: "I researched verticality in system and level design for my dissertation, wrote an extensive literature review and made use of my findings in a design document and prototype",
        longDescription: `
        <p><b>This project involved being/resulted in:</b></p>
        <ul>
            <li>Researched verticality in game design, wrote an extensive literature review</li>
            <li>Presented the collated findings and created a playable demo</li>
            <li>Academic rigour and source validation were important</li>
            <li>Created game design documentation</li>
            <li>Resource allocation between research and prototyping</li>
            <li>Adapted existing systems for uses specific to the project</li>
        </ul>
        `,
        tags: ["Unity", "Research", "Code", "Design", "Documentation", "Solo"],
        link: `nolink`,
        blogPostId: "dissertation",
        group: "Solo Projects"
    },
    {
        title: "Press Space Redux",
        thumbnail: "images/projects/pressSpaceRedux-thumbnail.jpg",
        video: "images/projects/pressSpace-video.mp4",
        date: "2024-05-19",
        shortDescription: "I redesigned certain elements of Press Space based on psychological principles and to make the opening of the game more engaging",
        longDescription: `
        <p><b>This project involved being/resulted in:</b></p>
        <ul>
            <li>Redesigned game elements based on psychological principles</li>
            <li>Documented redesigns with visual aids</li>
            <li>Applied cognitive and behavioural game psychology</li>
            <li>Worked on and iterated an existing codebase</li>
            <li>Utilised feedback for design improvement</li>
        </ul>
        `,
        tags: ["Unity", "Code", "2D Art", "Design", "QA/Testing", "C#", "Documentation", "Solo", "Highlight"],
        link: `https://olliewright.itch.io/press-space-redux`,
        blogPostId: "pressSpaceRedux",
        group: "Solo Games"
    },
    {
        title: "Curation",
        thumbnail: "images/projects/curation-thumbnail.jpg",
        video: "images/projects/curation-video.mp4",
        date: "2024-05-21",
        shortDescription: "Curation is a museum management sim developed with a team of 7 developers and 2 producers alongside Frontier Developments, I worked on areas of design and code and focused on that of the visitors (AI agents), but did design/implement a number of other systems",
        longDescription: `
        <p><b>This project involved being/resulted in:</b></p>
        <ul>
            <li>Developed museum management sim with a team of 7 devs/2 producers, focusing on AI agents</li>
            <li>Collaborated on design documentation and pitch materials</li>
            <li>Designed and implemented various game systems, including AI</li>
            <li>Conducted QA testing both by myself and with external playtesters</li>
            <li>Used behaviour trees for AI agent control</li>
            <li>Full stack development from inception to near-final product (currently ongoing)</li>
        </ul>
        `,
        tags: ["Unity", "Code", "Design", "QA/Testing", "C#", "Documentation", "Collaborative", "Highlight"],
        link: `https://emunday.itch.io/curation`,
        blogPostId: "curation",
        group: "Collaborative Games"
    },
    {
        title: "Godspear",
        thumbnail: "images/projects/godspear-thumbnail.jpg",
        video: "images/projects/godspear-video.mp4",
        date: "2024-06-20",
        shortDescription: "God's Spear is a first person action prototype where I worked on generalised design, analysing documentation and collaborating with production and leads",
        longDescription: `
        <p><b>This project involved being/resulted in:</b></p>
        <ul>
            <li>Worked with a team of 5 core devs as a design consultant</li>
            <li>Remotely joined calls and contributed to project direction</li>
            <li>Produced extensive feedback on documentation and helped the team build their skills for future</li>
            <li>Experienced project cancellation during the demo's creation</li>
        </ul>
        `,
        tags: ["Unreal", "Design", "Documentation", "Collaborative"],
        link: `nolink`,
        blogPostId: "noblog",
        group: "Collaborative Games"
    },
    {
        title: "Portfolio Website",
        thumbnail: "images/projects/website-thumbnail.jpg",
        video: "",
        date: "2024-08-02",
        shortDescription: "I created a portfolio website using HTML, CSS, and JavaScript. I then connected a custom domain and hosted the site",
        longDescription: `
        <p><b>This project involved being/resulted in:</b></p>
        <ul>
            <li>Created a functional portfolio website using HTML, CSS, and JavaScript, learning them in the process</li>
            <li>Aimed to design the website for ease of use</li>
            <li>Tested for vulnerabilities</li>
            <li>Full stack web development skills</li>
            <li>Connected a custom domain and hosted the site</li>
        </ul>
        `,
        tags: ["Code", "HTML", "CSS", "JavaScript", "Solo"],
        link: `nolink`,
        blogPostId: "website",
        group: "Solo Projects"
    }
];
  
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('projects-container');

    // Create filter dropdown
    const filterDropdown = document.createElement('div');
    filterDropdown.classList.add('filter-dropdown');

    const filterButton = document.createElement('button');
    filterButton.classList.add('filter-button');
    
    const filterText = document.createElement('span');
    filterText.textContent = 'Filter by Tag';

    const clearButton = document.createElement('span');
    clearButton.textContent = '✖';
    clearButton.classList.add('clear-button');
    clearButton.style.display = 'none'; // Initially hidden

    filterButton.appendChild(clearButton);
    filterButton.appendChild(filterText);

    const dropdownContent = document.createElement('div');
    dropdownContent.classList.add('dropdown-content');

    const tags = ['Design', 'Code', 'Modelling', 'QA/Testing', '2D Art', 'Unity', 'Unreal', 'C#', 'C++'];
    tags.forEach(tag => {
        const option = document.createElement('div');
        option.classList.add('dropdown-option');
        option.textContent = tag;
        option.dataset.tag = tag;
        dropdownContent.appendChild(option);
    });

    filterDropdown.appendChild(filterButton);
    filterDropdown.appendChild(dropdownContent);

    container.appendChild(filterDropdown);  // Append filter dropdown to the container

    let activeFilter = 'All';

    // Handle filter dropdown click
    filterButton.addEventListener('click', () => {
        dropdownContent.classList.toggle('show');
    });

    dropdownContent.addEventListener('click', (e) => {
        if (e.target.classList.contains('dropdown-option')) {
            activeFilter = e.target.dataset.tag;
            filterText.textContent = activeFilter;
            filterButton.style.backgroundColor = tagColors[activeFilter] || '#f0f0f0'; // Change button color based on tag
            dropdownContent.classList.remove('show');
            filterProjects(activeFilter);
            clearButton.style.display = activeFilter !== 'All' ? 'inline' : 'none'; // Show clear button if not "All"
        }
    });

    clearButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent triggering the dropdown
        activeFilter = 'All';
        filterText.textContent = 'Filter by';
        filterButton.style.backgroundColor = '#f0f0f0';
        filterProjects(activeFilter);
        clearButton.style.display = 'none';
    });

    const filterProjects = (tag) => {
        let filteredProjects = projects;
        if (tag !== 'All') {
            filteredProjects = projects.filter(project => project.tags.includes(tag));
        }
        renderProjects(filteredProjects);
    };

    const renderProjects = (filteredProjects) => {
        container.innerHTML = '';
        container.appendChild(filterDropdown);  // Re-append the filter dropdown after clearing container
        const groups = {};
        const highlightProjects = filteredProjects.filter(project => project.tags.includes('Highlight'));
        if (highlightProjects.length === 0) {
                    filterDropdown.classList.add('no-highlight');
                } else {
                    filterDropdown.classList.remove('no-highlight');
                } // THIS CODE SHOULD CHANGE IT BUT DOESNT
        if (highlightProjects.length) {
            const highlightContainer = document.createElement('div');
            highlightContainer.classList.add('group-container');
            highlightContainer.classList.add('highlight-container');
        
            const highlightTitle = document.createElement('div');
            highlightTitle.classList.add('subtitle');
            highlightTitle.textContent = "Highlights";
        
            highlightContainer.appendChild(highlightTitle);
        
            highlightProjects.forEach(project => {
                const card = createProjectCard(project);
                highlightContainer.appendChild(card);
            });
        
            container.appendChild(highlightContainer);
        }

        

        filteredProjects.forEach(project => {
            if (!groups[project.group]) {
                groups[project.group] = [];
            }
            groups[project.group].push(project);
        });

        let alternate = false;
        for (const group in groups) {
            const groupContainer = document.createElement('div');
            groupContainer.classList.add('group-container');
            if (alternate) {
                groupContainer.classList.add('alternate-background');
            }
            alternate = !alternate;

            const groupTitle = document.createElement('div');
            groupTitle.classList.add('subtitle');
            groupTitle.textContent = group;
            groupContainer.appendChild(groupTitle);

            groups[group].forEach(project => {
                const card = createProjectCard(project);
                groupContainer.appendChild(card);
            });

            container.appendChild(groupContainer);
        }
    };

    const createProjectCard = (project) => {
        const card = document.createElement('div');
        card.classList.add('project-card');
    
        const displayTags = project.tags.filter(tag => tag !== 'Highlight');
    
        card.innerHTML = `
        <img src="${project.thumbnail}" alt="${project.title}" class="thumbnail">
        <div class="media-container">
            <video class="video" src="${project.video}" muted loop></video>
            ${project.title === "Portfolio Website" ? `<div class="iframe-container"><iframe src="./projects" class="scaled-iframe"></iframe></div>` : ''}
        </div>
        <div class="content">
            <div class="title-date-container">
                <div class="title">${project.title}</div>
                <div class="date">${project.date}</div>
            </div>
            <div class="border"></div>
            <div class="description">${project.shortDescription}</div>
            <div class="long-description">${project.longDescription}</div>
            <div class="tags">${displayTags.map(tag => `<span class="tag" data-tag="${tag}" style="background-color: ${tagColors[tag] || '#eee'};">${tag}</span>`).join('')}</div>
            ${project.blogPostId !== 'noblog' ? `<button class="blog-post-btn" onclick="openProjectModal('${project.blogPostId}')">Blog Post &rarr;</button>` : ''}
            ${project.link !== 'nolink' ? `<button class="play-btn" onclick="window.open('${project.link}', '_blank')">Play &rarr;</button>` : ''}
        </div>
    `;
    
        const video = card.querySelector('.video');
        const iframeContainer = card.querySelector('.iframe-container');
        const iframe = card.querySelector('.scaled-iframe');
    
        video.style.display = 'none';
        if (iframe) {
            iframeContainer.style.display = 'none';
        }
    
        card.addEventListener('mouseenter', debounce(() => {
            card.classList.add('expanded');
            if (iframe) {
                iframeContainer.style.display = 'block';
            } else {
                video.style.display = 'block';
                video.play();
            }
            const img = card.querySelector('.thumbnail');
            img.style.display = 'none';
        }, 100));
        
        card.addEventListener('mouseleave', debounce(() => {
            card.classList.remove('expanded');
            if (iframe) {
                iframeContainer.style.display = 'none';
            } else {
                video.style.display = 'none';
                video.pause();
            }
            const img = card.querySelector('.thumbnail');
            img.style.display = 'block';
        }, 100));
    
        // Tag click event for filtering
        card.querySelectorAll('.tag').forEach(tagElem => {
            tagElem.addEventListener('click', (e) => {
                const tag = e.target.dataset.tag;
                activeFilter = tag;
                filterText.textContent = activeFilter;
                filterButton.style.backgroundColor = tagColors[activeFilter] || '#f0f0f0'; // Change button color based on tag
                filterProjects(activeFilter);
                clearButton.style.display = activeFilter !== 'All' ? 'inline' : 'none'; // Show clear button if not "All"
            });
        });
    
        return card;
    };


    renderProjects(projects);

    // Close the dropdown when clicking outside of it
    document.addEventListener('click', (event) => {
        const isClickInside = filterDropdown.contains(event.target);
        if (!isClickInside) {
            dropdownContent.classList.remove('show');
        }
    });

    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }
});

function openProjectModal(postId) {
    const post = blogPosts[postId]; // Use the ID to get the post
    currentPost = post;
    showingTLDR = false;

    if (post) {
        const modal = document.getElementById("modal");
        const title = document.getElementById("modal-title");
        const date = document.getElementById("modal-date");
        const body = document.getElementById("modal-body");

        title.innerHTML = post.title;
        date.innerHTML = `${post.date}`;
        date.classList.add("post-date");
        body.innerHTML = "<br>" + post.content;

        // Blur the background sections
         document.getElementById('projects-banner').classList.add('blurred-background');
        document.getElementById('projects-container').classList.add('blurred-background');

        // Show modal with animation
        modal.style.display = "block";
        setTimeout(() => {
            modal.classList.add('visible');
        }, 10); // slight delay to trigger CSS animation
    }
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.classList.remove('visible');
    
    // Remove the blur effect
    if(document.getElementById('blog-title') != null)
    {
        document.getElementById('blog-title').classList.remove('blurred-background');
        document.getElementById('blog-banner').classList.remove('blurred-background');
        document.getElementById('blog-list').classList.remove('blurred-background');
    }
    
    if(document.getElementById('projects-banner') != null)
    {
        document.getElementById('projects-banner').classList.remove('blurred-background');
        document.getElementById('projects-container').classList.remove('blurred-background');
    }

    // Hide modal after animation
    setTimeout(() => {
        modal.style.display = "none";
    }, 100); // match this with the animation duration
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        closeModal();
    }
}

// JavaScript function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// JavaScript function to insert shuffled game titles into the HTML
function insertFavoriteGames() {
    const games = ["Super Mario Galaxy (1 and 2)", "The Stanley Parable", "Minecraft", "Baldur's gate 3", "Outer Wilds"];
    const shuffledGames = shuffleArray(games);
    const gamesList = document.getElementById("favorite-games-list");

    shuffledGames.forEach(game => {
        const listItem = document.createElement("li");
        listItem.textContent = game;
        gamesList.appendChild(listItem);
    });
}

// Call the function to insert the games when the document is fully loaded
document.addEventListener("DOMContentLoaded", insertFavoriteGames);