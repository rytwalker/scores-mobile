import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../utils';

const isRankOdd = rank => rank % 2 !== 0;

const Team = ({ index, team }) => {
  if (index === 0) {
    team.rank = '🥇';
  } else if (index === 1) {
    team.rank = '🥈';
  } else if (index === 2) {
    team.rank = '🥉';
  } else {
    team.rank = team.rank + '.';
  }
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isRankOdd(index)
            ? `${colors.white}`
            : `${colors.primaryLight}`
        }
      ]}
    >
      <View style={styles.rank}>
        <Text style={styles.rankText}>{team.rank && team.rank}</Text>
      </View>
      <View style={styles.teamName}>
        <Text style={styles.teamNameText}>{team.teamName}</Text>
      </View>
      <View style={styles.averageScore}>
        <Text style={styles.averageScoreText}>
          {Math.ceil(team.averageScore)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20
  },
  rank: {
    marginRight: 20
  },
  rankText: {
    fontSize: 18,
    fontWeight: '700'
  },
  teamName: {
    marginRight: 'auto'
  },
  teamNameText: {
    fontSize: 18,
    fontWeight: '700'
  },
  averageScore: {
    backgroundColor: `${colors.primaryDark}`,
    height: 60,
    width: 60,
    borderRadius: 50,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  averageScoreText: {
    color: `${colors.primaryLight}`,
    fontWeight: '700',
    fontSize: 30
  }
});

export default Team;
