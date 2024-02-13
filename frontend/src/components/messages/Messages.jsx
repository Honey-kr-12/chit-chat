import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
	const { messages, loading } = useGetMessages();
	useListenMessages();
	console.log("messages ---- ", messages);

	const lastMessageRef = useRef(null);

	useEffect(()=>{
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" })
		})
	},[messages])

	return (
		<div className='px-4 flex-1 overflow-auto'>
			{!loading &&
				messages.length > 0 &&
				messages.map((message) => (
					<div key={message._id} ref={lastMessageRef} >
						<Message message={message} />
					</div>
				))}
			{loading && messages.length === 0 && messages.map((message) => (
				<Message key={message._id} message={message} />
			))}

			{loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

			{!loading && messages.length === 0 && (
				<p className='text-center text-white' >Send the message to start conversation</p>
			)}
		</div>
	);
};
export default Messages;