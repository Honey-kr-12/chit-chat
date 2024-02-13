import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from 'react-icons/ti';
import useConversation from '../../zustand/useConversation';
import { useEffect, useState } from "react";
// import './message.css'
import { useAuthContext } from "../../context/AuthContext";


const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();
	
    const [Toggle, setToggle] = useState(false);

	useEffect(()=> {

		return () => setSelectedConversation(null);

	},[setSelectedConversation])

	return (
			<div className='md:min-w-[750px] containerVisible flex flex-col'> 
			{!selectedConversation ? (
				<NoChatSelected /> 
			) : (
				<>
			{/* Header */}
			<div className='bg-slate-500 px-4 py-2 mb-2'>
				<span className='label-text  text-white'>To: </span> 
				<span className='fullname font-bold'>{selectedConversation.fullName}</span>
			</div>

			<Messages />
			<MessageInput />
		</>
			)}
		</div>
	);
};
const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className='flex containerVisible items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 {authUser.fullName} ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};
export default MessageContainer;