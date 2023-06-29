import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';
import ViewMoreText from 'react-native-view-more-text';

const HomeScreen = () => {
  const Bold = props => (
    <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
  );
  const renderViewMore = onPress => {
    return (
      <Text onPress={onPress} style={{color: 'grey', marginLeft: 15}}>
        more
      </Text>
    );
  };
  const renderViewLess = onPress => {
    return (
      <Text onPress={onPress} style={{color: 'grey', marginLeft: 15}}>
        less
      </Text>
    );
  };
  return (
    <View>
      <ScrollView>
        {/* Header */}
        <View style={styles.container1}>
          <Image
            source={require('../../Asstes/5a4e432a2da5ad73df7efe7a.png')}
            style={{width: 120, height: 45}}
          />
          <View style={styles.iconHeader}>
            <Image
              source={require('../../Asstes/plus.png')}
              style={{width: 25, height: 25, marginHorizontal: 10}}
            />
            <Image
              source={require('../../Asstes/heart.png')}
              style={{width: 25, height: 25, marginHorizontal: 10}}
            />
            <Image
              source={require('../../Asstes/messenger.png')}
              style={{width: 25, height: 25, marginHorizontal: 10}}
            />
          </View>
        </View>
        {/* Story */}
        <ScrollView horizontal style={styles.containerStory}>
          <View style={styles.containerStoryAcount}>
            <View style={{}}>
              <Image
                source={{uri: 'https://picsum.photos/200/300?random=6'}}
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 35,
                  marginLeft: 5,
                  marginTop: 5,
                }}
              />
              <Image
                source={require('../../Asstes/plusBlue.png')}
                style={{
                  width: 21,
                  height: 21,
                  position: 'absolute',
                  bottom: 4,
                  right: 4,
                  borderRadius: 30,
                  borderWidth: 1,
                  borderColor: 'white',
                }}
              />
            </View>
            <Text style={styles.textStory}>Your Story</Text>
          </View>
          <View style={styles.containerStoryAcount}>
            <Image
              source={{uri: 'https://picsum.photos/200/300?random=1'}}
              style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                marginLeft: 5,
                marginTop: 5,
                borderWidth: 3,
                borderColor: 'orange',
              }}
            />
            <Text style={styles.textStory}>ridwan</Text>
          </View>
          <View style={styles.containerStoryAcount}>
            <Image
              source={{uri: 'https://picsum.photos/200/300?random=2'}}
              style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                marginLeft: 5,
                marginTop: 5,
                borderWidth: 3,
                borderColor: 'orange',
              }}
            />
            <Text style={styles.textStory}>fanny</Text>
          </View>
          <View style={styles.containerStoryAcount}>
            <Image
              source={{uri: 'https://picsum.photos/200/300?random=3'}}
              style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                marginLeft: 5,
                marginTop: 5,
                borderWidth: 3,
                borderColor: 'orange',
              }}
            />
            <Text style={styles.textStory}>elonmask</Text>
          </View>
          <View style={styles.containerStoryAcount}>
            <Image
              source={{uri: 'https://picsum.photos/200/300?random=4'}}
              style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                marginLeft: 5,
                marginTop: 5,
                borderWidth: 3,
                borderColor: 'orange',
              }}
            />
            <Text style={styles.textStory}>nadiem</Text>
          </View>
          <View style={styles.containerStoryAcount}>
            <Image
              source={{uri: 'https://picsum.photos/200/300?random=5'}}
              style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                marginLeft: 5,
                marginTop: 5,
                borderWidth: 3,
                borderColor: 'orange',
              }}
            />
            <Text style={styles.textStory}>artkhab</Text>
          </View>
          <View style={styles.containerStoryAcount}>
            <Image
              source={{uri: 'https://picsum.photos/200/300?random=6'}}
              style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                marginLeft: 5,
                marginTop: 5,
                borderWidth: 3,
                borderColor: 'orange',
              }}
            />
            <Text style={styles.textStory}>cous</Text>
          </View>
          <View style={styles.containerStoryAcount}>
            <Image
              source={{uri: 'https://picsum.photos/200/300?random=7'}}
              style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                marginLeft: 5,
                marginTop: 5,
                borderWidth: 3,
                borderColor: 'orange',
              }}
            />
            <Text style={styles.textStory}>aciox</Text>
          </View>
        </ScrollView>
        {/* Post1 */}
        <View style={styles.containerPost}>
          {/* Post1 */}
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginRight: 6,
              }}>
              <View style={styles.containerUserPost}>
                <Image
                  source={{uri: 'https://picsum.photos/200/300?random=3'}}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 35,
                    borderWidth: 3,
                    borderColor: 'orange',
                  }}
                />
                <Text style={styles.textUserPost}>elonmask</Text>
              </View>
              <Image
                source={require('../../Asstes/more.png')}
                style={{width: 17, height: 17}}
              />
            </View>
            <View>
              <Image
                source={{uri: 'https://picsum.photos/800/800?random=2'}}
                style={{width: '100%', height: 470}}
              />
            </View>
            <View style={styles.containerIconPost}>
              <Image
                source={require('../../Asstes/love.png')}
                style={{width: 25, height: 25, marginLeft: 10}}
              />
              <Image
                source={require('../../Asstes/chat.png')}
                style={{width: 31, height: 31, marginLeft: 10, marginTop: -3}}
              />
              <Image
                source={require('../../Asstes/send.png')}
                style={{width: 25, height: 25, marginLeft: 10}}
              />
              <Image
                source={require('../../Asstes/bookmark.png')}
                style={{width: 25, height: 25, position: 'absolute', right: 10}}
              />
            </View>
            <View style={styles.containerlikedPost}>
              <Image
                source={{uri: 'https://picsum.photos/200/300?random=4'}}
                style={{width: 20, height: 20, borderRadius: 10}}
              />
              <Text
                style={{
                  color: 'black',
                  fontSize: 13,
                  fontWeight: '400',
                  marginHorizontal: 5,
                }}>
                Liked by
              </Text>
              <Text style={{color: 'black', fontSize: 13, fontWeight: 'bold'}}>
                nadiem
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 13,
                  fontWeight: '400',
                  marginHorizontal: 5,
                }}>
                and
              </Text>
              <Text style={{color: 'black', fontSize: 13, fontWeight: 'bold'}}>
                5,000,231 others
              </Text>
            </View>
            <ViewMoreText
              numberOfLines={2}
              renderViewMore={renderViewMore}
              renderViewLess={renderViewLess}
              textStyle={{marginLeft: 15}}>
              <Text style={{fontSize: 13, color: 'black'}}>
                <Bold>elonmask</Bold> Gabut bener dirumah, healing duls ahhhh ke
                gunung. sembari mikir mikir jadi ga yaaa beli twitter soalnya
                mahal ueyyy
              </Text>
            </ViewMoreText>
            <View style={styles.containerComents}>
              <Text style={{fontSize: 13, color: 'grey', fontWeight: '400'}}>
                View all 1000 coments
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 13,
                    fontWeight: 'bold',
                    marginRight: 5,
                  }}>
                  nadiem
                </Text>
                <Text style={{fontSize: 13, color: 'black', fontWeight: '400'}}>
                  KERENN LONN!!
                </Text>
              </View>
            </View>
          </View>
          {/* Post2 */}
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginRight: 6,
              }}>
              <View style={styles.containerUserPost}>
                <Image
                  source={{uri: 'https://picsum.photos/200/300?random=3'}}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 35,
                    borderWidth: 3,
                    borderColor: 'orange',
                  }}
                />
                <Text style={styles.textUserPost}>elonmask</Text>
              </View>
              <Image
                source={require('../../Asstes/more.png')}
                style={{width: 17, height: 17}}
              />
            </View>
            <View>
              <Image
                source={{uri: 'https://picsum.photos/800/800?random=2'}}
                style={{width: '100%', height: 470}}
              />
            </View>
            <View style={styles.containerIconPost}>
              <Image
                source={require('../../Asstes/love.png')}
                style={{width: 25, height: 25, marginLeft: 10}}
              />
              <Image
                source={require('../../Asstes/chat.png')}
                style={{width: 31, height: 31, marginLeft: 10, marginTop: -3}}
              />
              <Image
                source={require('../../Asstes/send.png')}
                style={{width: 25, height: 25, marginLeft: 10}}
              />
              <Image
                source={require('../../Asstes/bookmark.png')}
                style={{width: 25, height: 25, position: 'absolute', right: 10}}
              />
            </View>
            <View style={styles.containerlikedPost}>
              <Image
                source={{uri: 'https://picsum.photos/200/300?random=4'}}
                style={{width: 20, height: 20, borderRadius: 10}}
              />
              <Text
                style={{
                  color: 'black',
                  fontSize: 13,
                  fontWeight: '400',
                  marginHorizontal: 5,
                }}>
                Liked by
              </Text>
              <Text style={{color: 'black', fontSize: 13, fontWeight: 'bold'}}>
                nadiem
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 13,
                  fontWeight: '400',
                  marginHorizontal: 5,
                }}>
                and
              </Text>
              <Text style={{color: 'black', fontSize: 13, fontWeight: 'bold'}}>
                5,000,231 others
              </Text>
            </View>
            <ViewMoreText
              numberOfLines={2}
              renderViewMore={renderViewMore}
              renderViewLess={renderViewLess}
              textStyle={{marginLeft: 15}}>
              <Text style={{fontSize: 13, color: 'black'}}>
                <Bold>elonmask</Bold> Gabut bener dirumah, healing duls ahhhh ke
                gunung.sembari mikir mikir jadi ga yaaa beli twitter soalnya
                mahal ueyyy
              </Text>
            </ViewMoreText>
            <View style={styles.containerComents}>
              <Text style={{fontSize: 13, color: 'grey', fontWeight: '400'}}>
                View all 1000 coments
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 13,
                    fontWeight: 'bold',
                    marginRight: 5,
                  }}>
                  nadiem
                </Text>
                <Text style={{fontSize: 13, color: 'black', fontWeight: '400'}}>
                  KERENN LONN!!
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    backgroundColor: 'white',
    padding: 5,
    margin: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerStory: {
    backgroundColor: 'white',
    margin: 1,
    flexDirection: 'row',
    marginRight: 5,
    padding: 5,
  },
  containerPost: {backgroundColor: 'white', margin: 1},
  containerStoryAcount: {alignItems: 'center'},
  containerUserPost: {flexDirection: 'row', alignItems: 'center', padding: 5},
  containerIconPost: {flexDirection: 'row', marginTop: 12},
  containerlikedPost: {
    marginLeft: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerCaption: {flexDirection: 'row', marginHorizontal: 15},
  containerComents: {marginLeft: 15},
  iconHeader: {flexDirection: 'row', marginVertical: 8},
  text: {color: 'black'},
  textStory: {color: 'black', fontSize: 12, fontWeight: '500', marginTop: -2},
  textUserPost: {
    fontSize: 13,
    color: 'black',
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
});

export default HomeScreen;
