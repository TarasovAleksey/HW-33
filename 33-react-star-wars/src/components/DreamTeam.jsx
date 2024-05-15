import React, {Component} from 'react';
import mainfriend1 from '../Images/friend1.jpg';
import mainfriend2 from '../Images/friend2.jpg';
import mainfriend3 from '../Images/friend3.jpg';
import mainfriend4 from '../Images/friend4.jpg';
import mainfriend5 from '../Images/friend5.jpg';
import mainfriend6 from '../Images/friend6.jpg';
import mainfriend7 from '../Images/friend7.jpg';
import mainfriend8 from '../Images/friend8.jpg';
import mainfriend9 from '../Images/friend9.jpg';
class DreamTeam extends Component {
    render() {
        return ( //TODO fix images
            <section className="float-end w-50 row border mx-1">
                <h2 className="col-12 text-center">Dream Team</h2>
                <img className="col-4 p-1" src={mainfriend1} alt="friend"/>
                <img className="col-4 p-1" src={mainfriend2} alt="friend"/>
                <img className="col-4 p-1" src={mainfriend3} alt="friend"/>
                <img className="col-4 p-1" src={mainfriend4} alt="friend"/>
                <img className="col-4 p-1" src={mainfriend5} alt="friend"/>
                <img className="col-4 p-1" src={mainfriend6} alt="friend"/>
                <img className="bottom-left col-4 p-1" src={mainfriend7} alt="friend"/>
                <img className="col-4 p-1" src={mainfriend8} alt="friend"/>
                <img className="bottom-right col-4 p-1" src={mainfriend9} alt="friend"/>
            </section>
        );
    }
}

export default DreamTeam;