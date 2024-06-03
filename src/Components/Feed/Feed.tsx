import React, { useEffect, useState } from 'react';
import './Feed.css';
import thumbnail1 from '../../assets/thumbnail1.png';
import thumbnail2 from '../../assets/thumbnail2.png';
import thumbnail3 from '../../assets/thumbnail3.png';
import thumbnail4 from '../../assets/thumbnail4.png';
import thumbnail5 from '../../assets/thumbnail5.png';
import thumbnail6 from '../../assets/thumbnail6.png';
import thumbnail7 from '../../assets/thumbnail7.png';
import thumbnail8 from '../../assets/thumbnail8.png';
import { Link } from 'react-router-dom';
import { API_KEY } from '../../data';
import { value_converter } from '../../data';

interface FeedProps {
  category: number;
}

interface VideoItem {
  id: string;
  snippet: {
    title: string;
    channelTitle: string;
    thumbnails: {
      default: {
        url: string;
      };
    };
    publishedAt: string;
  };
  statistics: {
    viewCount: string;
  };
}

const Feed: React.FC<FeedProps> = ({ category }) => {
  const [data, setData] = useState<VideoItem[]>([]);

  const fetchData = async () => {
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    const response = await fetch(videoList_url);
    const result = await response.json();
    setData(result.items);
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  const cards = [
    { img: thumbnail1, title: 'Best channel for car reviews', channel: 'TheStraightPipes', views: '60k views', time: '2 days ago', link: 'video/20/4521' },
    // Add other card objects here
  ];

  return (
    <div className="feed">
      {data.map((item, index) => (
        <Link to={`video/${item.id}`} key={index} className="card">
          <img src={item.snippet.thumbnails.default.url} alt={item.snippet.title} />
          <h2>{item.snippet.title}</h2>
          <h3>{item.snippet.channelTitle}</h3>
          <p>{item.statistics.viewCount} views &bull; {new Date(item.snippet.publishedAt).toLocaleDateString()}</p>
        </Link>
      ))}
      {cards.map((card, index) => {
        // Extract numerical value from the view count string
        const viewsNumber = parseInt(card.views.replace(/[^0-9]/g, ''));

        return (
          <Link to={card.link} key={index + data.length} className="card">
            <img src={card.img} alt={card.title} />
            <h2>{card.title}</h2>
            <h3>{card.channel}</h3>
            {/* Pass the numerical value to the value_converter function */}
            <p>{value_converter(viewsNumber)} views &bull; {card.time}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default Feed;
