import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const VideoComp = () => {
  const videosArr = [
    //  'https://mixkit.co/free-stock-video/girl-gaming-online-at-home-in-over-the-shoulder-view-5444/',
    'https://player.vimeo.com/progressive_redirect/playback/689949818/rendition/540p?loc=external&oauth2_token_id=1027659655&signature=cf602155bf49e4e74db6f2ec9d4ecf067fbab44c4295a8950d58ecdb88910882',
    'https://player.vimeo.com/progressive_redirect/playback/697718184/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=26d69c3df603d083fedd663acaab4d35a33444d11033a626864cf1e578e136cf',
    'https://player.vimeo.com/external/510850877.hd.mp4?s=d5e9ed9ea40ba755e28512cce6c1ad00d92506f7&profile_id=174',
    'https://player.vimeo.com/external/577442929.hd.mp4?s=95231c8a7fe2066ffb640204591b01a6c326b97c&profile_id=174',
    'https://player.vimeo.com/progressive_redirect/playback/689925384/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=5a819f11298d53cc1ed85837342f47ea61c8f95b9aeeb0c38edab72a80e0db78',
    'https://player.vimeo.com/progressive_redirect/playback/688648666/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=070a16d4b244bc11c2bd17b03e04e50460be3d2726ed554959a49fc05dbd0281',
    'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',
  ];

  const [videoSrc, setVideoSrc] = useState(videosArr[0]);

  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'}>
        <video
          controls
          controlsList="nodownload"
          src={videoSrc}
          style={{
            width: '100%',
          }}
        ></video>

        <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
          <Heading>Epic Galactic Showdown: Quantum Nexus Unleashed! </Heading>
          <Text>
            Title: "Epic Galactic Showdown: Quantum Nexus Unleashed!"
            Description: 🚀 Brace yourselves for the most mind-bending gaming
            experience of the century! Dive into the intergalactic chaos with
            'Quantum Nexus,' where space meets insanity in an adrenaline-pumping
            extravaganza! 👽 🌌 Join our fearless protagonist, Captain Quantum,
            as they navigate through wormholes, dodge rogue asteroids, and
            engage in epic space battles against otherworldly foes. Will they
            save the universe, or plunge it into cosmic chaos? Only the quantum
            gods know! 🔥 Immerse yourself in mind-blowing graphics that will
            make your eyes pop out of their sockets! The visuals are so stunning
            that even aliens will be jealous of your gaming setup. 🛸 💣 Unleash
            devastating space weaponry and witness explosions that defy the laws
            of physics! Black holes, supernovas, and laser beams - we've got it
            all! Your screen might need sunglasses to handle the sheer
            awesomeness. 😎 🎮 Get ready for a rollercoaster of emotions with
            unexpected plot twists and turns that will leave you questioning
            your very existence. Is reality just a simulation, or are we living
            in a quantum realm? Play to find out! 🕹️ Whether you're a seasoned
            space commander or a total noob to the cosmos, 'Quantum Nexus'
            guarantees a gaming experience that will keep you on the edge of
            your spaceship seat. Pro-tip: Don't forget to upgrade your warp
            drive for maximum warp-speed shenanigans! 👾 Don't just play a game,
            embark on a cosmic odyssey! Hit that subscribe button, like, and
            share with your fellow Earthlings. Let's make 'Quantum Nexus' the
            viral sensation it deserves to be across the galaxy! 🌠✨
            #QuantumNexus #SpaceGaming #EpicAdventure
          </Text>
        </VStack>
      </VStack>
      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}
        p="8"
        spacing={'8'}
        overflowY={'auto'}
      >
        {videosArr.map((item, index) => (
          <Button
            variant={'ghost'}
            colorScheme={'purple'}
            onClick={() => setVideoSrc(item)}
          >
            Lecture {index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default VideoComp;
