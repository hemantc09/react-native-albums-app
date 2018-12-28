import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

/* destructuring album object from API - the props below because we are using many times */
const AlbumDetail = ({ album }) => {
  { /* we are creating local destructuring so that we can use them directly
  instead of saying props.album.property each time. We can say title directly */ }
  const {
    title,
    artist,
    thumbnail_image,
    image,
    url
  } = album;

  { /* destructuring the styles object so we dont need to use the
    styles. each time. Directly use the object */ }
  const {
    thumbnailStyle,
    headerContainerStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
  } = styles;

  return (
    <Card>
      <CardSection>
      {/*we are passing the children <Text> tag to the Card component*/}
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContainerStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: image }}
        />
      </CardSection>

      <CardSection>
      {/* we are passing props to button named onPress   */}
        <Button onPress={() => Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};


const styles = {
  headerContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    //we are using a trick here because we need to disaply the image full
    width: null
  }
};

export default AlbumDetail;
