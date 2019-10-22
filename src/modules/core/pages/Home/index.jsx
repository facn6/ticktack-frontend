import React, { PureComponent } from 'react';
import Banner from '@/modules/common/components/Banner';
import RotatingCube from '@/modules/common/components/RotatingCube';
import Slider from '@/modules/common/components/Slider';
import { withModal } from '@/modules/core/hoc/withModal';

@withModal
 class Home extends PureComponent {

    render() {
      console.log(this.props.modal);
        return (
            <div>
                <Banner />

              <Slider />
                <RotatingCube />
            </div>
        );
    }
  }

  export default Home;
