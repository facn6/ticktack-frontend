import React, { PureComponent } from 'react';
import Image from '@/modules/common/components/Image';
import Slider from '@/modules/common/components/Slider';


export default class Home extends PureComponent {
  render() {
    return (
      <div>
        <Image />
        <Slider />
      </div>
    );
  }
}
