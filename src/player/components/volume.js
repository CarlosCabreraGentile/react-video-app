import React from 'react';
import VolumeIcon from '../../icons/components/volume';
import './volume.css';
import Mute from'../../icons/components/mute';

function Volume(props) {
    return (
        <div className="Volume">
        <button
            className="Volume"
            onClick={props.handleVolumeToggle}
        >
            {
            props.volume ?
                <VolumeIcon
                color="white"
                size={25}
                />
            :
                <Mute
                color="white"
                size={25}
                />
            }

            </button>
            <div className="Volume-range">
                <input 
                    type="range"
                    min={0}
                    max={1}
                    step={.05}
                    onChange={props.handleVolumeChange}
                    value={props.volume}
                    />
            </div>
        </div>
    )
}

export default Volume;