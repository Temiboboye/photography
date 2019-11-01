import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as Pages from "./routes";
import Photography_Route from './pages/photography/route';

function App() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Pages.Home} />
          <Route path="/about" component={Pages.About} />
          <Route path="/connect" component={Pages.Connect} />

          {/* PORTFOLIO */}
          <Route exact path="/portfolio" component={Pages.Portfolio} />
            {/* FASHION */}
            <Route exact path="/portfolio/fashion" component={Pages.Fashion} />
            {/* {Fashion_Route.map((r,i)=>{
              return (
                <Route path={`/portfolio/fashion/${r.id}`} component={Pages[`Fashion${r.title}`]} />
              )
            })} */}
            <Route path={`/portfolio/fashion/illustrations`} component={Pages.FashionIllustrations} />
            <Route exact path={`/portfolio/fashion/design`} component={Pages.FashionDesign} />
            <Route path="/portfolio/fashion/design/:id" component={Pages.FashionDesignContent} />
            {/* ARTS */}
            <Route exact path="/portfolio/arts" component={Pages.Arts} />
            <Route exact path={`/portfolio/arts/digitalarts`} component={Pages.DigitalArts} />
            <Route path="/portfolio/arts/digitalarts/:id" component={Pages.DigitalArtsContent} />
            {/* OTHERS */}
            <Route exact path="/portfolio/others" component={Pages.Others} />

          {/* ARCHIVE */}
          <Route exact path="/archive" component={Pages.Archive} />
              {/* FASHION */}
              <Route exact path="/archive/fashion" component={Pages.ArchiveFashionCollections} />
              <Route exact path="/archive/fashion/:id" component={Pages.ArchiveFashionCollectionsContent} />
              {/* PHOTOGRAPHY */}
              <Route exact path="/archive/photography" component={Pages.Photography} />
              {Photography_Route.map((r,i)=>{
                return (
                  <Route path={`/archive/photography/${r.id}`} component={Pages[`PhotographyContent${r.title}`]} />
                )
              })}
        </Switch>
      </Router>
    );
}

export default App;
