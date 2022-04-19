import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import ReactHlsPlayer from 'react-hls-player';

const VideoPlayerComponent = () => {
    const playerRef = React.useRef();

    function playVideo() {
        playerRef.current.play();
    }

    function pauseVideo() {
        playerRef.current.pause();
    }

    function toggleControls() {
        playerRef.current.controls = !playerRef.current.controls;
    }

    return (
        <div>
            <div class="row d-flex justify-content-center text-center">
                <h1>React bootstrap hls player - technostuf.com</h1>
                <hr />
                <div className="col-md-8">
                    <div className="row">
                        <ReactHlsPlayer
                            src="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
                            autoPlay={true}
                            controls={true}
                            width="100%"
                            height="auto"
                            hlsConfig={{
                                maxLoadingDelay: 4,
                                minAutoBitrate: 0,
                                lowLatencyMode: true,
                            }}
                        />
                    </div>

                </div>
                <h1>React bootstrap hls player with playerRef  - technostuf.com</h1>
                <hr />
                <div className="col-md-8">
                    <ReactHlsPlayer
                        autoPlay={true}
                        width="100%"
                        height="auto"
                        controls={true}
                        playerRef={playerRef}
                        src="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
                    />
                    <div className="row">
                        <div className="col-md-1">
                            <button class="btn btn-primary" type="button" onClick={playVideo} >Play</button>
                        </div>
                        <div className="col-md-1">
                            <button class="btn btn-primary" type="button" onClick={pauseVideo} >Pause</button>
                        </div>
                        <div className="col-md-4">
                            <button class="btn btn-primary" type="button" onClick={toggleControls} >Hide/Show Controls</button>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}
export default VideoPlayerComponent;