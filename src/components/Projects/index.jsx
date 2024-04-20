import React from 'react'
import './projects.css'

const Projects = () => {
    return (
        <div className="projects">
            <section className="projectsContent">
                <section className="grid-container">
                    <div className="nest">
                        <h1 className="header">Projects</h1>
                    </div>
                    <div className="nest">
                        <h2 className="project1">GroupProject3</h2>
                        <img src="" alt="" />
                        <ul className="lists">
                            <li>Under Construction</li>
                            <li>
                                <a href="httdivs://github.com/garrett-lieb/groudivProject3">Github Repo</a>
                            </li>
                        </ul>
                    </div>
                    <div className="nest">
                        <h2 className="project2">Text-Editor</h2>
                        <img src="" alt="" />
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
                    <div className="nest">
                        <h2 className="project3">SocialNetworkAPI</h2>
                        <img src="" alt="" />
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
                    <div className="nest">
                        <h2 className="project4">Gist - Matching an Email</h2>
                        <img src="" alt="" />
                        <ul className="lists">
                            <li>Matching an email with a gist</li>
                            <li>
                                <a href="https://gist.github.com/garrett-lieb/cda8a22e3b6b98169ba5ede3e3677a2c">Gist</a>
                            </li>
                        </ul>
                    </div>
                    <div className="nest">
                        <h2></h2>
                        <img src="" alt="" />
                        <ul className="lists">
                            <li></li>
                            <li>
                                <a href=""></a>
                            </li>

                        </ul>
                    </div>

                </section>
            </section>
        </div>
    )
}

export default Projects