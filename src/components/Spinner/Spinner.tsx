import { Loader, Square } from "./styles";

const Spinner = () => {
	return (
		<Loader>
			<Square className="square-1" />
			<Square className="square-2" />
			<Square className="square-3" />
			<Square className="square-4" />
			<Square className="square-5" />
			<Square className="square-6" />
			<Square className="square-7" />
			<Square className="square-8" />
			<Square className="square-9" />
		</Loader>
	);
};

export default Spinner;
