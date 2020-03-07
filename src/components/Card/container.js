import { connect } from 'react-redux';
import { playCard } from '../../actions/deck';
import Card from './Card';

const mapDispatchToProps = dispatch => ({
  playCard: cardId => dispatch(playCard(cardId))
});

export default connect(null, mapDispatchToProps)(Card);
