import React, {Component} from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import {SliderBox} from 'react-native-image-slider-box';
import {colors, responsiveHeight, responsiveWidth} from '../../../util';
export default class JerseySlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openImage: false,
      previewImage: false,
    };
  }

  clickPreview = index => {
    this.setState({
      openImage: true,
      previewImage: [
        {
          url: '',
          props: {
            source: this.props.images[index],
          },
        },
      ],
    });
  };
  render() {
    console.log(this.props.images);
    return (
      <View>
        <SliderBox
          images={this.props.images}
          circleLoop
          sliderBoxHeight={responsiveHeight(430)}
          ImageComponentStyle={styles.jersey}
          dotStyle={styles.dotStyle}
          imageLoadingColor={colors.primary}
          onCurrentImagePressed={index => this.clickPreview(index)}
        />

        <Modal visible={this.state.openImage} transparent={true}>
          <ImageViewer
            imageUrls={this.state.previewImage}
            onClick={() => this.setState({openImage: false})}
            backgroundColor={colors.primary}
            enableSwipeDown
            onSwipeDown={() => this.setState({openImage: false})}
          />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  jersey: {
    marginTop: 25,
    width: responsiveWidth(344),
  },
  dotStyle: {
    marginTop: -50,
  },
});
