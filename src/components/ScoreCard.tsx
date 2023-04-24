import Star from "./svg/Star";
import React from "react";
import AMButton from "./AFButton";
import ReplayIcon from "./svg/ReplayIcon";
import useData from "../hooks/useData";
import useLevel from '../hooks/useLevel';

export default function ScoreCard() {
  console.log('rendering ScoreCard');
  const {displayScore, nextLevel, resetLevel, setDisplayScore, setShowTutorial, currentScore, level: levelIndex} = useData();
  const level = useLevel(levelIndex);
  if (!level) return null;
  const {starScores} = level;
  const [score1, score2, score3] = starScores;
  const width = 894;
  const height = 588;

  if (!displayScore) return null;

  return (
  <div className={'modal'}>
    {/* Background Paper */}
    <div style={{ position: 'absolute', top: '50%', right: '50%', transform: 'translate(50%,-50%)'}}>
      <svg width="894" height="588" viewBox="0 0 894 588" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.49814 11.6981L437.785 1.73719L670.601 7.20343L782.633 9.8338L831.748 9.39189L866.154 5.94615L876.923 15.7695L885.789 233.972L889.765 473.858L883.582 529.541L876.49 585.734L505.938 579.065L321.122 576.94L146.817 576.94C146.817 576.94 47.8402 582.101 44.2235 578.422C33.5229 567.537 36.1483 485.187 36.1483 485.187L29.8519 405.285L20.7886 341.269L1.49814 11.6981Z" fill="#F9F9F9"/>
        <path d="M834.544 6.79935C777.416 9.1799 834.476 7.86115 691.027 6.09243C516.622 -0.548901 471.253 -0.850166 331.481 2.99844C262.87 4.69803 161.463 6.64622 105.539 7.11575C49.6141 7.58528 2.46924 8.77027 1.14544 9.7578C-0.581762 10.4812 0.598738 51.2534 3.79402 99.9671C6.56967 148.671 10.6763 222.617 12.6637 263.917C15.0868 304.973 19.4923 354.479 22.9075 373.404C28.9961 409.707 34.765 483.947 34.9233 540.738C35.1694 576.395 39.6858 584.65 57.505 582.013C62.1697 581.358 90.584 581.971 120.54 580.128C180.102 578.366 208.431 574.606 525.689 581.8C765.735 587.182 877.002 588.776 878.794 587.035C884.574 582.078 894.312 468.986 893.264 419.559C892.902 392.302 889.994 306.161 886.55 228.411C883.526 150.671 881.084 70.3981 880.703 50.017C880.816 2.14489 879.528 -0.0387179 834.544 6.79935ZM871.033 10.5734C875.874 13.7429 877.147 20.1391 876.076 36.9211C875.313 48.8718 876.299 92.6952 878.286 133.996C887.979 344.312 889.677 429.66 884.605 489.385C879.45 557.001 877.166 579.612 875.664 583.396C875.131 585.167 754.212 583.346 525.061 578.475C238 572.245 165.872 574.57 125.796 576.94C99.2289 578.353 72.5167 577.272 64.8822 578.366C45.3844 580.964 38.9786 575.975 40.1144 558.176C42.094 527.155 35.2698 423.351 28.4416 378.881C24.2219 352.808 19.3665 297.179 17.4279 255.116C15.0696 213.043 11.2365 141.396 8.66959 96.0071C5.683 50.6088 3.4523 13.1224 3.46852 12.8682C3.54965 11.5968 48.9997 10.6267 140.255 9.71342C186.511 9.27156 266.904 7.33928 319.134 5.50972C401.69 2.60963 441.184 2.77293 623.724 7.05874C768.513 10.2036 837.381 11.0566 846.323 9.22929C863.772 5.81916 863.772 5.81912 871.033 10.5734Z" fill="black"/>
        <path d="M24.6681 129.377C24.3111 134.971 33.6923 218.463 36.9939 239.167C37.8634 245.299 39.6695 249.926 40.5574 249.182C43.1563 247.97 29.4463 126.943 26.6225 125.094C25.8157 124.566 24.8628 126.326 24.6681 129.377Z" fill="black"/>
        <path d="M845.908 35.4766C844.128 50.2047 851.29 109.198 854.921 111.575C857.728 113.678 857.955 110.118 853.093 74.3526C850.872 56.4747 848.732 37.3255 848.25 31.7118C847.51 23.5456 847.042 24.2985 845.908 35.4766Z" fill="black"/>
        <path d="M866.338 437.787C864.665 470.598 863.909 508.778 864.695 522.803C865.481 536.827 867.589 510.393 869.267 464.34C870.961 418.033 872.136 379.862 871.329 379.334C870.522 378.806 868.431 404.986 866.338 437.787Z" fill="black"/>
        <path d="M54.6936 448.254C53.4397 481.075 53.7345 515.969 54.7802 525.925C55.8259 535.881 57.4463 517.075 58.2968 483.99C59.5507 451.169 59.6918 416.03 58.2102 406.319C57.1645 396.363 55.5279 415.423 54.6936 448.254Z" fill="black"/>
        <path d="M868.434 538.792C867.769 549.218 868.332 553.56 869.512 548.24C870.676 543.174 871.228 534.529 870.729 529.169C870.215 524.064 869.1 528.367 868.434 538.792Z" fill="black"/>
        <path d="M54.3239 549.625C54.0968 553.185 55.4183 558.818 56.8697 562.417C59.8373 568.599 59.8373 568.599 60.3079 561.225C60.5837 556.902 59.6818 551.279 57.7621 548.432C54.6971 543.777 54.2775 543.767 54.3239 549.625Z" fill="black"/>
      </svg>
    </div>
    <div style={{ height: height, width: width, position: 'absolute', top: '50%', right: '50%', transform: 'translate(50%,-50%)', display:'flex', justifyContent:'center', alignItems:'flex-start', padding: 60 }}>
      {/* Score part */}
      <div style={{ justifyContent:'space-between', display: 'flex', flexDirection: 'column', height: '100%' }}>
        <p style={{ fontSize: 70, fontFamily: 'Sofija', textAlign:'center' }}>Din Score: {Math.round(currentScore)}</p>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10}}>
          <Star className={'star1'} selected={currentScore >= score1} size={100} score={score1} index={0}/>
          <Star className={'star2'} selected={currentScore >= score2} size={100} score={score2} index={1}/>
          <Star className={'star3'} selected={currentScore >= score3} size={100} score={score3} index={2}/>
        </div>
        <div style={{display:'flex', gap: 32}}>
          <AMButton
            title={'Prøv igjen'}
            color={'#D9E1FF'}
            onClick={() => {
              setDisplayScore(false);
              resetLevel();
            }}
            icon={<ReplayIcon size={43}/>}
          />
          <AMButton
            title={'Neste'}
            color={'#B8FF8C'}
            onClick={() => {
              setDisplayScore(false);
              nextLevel();
              setShowTutorial(true);
            }}
          />
        </div>
      </div>
    </div>
  </div>
)};
