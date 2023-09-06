import React from 'react';
import {StyleSheet, View} from 'react-native';
import Video from 'react-native-video';

export const App = () => {
  const videoPlayer = React.useRef();

  // const goFullScreen = () => {
  //   if (videoPlayer.current) {
  //     videoPlayer.current.presentFullscreenPlayer();
  //   }
  // };

  return (
    <View style={styles.container}>
      <Video
        adTagUrl="https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/vmap_ad_samples&sz=640x480&cust_params=sample_ar%3Dpremidpostoptimizedpodbumper&ciu_szs=300x250&gdfp_req=1&ad_rule=1&output=vmap&unviewed_position_start=1&env=vp&impl=s&cmsid=496&vid=short_onecue&correlator="
        ref={ref => (videoPlayer.current = ref)}
        source={{
          uri: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
        }}
        paused={false} // make it start
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }} // any style you want
        repeat={true} // make it a loop
        muted={false}
        controls={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});
