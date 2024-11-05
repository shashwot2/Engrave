import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { MaterialIcons } from '@expo/vector-icons';

interface ReviewProps {
  deckId: string;
  onBack: () => void;
}

interface CardItem {
  id: string;
  spanish: string;
  english: string;
}

const sampleCards: CardItem[] = [
  { id: '1', spanish: 'Un pequeño zorro marrón saltó sobre el perro perezoso.', english: 'dog' },
  { id: '2', spanish: 'El perro corre rápido por el parque verde.', english: 'dog' },
  { id: '3', spanish: 'El pájaro vuela alto en el cielo azul.', english: 'bird' },
];

const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: '#0a7ea4',
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: '#0a7ea4',
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: '#fff',
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: '#fff',
  },
};

const Review: React.FC<ReviewProps> = ({ deckId, onBack }) => {
  const { width: screenWidth } = Dimensions.get('window');
  const headerHeight = 100;
  const cardSize = Math.min(screenWidth - 40, 400); // Square card with max size and margins

  return (
    <View style={[styles.container, { backgroundColor: Colors.dark.background }]}>
      <View style={[styles.header, { height: headerHeight }]}>
        <Text onPress={onBack} style={[styles.backButton, { color: Colors.dark.tint }]}>← Back</Text>
        <Text style={[styles.deckTitle, { color: Colors.dark.text }]}>Deck {deckId}</Text>
      </View>
      <View style={styles.swiperContainer}>
        <Swiper
          cards={sampleCards}
          renderCard={(card) => (
            <View style={[styles.card, { width: cardSize, height: cardSize }]}>
              <MaterialIcons 
                name="star-outline" 
                size={24} 
                color={Colors.dark.icon}
                style={styles.starIcon}
              />
              <Text style={[styles.spanishText, { color: Colors.dark.icon }]}>
                {card.spanish}
              </Text>
              <View style={styles.bottomIcons}>
                <MaterialIcons 
                  name="volume-up" 
                  size={24} 
                  color={Colors.dark.icon}
                />
                <MaterialIcons 
                  name="content-copy" 
                  size={24} 
                  color={Colors.dark.icon}
                />
              </View>
            </View>
          )}
          cardIndex={0}
          backgroundColor={Colors.dark.background}
          stackSize={3}
          stackSeparation={15}
          animateOverlayLabelsOpacity
          animateCardOpacity
          overlayLabels={{
            left: {
              title: 'CORRECT',
              style: {
                label: {
                  backgroundColor: '#4CAF50',
                  color: Colors.dark.text,
                  fontSize: 24,
                  borderRadius: 8,
                  padding: 10,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  marginTop: 20,
                  marginLeft: -20,
                }
              }
            },
            right: {
              title: 'INCORRECT',
              style: {
                label: {
                  backgroundColor: '#FF3B30',
                  color: Colors.dark.text,
                  fontSize: 24,
                  borderRadius: 8,
                  padding: 10,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 20,
                  marginLeft: 20,
                }
              }
            }
          }}
          verticalSwipe={false}
          onSwipedLeft={(cardIndex) => console.log('Correct on card:', cardIndex)}
          onSwipedRight={(cardIndex) => console.log('Incorrect on card:', cardIndex)}
          onSwipedAll={() => console.log('All cards completed')}
          containerStyle={styles.swiperContainer}
          cardStyle={styles.cardContainer}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#2D2D2D',
  },
  backButton: {
    fontSize: 18,
  },
  deckTitle: {
    fontSize: 18,
    fontWeight: '500',
  },
  swiperContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    borderRadius: 12,
    backgroundColor: '#2D2D2D',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    justifyContent: 'space-between',
  },
  starIcon: {
    alignSelf: 'flex-end',
  },
  spanishText: {
    fontSize: 24,
    textAlign: 'left',
    lineHeight: 32,
    flex: 1,
    paddingVertical: 20,
  },
  bottomIcons: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 16,
  },
});

export default Review;