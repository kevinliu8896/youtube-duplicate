import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo = () => {
  return (
    <div className='play-video'>
        <video src={video1} controls autoPlay></video>
        <h3>Dancing by The Lake</h3>
        <div className="play-video-info">
            <p>1525 Views &bull; 2 days ago</p>
            <div>
                <span><img src={like} alt="" /> 125</span>
                <span><img src={dislike} alt="" /> 1</span>
                <span><img src={share} alt="" /> Share</span>
                <span><img src={save} alt="" /> Save</span>
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={jack} alt="" />
            <div>
                <p>Mr Beast</p>
                <span>10M Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="vid-description">
            <p>Finding some peace by the lake</p>
            <p>Subscribe to Mr.Beast for more!</p>
            <hr />
            <h4>230 Comments</h4>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Jack King <span>1 day ago</span></h3>
                    <p>Nice video!</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Jack King <span>1 day ago</span></h3>
                    <p>Nice video!</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Jack King <span>1 day ago</span></h3>
                    <p>Nice video!</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Jack King <span>1 day ago</span></h3>
                    <p>Nice video!</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Jack King <span>1 day ago</span></h3>
                    <p>Nice video!</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Jack King <span>1 day ago</span></h3>
                    <p>Nice video!</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Jack King <span>1 day ago</span></h3>
                    <p>Nice video!</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlayVideo