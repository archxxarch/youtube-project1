import React from 'react'

import { todayText } from '../data/today'
import Main from '../components/section/Main'

const Today = () => {
    return (
        <Main
            title='추천 유튜버'
            description='추천 유튜버 페이지입니다.'
        >
            <section id='todayPage'>
                <h2>🤩 오늘의 추천 픽!!!</h2>
                {todayText.map((today, key) => (
                    <div className="today__inner" key={key}>
                        <div className="today__thumb"></div>
                        <div className="today__text">
                            <span className='today'>오늘의 픽!</span>
                            <h3 className='title'>{today.title}</h3>
                            <p className='desc'>{today.desc}</p>
                            <div className='info'>
                                <span className='author'>{today.author}</span>
                                <span className='data'>{today.date}</span>
                            </div>
                        </div>
                    </div>
                ))}

            </section>
        </Main>

    )
}

export default Today