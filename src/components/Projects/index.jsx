import React from 'react'
import './projects.css'

const Projects = () => {
    return (
        <div class="projects">
            <section className="projectsContent">
                <h1 class="header">Projects</h1>
                <section class="grid-container">
                    <h2 class="project1">GroupProject3</h2>
                    <img src="" alt="" />
                    <div>
                        <ul className="lists">
                            <li>Under Construction</li>
                            <li>
                                <a href="httdivs://github.com/garrett-lieb/groudivProject3">Github Repo</a>
                            </li>
                        </ul>
                    </div>
                    <h2 class="project2">Text-Editor</h2>
                    <img src="" alt="" />
                    <div>
                        <ul className="lists">
                            <li>Text editor and note taker with offline funtionality</li>
                            <li>
                                <a href="https://texteditor-otvp.onrender.com/">Deployed Application</a>
                            </li>
                            <li>
                                <a href="https://github.com/garrett-lieb/textEditor">Github Repo</a>
                            </li>
                        </ul>
                    </div>

                    <h2 class="project3">SocialNetworkAPI</h2>
                    <img src="" alt="" />
                    <div>
                        <ul className="lists">
                            <li>API for a social network web application.</li>
                            <li>
                                <a href="https://drive.google.com/file/d/1hHd73GA2ICdFFYykp_bduUgb-seHT5mb/view">Link to Video</a>
                            </li>
                            <li>
                                <a href="https://github.com/garrett-lieb/textEditor">GitHub</a>
                            </li>
                        </ul>
                    </div>
                    <h2 class="project4">Gist - Matching an Email</h2>
                    <img src="" alt="" />
                    <div>
                        <ul className="lists">
                            <li>Matching an email with a gist</li>
                            <li>
                                <a href="https://gist.github.com/garrett-lieb/cda8a22e3b6b98169ba5ede3e3677a2c">Gist</a>
                            </li>
                        </ul>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Projects