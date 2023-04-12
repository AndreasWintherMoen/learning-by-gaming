import { useMemo } from 'react';
import useData from "../hooks/useData";
import { loadAllLevelData } from '../utils/dataStorage';
import BackgroundPaperSvg from './svg/BackgroundPaper';
import CloseButtonSvg from './svg/CloseButton';
import { LevelScore } from '../types';
import levelScoreToNumber from '../utils/levelScoreToNumber';

export default function LevelsModal() {
  const {showLevels, setShowLevels, setLevel} = useData();
  const allLevels = useMemo(loadAllLevelData, [showLevels]);
  const collectedStars = useMemo(() => allLevels.reduce<number>((acc, level) => acc + levelScoreToNumber(level), 0), [allLevels]);
  const maxStars = useMemo(() => allLevels.length * 3, [allLevels]);

  if (!showLevels) return null;

  function handleClose() {
    setShowLevels(false);
  }

  function handleLevelSelect(level: number) {
    setLevel(level + 1);
    handleClose();
  }

  return (
    <div className={'modal'}>
      <div style={{ position: 'absolute', width: 700, height:700, top: '50%', right: '50%', transform: 'translate(50%,-50%)', display:'flex', justifyContent:'center', alignItems:'center', paddingTop: 60, paddingRight: 40, paddingLeft: 50, paddingBottom: 15}}>
        {/* Background Paper */}
        <div style={{ position: 'absolute', width: '100%', height:'100%', top: 0, right: 0,}}>
          <BackgroundPaperSvg />
        </div>
        {/* Close Button */}
        <div style={{position: 'absolute', top: 20, left: 35, height: 50, display:'flex', flexDirection: 'row'}}>
          <div className={'button'} onClick={handleClose} style={{width: 50, height: 50}}>
            <CloseButtonSvg />
          </div>
        </div>
        {/* Stars */}
        <div style={{position: 'absolute', top: 25, right: 80,width: 70, height: 40, display:'flex', flexDirection: 'row'}}>
          <p style={{alignSelf:'center', marginRight: 10}}>{`${collectedStars}/${maxStars}`}</p>
          <svg  viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.2154 15.6135C14.2154 15.6135 18.6938 2.05016 20.7413 1.01931C21.9175 0.427118 29.8971 13.6524 29.8971 13.6524C29.8971 13.6524 47.2546 12.0835 47.7217 13.6524C48.3055 15.6135 35.4003 25.7383 35.4003 25.7383C35.4003 25.7383 40.9495 44.2214 39.9295 44.7564C37.2131 46.1812 23.9069 33.8107 23.9069 33.8107C23.9069 33.8107 4.89629 46.7119 3.50116 46.9911C1.01737 47.4883 9.63749 26.8785 9.63749 26.8785C9.63749 26.8785 0.550296 20.5806 1.01741 19.1709C1.43895 17.8987 14.2154 15.6135 14.2154 15.6135Z" fill="#FAFC8C" stroke="#3D3D3D" strokeWidth="2"/>
          </svg>
        </div>
        {/* Info part */}
        <div style={{width: '90%'}} className={'modalInfoContainer'}>
          {/* Title */}
          <h3 className={'headerText noselect noselecttext'}>Levels</h3>
          {/* Description */}
          <div style={{display:'flex', flexWrap:'wrap', alignSelf:'center'}}>
            {allLevels.map((score, index) => (
              <LevelCard level={index} score={score} onClick={handleLevelSelect} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )};

type LevelCardProps = {
  level: number;
  score: LevelScore;
  onClick: (level: number) => void;
}

function LevelCard({ level, score, onClick }: LevelCardProps) {
  if (score === "locked") {
    return <LockedLevel />;
  }

  return (
    <div className={'button'} style={{width: 100, height: 100, display:'flex', justifyContent:'center', position:'relative'}} onClick={() => onClick(level)}>
      <svg viewBox="0 0 240 155" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.28031 6.9741L118.219 4.48691L176.353 5.85181L204.326 6.5086L216.59 6.39826L225.181 5.53787L227.87 7.99071L230.084 62.4749L231.077 122.374L229.533 136.277L227.762 150.309L135.237 148.643L89.0891 148.113L45.5658 148.113C45.5658 148.113 20.8517 149.401 19.9487 148.483C17.2768 145.765 17.9323 125.202 17.9323 125.202L16.3601 105.251L14.0971 89.2666L9.28031 6.9741Z" fill="#F0F0F0"/>
        <path d="M217.289 5.75122C203.024 6.34563 217.272 6.01635 181.453 5.57471C137.905 3.91639 126.577 3.84117 91.6762 4.80215C74.5443 5.22653 49.2234 5.71298 35.2592 5.83022C21.2951 5.94746 9.52319 6.24335 9.19265 6.48993C8.76137 6.67056 9.05614 16.8512 9.85398 29.0148C10.5471 41.176 11.5725 59.6399 12.0687 69.9525C12.6738 80.204 13.7738 92.5655 14.6266 97.2908C16.1468 106.356 17.5873 124.893 17.6268 139.074C17.6883 147.977 18.816 150.038 23.2654 149.38C24.4301 149.216 31.5251 149.369 39.005 148.909C53.8773 148.469 60.951 147.53 140.169 149.327C200.107 150.67 227.89 151.068 228.338 150.634C229.781 149.396 232.213 121.157 231.951 108.816C231.861 102.01 231.134 80.5007 230.275 61.0868C229.519 41.6754 228.91 21.6316 228.815 16.5425C228.843 4.58902 228.521 4.04378 217.289 5.75122ZM226.4 6.69358C227.609 7.48499 227.927 9.08211 227.659 13.2725C227.469 16.2566 227.715 27.1991 228.211 37.5116C230.631 90.0267 231.055 111.338 229.789 126.251C228.502 143.134 227.932 148.78 227.556 149.725C227.423 150.167 197.23 149.713 140.012 148.496C68.3343 146.941 50.3241 147.521 40.3173 148.113C33.6837 148.466 27.0138 148.196 25.1074 148.469C20.2389 149.118 18.6394 147.872 18.923 143.428C19.4173 135.682 17.7134 109.763 16.0084 98.6586C14.9547 92.1481 13.7424 78.2579 13.2583 67.7549C12.6695 57.2494 11.7124 39.3594 11.0714 28.026C10.3257 16.6903 9.76866 7.33007 9.77271 7.26658C9.79297 6.94913 21.1417 6.70689 43.9276 6.47885C55.4778 6.36852 75.5516 5.88603 88.593 5.4292C109.207 4.70506 119.068 4.74585 164.648 5.81599C200.801 6.60124 217.997 6.81422 220.23 6.35796C224.587 5.50647 224.587 5.50646 226.4 6.69358Z" fill="black"/>
        {
          score !== 'not played' && (
            <>
              <path fill={score > 0 ? "#FAFC8C":'#E2E2E2'} d="M63.8482 111.614C63.8482 111.614 68.3266 98.0502 70.3741 97.0193C71.5504 96.4271 79.5299 109.652 79.5299 109.652C79.5299 109.652 96.8874 108.083 97.3545 109.652C97.9384 111.614 85.0331 121.738 85.0331 121.738C85.0331 121.738 90.5823 140.221 89.5623 140.756C86.846 142.181 73.5397 129.811 73.5397 129.811C73.5397 129.811 54.5291 142.712 53.134 142.991C50.6502 143.488 59.2703 122.878 59.2703 122.878C59.2703 122.878 50.1831 116.581 50.6502 115.171C51.0718 113.899 63.8482 111.614 63.8482 111.614Z" stroke="#3D3D3D" strokeWidth="2"/>
              <path fill={score > 1 ? "#FAFC8C":'#E2E2E2'} d="M114.589 111.614C114.589 111.614 119.067 98.0502 121.115 97.0193C122.291 96.4271 130.271 109.652 130.271 109.652C130.271 109.652 147.628 108.083 148.095 109.652C148.679 111.614 135.774 121.738 135.774 121.738C135.774 121.738 141.323 140.221 140.303 140.756C137.587 142.181 124.28 129.811 124.28 129.811C124.28 129.811 105.27 142.712 103.875 142.991C101.391 143.488 110.011 122.878 110.011 122.878C110.011 122.878 100.924 116.581 101.391 115.171C101.812 113.899 114.589 111.614 114.589 111.614Z" stroke="#3D3D3D" strokeWidth="2"/>
              <path fill={score > 2 ? "#FAFC8C":'#E2E2E2'} d="M165.33 111.614C165.33 111.614 169.809 98.0502 171.856 97.0193C173.032 96.4271 181.012 109.652 181.012 109.652C181.012 109.652 198.369 108.083 198.836 109.652C199.42 111.614 186.515 121.738 186.515 121.738C186.515 121.738 192.064 140.221 191.044 140.756C188.328 142.181 175.022 129.811 175.022 129.811C175.022 129.811 156.011 142.712 154.616 142.991C152.132 143.488 160.752 122.878 160.752 122.878C160.752 122.878 151.665 116.581 152.132 115.171C152.554 113.899 165.33 111.614 165.33 111.614Z" stroke="#3D3D3D" strokeWidth="2"/>
            </>
          )
        }
      </svg>
      <p className={'noselect'} style={{fontSize:25, position:'absolute', left:'50%', top:'30%', transform:'translate(-50%)'}}>
        {level+1}
      </p>
    </div>
  )
}

function LockedLevel() {
  return (
    <div style={{width: 100, height: 100, display:'flex', justifyContent:'center', position:'relative'}}>
      <svg viewBox="0 0 239 155" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.2808 6.9741L118.22 4.48691L176.353 5.85181L204.327 6.5086L216.591 6.39826L225.182 5.53787L227.871 7.99071L230.085 62.4749L231.077 122.374L229.534 136.277L227.763 150.309L135.237 148.643L89.0896 148.113L45.5663 148.113C45.5663 148.113 20.8522 149.401 19.9492 148.483C17.2772 145.765 17.9328 125.202 17.9328 125.202L16.3606 105.251L14.0976 89.2666L9.2808 6.9741Z"
          fill="#CDCDCD"/>
        <path
          d="M217.289 5.75122C203.024 6.34563 217.272 6.01635 181.453 5.57471C137.905 3.91639 126.577 3.84117 91.6762 4.80215C74.5443 5.22653 49.2234 5.71298 35.2592 5.83022C21.2951 5.94746 9.52319 6.24335 9.19265 6.48993C8.76137 6.67056 9.05614 16.8512 9.85398 29.0148C10.5471 41.176 11.5725 59.6399 12.0687 69.9525C12.6738 80.204 13.7738 92.5655 14.6266 97.2908C16.1468 106.356 17.5873 124.893 17.6268 139.074C17.6883 147.977 18.816 150.038 23.2654 149.38C24.4301 149.216 31.5251 149.369 39.005 148.909C53.8773 148.469 60.951 147.53 140.169 149.327C200.107 150.67 227.89 151.068 228.338 150.634C229.781 149.396 232.213 121.157 231.951 108.816C231.861 102.01 231.134 80.5007 230.275 61.0868C229.519 41.6754 228.91 21.6316 228.815 16.5425C228.843 4.58902 228.521 4.04378 217.289 5.75122ZM226.4 6.69358C227.609 7.48499 227.927 9.08211 227.659 13.2725C227.469 16.2566 227.715 27.1991 228.211 37.5116C230.631 90.0267 231.055 111.338 229.789 126.251C228.502 143.134 227.932 148.78 227.556 149.725C227.423 150.167 197.23 149.713 140.012 148.496C68.3343 146.941 50.3241 147.521 40.3173 148.113C33.6837 148.466 27.0138 148.196 25.1074 148.469C20.2389 149.118 18.6394 147.872 18.923 143.428C19.4173 135.682 17.7134 109.763 16.0084 98.6586C14.9547 92.1481 13.7424 78.2579 13.2583 67.7549C12.6695 57.2494 11.7124 39.3594 11.0714 28.026C10.3257 16.6903 9.76866 7.33007 9.77271 7.26658C9.79297 6.94913 21.1417 6.70689 43.9276 6.47885C55.4778 6.36852 75.5516 5.88603 88.593 5.4292C109.207 4.70506 119.068 4.74585 164.648 5.81599C200.801 6.60124 217.997 6.81422 220.23 6.35796C224.587 5.50647 224.587 5.50646 226.4 6.69358Z"
          fill="black"/>
        <path
          d="M116.566 20.1056C113.685 20.3441 110.938 20.9546 108.486 21.918C103.268 23.969 99.4332 27.384 97.0675 32.0869C96.3616 33.4987 95.3886 36.0457 94.7208 38.2683C93.0228 43.8965 91.9831 50.2401 91.5729 57.385C91.4107 60.409 91.3535 65.6174 91.4775 66.8861C91.7637 69.891 91.7255 70.3966 91.115 70.7877C90.514 71.1693 88.6634 71.7512 87.0036 72.085C86.4503 72.1995 85.9829 72.3044 85.9542 72.314C85.9256 72.3331 85.6013 72.3807 85.2293 72.4094C83.7793 72.5429 83.2833 72.7909 83.0925 73.4873C82.8921 74.2123 82.9971 74.9373 83.6076 76.9501C84.2658 79.1155 84.5997 81.319 85.7539 91.259C86.1355 94.5309 86.6506 98.3657 86.8986 99.7489C87.0131 100.35 87.1562 101.227 87.242 101.685C87.7476 104.728 88.8923 108.868 89.9703 111.578C92.7939 118.675 97.554 123.75 104.022 126.602C105.901 127.422 108.972 128.376 111.701 128.977C118.998 130.58 127.212 130.895 134.929 129.845C137.886 129.445 140.071 128.958 141.988 128.3C149.629 125.648 154.885 118.923 156.717 109.479C157.709 104.356 157.995 97.6503 157.537 90.0761C157.098 82.9312 156.402 78.6862 155.038 74.8991C154.608 73.6876 153.569 71.5508 153.158 71.0071C152.987 70.7782 152.815 70.4824 152.786 70.3489C152.748 70.2153 152.586 69.9005 152.414 69.643C151.947 68.9657 151.489 68.7654 150.01 68.6127C149.343 68.5364 148.78 68.4696 148.761 68.441C148.742 68.4219 148.818 68.0213 148.932 67.5539C149.114 66.8003 149.133 66.4187 149.142 64.3105C149.142 61.277 148.904 59.6554 147.75 54.9239C147.492 53.846 146.977 51.6615 146.605 50.0684C145.994 47.3879 145.393 44.9172 145.06 43.658C144.974 43.3718 144.764 42.5705 144.583 41.8933C143.438 37.6674 141.788 33.6036 140.185 31.0853C137.667 27.1169 134.5 24.2647 130.522 22.3664C126.563 20.4871 121.679 19.6954 116.566 20.1056ZM122.48 24.6272C127.135 25.2663 130.503 26.7831 133.174 29.4445C136.989 33.2221 139.336 39.1078 142.188 52.0049C143.409 57.4995 143.829 60.1419 144.087 63.8813C144.22 65.9036 144.411 67.2963 144.611 67.9259L144.707 68.2025L143.867 68.1453C143.409 68.1072 142.15 68.0595 141.072 68.0213L139.098 67.9545L139.098 66.2756C139.098 64.3964 138.993 63.2326 138.64 60.9241C138.363 59.1689 137.695 55.6298 137.256 53.6742C135.463 45.5945 132.487 40.2811 127.784 36.7611C124.855 34.5576 121.583 33.451 118.016 33.451C113.551 33.451 110.117 35.3207 107.647 39.0792C106.187 41.2827 105.443 43.1524 104.212 47.5596C102.448 53.97 101.589 58.5393 101.293 63.1658C101.179 65.0164 101.227 67.5157 101.398 68.8894C101.446 69.2996 101.475 69.6525 101.465 69.6716C101.436 69.7002 95.4935 70.368 95.2741 70.368C95.1692 70.368 95.1787 67.3249 95.2932 64.2151C95.6175 55.563 96.5619 48.38 98.2504 41.6548C99.6717 35.9884 100.95 33.079 103.239 30.3317C105.987 27.0406 110.432 25.0183 116.136 24.4936C117.482 24.3696 121.164 24.4459 122.48 24.6272ZM119.666 37.9917C125.037 38.917 129.005 43.1429 131.447 50.5358C132.525 53.7983 133.45 58.6537 133.784 62.8319C133.87 63.8526 133.994 65.3408 134.07 66.123C134.147 66.9147 134.213 67.6493 134.213 67.7542C134.213 67.945 134.156 67.9545 132.143 67.9641C129.053 67.9927 124.75 68.1358 120.286 68.3647C119.313 68.4124 117.854 68.4792 117.043 68.5078C114.248 68.6127 109.593 68.9085 106.664 69.1756C104.623 69.3663 104.708 69.3663 104.775 69.0992C104.804 68.9752 104.89 67.4871 104.976 65.7796C105.052 64.0816 105.185 62.0402 105.262 61.258C105.844 55.5153 107.523 48.2273 109.068 44.6883C110.785 40.7867 113.093 38.5736 116.022 37.9917C116.947 37.8105 118.617 37.8105 119.666 37.9917ZM133.689 73.6113C139.641 73.7639 146.157 73.8975 147.778 73.8975L149.285 73.8975L149.343 74.1551C149.371 74.3077 149.667 75.4047 150.001 76.6162C151.241 81.071 151.489 82.2348 151.899 85.5449C152.309 88.7597 152.443 91.2494 152.5 96.3148C152.576 103.374 152.29 106.732 151.241 110.872C149.657 117.129 146.099 121.661 141.244 123.607C139.021 124.503 135.749 125.209 132.115 125.572C129.139 125.867 122.184 125.782 118.283 125.4C112.445 124.837 109.049 124.141 105.929 122.863C98.7369 119.934 93.9768 113.39 91.2008 102.611C90.4282 99.5963 89.9226 96.868 88.9973 90.7343C88.0529 84.4384 87.4424 81.0233 86.746 78.2379C86.4598 77.0741 86.0306 75.5764 85.897 75.2044C85.8589 75.1185 86.5171 75.0899 88.921 75.0899C91.4775 75.0804 92.4886 75.0422 94.8639 74.8228C98.5175 74.4985 103.144 74.2123 112.54 73.7544C119.056 73.4301 124.75 73.3919 133.689 73.6113Z"
          fill="#3D3D3D"/>
        <path
          d="M116.852 30.1602C112.053 30.8565 107.57 33.4226 104.937 36.9712C103.43 39.0126 102.438 41.4642 102.285 43.5247C102.228 44.2687 102.238 44.3069 102.438 44.3737C102.562 44.4118 102.676 44.4118 102.705 44.3927C102.734 44.3641 102.953 43.8299 103.211 43.2099C103.821 41.6741 104.346 40.6533 105.166 39.4132C107.198 36.3034 109.697 34.1094 112.654 32.8502C115.926 31.4575 119.275 31.2763 123.157 32.2779C124.016 32.4973 124.197 32.5164 124.331 32.4114C124.579 32.2111 124.512 31.9631 124.13 31.6387C123.596 31.1999 121.965 30.4368 121.144 30.2555C120.181 30.0361 118.016 29.9885 116.852 30.1602Z"
          fill="#3D3D3D"/>
        <path
          d="M134.071 41.3687C134.042 41.4164 134.29 42.0365 134.624 42.7233C135.234 43.9729 136.083 46.1002 136.513 47.4452C136.675 47.9508 136.78 48.1416 136.894 48.1416C137.142 48.1416 137.161 47.9604 136.961 47.2354C136.579 45.8236 135.912 44.1733 135.168 42.7519C134.433 41.3592 134.233 41.1112 134.071 41.3687Z"
          fill="#3D3D3D"/>
        <path
          d="M103.974 75.4234C102.782 75.4997 100.378 75.7859 99.9775 75.8908C99.7963 75.9481 99.7295 76.0244 99.7295 76.1961C99.7295 76.425 99.7486 76.425 100.922 76.5014C102.534 76.6158 109.708 76.6349 110.871 76.5395C111.596 76.4727 111.816 76.4155 111.883 76.2915C112.092 75.9099 111.768 75.7954 109.812 75.5665C108.315 75.3853 105.434 75.3185 103.974 75.4234Z"
          fill="#3D3D3D"/>
        <path
          d="M142.083 76.1961C139.546 76.3678 138.811 76.5586 138.373 77.1691C138.191 77.4171 138.191 77.4553 138.315 77.6938C138.401 77.8273 138.659 78.0658 138.888 78.2089C139.584 78.6381 140.404 78.7621 142.608 78.7621C145.317 78.7717 145.432 78.8289 146.128 80.67C146.662 82.0723 147.235 82.7305 148.036 82.8354C148.37 82.8831 148.456 82.8545 148.713 82.5969C148.98 82.3298 148.999 82.2631 148.999 81.6048C148.99 80.1072 148.322 78.1803 147.473 77.2168C147.225 76.9306 146.843 76.654 146.452 76.4536C145.842 76.1579 145.766 76.1388 144.573 76.1293C143.886 76.1198 142.77 76.1484 142.083 76.1961Z"
          fill="#3D3D3D"/>
        <path
          d="M123.863 78.9915C123.396 79.0582 122.852 79.1059 122.671 79.0868C122.489 79.0773 121.698 79.0392 120.906 79.001L119.475 78.9438L118.55 79.2681C117.329 79.6974 116.298 80.346 115.373 81.2809C114.19 82.4638 113.475 83.7229 113.017 85.3828C112.74 86.3844 112.673 88.5212 112.893 89.5037C113.198 90.906 113.694 91.9362 114.543 92.9569L114.972 93.4625L114.753 94.4832C114.639 95.046 114.41 96.1049 114.257 96.8394C114.104 97.5739 113.875 98.6042 113.751 99.1288C113.103 101.809 112.836 102.849 112.692 103.298C112.196 104.91 111.977 105.52 111.271 107.285C110.088 110.233 109.764 111.32 109.64 112.78C109.392 115.775 111.004 117.397 114.848 118.017C115.907 118.188 125.914 118.408 128.156 118.303C131.265 118.169 133.812 117.597 135.186 116.738C135.415 116.595 135.806 116.404 136.064 116.309C136.731 116.052 137.313 115.441 137.437 114.878C137.542 114.363 137.409 113.59 136.779 111.101C134.948 103.946 132.601 98.5756 129.567 94.5786L129.157 94.0444L129.672 93.224C130.292 92.232 130.703 91.2685 130.989 90.1429C131.17 89.4465 131.208 89.0363 131.208 87.7294C131.208 86.2985 131.18 86.0696 130.941 85.2111C130.312 82.9503 128.928 80.8993 127.192 79.6592C126.181 78.9438 125.37 78.7816 123.863 78.9915ZM123.186 81.5766C123.5 81.6625 123.92 81.8055 124.14 81.9009L124.531 82.0822L122.279 82.0917C120.381 82.1013 120 82.1203 119.904 82.2443C119.809 82.3588 119.809 82.4447 119.885 82.6259L120 82.8644L122.9 82.8644L125.799 82.8644L126.257 83.4081C126.811 84.0473 127.154 84.4956 127.154 84.5815C127.154 84.6196 126.906 84.6101 126.591 84.5719C126.286 84.5433 124.082 84.4288 121.688 84.3334L117.348 84.1617L117.529 83.8088C117.758 83.3509 118.674 82.3588 119.112 82.0917C119.294 81.9772 119.732 81.7865 120.076 81.6625C120.858 81.3954 122.327 81.3572 123.186 81.5766ZM119.341 86.2795C122.222 86.7469 123.997 86.8995 126.076 86.8518C127.86 86.8137 127.908 86.8137 127.955 87.0044C128.032 87.2715 128.022 87.8916 127.955 88.4449L127.889 88.8932L127.497 88.8455C126.83 88.7501 120.333 88.5403 118.454 88.5403L116.67 88.5498L116.604 88.1301C116.546 87.7199 116.623 86.3081 116.728 86.041C116.794 85.8693 116.794 85.8693 119.341 86.2795ZM118.426 90.4481C119.437 90.6007 126.162 91.0109 126.61 90.9442C126.753 90.9251 126.868 90.9346 126.868 90.9632C126.868 90.9919 126.648 91.278 126.391 91.5833C126.133 91.8981 125.895 92.2606 125.866 92.3941L125.819 92.6421L123.596 92.6421C122.384 92.6421 120.648 92.6803 119.752 92.7185L118.12 92.7948L118.054 92.4895C118.025 92.3178 117.806 91.7741 117.567 91.278C117.09 90.2764 117.061 90.1715 117.309 90.2478C117.395 90.2764 117.901 90.3718 118.426 90.4481ZM123.281 94.2543L126.238 94.302L126.648 95.4181C126.877 96.0286 127.049 96.5437 127.04 96.5532C127.02 96.5628 126.563 96.5342 126.009 96.496C122.842 96.248 120.572 96.124 119.465 96.124L118.216 96.124L118.254 95.1891C118.283 94.6836 118.311 94.2161 118.33 94.1684C118.349 94.1017 118.693 94.0921 119.341 94.1398C119.885 94.178 121.659 94.2352 123.281 94.2543ZM118.998 98.1654C120.152 98.3657 124.865 98.8045 126.62 98.8808L128.051 98.9381L128.413 99.8348L128.766 100.722L128.413 100.674C127.898 100.598 125.609 100.436 123.052 100.302C120.181 100.14 118.197 100.169 117.567 100.359C117.309 100.436 117.09 100.493 117.071 100.474C117.052 100.464 117.128 100.197 117.224 99.8824C117.329 99.5772 117.5 99.0048 117.615 98.6233C117.777 98.0605 117.844 97.9364 117.977 97.9746C118.063 98.0032 118.531 98.0891 118.998 98.1654ZM117.386 101.857C118.273 102.162 119.456 102.315 121.736 102.42C122.909 102.468 124.55 102.601 125.389 102.706C126.229 102.811 127.517 102.925 128.251 102.954L129.577 103.002L129.701 103.288C129.768 103.45 129.825 103.612 129.825 103.65C129.825 103.679 127.822 103.708 125.361 103.717C121.259 103.717 118.74 103.813 116.899 104.042C116.537 104.089 116.212 104.108 116.193 104.08C116.136 104.022 116.728 101.657 116.794 101.657C116.813 101.657 117.071 101.743 117.386 101.857ZM121.955 105.864C123.739 105.911 126.2 106.035 127.421 106.14C128.652 106.245 129.882 106.331 130.168 106.331L130.674 106.331L130.779 106.732C130.836 106.961 130.97 107.418 131.075 107.752C131.18 108.086 131.246 108.372 131.237 108.391C131.218 108.401 130.712 108.353 130.111 108.287C126.038 107.819 120.419 107.752 115.745 108.105L114.953 108.172L115.287 107.037C115.468 106.417 115.64 105.844 115.659 105.778C115.697 105.673 115.993 105.654 117.214 105.701C118.034 105.74 120.171 105.806 121.955 105.864ZM117.138 109.622C121.459 109.985 126.906 110.042 129.968 109.765C130.55 109.717 131.141 109.66 131.304 109.651L131.58 109.622L131.952 111.034C132.153 111.816 132.305 112.465 132.286 112.484C132.267 112.503 131.714 112.436 131.065 112.341C129.596 112.112 126.877 111.826 124.34 111.625C123.291 111.549 121.535 111.387 120.429 111.272C118.979 111.12 117.796 111.062 116.108 111.053C114.61 111.053 113.809 111.015 113.828 110.958C113.847 110.9 113.99 110.528 114.142 110.118L114.419 109.364L114.944 109.422C115.23 109.45 116.222 109.536 117.138 109.622ZM114.133 112.093C114.982 112.331 117.624 112.579 120.715 112.722C121.927 112.78 124.359 112.951 126.143 113.113C127.917 113.266 129.482 113.39 129.615 113.39C130.121 113.39 129.72 113.476 128.051 113.714C125.742 114.048 122.003 114.182 118.349 114.058C114.848 113.943 114.381 113.896 114.085 113.686C113.79 113.476 113.618 113.008 113.618 112.408C113.608 112.016 113.637 111.95 113.78 111.997C113.866 112.016 114.028 112.064 114.133 112.093Z"
          fill="#3D3D3D"/>
        <path
          d="M132.974 86.9095C132.926 87.0336 132.735 87.8444 132.554 88.7029C132.363 89.5519 132.058 90.8874 131.867 91.6601C131.686 92.4328 131.552 93.1101 131.591 93.1673C131.619 93.215 131.753 93.2627 131.877 93.2627C132.067 93.2627 132.172 93.1482 132.43 92.614C132.812 91.8604 133.298 90.4295 133.489 89.4947C133.661 88.6552 133.775 87.1576 133.689 86.8905C133.594 86.5852 133.098 86.5947 132.974 86.9095Z"
          fill="#3D3D3D"/>
        <path
          d="M131.609 93.7099C131.456 93.8529 131.58 94.1964 132.277 95.4842C133.087 96.9818 135.243 101.379 136.264 103.612C137.075 105.367 137.142 105.491 137.39 105.453C137.79 105.395 137.8 105.157 137.466 104.07C136.483 100.836 134.833 97.6019 132.553 94.4253C132.038 93.7099 131.79 93.5286 131.609 93.7099Z"
          fill="#3D3D3D"/>
        <path
          d="M94.9215 104.224C94.6448 104.405 94.9406 106.437 95.5034 108.192C95.8945 109.403 96.9056 111.426 97.6402 112.437C98.9852 114.326 101.093 115.957 101.818 115.68C102.477 115.432 102.171 114.65 100.693 112.837C98.8517 110.548 98.5369 110.138 98.0694 109.403C97.7928 108.965 97.0773 107.658 96.4764 106.503C95.1695 103.985 95.2172 104.042 94.9215 104.224Z"
          fill="#3D3D3D"/>
      </svg>
    </div>
  )
}
