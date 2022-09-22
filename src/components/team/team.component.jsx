import React from 'react';
import HeaderH2 from '../../elements/headerH2/headerh2.component';
import images from '../../assets/images';
import TeamItem from './teamItem/teamItem.component';
import './team.scss';
import './team.mobile.scss';

const teamItemsArr = images.team.map(item => <TeamItem className="teamPhoto" key={item.key} src={item.teamImg} /> )

const Team = () => {
  return (
    <section className="team section" id='team'>
      <div className="container">
        <HeaderH2 title="Our top team" text="Learn more about how you can save our planet's nature."/>
        <div className="team-photos">
          {teamItemsArr}
          <img src={images.vector1} className="line1" alt="line1" />
          <img src={images.vector2} className="line2" alt="line2" />
        </div>
      </div>
    </section>
  )
}

export default Team;