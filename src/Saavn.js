import './Saavn.css';
import {useRef, useState} from 'react'
import { TfiClose } from 'react-icons/tfi';
import { TbGripVertical } from 'react-icons/tb';
import { IoHeartOutline, IoHeartSharp, IoEllipsisHorizontal, IoPlayCircleOutline } from "react-icons/io5";
import { ImLoop } from 'react-icons/im';
import { RiPlayMiniFill, RiAlbumFill, RiPauseMiniFill } from 'react-icons/ri';
import { MdSkipPrevious, MdSkipNext } from 'react-icons/md';
import { FiChevronRight, FiRadio, FiShare } from 'react-icons/fi';
import { TbPlaylist, TbMicrophone2,TbArrowsShuffle } from 'react-icons/tb';
import { AiOutlineHeart } from 'react-icons/ai'
import { CgMusicNote } from 'react-icons/cg'
import { Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import './Swiper.css';

import audio0 from './Audio/Hozier and Bear McCreary - Blood Upon the Snow.mp3';
import audio1 from './Audio/Rihanna - Born Again.mp3';
import audio2 from './Audio/Taylor Swift - Anti-Hero.mp3';
import audio3 from './Audio/Louis Tomlinson - Silver Tongues.mp3';





function Saavn() {

  const [like, setLike] = useState(false);
  const [playing,setPlaying] = useState(false);
  const audio = useRef();
  const loadedBar = useRef(); 
  const loopButton = useRef();
  const imgSwiper = useRef();
  const slideImg = useRef();
  const mainSongTitle = useRef();
  const mainSongInfo = useRef();
  const currentSongTitle = useRef();
  const currentSongInfo = useRef();
  const optionImg = useRef();
  const optionSongTitle = useRef();
  const optionSongInfo = useRef();
  const popupOption = useRef();
  const optionContent = useRef();
  const autoplayButtonDiv = useRef();
  const autoplayButton = useRef();
  const autoplaySec = useRef();
  const moreFrom = useRef();
  const secondArtistMoreFrom = useRef();

  let currentAudio = 0;
  let autoplay = true;
  const info = [
    {
      image: "https://c.saavncdn.com/485/God-of-War-Ragnar-k-Original-Soundtrack-Unknown-2022-20221024114609-500x500.jpg",
      audio: audio0, title: "Blood Upon the Snow", singer: "Hozier, Bear McCreary"
    },
    {
      image: "https://snoidcdnems02.cdnsrv.jio.com/c.saavncdn.com/847/Black-Panther-Wakanda-Forever-Music-From-and-Inspired-By-English-2022-20221110054336-500x500.jpg",
      audio: audio1, title: "Born Again", singer: "Rihanna" 
    },
    {
      image: "https://snoidcdnems07.cdnsrv.jio.com/c.saavncdn.com/793/Midnights-English-2022-20221021103611-500x500.jpg",
      audio: audio2, title: "Anti-Hero", singer: "Taylor Swift" 
    },
    {
      image: "https://snoidcdnems06.cdnsrv.jio.com/c.saavncdn.com/655/Faith-In-The-Future-Deluxe-English-2022-20221108162905-500x500.jpg",
      audio: audio3, title: "Silver Tongues", singer: "Louis Tomlinson"
    },
  ];

  


  const playPause = () => {
    if(playing){
      audio.current.pause();
      setPlaying(false)
    }else{
      audio.current.play();
      setPlaying(true)
    
      setInterval(() => {
        var currentTime = audio.current.currentTime;
        var duration = audio.current.duration;
        loadedBar.current.style.width = (currentTime +.25)/duration*100 + '%';
      }, 1000)
    }

    audio.current.onended = function() {
      skipNext();
    };
  }

  const skipNext = () => {
    if(currentAudio === info.length - 1) {
      currentAudio = 0;
      audio.current.src = info[currentAudio].audio;
      audio.current.play();
      setPlaying(true)
      slideImg.current.src = info[currentAudio].image;

      mainSongTitle.current.innerHTML = info[currentAudio].title;
      mainSongInfo.current.innerHTML = info[currentAudio].singer;
      currentSongInfo.current.innerHTML = info[currentAudio].title;
      currentSongTitle.current.innerHTML = info[currentAudio].singer;
      optionImg.current.src = info[currentAudio].image;
      optionSongTitle.current.innerHTML = info[currentAudio].title;
      optionSongInfo.current.innerHTML = info[currentAudio].singer;
      moreFrom.current.innerHTML = info[currentAudio].singer;
    } else {
      currentAudio++;
      audio.current.src = info[currentAudio].audio;
      audio.current.play();
      setPlaying(true)
      slideImg.current.src = info[currentAudio].image;

      mainSongTitle.current.innerHTML = info[currentAudio].title;
      mainSongInfo.current.innerHTML = info[currentAudio].singer;
      currentSongTitle.current.innerHTML = info[currentAudio].title;
      currentSongInfo.current.innerHTML = info[currentAudio].singer;
      optionImg.current.src = info[currentAudio].image;
      optionSongTitle.current.innerHTML = info[currentAudio].title;
      optionSongInfo.current.innerHTML = info[currentAudio].singer;
      moreFrom.current.innerHTML = info[currentAudio].singer;
    }
    imgSwiper.current.swiper.slideNext();
    secondArtistMoreFrom.current.style.display = 'none';
  }

  const skipPrevious = () => {
    slideImg.current.src = info[currentAudio].image;
    if(currentAudio === 0) {
      currentAudio = info.length - 1;
      audio.current.src = info[currentAudio].audio;
      audio.current.play();
      setPlaying(true)
      slideImg.current.src = info[currentAudio].image;

      mainSongTitle.current.innerHTML = info[currentAudio].title;
      mainSongInfo.current.innerHTML = info[currentAudio].singer;
      currentSongInfo.current.innerHTML = info[currentAudio].singer;
      currentSongTitle.current.innerHTML = info[currentAudio].title;
      optionImg.current.src = info[currentAudio].image;
      optionSongTitle.current.innerHTML = info[currentAudio].title;
      optionSongInfo.current.innerHTML = info[currentAudio].singer;
      moreFrom.current.innerHTML = info[currentAudio].singer;
    } else {
      currentAudio--;
      audio.current.src = info[currentAudio].audio;
      audio.current.play();
      setPlaying(true)
      slideImg.current.src = info[currentAudio].image;

      mainSongTitle.current.innerHTML = info[currentAudio].title;
      mainSongInfo.current.innerHTML = info[currentAudio].singer;
      currentSongInfo.current.innerHTML = info[currentAudio].singer;
      currentSongTitle.current.innerHTML = info[currentAudio].title;
      optionImg.current.src = info[currentAudio].image;
      optionSongTitle.current.innerHTML = info[currentAudio].title;
      optionSongInfo.current.innerHTML = info[currentAudio].singer;
      moreFrom.current.innerHTML = info[currentAudio].singer;
    }
    secondArtistMoreFrom.current.style.display = 'none';
  }
  
  function suffle() {
    var random = Math.floor(Math.random() * info.length);
    currentAudio = random;
    audio.current.src = info[currentAudio].audio;
    audio.current.play();
    setPlaying(true)

    slideImg.current.src = info[currentAudio].image;
    imgSwiper.current.swiper.slideNext();

    mainSongTitle.current.innerHTML = info[currentAudio].title;
    mainSongInfo.current.innerHTML = info[currentAudio].singer;
    currentSongInfo.current.innerHTML = info[currentAudio].singer;
    currentSongTitle.current.innerHTML = info[currentAudio].title;
    optionImg.current.src = info[currentAudio].image;
    optionSongTitle.current.innerHTML = info[currentAudio].title;
    optionSongInfo.current.innerHTML = info[currentAudio].singer;
    moreFrom.current.innerHTML = info[currentAudio].singer;
  }

  function replay() {
    if(audio.current.loop){
      audio.current.loop = false;
      loopButton.current.style.color = 'black';
    } else {
      audio.current.loop = true;
      loopButton.current.style.color = '#2bc5b4';
    }
  }

  function main_menu_button_clicked() {
    popupOption.current.style.display = "block";
    setTimeout(()=>{
      optionContent.current.classList.add('show');
    },1)

  }

  function cancel_button_clicked() {
    optionContent.current.classList.remove('show');
    setTimeout(()=>{
      popupOption.current.style.display = "none";
    },1)
  }

  function autoplayToggle() {
    if(autoplay){
      autoplayButtonDiv.current.style.backgroundColor = '#ffff';
      autoplayButton.current.style.backgroundColor = '#e9e9e9';
      autoplayButtonDiv.current.style.justifyContent = 'left';
      autoplaySec.current.style.display = 'none';
      autoplay = false;
    } else {
      autoplayButtonDiv.current.style.backgroundColor = '#2bc5b4';
      autoplayButton.current.style.backgroundColor = '#ffff';
      autoplayButtonDiv.current.style.justifyContent = 'right';
      autoplaySec.current.style.display = 'block';
      autoplay = true;
    }
  }





  return (
    <div className="App">
      <header className="App-header">
        <div id='head_section'>
          
          <div id='header_button_div'>
            <a href='https://www.jiosaavn.com/'>
              <TfiClose size='22px'/>
            </a>
          </div>

          <div id='header_image_div'>
            <a href='https://www.jiosaavn.com/'>
              <img alt='header_logo_img' id='header_logo_img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/JioSaavn_Logo.svg/1280px-JioSaavn_Logo.svg.png'>
              </img>
            </a>
          </div>

        </div>
      </header>

      <div id='body_content_div'>

        <div id='player_img_div'>
          <Swiper
            id='player_img'
            modules={[ Scrollbar ]}
            slidesPerView={1}
            loop={true}
            // onSlideNextTransitionStart={() => skipNext()}
            // onSlidePrevTransitionStart={() => skipPrevious()}
            ref={imgSwiper}
            >
              <SwiperSlide className='MyDemoSlider'>
                <img ref={slideImg} alt='slide_img' src='https://c.saavncdn.com/485/God-of-War-Ragnar-k-Original-Soundtrack-Unknown-2022-20221024114609-500x500.jpg'></img>
              </SwiperSlide>
          </Swiper>

        </div>

        <div id='option_div'>
          {like ? <IoHeartSharp onClick={() => setLike(!like)} id='like_button' size='30px' color='crimson'/> : <IoHeartOutline onClick={() => setLike(!like)} id='unlike_button' size='30px' color='rgb(90, 90, 90)'/>}

          <div id='song_info_div'>
            <p1 ref={mainSongTitle} id="song_title"> Blood Upon The Snow </p1>
            <div>
              <p1 ref={mainSongInfo} className="song_info"> Hozier, Bear McCreary </p1>
            </div>
          </div>

          <IoEllipsisHorizontal onClick={main_menu_button_clicked} size='28px' />
        </div>
      </div>

      <hr></hr>

      <div id='current_playlist_card'>
        <div className='play_pause_div'>
          <IoPlayCircleOutline size='40px'/>
        </div>

        <div className='current_song_info_div'>
          <p1 ref={currentSongTitle} id="current_song_title"> Blood Upon The Snow </p1>
          <div>
            <p1 ref={currentSongInfo} className="song_info"> Hozier, Bear McCreary </p1>
          </div>
        </div>

        <IoEllipsisHorizontal onClick={main_menu_button_clicked} size='28px' color='rgb(100, 100, 100)'/>
      </div>

      <div id='upcoming_playlist'>

        <div className='playlist_card'>
          <div className='toggle_button_div'>
            <TbGripVertical  size='20px' color='rgb(180, 180, 180)'/>
          </div>

          <img alt='playlist_image' className='play_pause_div' src='https://c.saavncdn.com/485/God-of-War-Ragnar-k-Original-Soundtrack-Unknown-2022-20221024114609-500x500.jpg'></img>

          <div className='current_song_info_div'>
            <p1 className="playlist_song_title"> Blood Upon The Snow </p1>
            <div>
              <p1 className="song_info"> Hozier, Bear McCreary </p1>
            </div>
          </div>

          <IoEllipsisHorizontal onClick={main_menu_button_clicked} size='28px' color='rgb(100, 100, 100)'/>
        </div>
        
        <div className='playlist_card'>
          <div className='toggle_button_div'>
            <TbGripVertical  size='20px' color='rgb(180, 180, 180)'/>
          </div>

          <img alt='playlist_image' className='play_pause_div' src='https://c.saavncdn.com/847/Black-Panther-Wakanda-Forever-Music-From-and-Inspired-By-English-2022-20221110054336-150x150.jpg'></img>

          <div className='current_song_info_div'>
            <p1 className="playlist_song_title"> Born Again </p1>
            <div>
              <p1 className="song_info"> Rihana </p1>
            </div>
          </div>

          <IoEllipsisHorizontal onClick={main_menu_button_clicked} size='28px' color='rgb(100, 100, 100)'/>
        </div>

        <div className='playlist_card'>
          <div className='toggle_button_div'>
            <TbGripVertical  size='20px' color='rgb(180, 180, 180)'/>
          </div>

          <img alt='playlist_image' className='play_pause_div' src='https://c.saavncdn.com/793/Midnights-English-2022-20221021103611-150x150.jpg'></img>

          <div className='current_song_info_div'>
            <p1 className="playlist_song_title"> Anti-Hero </p1>
            <div>
              <p1 className="song_info"> Taylor Swift </p1>
            </div>
          </div>

          <IoEllipsisHorizontal onClick={main_menu_button_clicked} size='28px' color='rgb(100, 100, 100)'/>
        </div>

        <div className='playlist_card'>
          <div className='toggle_button_div'>
            <TbGripVertical  size='20px' color='rgb(180, 180, 180)'/>
          </div>

          <img alt='playlist_image' className='play_pause_div' src='https://c.saavncdn.com/655/Faith-In-The-Future-Deluxe-English-2022-20221108162905-150x150.jpg'></img>

          <div className='current_song_info_div'>
            <p1 className="playlist_song_title"> Silver Tongues </p1>
            <div>
              <p1 className="song_info"> Louis Tomlinson </p1>
            </div>
          </div>

          <IoEllipsisHorizontal onClick={main_menu_button_clicked} size='28px' color='rgb(100, 100, 100)'/>
        </div>

        <div id='autoplay_div'>
          
          <div id='autoplay_text_div'>
            <p1> Autoplay more like this </p1>
          </div>
        
          <div onClick={autoplayToggle} ref={autoplayButtonDiv} id='autoplay_button_div'>
            <div ref={autoplayButton} id='autoplay_botton'>

            </div>
          </div>

        </div>

        <div ref={autoplaySec} id='autoplay_sec'>
          <div className='playlist_card'>

            <img alt='playlist_image' className='play_pause_div' src='https://c.saavncdn.com/655/Faith-In-The-Future-Deluxe-English-2022-20221108162905-150x150.jpg'></img>

            <div className='current_song_info_div'>
              <p1 className="playlist_song_title"> Silver Tongues </p1>
              <div>
                <p1 className="song_info"> Louis Tomlinson </p1>
              </div>
            </div>

            <IoEllipsisHorizontal size='28px' color='rgb(100, 100, 100)'/>

          </div>

          <div className='playlist_card'>

            <img alt='playlist_image' className='play_pause_div' src='https://snoidcdnems07.cdnsrv.jio.com/c.saavncdn.com/235/So-Far-So-Good-English-2022-20220804064007-150x150.jpg'></img>

            <div className='current_song_info_div'>
              <p1 className="playlist_song_title"> High </p1>
              <div>
                <p1 className="song_info"> The Chainsmokers </p1>
              </div>
            </div>

            <IoEllipsisHorizontal size='28px' color='rgb(100, 100, 100)'/>

          </div>

          <div className='playlist_card'>

            <img alt='playlist_image' className='play_pause_div' src='https://snoidcdnems06.cdnsrv.jio.com/c.saavncdn.com/000/Until-I-Found-You-English-2021-20210901105938-500x500.jpg'></img>

            <div className='current_song_info_div'>
              <p1 className="playlist_song_title"> Until I Found You </p1>
              <div>
                <p1 className="song_info"> Stephen Sanchez </p1>
              </div>
            </div>

            <IoEllipsisHorizontal size='28px' color='rgb(100, 100, 100)'/>

          </div>
          
        </div>

      </div>

      <footer>
        <div id='loading_div'>
          <div id='loading_line'>
            <div ref={loadedBar} id='loaded_line' ></div>
          </div>
        </div>


        <div id='operation_div'>
          <div ref={loopButton} id='loop_button_div'>
            <ImLoop onClick={() => {replay()}} size='22px'/>
          </div>
          
          <MdSkipPrevious onClick={() => {skipPrevious()}} size='40px'/>
          {playing ? <RiPauseMiniFill onClick={() => {playPause()}} size='40px'/> : <RiPlayMiniFill onClick={() => {playPause()}} size='40px'/>}
          <MdSkipNext onClick={() => {skipNext()}} size='40px'/>

          <audio id="audioPlayer" controls src={info[currentAudio].audio} ref={audio}></audio>

          <div id='suffle_button_div'>
            <TbArrowsShuffle onClick={() => {suffle()}}  size='29px'/>
          </div>
        </div>
      </footer>

      <div ref={popupOption} id='popup_option_div'>
        <div id="inner_popup_option_div">

        <div onClick={cancel_button_clicked} id='free_inner_space_popup_option_div'>

        </div>

          <div ref={optionContent} id='option_content_div'>

            <div id='option_info_div' onClick={cancel_button_clicked}>
              <div id='option_img_div'>
                <img alt='' id='option_img' ref={optionImg} src='https://c.saavncdn.com/485/God-of-War-Ragnar-k-Original-Soundtrack-Unknown-2022-20221024114609-500x500.jpg'></img>
              </div>

              <div id='option_song_info_div'>
                <div>
                  <p1 ref={optionSongTitle} id="option_song_title"> Blood Upon The Snow </p1>
                </div>
                <div>
                  <p1 ref={optionSongInfo} id="option_song_info"> Hozier, Bear McCreary </p1>
                </div>
              </div>
            </div>

            <hr></hr>

              <div id='popup_option_content_div'>

                <div className='popup_upper_option_content_div'>
                  <AiOutlineHeart size='25px'/>
                  <p1 className='upper_option_content_name'> Save to Library </p1>
                </div>

                <div className='popup_upper_option_content_div'>
                  <TbPlaylist size='25px'/>
                  <p1 className='upper_option_content_name'> Add to Playlist </p1>
                </div>

                <div className='popup_upper_option_content_div'>
                  <FiRadio size='25px'/>
                  <p1 className='upper_option_content_name'> Play Radio </p1>
                </div>
                
                <div className='popup_upper_option_content_div'>
                  <FiShare size='25px'/>
                  <p1 className='upper_option_content_name'> Share </p1>
                  <div id="share_arrow_icon">
                    <FiChevronRight size='30px' color='rgb(157 157 157)'/>
                  </div>
                </div>

                <hr></hr>

                <div className='popup_lower_option_content_div'>
                  <CgMusicNote size='22px'/>
                  <p1 className='lower_option_content_name'> Song Details & Lyrics</p1>
                </div>

                <div className='popup_lower_option_content_div'>
                  <RiAlbumFill size='22px'/>
                  <p1 className='lower_option_content_name'> More From Album </p1>
                </div>

                <div className='popup_lower_option_content_div'>
                  <TbMicrophone2 size='22px'/>
                  <p1 className='lower_option_content_name'> More From <p1 ref={moreFrom}> Hozier </p1> </p1>
                </div>
                
                <div ref={secondArtistMoreFrom} className='popup_lower_option_content_div'>
                  <TbMicrophone2 size='22px'/>
                  <p1 className='lower_option_content_name'> More From Bear McCreary </p1>
                </div>
                
              </div>

            <hr></hr>

            <div onClick={cancel_button_clicked} id='cancel_button_div'>
              <p1> Cancel </p1>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Saavn;
