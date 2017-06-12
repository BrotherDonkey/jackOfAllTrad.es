import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import { Link } from 'react-router-dom';
import MtSvgLines from 'react-mt-svg-lines';

//component imports
import LinkedPanel from './LinkedPanel';
import PageTitle from './PageTitle';
import SubNav from './SubNav';
import Card from './Card';
import Bear2svg from './svg-components/Bear2svg';
import Arrowsvg from './svg-components/Arrowsvg';
import BrowserSVG from './svg-components/BrowserSVG';
import BookshelfSVG from './svg-components/BookshelfSVG';




const personalDescription = "After I graduated from university with a B.A. in English Literature, I travelled the world for seven years. I lived in China for five years, Taiwan for one, Japan for a bit, and England for a bit. I've written two cyberpunk novels, which you can find on Amazon if you like. Three years ago I started a business with two friends called Fictuary, which was a short fiction publishing website and app. I've recently moved back to the US to \"settle down,\" and hope to satisfy my ever-increasing curiosity and love of building things as a web developer in Seattle."

const About = () => {
    return (

      <div className="main-content">
        <PageTitle
          icon={<Bear2svg className="page-icon" height="100" width="100" />}
          title="About" />

        <CSSTransitionGroup
            component="div"
            className="page-summary"
            transitionName="page-title-animation"
            transitionEnter={true}
            transitionEnterTimeout={500}
            transitionLeave={true}
            transitionLeaveTimeout={500}
            transitionAppear={true}
            transitionAppearTimeout={500}>
            <p>Summary: Elen sila lumenn omentilmo, Nae saian luume'. Cormamin lindua ele lle. Saesa omentien lle, vanya sulie Namaarie. Aa' lasser en lle coia orn n' omenta gurtha. Aa' i'sul nora lanne'lle. Aa' menle nauva calen ar' ta hwesta e' ale'quenle. Cormamin niuve tenna' ta elea lle au'. Lissenen ar' maska'lalaith tenna' lye omentuva.</p>
        </CSSTransitionGroup>

        <div className="card-cont">

          <Link className="card-link" to="/webdev">
            <Card title="Web Dev"
                  icon={<BrowserSVG height="100" width="100" className="card-icon"/>}
                  subheadline="sub headline"
                  text="Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc., li tot Europa usa li sam vocabularium." />
          </Link>

          <Link className="card-link" to="/writing">
            <Card title="Writing"
                  icon={<BookshelfSVG height="100" width="100" className="card-icon"/>}
                  subheadline="Novels, short stories, travel writing and more."
                  text="Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc., li tot Europa usa li sam vocabularium." />
          </Link>
        </div>
      </div>
    );
};

export default About;
