import useData from "../hooks/useData";
import { Player } from '@lottiefiles/react-lottie-player';
import {useState} from "react";
interface IDescriptionPart {
  type: 'text' | 'image' | 'lottieAnimation' | 'svgAnimation';
  content: string;
}
interface ILevelData {
  title: string;
  descriptions: IDescriptionPart[];
}

interface ILevelDataMap {
  [key: number]: ILevelData;
}

const levelData:ILevelDataMap = {
  1: {
    title: 'Level 1',
    descriptions: [
      {type: 'text', content: 'Trig functions like sine and cosine have periodic graphs which we called Sinusoidal Graph, or Sine wave.'},
      {type: 'image', content: 'https://miro.medium.com/v2/resize:fit:932/format:webp/0*qtpAmBFyFAV_40YH.png'},
      {type: 'text', content: 'Every period of sine wave is a whole unit circle:'},
      {type: 'image', content: 'https://miro.medium.com/v2/resize:fit:800/0*JSIcq8SNHMnUTkv2.gif'},
      {type: 'lottieAnimation', content: '../assets/lottie/sine-loader.json'},
    ]
  },
  2: {
    title: 'Level 2',
    descriptions: [
      {type: 'text', content: 'Trig functions like sine and cosine have periodic graphs which we called Sinusoidal Graph, or Sine wave.'},
      {type: 'image', content: 'https://miro.medium.com/v2/resize:fit:932/format:webp/0*qtpAmBFyFAV_40YH.png'},
      {type: 'text', content: 'Every period of sine wave is a whole unit circle:'},
      {type: 'image', content: 'https://miro.medium.com/v2/resize:fit:800/0*JSIcq8SNHMnUTkv2.gif'},
      {type: 'lottieAnimation', content: '../assets/lottie/sine-loader.json'},
    ]
  },
  3: {
    title: 'Level 3',
    descriptions: [
      {type: 'text', content: 'Skyt med spacebar'},
      {type: 'image', content: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Trigonometric_functions_and_their_reciprocals_on_the_unit_circle.svg/400px-Trigonometric_functions_and_their_reciprocals_on_the_unit_circle.svg.png'}
    ]
  },
  4: {
    title: 'Level 4',
    descriptions: [
      {type: 'text', content: 'Skyt med spacebar'},
      {type: 'image', content: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Trigonometric_functions_and_their_reciprocals_on_the_unit_circle.svg/400px-Trigonometric_functions_and_their_reciprocals_on_the_unit_circle.svg.png'}
    ]
  },
  5: {
    title: 'Level 5',
    descriptions: [
      {type: 'text', content: 'Skyt med spacebar'},
      {type: 'image', content: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Trigonometric_functions_and_their_reciprocals_on_the_unit_circle.svg/400px-Trigonometric_functions_and_their_reciprocals_on_the_unit_circle.svg.png'}
    ]
  },
  6: {
    title: 'Level 6',
    descriptions: [
      {type: 'text', content: 'Skyt med spacebar'},
      {type: 'image', content: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Trigonometric_functions_and_their_reciprocals_on_the_unit_circle.svg/400px-Trigonometric_functions_and_their_reciprocals_on_the_unit_circle.svg.png'}
    ]
  },
  7: {
    title: 'Level 7',
    descriptions: [
      {type: 'text', content: 'Skyt med spacebar'},
      {type: 'image', content: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Trigonometric_functions_and_their_reciprocals_on_the_unit_circle.svg/400px-Trigonometric_functions_and_their_reciprocals_on_the_unit_circle.svg.png'}
    ]
  }
}

export default function InfoModal() {
  const {level, showTutorial, setShowTutorial} = useData();
  //TODO: The selected level should not be set to 1, but it crashed if we don't :-/ we need to figure this out
  const [selectedLevel, setSelectedLevel] = useState(level || 1); // If the user want to check the previous level, we need to keep track of the selected level. (added || 0 to prevent error when level is undefined, but this should never happen :)
  const data = levelData[selectedLevel];

  if (!showTutorial) return null;

  return (
    <div className={'modal'}>
      <div style={{ position: 'absolute', width: 500, height:500, top: '50%', right: '50%', transform: 'translate(50%,-50%)', display:'flex', justifyContent:'center', alignItems:'center', paddingTop: 60, paddingRight: 40, paddingLeft: 50, paddingBottom: 15}}>
        {/* Background Paper */}
        <div style={{ position: 'absolute', width: '100%', height:'100%', top: 0, right: 0,}}>
          <svg height={'100%'} width={'100%'} viewBox="0 0 511 554" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.54651 11.053L250.595 1.67882L383.496 6.82308L447.448 9.29851L475.485 8.88263L495.125 5.63986L501.272 14.8845L506.333 220.234L508.603 445.991L505.074 498.393L501.025 551.276L289.5 545L184 543L84.5 543C84.5 543 28.0003 547.858 25.9358 544.395C19.8275 534.151 21.3262 456.651 21.3262 456.651L17.7319 381.456L12.5583 321.211L1.54651 11.053Z" fill="#F9F9F9"/>
            <path d="M477.081 6.44252C444.47 8.68285 477.042 7.44177 395.156 5.77724C295.599 -0.472897 269.701 -0.756417 189.913 2.86549C150.748 4.46497 92.8605 6.29841 60.9366 6.74028C29.0127 7.18216 2.10064 8.29735 1.34496 9.22671C0.359009 9.90751 1.03288 48.2781 2.85687 94.1224C4.44132 139.957 6.78557 209.548 7.92 248.415C9.30324 287.053 11.8181 333.643 13.7676 351.453C17.2432 385.618 20.5363 455.485 20.6267 508.931C20.7672 542.488 23.3453 550.256 33.5172 547.774C36.1799 547.158 52.3999 547.735 69.5 546C103.5 544.342 119.671 540.804 300.774 547.574C437.802 552.639 501.317 554.139 502.34 552.501C505.64 547.835 511.199 441.405 510.6 394.889C510.394 369.238 508.733 288.171 506.768 215.001C505.041 141.84 503.647 66.2951 503.43 47.1145C503.495 2.06222 502.759 0.00723417 477.081 6.44252ZM497.91 9.99423C500.673 12.977 501.4 18.9965 500.789 34.79C500.353 46.0368 500.916 87.2789 502.05 126.147C507.584 324.074 508.553 404.396 505.658 460.602C502.715 524.236 501.411 545.515 500.554 549.076C500.249 550.742 431.224 549.029 300.416 544.445C136.551 538.581 95.3769 540.77 72.5 543C57.3348 544.33 42.0864 543.313 37.7283 544.342C26.5982 546.787 22.9416 542.092 23.5899 525.342C24.72 496.148 20.8245 398.458 16.9267 356.608C14.5179 332.07 11.7463 279.718 10.6396 240.133C9.29342 200.538 7.10535 133.111 5.64003 90.3957C3.93518 47.6714 2.6618 12.3931 2.67107 12.1538C2.71738 10.9574 28.662 10.0444 80.7538 9.18494C107.159 8.76911 153.05 6.95064 182.865 5.22885C229.991 2.49958 252.536 2.65326 356.736 6.68663C439.388 9.6462 478.7 10.449 483.805 8.72933C493.765 5.52007 493.765 5.52003 497.91 9.99423Z" fill="black"/>
            <path d="M14.7729 121.8C14.5692 127.064 19.9243 205.638 21.809 225.123C22.3053 230.894 23.3363 235.248 23.8432 234.548C25.3267 233.408 17.5005 119.509 15.8886 117.769C15.428 117.272 14.8841 118.928 14.7729 121.8Z" fill="black"/>
            <path d="M483.568 33.4309C482.552 47.2914 486.64 102.81 488.713 105.047C490.315 107.026 490.445 103.676 487.67 70.0169C486.402 53.1921 485.18 35.1709 484.905 29.8878C484.482 22.2026 484.215 22.9112 483.568 33.4309Z" fill="black"/>
            <path d="M495.23 412.044C494.275 442.923 493.844 478.854 494.292 492.052C494.741 505.25 495.944 480.373 496.902 437.033C497.869 393.454 498.54 357.532 498.079 357.034C497.619 356.537 496.425 381.175 495.23 412.044Z" fill="black"/>
            <path d="M31.9123 421.894C31.1965 452.782 31.3648 485.621 31.9618 494.99C32.5587 504.36 33.4837 486.661 33.9692 455.525C34.6849 424.638 34.7655 391.569 33.9197 382.429C33.3228 373.059 32.3886 390.997 31.9123 421.894Z" fill="black"/>
            <path d="M484.556 498.195C484.047 511.357 484.092 516.391 484.839 509.47C485.587 502.549 486.004 491.781 485.766 485.541C485.527 479.3 485.066 485.034 484.556 498.195Z" fill="black"/>
            <path d="M36.8449 494.566C36.1885 505.325 36.7854 514.694 37.7158 515.449C38.8857 516.214 39.6612 508.575 39.5804 498.267C39.125 472.846 37.9921 471.124 36.8449 494.566Z" fill="black"/>
            <path d="M496.426 507.1C496.047 516.911 496.368 520.998 497.042 515.991C497.706 511.224 498.021 503.088 497.736 498.044C497.443 493.239 496.806 497.289 496.426 507.1Z" fill="black"/>
            <path d="M31.7011 517.294C31.5715 520.644 32.3258 525.945 33.1543 529.333C34.8484 535.15 34.8484 535.15 35.117 528.21C35.2744 524.142 34.7596 518.85 33.6638 516.171C31.9142 511.79 31.6746 511.781 31.7011 517.294Z" fill="black"/>
            <path d="M486.273 531.809C486.022 538.27 486.4 540.921 487.027 537.11C487.645 533.54 487.849 528.275 487.49 525.146C487.122 522.256 486.532 525.109 486.273 531.809Z" fill="black"/>
          </svg>
        </div>
        {/* Close Button */}
        <div style={{position: 'absolute', top: 15, left: 25, height: 50, display:'flex', flexDirection: 'row'}}>
          <div className={'button'} onClick={() => setShowTutorial(false)} style={{width: 50, height: 50}}>
            <svg viewBox="0 0 143 143" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_136_826)">
                <path d="M128.744 63.7382C132.223 95.8968 104.392 123.139 71.2097 121.544C40.8368 120.614 13.0061 95.5444 13.0061 63.4724C21.837 10.4506 47.9283 2.87597 71.2097 5.40086C103.502 5.40086 128.744 31.6661 128.744 63.7382Z" fill="#E2E2E2"/>
              </g>
              <path d="M60.104 3.45153C51.0412 4.72724 41.6216 8.51895 35.0921 13.4801C31.1316 16.4922 25.8866 21.9139 23.3533 25.6702C21.1411 28.8949 17.0022 36.9744 16.2885 39.4196C16.1101 40.0928 15.6106 41.7584 15.2181 43.1404C13.0416 50.5466 11.8999 57.2795 12.0069 62.028C12.0426 64.7921 12.0783 64.8984 12.2567 63.162C12.4351 61.5319 12.5421 61.9926 12.7919 65.9969C13.1844 72.1274 13.5768 76.5924 13.6839 75.9191C13.7909 74.9623 14.2904 76.2381 15.3252 80.2778C18.5721 93.1058 26.3147 104.02 37.2329 111.214C41.5503 114.049 44.2976 115.36 49.5783 117.061C52.1473 117.876 54.7877 118.762 55.4656 119.01L56.7144 119.471H55.4656C54.0741 119.506 51.0412 118.762 49.7924 118.124C49.3643 117.876 48.722 117.628 48.4009 117.557C47.1164 117.273 41.6216 114.828 39.9446 113.765C38.9813 113.163 37.5897 112.348 36.9118 111.958C34.9851 110.859 32.0949 108.414 28.1701 104.658C24.0312 100.689 23.3176 99.9096 23.2105 99.2009C23.1749 98.9528 22.4612 97.9252 21.6406 96.9684C20.82 96.0116 20.142 95.0548 20.142 94.8776C20.142 94.665 19.8209 93.8854 19.4284 93.1058C19.0359 92.3262 18.7148 91.582 18.7148 91.4049C18.7148 91.2277 18.4294 90.6607 18.0726 90.1646C17.1449 88.818 15.9674 85.487 14.9327 81.3763C14.1834 78.2579 14.112 78.1162 14.2904 79.9943C14.5759 82.8647 16.574 88.7471 18.7862 93.2476C23.5317 102.886 32.4161 111.356 43.1559 116.458C53.5389 121.42 63.6721 123.369 76.8738 122.943C85.8653 122.624 92.0023 121.101 99.3881 117.309C108.665 112.525 115.088 106.501 122.009 96.1179C127.183 88.3573 129.895 82.2268 131.358 75.175C132.214 70.9226 132.214 61.3547 131.358 56.6062C129.538 46.8966 124.828 37.0453 117.442 27.4775C116.8 26.6624 115.694 25.1387 114.945 24.111C111.876 19.7523 103.991 12.8068 99.7093 10.6451C98.8173 10.1845 97.7112 9.58204 97.2116 9.26311C95.8558 8.44807 91.3601 6.67625 87.7563 5.57772C86.008 5.04617 84.2953 4.55006 84.0099 4.44375C79.6212 3.09717 66.4195 2.53018 60.104 3.45153ZM64.3857 5.54228C64.3857 5.61316 63.2082 5.86121 61.8167 6.10927C55.644 7.10149 47.6159 10.468 41.015 14.8266C37.6254 17.0591 29.1692 24.0401 26.0293 27.1585L23.1749 30.0289L24.9232 27.5483C25.8866 26.2017 27.2424 24.3945 27.956 23.5086C29.9541 21.0635 35.5559 15.6771 36.7334 15.0747C37.34 14.7558 38.5174 13.9762 39.4094 13.3029C43.2629 10.3616 52.4684 6.88887 58.6768 5.96752C62.2449 5.47141 64.3857 5.29423 64.3857 5.54228ZM80.9771 7.73934C82.9395 8.05827 84.7949 8.41264 85.0803 8.51895C85.8296 8.80244 85.8653 8.80244 87.0427 9.12137C89.6117 9.79466 94.4999 12.0272 99.7449 14.8975C102.92 16.6339 110.235 21.8785 110.556 22.6935C110.663 22.9416 109.914 22.5164 108.879 21.7368C101.672 16.3858 91.3601 12.1335 81.9404 10.6451C72.9133 9.19224 61.0317 9.68835 53.4318 11.7791C50.2206 12.665 49.9351 12.665 51.6478 11.7437C54.0384 10.468 63.4223 7.56216 66.1697 7.24323C69.6664 6.818 76.517 7.03061 80.9771 7.73934ZM75.1968 12.1335C83.2963 12.8068 92.1807 15.1456 98.6389 18.3349C100.815 19.3979 103.242 20.7445 104.098 21.347C104.919 21.9494 106.489 23.0479 107.559 23.7921C109.2 24.9615 113.518 29.0367 116.158 31.8361C117.086 32.8638 120.154 37.506 121.01 39.2424C123.33 43.8491 125.007 52.5665 125.221 61.0358C125.328 65.0401 124.686 71.525 124.008 73.6158C123.829 74.1827 123.472 75.8837 123.258 77.3011C123.044 78.754 122.58 80.5967 122.224 81.3763C121.867 82.1914 121.474 83.2545 121.367 83.786C120.725 86.2311 115.908 95.1966 114.053 97.3582C113.732 97.748 113.089 98.5276 112.626 99.13C111.627 100.406 103.634 108.521 103.313 108.556C102.314 108.662 101.85 108.91 101.065 109.69C99.3525 111.391 90.8248 115.254 85.901 116.529C82.654 117.38 81.9048 117.663 83.2249 117.557C86.5789 117.203 91.8596 115.431 97.176 112.808C108.487 107.316 118.227 95.8344 123.08 82.3331C125.221 76.3444 126.791 67.1663 126.826 60.5397C126.826 58.9805 126.933 57.8111 127.04 57.9528C127.326 58.2363 127.255 71.2769 126.969 73.4386C126.148 79.7108 124.757 84.8137 122.545 89.5622C119.619 95.9407 118.049 98.7048 115.837 101.433C113.339 104.481 106.952 110.363 105.168 111.285C104.597 111.568 103.848 112.064 103.456 112.419C102.243 113.446 99.1384 115.183 97.5328 115.75C96.6764 116.033 95.0708 116.636 94.0004 117.061C92.93 117.451 91.3244 118.018 90.4324 118.301C89.5404 118.549 87.792 119.081 86.5075 119.506C82.7254 120.675 67.4542 120.959 68.1678 119.825C68.2749 119.648 67.6326 119.506 66.7763 119.506C62.8871 119.506 54.0384 116.14 47.5089 112.206C39.5878 107.387 32.4161 100.547 27.2067 92.7514C25.0302 89.4913 20.142 80.3487 20.142 79.5336C20.142 79.3565 19.6782 77.6909 19.1073 75.8837C16.7167 68.1585 16.3242 58.1654 18.1439 50.7592C19.7495 44.2389 20.0707 43.353 22.4612 38.8526C26.172 31.9425 32.309 24.5008 36.9118 21.347C44.1192 16.4567 54.9661 12.9839 65.6345 12.1689C70.7725 11.7437 70.5941 11.7437 75.1968 12.1335ZM113.268 25.0678C113.732 25.5639 114.017 25.9537 113.91 25.9537C113.839 25.9537 113.375 25.5639 112.911 25.0678C112.447 24.5717 112.162 24.1819 112.269 24.1819C112.34 24.1819 112.804 24.5717 113.268 25.0678ZM128.289 48.633C130.252 54.4092 131.072 59.9727 131.144 67.5916C131.179 72.1274 131.072 73.9347 130.787 74.1473C130.537 74.289 130.287 75.2458 130.18 76.3089C130.073 77.372 129.681 79.0021 129.324 79.9943C128.931 80.9511 128.468 82.4749 128.218 83.3608C127.79 85.0617 125.506 89.9874 125.007 90.3063C124.828 90.4126 125.007 89.8102 125.363 88.9597C127.861 83.0773 129.288 76.3798 129.574 69.009C130.002 58.13 128.254 48.7748 124.329 40.6244C123.936 39.8448 123.615 39.0298 123.651 38.8526C123.686 38.2856 127.469 46.2588 128.289 48.633ZM126.719 57.2087C126.612 57.4922 126.505 57.3858 126.505 56.996C126.47 56.6062 126.577 56.3936 126.684 56.5354C126.791 56.6417 126.826 56.9606 126.719 57.2087ZM20.7129 86.4438C24.8162 94.8776 32.9513 104.729 40.2301 110.044C42.8347 111.958 43.2272 112.383 41.5146 111.497C38.0893 109.761 32.5588 104.977 27.4922 99.3781C25.28 96.8975 21.2481 90.0937 19.8923 86.5501C18.251 82.2623 16.9308 78.2579 16.9308 77.7264C16.9665 77.4075 17.5017 78.6123 18.1439 80.4196C18.8218 82.2268 19.9636 84.92 20.7129 86.4438Z" fill="#3D3D3D"/>
              <path d="M77.4091 118.088C76.41 118.336 76.4457 118.371 77.8729 118.407C78.8363 118.442 79.3358 118.3 79.1931 118.088C78.9433 117.698 78.9433 117.698 77.4091 118.088Z" fill="#3D3D3D"/>
              <path d="M74.84 118.336C75.1611 118.407 75.6606 118.407 75.9104 118.336C76.1245 118.23 75.8747 118.159 75.2681 118.159C74.6972 118.159 74.4832 118.23 74.84 118.336Z" fill="#3D3D3D"/>
              <path d="M72.8776 118.691C73.1273 118.797 73.4485 118.762 73.5555 118.655C73.6982 118.549 73.4841 118.443 73.0917 118.478C72.6992 118.478 72.5921 118.584 72.8776 118.691Z" fill="#3D3D3D"/>
              <path d="M91.286 37.0206C89.2621 37.1331 76.7249 47.8712 72.4522 52.931L69.4163 56.6416L59.6901 47.0279C52.6063 40.0565 49.0082 36.9082 46.5345 35.6714C42.3742 33.6474 40.2378 33.9847 40.1816 36.6271C40.2378 38.2575 41.9807 40.4501 51.1446 50.4011C58.5657 58.4968 62.0514 62.6572 61.9952 63.6129C62.0514 64.3438 59.0155 68.5041 55.3611 72.9455C47.153 82.7279 45.5226 85.3702 45.9723 88.7434C46.3097 92.1167 47.2654 92.96 50.5824 92.9038C52.775 92.96 53.8994 92.3978 56.0358 90.2614C58.2846 88.0126 65.2559 78.3427 69.1914 72.046C70.0909 70.6967 70.4844 70.8653 76.8374 75.9814C96.8518 91.8356 97.2454 92.1167 99.6066 91.8918C102.755 91.5545 104.104 89.8679 103.261 87.5628C102.755 86.0449 100.337 83.8523 93.8159 78.68C89.0372 74.9132 83.0778 70.0783 80.4917 67.8294L75.8254 63.9502L79.9295 59.1715C88.6436 48.9956 93.9284 42.1367 94.4906 40.5625C95.0528 38.5386 93.4786 36.7395 91.286 37.0206Z" fill="#3D3D3D"/>
              <defs>
                <filter id="filter0_d_136_826" x="0.00610352" y="0.980469" width="142.033" height="142.63" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="9"/>
                  <feGaussianBlur stdDeviation="6.5"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_136_826"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_136_826" result="shape"/>
                </filter>
              </defs>
            </svg>
          </div>
          <div style={{width: 370, display:'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: 20, gap:8, overflow:'scroll'}}>
            {Object.keys(levelData).map((key, index) => (
              <div
                key={index}
                className={'button dropshadowM'}
                onClick={() => {
                  if (Number(key) <= level) {
                    setSelectedLevel(Number(key))
                  }
                }
                }
                style={{
                  backgroundColor: Number(key) > level  ? '#5e5e5e' : Number(key) === selectedLevel ? '#bfffac' : '#bbbbbb',
                  minWidth: 70,
                  padding: 6,
                  borderRadius: 40
              }}>
                {Number(key) > level ?
                  (<p style={{textAlign:'center'}}>{`Låst`}</p>):
                  (<p>{`Level ${key}`}</p>)
                }
              </div>
            ))}
          </div>
        </div>
        {/* Info part */}
        <div className={'modalInfoContainer'}>
          {/* Title */}
          <h3 className={'headerText'}>{data.title}</h3>
          {/* Description */}
          <div style={{display:'flex', alignItems: 'center', flexDirection: 'column', gap: 20}}>
            {data.descriptions.map((description, index) => {
              if (description.type === 'text') {
                return <p key={index}>{description.content}</p>
              }
              else if (description.type === 'image') {
                return <img key={index} src={description.content} alt={'illustration'} style={{width: '70%', height: "auto", marginBottom: 40}}/>
              }
              else if (description.type === 'lottieAnimation') {
                return <Player className="player" src={description.content} loop autoplay style={{ width: '70%' }}/>
              }
              else if (description.type === 'svgAnimation') {
                return null
              }
              else return  null
            })}
            <div className={'bottomGradient'}/>
          </div>
        </div>
      </div>
    </div>
  )};
