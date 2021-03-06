import React from 'react'
import Card from './Card'
import chess from '../assets/Chess.png'

import apex from '../assets/homepage.png'
import tours from '../assets/tours.png'
import github from '../assets/github.png'
import link from '../assets/link2.png'

//<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
//<div>Icons made by <a href="" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>


function Projects() {
    return (
            <div className='page' id='projects'>
                <h2>Projects</h2>
                <div className ="cards">
                    <Card id = "chess" title = "Chess Game" imgSrc = {chess} linksArray = {[<a key="20" href="https://github.com/ammercu22/Pygame-Chess" target="_blank" rel="noopener noreferrer"><img key ='9' src={github} width="35px" alt=""/></a>]} techArray = "Python" modalTarget = "#chess"/>
                    <Card id = "stats" title = "Apex Legends Stat Tracker" imgSrc = {apex} linksArray = {[<a key="21" href="https://github.com/ammercu22/Video-Game-Stat-Tracker" target="_blank" rel="noopener noreferrer"><img key='10' src={github} alt="" width="35px"/></a>, <a key="22"href="https://video-game-stat-tracker.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img key='11' src={link} width="40px"alt=""/></a>]} techArray = "ReactJS&emsp;Express/Node.js&emsp;Tracker Network API" modalTarget = "#stats"/>
                    <Card id = "tours" title = "Madison County History Tours App" imgSrc = {tours} linksArray = {null} techArray = "Flutter&emsp;Dart&emsp;MySQL&ensp;Google Maps API" modalTarget = "#tours"/>
                </div>
            </div>
         
    )
}

export default Projects
