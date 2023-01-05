import { h } from 'preact';
import style from './style.css';
import Token from "../../components/token";
import EffectsList from "../../components/effectsList";

const Home = () => {
	return (
		<div class={style.home}>
			<Token />
			<EffectsList />
		</div>
	);
};

interface ResourceProps {
	title: string;
	description: string;
	link: string;
}

const Resource = (props: ResourceProps) => {
	return (
		<a href={props.link} class={style.resource}>
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
};

export default Home;
