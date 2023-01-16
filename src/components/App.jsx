import PropTypes from 'prop-types';
import PaintingList from "../components/PaintingList";
import Section from './Section';
import paintings from "../paintings.json";

export default function App() {
	// const isOnline = true;
	return (
		<div>
			<Section title="Top week" >
				<PaintingList items={paintings} />
			</Section>
			
			{/* {isOnline && 'Online'}
			{isOnline ? 'Online' : 'Offline'} */}
		</div>
	);
}

PaintingList.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
	})),
}
