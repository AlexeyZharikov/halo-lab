import logo from './header/Logo.png';
import heroHeadline from './hero/Headline.png';
import heroParrot from './hero/Parrot.png';
import heroCard from './hero/hero-card.png';
import teamImg1 from './team/img1.png';
import teamImg2 from './team/img2.png';
import teamImg3 from './team/img3.png';
import leaf1 from './contact/Leaf1.png';
import leaf2 from './contact/Leaf2.png';
import vector1 from './team/Vector1.png';
import vector2 from './team/Vector2.png';
import geo from './geo.png';
import card1 from './slider/card1.png';
import card2 from './slider/card2.png';
import card3 from './slider/card3.png';
import card4 from './slider/card4.png';
import card5 from './slider/card5.png';
import facebook from './Footer/Facebook.png';
import twitter from './Footer/Twitter.png';
import linkedin from './Footer/LinkedIn.png';

export default {
  logo: logo,
  heroHeadline: heroHeadline,
  heroParrot: heroParrot,
  heroCard: heroCard,
  team: [{
      key: 1,
      teamImg: teamImg1,
    },
    {
      key: 2,
      teamImg: teamImg2,
    },
    {
      key: 3,
      teamImg: teamImg3
    }
  ],
  leaf1: leaf1,
  leaf2: leaf2,
  vector1: vector1,
  vector2: vector2,
  geo: geo,
  slider: [{
      card: card1,
      id: 1
    },
    {
      card: card2,
      id: 2
    },
    {
      card: card3,
      id: 3
    },
    {
      card: card4,
      id: 4
    },
    {
      card: card5,
      id: 5
    },
  ],
  footer: [{
      id: 1,
      img: twitter
    },
    {
      id: 2,
      img: facebook
    },
    {
      id: 3,
      img: linkedin
    }
  ]
}