import React, { Component } from 'react';

import './styles/FogEffects.css';

class FogEffects extends Component
{

    render(){
        return(
            <div>
            <div id="foglayer_01" class="fog">
  <div class="image01"></div>
  <div class="image02"></div>
</div>
<div id="foglayer_02" class="fog">
  <div class="image01"></div>
  <div class="image02"></div>
</div>
<div id="foglayer_03" class="fog">
  <div class="image01"></div>
  <div class="image02"></div>
</div>
</div>
        );
    }

}

export default FogEffects;