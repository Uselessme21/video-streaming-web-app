import {
 
    StreamVideo,
    StreamVideoClient,
    
  } from '@stream-io/video-react-sdk';
import { ReactNode, useState } from 'react';
  
  const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
 
const StreamClientProvider = ({children}:{children:ReactNode}) => {
    const [videoClient, setvideoClient] = useState<StreamVideoClient>()
   

    return (
      <StreamVideo client={videoClient}>
       
      </StreamVideo>
    );
  };

  export default StreamClientProvider;