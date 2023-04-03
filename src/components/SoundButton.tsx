import React from 'react';
import useData from "../hooks/useData";
import {sound} from "@pixi/sound";

export default function SoundButton() {
  const { isBackgroundSound, toggleBackgroundSound, level } =
    useData();
  function handleSound(){
    sound.volumeAll = isBackgroundSound ? 0 : 1;
    toggleBackgroundSound();
  }

  if (level === 0) return null;

  if (isBackgroundSound) {
    return (
    <div className={"easeIn button"} style={{ position: 'absolute', bottom: 5, right: 20, height: 110, width: 110 }} onClick={handleSound}>
      <svg viewBox="0 0 143 143" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_136_783)">
          <path d="M128.744 63.7382C132.223 95.8968 104.392 123.139 71.2097 121.544C40.8368 120.614 13.0061 95.5444 13.0061 63.4724C21.837 10.4506 47.9283 2.87597 71.2097 5.40086C103.502 5.40086 128.744 31.6661 128.744 63.7382Z" fill="#E2E2E2"/>
        </g>
        <path d="M60.104 3.45153C51.0412 4.72724 41.6216 8.51895 35.0921 13.4801C31.1316 16.4922 25.8866 21.9139 23.3533 25.6702C21.1411 28.8949 17.0022 36.9744 16.2885 39.4196C16.1101 40.0928 15.6106 41.7584 15.2181 43.1404C13.0416 50.5466 11.8999 57.2795 12.0069 62.028C12.0426 64.7921 12.0783 64.8984 12.2567 63.162C12.4351 61.5319 12.5421 61.9926 12.7919 65.9969C13.1844 72.1274 13.5768 76.5924 13.6839 75.9191C13.7909 74.9623 14.2904 76.2381 15.3252 80.2778C18.5721 93.1058 26.3147 104.02 37.2329 111.214C41.5503 114.049 44.2976 115.36 49.5783 117.061C52.1473 117.876 54.7877 118.762 55.4656 119.01L56.7144 119.471H55.4656C54.0741 119.506 51.0412 118.762 49.7924 118.124C49.3643 117.876 48.722 117.628 48.4009 117.557C47.1164 117.273 41.6216 114.828 39.9446 113.765C38.9813 113.163 37.5897 112.348 36.9118 111.958C34.9851 110.859 32.0949 108.414 28.1701 104.658C24.0312 100.689 23.3176 99.9096 23.2105 99.2009C23.1749 98.9528 22.4612 97.9252 21.6406 96.9684C20.82 96.0116 20.142 95.0548 20.142 94.8776C20.142 94.665 19.8209 93.8854 19.4284 93.1058C19.0359 92.3262 18.7148 91.582 18.7148 91.4049C18.7148 91.2277 18.4294 90.6607 18.0726 90.1646C17.1449 88.818 15.9674 85.487 14.9327 81.3763C14.1834 78.2579 14.112 78.1162 14.2904 79.9943C14.5759 82.8647 16.574 88.7471 18.7862 93.2476C23.5317 102.886 32.4161 111.356 43.1559 116.458C53.5389 121.42 63.6721 123.369 76.8738 122.943C85.8653 122.624 92.0023 121.101 99.3881 117.309C108.665 112.525 115.088 106.501 122.009 96.1179C127.183 88.3573 129.895 82.2268 131.358 75.175C132.214 70.9226 132.214 61.3547 131.358 56.6062C129.538 46.8966 124.828 37.0453 117.442 27.4775C116.8 26.6624 115.694 25.1387 114.945 24.111C111.876 19.7523 103.991 12.8068 99.7093 10.6451C98.8173 10.1845 97.7112 9.58204 97.2116 9.26311C95.8558 8.44807 91.3601 6.67625 87.7563 5.57772C86.008 5.04617 84.2953 4.55006 84.0099 4.44375C79.6212 3.09717 66.4195 2.53018 60.104 3.45153ZM64.3857 5.54228C64.3857 5.61316 63.2082 5.86121 61.8167 6.10927C55.644 7.10149 47.6159 10.468 41.015 14.8266C37.6254 17.0591 29.1692 24.0401 26.0293 27.1585L23.1749 30.0289L24.9232 27.5483C25.8866 26.2017 27.2424 24.3945 27.956 23.5086C29.9541 21.0635 35.5559 15.6771 36.7334 15.0747C37.34 14.7558 38.5174 13.9762 39.4094 13.3029C43.2629 10.3616 52.4684 6.88887 58.6768 5.96752C62.2449 5.47141 64.3857 5.29423 64.3857 5.54228ZM80.9771 7.73934C82.9395 8.05827 84.7949 8.41264 85.0803 8.51895C85.8296 8.80244 85.8653 8.80244 87.0427 9.12137C89.6117 9.79466 94.4999 12.0272 99.7449 14.8975C102.92 16.6339 110.235 21.8785 110.556 22.6935C110.663 22.9416 109.914 22.5164 108.879 21.7368C101.672 16.3858 91.3601 12.1335 81.9404 10.6451C72.9133 9.19224 61.0317 9.68835 53.4318 11.7791C50.2206 12.665 49.9351 12.665 51.6478 11.7437C54.0384 10.468 63.4223 7.56216 66.1697 7.24323C69.6664 6.818 76.517 7.03061 80.9771 7.73934ZM75.1968 12.1335C83.2963 12.8068 92.1807 15.1456 98.6389 18.3349C100.815 19.3979 103.242 20.7445 104.098 21.347C104.919 21.9494 106.489 23.0479 107.559 23.7921C109.2 24.9615 113.518 29.0367 116.158 31.8361C117.086 32.8638 120.154 37.506 121.01 39.2424C123.33 43.8491 125.007 52.5665 125.221 61.0358C125.328 65.0401 124.686 71.525 124.008 73.6158C123.829 74.1827 123.472 75.8837 123.258 77.3011C123.044 78.754 122.58 80.5967 122.224 81.3763C121.867 82.1914 121.474 83.2545 121.367 83.786C120.725 86.2311 115.908 95.1966 114.053 97.3582C113.732 97.748 113.089 98.5276 112.626 99.13C111.627 100.406 103.634 108.521 103.313 108.556C102.314 108.662 101.85 108.91 101.065 109.69C99.3525 111.391 90.8248 115.254 85.901 116.529C82.654 117.38 81.9048 117.663 83.2249 117.557C86.5789 117.203 91.8596 115.431 97.176 112.808C108.487 107.316 118.227 95.8344 123.08 82.3331C125.221 76.3444 126.791 67.1663 126.826 60.5397C126.826 58.9805 126.933 57.8111 127.04 57.9528C127.326 58.2363 127.255 71.2769 126.969 73.4386C126.148 79.7108 124.757 84.8137 122.545 89.5622C119.619 95.9407 118.049 98.7048 115.837 101.433C113.339 104.481 106.952 110.363 105.168 111.285C104.597 111.568 103.848 112.064 103.456 112.419C102.243 113.446 99.1384 115.183 97.5328 115.75C96.6764 116.033 95.0708 116.636 94.0004 117.061C92.93 117.451 91.3244 118.018 90.4324 118.301C89.5404 118.549 87.792 119.081 86.5075 119.506C82.7254 120.675 67.4542 120.959 68.1678 119.825C68.2749 119.648 67.6326 119.506 66.7763 119.506C62.8871 119.506 54.0384 116.14 47.5089 112.206C39.5878 107.387 32.4161 100.547 27.2067 92.7514C25.0302 89.4913 20.142 80.3487 20.142 79.5336C20.142 79.3565 19.6782 77.6909 19.1073 75.8837C16.7167 68.1585 16.3242 58.1654 18.1439 50.7592C19.7495 44.2389 20.0707 43.353 22.4612 38.8526C26.172 31.9425 32.309 24.5008 36.9118 21.347C44.1192 16.4567 54.9661 12.9839 65.6345 12.1689C70.7725 11.7437 70.5941 11.7437 75.1968 12.1335ZM113.268 25.0678C113.732 25.5639 114.017 25.9537 113.91 25.9537C113.839 25.9537 113.375 25.5639 112.911 25.0678C112.447 24.5717 112.162 24.1819 112.269 24.1819C112.34 24.1819 112.804 24.5717 113.268 25.0678ZM128.289 48.633C130.252 54.4092 131.072 59.9727 131.144 67.5916C131.179 72.1274 131.072 73.9347 130.787 74.1473C130.537 74.289 130.287 75.2458 130.18 76.3089C130.073 77.372 129.681 79.0021 129.324 79.9943C128.931 80.9511 128.468 82.4749 128.218 83.3608C127.79 85.0617 125.506 89.9874 125.007 90.3063C124.828 90.4126 125.007 89.8102 125.363 88.9597C127.861 83.0773 129.288 76.3798 129.574 69.009C130.002 58.13 128.254 48.7748 124.329 40.6244C123.936 39.8448 123.615 39.0298 123.651 38.8526C123.686 38.2856 127.469 46.2588 128.289 48.633ZM126.719 57.2087C126.612 57.4922 126.505 57.3858 126.505 56.996C126.47 56.6062 126.577 56.3936 126.684 56.5354C126.791 56.6417 126.826 56.9606 126.719 57.2087ZM20.7129 86.4438C24.8162 94.8776 32.9513 104.729 40.2301 110.044C42.8347 111.958 43.2272 112.383 41.5146 111.497C38.0893 109.761 32.5588 104.977 27.4922 99.3781C25.28 96.8975 21.2481 90.0937 19.8923 86.5501C18.251 82.2623 16.9308 78.2579 16.9308 77.7264C16.9665 77.4075 17.5017 78.6123 18.1439 80.4196C18.8218 82.2268 19.9636 84.92 20.7129 86.4438Z" fill="#3D3D3D"/>
        <path d="M77.4091 118.088C76.41 118.336 76.4457 118.371 77.8729 118.407C78.8363 118.442 79.3358 118.3 79.1931 118.088C78.9433 117.698 78.9433 117.698 77.4091 118.088Z" fill="#3D3D3D"/>
        <path d="M74.84 118.336C75.1611 118.407 75.6606 118.407 75.9104 118.336C76.1245 118.23 75.8747 118.159 75.2681 118.159C74.6972 118.159 74.4832 118.23 74.84 118.336Z" fill="#3D3D3D"/>
        <path d="M72.8776 118.691C73.1273 118.797 73.4485 118.762 73.5555 118.655C73.6982 118.549 73.4841 118.443 73.0917 118.478C72.6992 118.478 72.5921 118.584 72.8776 118.691Z" fill="#3D3D3D"/>
        <path d="M76.3744 27.6578C74.0858 28.3572 71.6946 30.4844 67.7336 35.307C63.5379 40.4211 59.5036 44.7338 57.259 46.5113C54.9265 48.3617 52.9607 49.4399 52.1098 49.3379C50.7014 49.1631 42.7795 50.0518 40.3296 50.6638C39.1413 50.9698 38.9652 50.9843 38.6718 50.7949C38.3051 50.5472 37.5716 50.6492 37.3075 50.9843C37.1168 51.2029 37.0434 51.7128 36.5006 57.5262C35.8405 64.447 35.8551 67.9729 36.574 71.3677C36.8527 72.7519 37.5862 74.8937 37.9677 75.4619C38.085 75.6513 38.1877 75.899 38.1877 76.0155C38.1877 76.1175 38.3051 76.3652 38.4518 76.5255C38.6718 76.8169 38.9799 76.8752 40.9751 77.0791C42.2954 77.2103 44.7893 77.3123 46.9165 77.3268C50.3934 77.3414 50.6134 77.3268 51.2736 77.0209L51.9484 76.7149L52.4765 77.56C53.1954 78.711 55.2199 81.2316 56.8776 83.0091C58.3886 84.641 65.5184 91.2557 67.3082 92.669C67.9536 93.179 69.0393 93.8783 69.7288 94.2134C70.565 94.6214 71.3425 95.1459 72.076 95.8307C73.2349 96.8797 74.4379 97.7248 75.5528 98.2639C76.125 98.5407 76.2864 98.5553 76.7851 98.4096C77.372 98.2347 77.7974 97.6811 77.7974 97.1129C77.7974 96.9526 77.9441 96.5155 78.1201 96.1221C78.4429 95.4227 78.4575 95.2188 78.5602 88.8517C78.6189 85.2383 78.7363 75.7387 78.8096 67.7252C78.8977 57.3514 79.015 52.1936 79.1764 49.8042C79.7632 41.1059 79.7632 35.3653 79.1764 31.0817C79.0444 30.1638 78.9417 29.2459 78.9563 29.0419C78.971 28.4591 78.6923 27.9492 78.2522 27.6869C77.7534 27.3955 77.2252 27.381 76.3744 27.6578ZM76.4477 35.8316L76.4037 36.7203L75.0394 35.4527L73.675 34.1852L74.966 33.0487L76.257 31.8977L76.3744 33.4275C76.4331 34.258 76.4624 35.3507 76.4477 35.8316ZM76.3157 38.8038C76.4184 38.8038 76.4771 39.1389 76.4771 39.6197C76.4771 40.5668 76.5357 40.5668 75.0394 39.6926C74.0565 39.1244 71.9586 37.5071 71.4452 36.9389C71.1664 36.6475 71.1811 36.6183 71.8559 35.9044L72.5454 35.1613L74.3499 36.9826C75.3475 37.9879 76.2277 38.8038 76.3157 38.8038ZM71.8413 39.2118C73.3963 40.7125 75.1567 42.0384 75.9343 42.2861L76.4037 42.4463L76.345 43.7139C76.3304 44.4278 76.2864 45.0106 76.257 45.0398C76.1983 45.1126 73.499 43.3934 70.653 41.4701L68.2617 39.8529L69.186 38.833C69.6847 38.2647 70.1542 37.7985 70.2275 37.7839C70.3009 37.7839 71.0344 38.425 71.8413 39.2118ZM68.3791 41.6741C69.3033 42.3152 71.8559 44.2384 74.4232 46.1908C75.0247 46.657 75.6702 47.1379 75.8462 47.2544C76.1396 47.4584 76.1543 47.5312 76.037 48.828C75.9783 49.571 75.8756 50.2267 75.8316 50.2704C75.6702 50.4452 71.8119 47.9829 69.1713 46.0305C67.6309 44.8941 66.1492 43.8013 65.8558 43.5974C65.5624 43.4079 65.3277 43.204 65.3277 43.1457C65.3277 43.0291 67.2348 40.9893 67.3375 40.9893C67.3668 40.9893 67.8363 41.2953 68.3791 41.6741ZM65.1516 44.7921C65.5771 45.1272 67.4695 46.6133 69.3327 48.0995C72.7215 50.7803 74.3792 51.9751 75.2888 52.3539L75.7729 52.5433L75.6702 53.7963C75.6115 54.4811 75.5528 55.0639 75.5382 55.0785C75.3475 55.2825 63.3765 47.8955 62.2176 46.861C61.9829 46.657 62.0415 46.5551 63.0978 45.4186C63.7139 44.7484 64.2567 44.2093 64.2861 44.1947C64.3154 44.1947 64.7115 44.457 65.1516 44.7921ZM62.7457 48.7843C63.3179 49.3525 64.6528 50.4015 65.6944 51.1155C66.7507 51.8294 68.3938 53.0096 69.362 53.7381C71.6652 55.4719 73.3963 56.6958 74.5406 57.366C75.5528 57.9779 75.5528 57.9488 75.3621 59.7555L75.2594 60.6442L74.5113 59.974C72.5454 58.2256 64.9609 53.7818 59.7383 51.334L57.4498 50.2704L58.5647 49.4399C59.1808 48.9737 60.0464 48.2743 60.4865 47.8664C61.2934 47.1233 61.2934 47.1233 61.4987 47.4438C61.6161 47.6187 62.1736 48.2306 62.7457 48.7843ZM58.9314 52.1645C63.7726 54.554 66.0172 56.0401 70.4623 59.77C72.2667 61.2853 73.9831 62.48 74.8193 62.8297C75.2594 63.0046 75.2594 63.0191 75.3475 64.4178C75.4061 65.19 75.4501 66.3265 75.4501 66.9239L75.4355 68.0166L75.1127 67.5795C73.3816 65.2775 70.565 62.9026 64.5355 58.7064C60.8386 56.1275 56.8189 53.8109 53.6942 52.4996C52.5499 52.0042 52.4472 51.7857 53.3714 51.7711C53.6208 51.7711 54.3397 51.5817 54.9851 51.3486C55.6306 51.13 56.2908 50.9698 56.4522 51.0135C56.6135 51.0426 57.7285 51.5671 58.9314 52.1645ZM53.1367 53.2427C56.2615 54.8891 59.0635 56.6083 62.1002 58.7647C64.4328 60.4257 65.5184 61.3436 70.0368 65.6126C73.0736 68.4974 74.6286 69.8087 75.1127 69.9399C75.4501 70.0127 75.4501 70.0419 75.4501 72.4313V74.8645L74.5699 73.8883C74.0858 73.3638 72.7508 72.0816 71.6065 71.0472C70.4623 70.0273 68.7018 68.4392 67.6896 67.5212C66.6773 66.6179 64.2567 64.549 62.3203 62.9463C60.3838 61.329 57.9485 59.2892 56.8923 58.4004C53.8262 55.7924 51.5083 54.0877 49.7039 53.1261C48.7356 52.6162 48.7796 52.5433 50.0706 52.4559C50.5107 52.4268 51.0095 52.3976 51.1562 52.383C51.3176 52.3685 52.1978 52.7619 53.1367 53.2427ZM47.1806 53.8983C53.2541 57.6428 59.4302 62.684 66.7213 69.8379C71.1078 74.136 73.3376 76.1612 74.746 77.0791L75.3181 77.458L75.2301 78.7838C75.1714 79.5123 75.0981 80.2263 75.0541 80.372C75.01 80.5614 74.0271 79.7017 70.9317 76.7149C64.6382 70.6538 61.2053 67.5795 56.5255 63.7768C52.3592 60.3965 46.5204 56.2732 42.5301 53.8983L40.931 52.9513L41.8699 52.893C42.3834 52.8639 43.3956 52.8347 44.0998 52.8201L45.3908 52.791L47.1806 53.8983ZM41.5912 54.8454C47.0045 58.619 51.9924 62.7423 61.5868 71.3677C67.3082 76.5255 71.2838 80.0369 73.2936 81.7124L74.8487 83.0237V83.9707C74.834 84.4953 74.79 85.5297 74.7313 86.2728L74.6433 87.6424L73.0442 85.9086C72.1787 84.9615 69.8314 82.5575 67.8363 80.5614C59.753 72.4459 50.9802 65.0589 40.6376 57.6282L39.3613 56.7249V54.8599C39.376 53.5632 39.42 53.0824 39.5227 53.2572C39.5961 53.3884 40.5203 54.1023 41.5912 54.8454ZM42.2954 60.5131C52.6086 68.7888 63.0831 78.5361 72.7215 88.8225C73.6017 89.755 74.3939 90.5272 74.4966 90.5272C74.6286 90.5272 74.7166 90.8478 74.79 91.518C74.834 92.0571 74.9367 92.8876 75.01 93.3829C75.0981 93.8638 75.1567 94.3591 75.1567 94.4611C75.1567 94.5631 74.4819 93.9366 73.6604 93.0624C68.5405 87.6278 60.9266 80.3283 56.0854 76.2341C51.5376 72.373 45.9336 68.1478 41.7379 65.394L39.508 63.937V61.1105C39.508 58.8813 39.552 58.3276 39.6987 58.4296C39.7868 58.5024 40.9604 59.4495 42.2954 60.5131ZM42.3394 67.1424C45.4788 69.6776 50.4667 73.8592 50.5987 74.0923C50.6721 74.1943 50.5841 74.2234 50.3053 74.1506C50.1 74.1069 49.1904 74.1214 48.2955 74.2234L46.6818 74.3837L45.3321 73.5532C43.557 72.4605 42.0753 71.3531 40.843 70.1876L39.8308 69.2405L39.7428 67.6815C39.6841 66.8219 39.6254 65.8748 39.5961 65.5689C39.5667 65.2775 39.5814 65.0298 39.6254 65.0298C39.6841 65.0298 40.9017 65.9768 42.3394 67.1424ZM43.381 74.1943L43.9531 74.5731L43.381 74.6751C43.0729 74.7188 42.2807 74.8062 41.6205 74.8645L40.4323 74.9665L40.3442 73.9757C40.2856 73.4221 40.1975 72.6062 40.1535 72.1691L40.0508 71.3823L41.4298 72.5916C42.1927 73.2618 43.0729 73.9757 43.381 74.1943Z" fill="#3D3D3D"/>
        <path d="M96.3408 39.1103C95.7686 39.4017 95.5045 40.3051 95.7539 41.0918C95.8126 41.2812 96.5315 41.8786 97.441 42.5197C101.666 45.4191 103.735 47.6483 105.392 51.1014C106.581 53.5637 107.241 56.5506 107.387 60.0765C107.563 64.4912 106.801 68.3523 105.011 71.9802C103.25 75.5498 101.006 78.0267 97.7931 79.9499C96.8689 80.5036 96.6635 80.7804 96.6928 81.5672C96.7075 82.0626 97.4264 82.8057 97.8811 82.8057C98.2479 82.8057 99.7883 82.15 100.756 81.5964C103.911 79.7751 106.405 77.0214 108.165 73.408C109.5 70.6834 110.307 67.8569 110.835 64.229C111.099 62.3057 111.07 57.4248 110.762 55.7055C109.456 48.2748 105.906 42.4906 101.197 40.1448C99.4508 39.2852 97.0303 38.7606 96.3408 39.1103Z" fill="#3D3D3D"/>
        <path d="M91.2208 46.9345C90.4432 47.1967 89.8271 47.9544 89.8271 48.6829C89.8271 49.0908 90.0031 49.3531 90.898 50.2856C93.0252 52.5293 93.8761 54.0009 94.6243 56.7255C95.035 58.2408 94.991 62.0435 94.5362 63.8648C93.5827 67.6967 91.7636 70.9021 88.9029 73.8744C88.0667 74.734 87.964 75.3022 88.5214 75.8996C89.3136 76.7301 90.7953 76.0161 93.1426 73.6995C95.0644 71.8054 96.3407 69.8239 97.2209 67.3907C99.7735 60.3389 98.3065 52.5876 93.5387 47.9544C92.4824 46.9199 91.9689 46.7014 91.2208 46.9345Z" fill="#3D3D3D"/>
        <path d="M81.0103 54.234C80.5555 54.6857 80.4381 54.9042 80.4381 55.3268C80.4381 56.0844 80.6142 56.3467 81.5824 57.0023C83.2548 58.1242 84.1937 59.5666 84.3404 61.2567C84.5164 63.078 83.8123 64.3164 82.0812 65.2198C81.3183 65.6277 80.9956 65.8754 80.8195 66.2542C80.4381 67.0702 80.5115 67.6092 81.0983 68.192C81.5677 68.6583 81.6851 68.702 82.1839 68.6291C83.7683 68.4252 86.1302 66.6622 86.937 65.1032C87.7879 63.4277 88.0226 61.2422 87.5532 59.4209C87.0251 57.3666 85.4553 55.2685 83.6509 54.2049C82.3746 53.4618 81.7731 53.4618 81.0103 54.234Z" fill="#3D3D3D"/>
        <defs>
          <filter id="filter0_d_136_783" x="0.00610352" y="0.980469" width="142.033" height="142.63" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="9"/>
            <feGaussianBlur stdDeviation="6.5"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_136_783"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_136_783" result="shape"/>
          </filter>
        </defs>
      </svg>
    </div>
    )}

  return (
    <div className={"easeIn button"} style={{ position: 'absolute', bottom: 5, right: 20, height: 110, width: 110 }} onClick={handleSound}>
      <svg viewBox="0 0 143 143" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_136_786)">
          <path d="M128.744 63.7382C132.223 95.8968 104.392 123.139 71.2097 121.544C40.8368 120.614 13.0061 95.5444 13.0061 63.4724C21.837 10.4506 47.9283 2.87597 71.2097 5.40086C103.502 5.40086 128.744 31.6661 128.744 63.7382Z" fill="#E2E2E2"/>
        </g>
        <path d="M60.104 3.45153C51.0412 4.72724 41.6216 8.51895 35.0921 13.4801C31.1316 16.4922 25.8866 21.9139 23.3533 25.6702C21.1411 28.8949 17.0022 36.9744 16.2885 39.4196C16.1101 40.0928 15.6106 41.7584 15.2181 43.1404C13.0416 50.5466 11.8999 57.2795 12.0069 62.028C12.0426 64.7921 12.0783 64.8984 12.2567 63.162C12.4351 61.5319 12.5421 61.9926 12.7919 65.9969C13.1844 72.1274 13.5768 76.5924 13.6839 75.9191C13.7909 74.9623 14.2904 76.2381 15.3252 80.2778C18.5721 93.1058 26.3147 104.02 37.2329 111.214C41.5503 114.049 44.2976 115.36 49.5783 117.061C52.1473 117.876 54.7877 118.762 55.4656 119.01L56.7144 119.471H55.4656C54.0741 119.506 51.0412 118.762 49.7924 118.124C49.3643 117.876 48.722 117.628 48.4009 117.557C47.1164 117.273 41.6216 114.828 39.9446 113.765C38.9813 113.163 37.5897 112.348 36.9118 111.958C34.9851 110.859 32.0949 108.414 28.1701 104.658C24.0312 100.689 23.3176 99.9096 23.2105 99.2009C23.1749 98.9528 22.4612 97.9252 21.6406 96.9684C20.82 96.0116 20.142 95.0548 20.142 94.8776C20.142 94.665 19.8209 93.8854 19.4284 93.1058C19.0359 92.3262 18.7148 91.582 18.7148 91.4049C18.7148 91.2277 18.4294 90.6607 18.0726 90.1646C17.1449 88.818 15.9674 85.487 14.9327 81.3763C14.1834 78.2579 14.112 78.1162 14.2904 79.9943C14.5759 82.8647 16.574 88.7471 18.7862 93.2476C23.5317 102.886 32.4161 111.356 43.1559 116.458C53.5389 121.42 63.6721 123.369 76.8738 122.943C85.8653 122.624 92.0023 121.101 99.3881 117.309C108.665 112.525 115.088 106.501 122.009 96.1179C127.183 88.3573 129.895 82.2268 131.358 75.175C132.214 70.9226 132.214 61.3547 131.358 56.6062C129.538 46.8966 124.828 37.0453 117.442 27.4775C116.8 26.6624 115.694 25.1387 114.945 24.111C111.876 19.7523 103.991 12.8068 99.7093 10.6451C98.8173 10.1845 97.7112 9.58204 97.2116 9.26311C95.8558 8.44807 91.3601 6.67625 87.7563 5.57772C86.008 5.04617 84.2953 4.55006 84.0099 4.44375C79.6212 3.09717 66.4195 2.53018 60.104 3.45153ZM64.3857 5.54228C64.3857 5.61316 63.2082 5.86121 61.8167 6.10927C55.644 7.10149 47.6159 10.468 41.015 14.8266C37.6254 17.0591 29.1692 24.0401 26.0293 27.1585L23.1749 30.0289L24.9232 27.5483C25.8866 26.2017 27.2424 24.3945 27.956 23.5086C29.9541 21.0635 35.5559 15.6771 36.7334 15.0747C37.34 14.7558 38.5174 13.9762 39.4094 13.3029C43.2629 10.3616 52.4684 6.88887 58.6768 5.96752C62.2449 5.47141 64.3857 5.29423 64.3857 5.54228ZM80.9771 7.73934C82.9395 8.05827 84.7949 8.41264 85.0803 8.51895C85.8296 8.80244 85.8653 8.80244 87.0427 9.12137C89.6117 9.79466 94.4999 12.0272 99.7449 14.8975C102.92 16.6339 110.235 21.8785 110.556 22.6935C110.663 22.9416 109.914 22.5164 108.879 21.7368C101.672 16.3858 91.3601 12.1335 81.9404 10.6451C72.9133 9.19224 61.0317 9.68835 53.4318 11.7791C50.2206 12.665 49.9351 12.665 51.6478 11.7437C54.0384 10.468 63.4223 7.56216 66.1697 7.24323C69.6664 6.818 76.517 7.03061 80.9771 7.73934ZM75.1968 12.1335C83.2963 12.8068 92.1807 15.1456 98.6389 18.3349C100.815 19.3979 103.242 20.7445 104.098 21.347C104.919 21.9494 106.489 23.0479 107.559 23.7921C109.2 24.9615 113.518 29.0367 116.158 31.8361C117.086 32.8638 120.154 37.506 121.01 39.2424C123.33 43.8491 125.007 52.5665 125.221 61.0358C125.328 65.0401 124.686 71.525 124.008 73.6158C123.829 74.1827 123.472 75.8837 123.258 77.3011C123.044 78.754 122.58 80.5967 122.224 81.3763C121.867 82.1914 121.474 83.2545 121.367 83.786C120.725 86.2311 115.908 95.1966 114.053 97.3582C113.732 97.748 113.089 98.5276 112.626 99.13C111.627 100.406 103.634 108.521 103.313 108.556C102.314 108.662 101.85 108.91 101.065 109.69C99.3525 111.391 90.8248 115.254 85.901 116.529C82.654 117.38 81.9048 117.663 83.2249 117.557C86.5789 117.203 91.8596 115.431 97.176 112.808C108.487 107.316 118.227 95.8344 123.08 82.3331C125.221 76.3444 126.791 67.1663 126.826 60.5397C126.826 58.9805 126.933 57.8111 127.04 57.9528C127.326 58.2363 127.255 71.2769 126.969 73.4386C126.148 79.7108 124.757 84.8137 122.545 89.5622C119.619 95.9407 118.049 98.7048 115.837 101.433C113.339 104.481 106.952 110.363 105.168 111.285C104.597 111.568 103.848 112.064 103.456 112.419C102.243 113.446 99.1384 115.183 97.5328 115.75C96.6764 116.033 95.0708 116.636 94.0004 117.061C92.93 117.451 91.3244 118.018 90.4324 118.301C89.5404 118.549 87.792 119.081 86.5075 119.506C82.7254 120.675 67.4542 120.959 68.1678 119.825C68.2749 119.648 67.6326 119.506 66.7763 119.506C62.8871 119.506 54.0384 116.14 47.5089 112.206C39.5878 107.387 32.4161 100.547 27.2067 92.7514C25.0302 89.4913 20.142 80.3487 20.142 79.5336C20.142 79.3565 19.6782 77.6909 19.1073 75.8837C16.7167 68.1585 16.3242 58.1654 18.1439 50.7592C19.7495 44.2389 20.0707 43.353 22.4612 38.8526C26.172 31.9425 32.309 24.5008 36.9118 21.347C44.1192 16.4567 54.9661 12.9839 65.6345 12.1689C70.7725 11.7437 70.5941 11.7437 75.1968 12.1335ZM113.268 25.0678C113.732 25.5639 114.017 25.9537 113.91 25.9537C113.839 25.9537 113.375 25.5639 112.911 25.0678C112.447 24.5717 112.162 24.1819 112.269 24.1819C112.34 24.1819 112.804 24.5717 113.268 25.0678ZM128.289 48.633C130.252 54.4092 131.072 59.9727 131.144 67.5916C131.179 72.1274 131.072 73.9347 130.787 74.1473C130.537 74.289 130.287 75.2458 130.18 76.3089C130.073 77.372 129.681 79.0021 129.324 79.9943C128.931 80.9511 128.468 82.4749 128.218 83.3608C127.79 85.0617 125.506 89.9874 125.007 90.3063C124.828 90.4126 125.007 89.8102 125.363 88.9597C127.861 83.0773 129.288 76.3798 129.574 69.009C130.002 58.13 128.254 48.7748 124.329 40.6244C123.936 39.8448 123.615 39.0298 123.651 38.8526C123.686 38.2856 127.469 46.2588 128.289 48.633ZM126.719 57.2087C126.612 57.4922 126.505 57.3858 126.505 56.996C126.47 56.6062 126.577 56.3936 126.684 56.5354C126.791 56.6417 126.826 56.9606 126.719 57.2087ZM20.7129 86.4438C24.8162 94.8776 32.9513 104.729 40.2301 110.044C42.8347 111.958 43.2272 112.383 41.5146 111.497C38.0893 109.761 32.5588 104.977 27.4922 99.3781C25.28 96.8975 21.2481 90.0937 19.8923 86.5501C18.251 82.2623 16.9308 78.2579 16.9308 77.7264C16.9665 77.4075 17.5017 78.6123 18.1439 80.4196C18.8218 82.2268 19.9636 84.92 20.7129 86.4438Z" fill="#3D3D3D"/>
        <path d="M77.4091 118.088C76.41 118.336 76.4457 118.371 77.8729 118.407C78.8363 118.442 79.3358 118.3 79.1931 118.088C78.9433 117.698 78.9433 117.698 77.4091 118.088Z" fill="#3D3D3D"/>
        <path d="M74.84 118.336C75.1611 118.407 75.6606 118.407 75.9104 118.336C76.1245 118.23 75.8747 118.159 75.2681 118.159C74.6972 118.159 74.4832 118.23 74.84 118.336Z" fill="#3D3D3D"/>
        <path d="M72.8776 118.691C73.1273 118.797 73.4485 118.762 73.5555 118.655C73.6982 118.549 73.4841 118.443 73.0917 118.478C72.6992 118.478 72.5921 118.584 72.8776 118.691Z" fill="#3D3D3D"/>
        <path d="M76.3744 27.6578C74.0858 28.3572 71.6946 30.4844 67.7336 35.307C63.5379 40.4211 59.5036 44.7338 57.259 46.5113C54.9265 48.3617 52.9607 49.4399 52.1098 49.3379C50.7014 49.1631 42.7795 50.0518 40.3296 50.6638C39.1413 50.9698 38.9652 50.9843 38.6718 50.7949C38.3051 50.5472 37.5716 50.6492 37.3075 50.9843C37.1168 51.2029 37.0434 51.7128 36.5006 57.5262C35.8405 64.447 35.8551 67.9729 36.574 71.3677C36.8527 72.7519 37.5862 74.8937 37.9677 75.4619C38.085 75.6513 38.1877 75.899 38.1877 76.0155C38.1877 76.1175 38.3051 76.3652 38.4518 76.5255C38.6718 76.8169 38.9799 76.8752 40.9751 77.0791C42.2954 77.2103 44.7893 77.3123 46.9165 77.3268C50.3934 77.3414 50.6134 77.3268 51.2736 77.0209L51.9484 76.7149L52.4765 77.56C53.1954 78.711 55.2199 81.2316 56.8776 83.0091C58.3886 84.641 65.5184 91.2557 67.3082 92.669C67.9536 93.179 69.0393 93.8783 69.7288 94.2134C70.565 94.6214 71.3425 95.1459 72.076 95.8307C73.2349 96.8797 74.4379 97.7248 75.5528 98.2639C76.125 98.5407 76.2864 98.5553 76.7851 98.4096C77.372 98.2347 77.7974 97.6811 77.7974 97.1129C77.7974 96.9526 77.9441 96.5155 78.1201 96.1221C78.4429 95.4227 78.4575 95.2188 78.5602 88.8517C78.6189 85.2383 78.7363 75.7387 78.8096 67.7252C78.8977 57.3514 79.015 52.1936 79.1764 49.8042C79.7632 41.1059 79.7632 35.3653 79.1764 31.0817C79.0444 30.1638 78.9417 29.2459 78.9563 29.0419C78.971 28.4591 78.6923 27.9492 78.2522 27.6869C77.7534 27.3955 77.2252 27.381 76.3744 27.6578ZM76.4477 35.8316L76.4037 36.7203L75.0394 35.4527L73.675 34.1852L74.966 33.0487L76.257 31.8977L76.3744 33.4275C76.4331 34.258 76.4624 35.3507 76.4477 35.8316ZM76.3157 38.8038C76.4184 38.8038 76.4771 39.1389 76.4771 39.6197C76.4771 40.5668 76.5357 40.5668 75.0394 39.6926C74.0565 39.1244 71.9586 37.5071 71.4452 36.9389C71.1664 36.6475 71.1811 36.6183 71.8559 35.9044L72.5454 35.1613L74.3499 36.9826C75.3475 37.9879 76.2277 38.8038 76.3157 38.8038ZM71.8413 39.2118C73.3963 40.7125 75.1567 42.0384 75.9343 42.2861L76.4037 42.4463L76.345 43.7139C76.3304 44.4278 76.2864 45.0106 76.257 45.0398C76.1983 45.1126 73.499 43.3934 70.653 41.4701L68.2617 39.8529L69.186 38.833C69.6847 38.2647 70.1542 37.7985 70.2275 37.7839C70.3009 37.7839 71.0344 38.425 71.8413 39.2118ZM68.3791 41.6741C69.3033 42.3152 71.8559 44.2384 74.4232 46.1908C75.0247 46.657 75.6702 47.1379 75.8462 47.2544C76.1396 47.4584 76.1543 47.5312 76.037 48.828C75.9783 49.571 75.8756 50.2267 75.8316 50.2704C75.6702 50.4452 71.8119 47.9829 69.1713 46.0305C67.6309 44.8941 66.1492 43.8013 65.8558 43.5974C65.5624 43.4079 65.3277 43.204 65.3277 43.1457C65.3277 43.0291 67.2348 40.9893 67.3375 40.9893C67.3668 40.9893 67.8363 41.2953 68.3791 41.6741ZM65.1516 44.7921C65.5771 45.1272 67.4695 46.6133 69.3327 48.0995C72.7215 50.7803 74.3792 51.9751 75.2888 52.3539L75.7729 52.5433L75.6702 53.7963C75.6115 54.4811 75.5528 55.0639 75.5382 55.0785C75.3475 55.2825 63.3765 47.8955 62.2176 46.861C61.9829 46.657 62.0415 46.5551 63.0978 45.4186C63.7139 44.7484 64.2567 44.2093 64.2861 44.1947C64.3154 44.1947 64.7115 44.457 65.1516 44.7921ZM62.7457 48.7843C63.3179 49.3525 64.6528 50.4015 65.6944 51.1155C66.7507 51.8294 68.3938 53.0096 69.362 53.7381C71.6652 55.4719 73.3963 56.6958 74.5406 57.366C75.5528 57.9779 75.5528 57.9488 75.3621 59.7555L75.2594 60.6442L74.5113 59.974C72.5454 58.2256 64.9609 53.7818 59.7383 51.334L57.4498 50.2704L58.5647 49.4399C59.1808 48.9737 60.0464 48.2743 60.4865 47.8664C61.2934 47.1233 61.2934 47.1233 61.4987 47.4438C61.6161 47.6187 62.1736 48.2306 62.7457 48.7843ZM58.9314 52.1645C63.7726 54.554 66.0172 56.0401 70.4623 59.77C72.2667 61.2853 73.9831 62.48 74.8193 62.8297C75.2594 63.0046 75.2594 63.0191 75.3475 64.4178C75.4061 65.19 75.4501 66.3265 75.4501 66.9239L75.4355 68.0166L75.1127 67.5795C73.3816 65.2775 70.565 62.9026 64.5355 58.7064C60.8386 56.1275 56.8189 53.8109 53.6942 52.4996C52.5499 52.0042 52.4472 51.7857 53.3714 51.7711C53.6208 51.7711 54.3397 51.5817 54.9851 51.3486C55.6306 51.13 56.2908 50.9698 56.4522 51.0135C56.6135 51.0426 57.7285 51.5671 58.9314 52.1645ZM53.1367 53.2427C56.2615 54.8891 59.0635 56.6083 62.1002 58.7647C64.4328 60.4257 65.5184 61.3436 70.0368 65.6126C73.0736 68.4974 74.6286 69.8087 75.1127 69.9399C75.4501 70.0127 75.4501 70.0419 75.4501 72.4313V74.8645L74.5699 73.8883C74.0858 73.3638 72.7508 72.0816 71.6065 71.0472C70.4623 70.0273 68.7018 68.4392 67.6896 67.5212C66.6773 66.6179 64.2567 64.549 62.3203 62.9463C60.3838 61.329 57.9485 59.2892 56.8923 58.4004C53.8262 55.7924 51.5083 54.0877 49.7039 53.1261C48.7356 52.6162 48.7796 52.5433 50.0706 52.4559C50.5107 52.4268 51.0095 52.3976 51.1562 52.383C51.3176 52.3685 52.1978 52.7619 53.1367 53.2427ZM47.1806 53.8983C53.2541 57.6428 59.4302 62.684 66.7213 69.8379C71.1078 74.136 73.3376 76.1612 74.746 77.0791L75.3181 77.458L75.2301 78.7838C75.1714 79.5123 75.0981 80.2263 75.0541 80.372C75.01 80.5614 74.0271 79.7017 70.9317 76.7149C64.6382 70.6538 61.2053 67.5795 56.5255 63.7768C52.3592 60.3965 46.5204 56.2732 42.5301 53.8983L40.931 52.9513L41.8699 52.893C42.3834 52.8639 43.3956 52.8347 44.0998 52.8201L45.3908 52.791L47.1806 53.8983ZM41.5912 54.8454C47.0045 58.619 51.9924 62.7423 61.5868 71.3677C67.3082 76.5255 71.2838 80.0369 73.2936 81.7124L74.8487 83.0237V83.9707C74.834 84.4953 74.79 85.5297 74.7313 86.2728L74.6433 87.6424L73.0442 85.9086C72.1787 84.9615 69.8314 82.5575 67.8363 80.5614C59.753 72.4459 50.9802 65.0589 40.6376 57.6282L39.3613 56.7249V54.8599C39.376 53.5632 39.42 53.0824 39.5227 53.2572C39.5961 53.3884 40.5203 54.1023 41.5912 54.8454ZM42.2954 60.5131C52.6086 68.7888 63.0831 78.5361 72.7215 88.8225C73.6017 89.755 74.3939 90.5272 74.4966 90.5272C74.6286 90.5272 74.7166 90.8478 74.79 91.518C74.834 92.0571 74.9367 92.8876 75.01 93.3829C75.0981 93.8638 75.1567 94.3591 75.1567 94.4611C75.1567 94.5631 74.4819 93.9366 73.6604 93.0624C68.5405 87.6278 60.9266 80.3283 56.0854 76.2341C51.5376 72.373 45.9336 68.1478 41.7379 65.394L39.508 63.937V61.1105C39.508 58.8813 39.552 58.3276 39.6987 58.4296C39.7868 58.5024 40.9604 59.4495 42.2954 60.5131ZM42.3394 67.1424C45.4788 69.6776 50.4667 73.8592 50.5987 74.0923C50.6721 74.1943 50.5841 74.2234 50.3053 74.1506C50.1 74.1069 49.1904 74.1214 48.2955 74.2234L46.6818 74.3837L45.3321 73.5532C43.557 72.4605 42.0753 71.3531 40.843 70.1876L39.8308 69.2405L39.7428 67.6815C39.6841 66.8219 39.6254 65.8748 39.5961 65.5689C39.5667 65.2775 39.5814 65.0298 39.6254 65.0298C39.6841 65.0298 40.9017 65.9768 42.3394 67.1424ZM43.381 74.1943L43.9531 74.5731L43.381 74.6751C43.0729 74.7188 42.2807 74.8062 41.6205 74.8645L40.4323 74.9665L40.3442 73.9757C40.2856 73.4221 40.1975 72.6062 40.1535 72.1691L40.0508 71.3823L41.4298 72.5916C42.1927 73.2618 43.0729 73.9757 43.381 74.1943Z" fill="#3D3D3D"/>
        <path d="M65 57.4995L79.9999 35.9989C79.9999 35.9989 85.0785 27.3581 87.0001 27.9992C88.5 28.4997 85.1374 33.9219 85.1374 33.9219L68.4999 58.499C68.4999 58.499 57.6854 72.0763 50.9999 81.499C47.9913 85.7394 42.8444 92.5687 41.4222 92.0337C40 91.4986 42.6147 88.2636 49 78.4995C55.3853 68.7354 65 57.4995 65 57.4995Z" fill="#3D3D3D" stroke="#3D3D3D"/>
        <defs>
          <filter id="filter0_d_136_786" x="0.00610352" y="0.980469" width="142.033" height="142.63" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="9"/>
            <feGaussianBlur stdDeviation="6.5"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_136_786"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_136_786" result="shape"/>
          </filter>
        </defs>
      </svg>
    </div>
  );
}