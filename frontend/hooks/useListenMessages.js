import { useEffect } from 'react'
import notificationSound from "../src/assets/sounds/notification.mp3"
import { useSocketContext } from './../src/context/SocketContext';
import useConversation from './../src/zustand/useConversation';



const useListenMessages = () => {
  const { socket } = useSocketContext()
  const { messages, setMessages } = useConversation()

  useEffect(() => {
    socket?.on('newMessage', newMessage => {
      newMessage.shouldShake = true
      const sound = new Audio(notificationSound)
      sound.play()
      setMessages([...messages, newMessage])
    })

    return () => socket?.off('newMessage')
  }, [socket, setMessages, messages])
}
export default useListenMessages
