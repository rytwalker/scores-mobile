import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { fetchTeams } from '../store/actions/index';

class TeamsScreen extends Component {
  componentDidMount() {
    if (!this.props.teams.length) this.props.fetchTeams();
  }
  render() {
    const { teams } = this.props;
    return (
      <View>
        <Text>Teams Here</Text>
        {teams &&
          teams.map(team => <Text key={team.teamId}>{team.teamName}</Text>)}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    teams: state.teams.teams,
    error: state.teams.error,
    isFetching: state.teams.isFetching
  };
};

export default connect(
  mapStateToProps,
  { fetchTeams }
)(TeamsScreen);
