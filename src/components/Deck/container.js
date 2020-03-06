import { connect } from 'react-redux';
import { getCurrentDeck } from '../../selectors/deck';
import { drawCard } from '../../actions/deck';
import Deck from './Deck';

const mapStateToProps = state => ({
  currentDeck: getCurrentDeck(state)
});

const mapDispatchToProps = dispatch => ({
  drawCard: () => dispatch(drawCard())
});

export default connect(mapStateToProps, mapDispatchToProps)(Deck);
