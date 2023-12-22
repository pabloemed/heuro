'use client';
import { useEffect } from 'react';
import ReactPlayer from 'react-player';

export default function Home() {
  console.log('location.origin', location.origin);
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <video id='myVideo' width='500' height='500' controls>
        <source
          src='https://azurecloudfront-eqh0cueth4axgfgy.z01.azurefd.net/heuroassets/SampleVideo_1280x720_30mb.mp4'
          type='video/mp4'
        />
        Your browser does not support the video tag.
      </video>
    </main>
  );
}
