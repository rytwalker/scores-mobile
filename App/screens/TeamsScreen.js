import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { fetchTeams } from '../store/actions/index';
import Team from '../components/Team';

class TeamsScreen extends Component {
  componentDidMount() {
    if (!this.props.teams.length) this.props.fetchTeams();
  }
  render() {
    const { teams } = this.props;
    return (
      <View>
        {teams &&
          teams.map((team, i) => (
            <Team team={{ ...team, rank: i + 1 }} key={team.teamId} index={i} />
          ))}
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
