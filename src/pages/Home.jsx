import React, { useEffect, useState } from 'react';

import Today from '../components/contents/Today';
import Traveler from '../components/contents/Traveler';
import Main from '../components/section/Main';
import VideoSlider from '../components/video/VideoSlider';
import { fetchFromAPI } from '../utils/api'

const Home = () => {
    const [channelVideo, setChannelVideo] = useState([]);
    // const [channelVideo2, setChannelVideo2] = useState([]);
    // const [channelVideo3, setChannelVideo3] = useState([]);
    // const [channelVideo4, setChannelVideo4] = useState([]);
    // const [channelVideo5, setChannelVideo5] = useState([]);

    useEffect(() => {
        const v1 = "UCugz3-UlkX2P77PtK1Ju0RA";
        // const v2 = "CNhofiqfw5nl-NeDJkXtPvw";
        // const v3 = "UCHpIHu4LzmNuD8bsE6mZLSA";
        // const v4 = "UC9gxOp_-R78phMHmv2bW_sg";
        // const v5 = "UCpsivHVNaBnIAPhkLBZcWQg";

        const fetchResults = async () => {
            try {
                const videosData = await fetchFromAPI(`search?channelId=${v1}&part=snippet&order=date`);
                setChannelVideo(videosData.items);

                // const videosData2 = await fetchFromAPI(`search?channelId=${v2}&part=snippet&order=date`);
                // setChannelVideo2(videosData2.items);

                // const videosData3 = await fetchFromAPI(`search?channelId=${v3}&part=snippet&order=date`);
                // setChannelVideo3(videosData3.items);

                // const videosData4 = await fetchFromAPI(`search?channelId=${v4}&part=snippet&order=date`);
                // setChannelVideo4(videosData4.items);

                // const videosData5 = await fetchFromAPI(`search?channelId=${v5}&part=snippet&order=date`);
                // setChannelVideo5(videosData5.items);

            } catch (error) {
                console.log('Error fetching data', error)
            }
        }
        fetchResults();
    }, [])


    return (
        <Main
            title='여행 유튜버'
            description='여행 유튜버 모음 사이트에 오신 걸 환영합니다.'
        >
            <Today />
            <Traveler />

            <VideoSlider videos={channelVideo} title='😎 쏘이 최신 영상' name='v1' />
            {/* <VideoSlider videos={channelVideo2} title='😎 빠니보틀 최신 영상' name='v2' />
            <VideoSlider videos={channelVideo3} title='😎 영알남 최신 영상' name='v3' />
            <VideoSlider videos={channelVideo4} title='😎 원지 최신 영상' name='v4' />
            <VideoSlider videos={channelVideo5} title='😎 Zane Travel 최신 영상' name='v5' /> */}
        </Main>
    );
};

export default Home;
