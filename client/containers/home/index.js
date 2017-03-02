import challenge from 'challenge';

import React, { PureComponent } from 'react';
import Layout from '../../components/layout';
import TimeLine from '../../components/time_line';


class Home extends PureComponent {
  render() {
    return (
      <Layout className="c-home">
        <div className="c-home-wrapper">
          <span className="c-home-logo" />
          <TimeLine
            startDate={challenge.date}
            participantA={challenge.diyaz}
            participantB={challenge.ablay}
          />
        </div>
      </Layout>
    );
  }
};

export default Home;
