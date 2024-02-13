import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import video from '../../../public/gojovsjogo.mp4'
// import '../../index.css'

import './home.css'

const Home = () => {
	return (
		<div className='homeMain flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			<Sidebar />
			{/* <video autoPlay muted src={video}> */}
			<MessageContainer  />
			{/* </video> */}
		</div>
	);
};
export default Home;

