import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SkeletonScreen from '../pages/SkeletonScreen';
import SkeletonOne from '../pages/SkeletonOne';
import SkeletonTwo from '../pages/SkeletonTwo';
import SkeletonThree from '../pages/SkeletonThree';
import SkeletonCss from '../pages/SkeletonCss';
import SkeletonCard from '../pages/SkeletonCard';
import ReactPlaceholder from '../pages/ReactPlaceholder';
import ReactContentLoader from '../pages/ReactContentLoader';
import PrerenderSkeleton from '../pages/PrerenderSkeleton';


const App = () => (
  <Router>
    <Switch>
      {/* 骨架屏实践 */}
      <Route path="/skeleton/screen" component={SkeletonScreen} />
      <Route path="/skeleton/one" component={SkeletonOne} />
      <Route path="/skeleton/two" component={SkeletonTwo} />
      <Route path="/skeleton/three" component={SkeletonThree} />
      <Route path="/skeleton/css" component={SkeletonCss} />
      <Route path="/skeleton/card" component={SkeletonCard} />
      <Route path="/skeleton/loader" component={ReactPlaceholder} />
      <Route path="/skeleton/content/loader" component={ReactContentLoader} />
      <Route path="/skeleton/preredner" component={PrerenderSkeleton} />
    </Switch>
  </Router>
);
export default App;
