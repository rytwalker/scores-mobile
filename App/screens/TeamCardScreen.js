import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import PureChart from 'react-native-pure-chart';
import { colors } from '../utils';

const TeamCardScreen = props => {
  const { item } = props.navigation.state.params;
  const screenWidth = Dimensions.get('window').width - 40;
  console.log(PureChart());
  const data = {
    labels: ['R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7', 'R8'],
    datasets: [
      {
        data: [
          item.average_r1_score,
          item.average_r2_score,
          item.average_r3_score,
          item.average_r4_score,
          item.average_r5_score,
          item.average_r6_score,
          item.average_r7_score,
          item.average_r8_score
        ]
      }
    ]
  };
  const chartConfig = {
    backgroundColor: `${colors.primary}`,
    backgroundGradientFrom: `${colors.primaryLight}`,
    backgroundGradientTo: `${colors.primaryDark}`,
    decimalPlaces: 0, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
      marginVertical: 8
    }
  };
  let sampleData = [
    {
      color: `${colors.primary}`,
      data: [
        { x: 'R1', y: Math.round(item.average_r1_score * 10) / 10 },
        { x: 'R2', y: Math.round(item.average_r2_score * 10) / 10 },
        { x: 'R3', y: Math.round(item.average_r3_score * 10) / 10 },
        { x: 'R4', y: Math.round(item.average_r4_score * 10) / 10 },
        { x: 'R5', y: Math.round(item.average_r5_score * 10) / 10 },
        { x: 'R6', y: Math.round(item.average_r6_score * 10) / 10 },
        { x: 'R7', y: Math.round(item.average_r7_score * 10) / 10 },
        { x: 'R8', y: Math.round(item.average_r8_score * 10) / 10 }
      ]
    }
  ];

  return (
    <ScrollView style={styles.container}>
      <PureChart
        data={sampleData}
        type="bar"
        height={220}
        color={'red'}
        // xAxisColor={'red'}
        // yAxisColor={'red'}
        // xAxisGridLineColor={'red'}
        // yAxisGridLineColor={'red'}
        // labelColor={'red'}
        defaultColumnWidth={25}
        defaultColumnMargin={13}
        numberOfYAxisGuideLine={16}
        width={screenWidth}
        backgroundColor={colors.white}
        highlightColor={colors.red}
        showEvenNumberXaxisLabel={false}
      />
      {/* <BarChart
        style={{ borderRadius: 16 }}
        data={data}
        width={screenWidth}
        height={220}
        fromZero={true}
        chartConfig={chartConfig}
      /> */}
      <View>
        <Text style={styles.headingText}>#winning</Text>
        <View style={styles.placesContainer}>
          <Text style={styles.placesText}>{item.first_place} 🥇</Text>
          <Text style={styles.placesText}>{item.second_place} 🥈</Text>
          <Text style={styles.placesText}>{item.third_place} 🥉</Text>
        </View>
        <Text style={styles.headingText}>Averages</Text>
        <View style={styles.stats}>
          <Text style={styles.statsText}>
            <Text style={styles.statsNumberText}>
              {Math.round(item.average_score)}
            </Text>{' '}
            Points
          </Text>
          <Text>🎰</Text>
        </View>

        <View style={styles.stats}>
          <Text style={styles.statsText}>
            <Text style={styles.statsNumberText}>
              {(Math.round(item.average_percent_correct * 10) / 10).toFixed(1)}%
            </Text>{' '}
            Correct
          </Text>
          <Text>💯</Text>
        </View>

        <View style={styles.stats}>
          <Text style={styles.statsText}>
            <Text style={styles.statsNumberText}>{item.games_played}</Text>{' '}
            Quizzes Played
          </Text>
          <Text>🎟</Text>
        </View>
      </View>
      <View>
        <Text style={styles.headingText}>Personal Bests</Text>
        <Text style={styles.statsText}>
          <Text style={styles.statsNumberText}>{item.high_score}</Text> 🏅 High
          Score
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  headingText: {
    fontWeight: '700',
    fontSize: 24,
    marginBottom: 10
  },
  placesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  placesText: {
    fontSize: 24,
    color: `${colors.primaryDark}`
  },
  stats: {
    backgroundColor: `${colors.primaryDark}`,
    marginBottom: 20,
    borderRadius: 4,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  statsText: {
    fontSize: 14,
    fontWeight: '700',
    color: `${colors.blackFaded}`
  },
  statsNumberText: {
    fontSize: 20,
    color: `${colors.white}`
  }
});
export default TeamCardScreen;
