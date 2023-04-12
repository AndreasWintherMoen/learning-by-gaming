import React, { useEffect } from 'react';
import useData from "../hooks/useData";
import useLevel from "../hooks/useLevel";
import { store } from '../redux/store';

interface RGBColor {
  r: number;
  g: number;
  b: number;

}
function lerp(start:number, end:number, t:number) {
  return start + (end - start) * t;
}

function interpolateColor(startColor:RGBColor, endColor:RGBColor, chargePower:number) {
  const interpolatedRGB = {
    r: Math.round(lerp(startColor.r, endColor.r, chargePower)),
    g: Math.round(lerp(startColor.g, endColor.g, chargePower)),
    b: Math.round(lerp(startColor.b, endColor.b, chargePower)),
  };
  return `rgb(${interpolatedRGB.r}, ${interpolatedRGB.g}, ${interpolatedRGB.b})`;
}

function NewPowerBar() {
  const { isCharging, chargePower, setChargePower, level } = useData();
  const levelInfo = useLevel(level);

  const HEIGHT = 257;
  const startColor = { r: 142, g: 252, b: 140 };
  const endColor = { r: 255, g: 83, b: 83 };
  const currentColor = interpolateColor(startColor, endColor, chargePower);

  useEffect(() => {
    if (!isCharging) return;
    const start = Date.now();
    function animate() {
      const now = Date.now();
      const elapsed = now - start;
      const t = elapsed / 1000;
      if (t >= 1) {
        setChargePower(1);
        return;
      }
      setChargePower(t);
      // We have to access Redux directly because we are inside a callback function and this function was registered 
      // on the useEffect call and won't update isCharging when it changes.
      const currentIsCharge = store.getState().game.isCharging;
      if (!currentIsCharge) return;
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }, [isCharging]);

  if (level === 0 || !levelInfo?.showPowerBar) return null;

  return (
    <div style={{ position: 'absolute', bottom: '50%', left: 20, height: HEIGHT/2, width: 1 }}>
      <svg width="102" height={HEIGHT} viewBox="0 0 102 257" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 5L98 4L88.5 129.5L87.5 255H9.5L5 5Z" fill="#E2E2E2"/>
        <g clipPath="url(#clip0_229_2394)">
          <path d="M92.5638 1.96C90.0304 1.56 80.5638 2.36 70.9638 1.96C61.4971 1.56 46.4305 0.76 37.6305 0.36C23.7638 -0.440001 2.15278 0.0933408 0.55278 1.96001C-1.18055 4.22667 1.55274 20 3.38483 86.4933C1.91816 119.293 5.76377 175.396 6.16378 213.16C4.96377 226.36 4.83044 236.227 5.76377 244.493L6.96377 256.493L47.4971 256.093C90.1638 255.827 90.7861 258.493 89.0527 252.76C88.6527 251.293 88.2971 245.293 87.6304 242.893C86.4304 237.96 89.3638 120.093 91.6304 85.8267C95.2304 29.0267 96.7527 21.4 97.5527 13C97.5527 13 100.553 3 100.053 2.5C99.5527 2 92.5638 1.96 92.5638 1.96ZM89.7638 67.96C87.2304 107.293 84.2971 196.627 84.2971 228.627L84.4304 252.76L63.6305 253.96C39.6304 255.293 14.6971 255.427 11.3638 254.093C9.23044 253.293 8.96377 250.76 8.96377 227.293C8.96377 213.16 9.49711 195.56 10.2971 188.36C6.96377 162.396 5.76377 117.56 6.96377 88.4933C8.96377 38.2267 4.16377 7.29333 5.76377 6.09333C7.23044 5.02667 48.2971 4.22667 78.8304 6.09333L95.0527 5.5L92.5638 21.6933C92.0304 29.8267 90.8304 50.6267 89.7638 67.96Z" fill="#3D3D3D"/>
          <path d="M5 5L98 4L88.5 129.5L87.5 255H9.5L5 5Z" fill={currentColor}/>
        </g>
        <path d="M93.5638 1.96C91.0304 1.56 81.5638 2.36 71.9638 1.96C62.4971 1.56 47.4305 0.76 38.6305 0.36C24.7638 -0.440001 3.15278 0.0933408 1.55278 1.96001C-0.180554 4.22667 2.55274 20 4.38483 86.4933C2.91816 119.293 6.76377 175.396 7.16378 213.16C5.96377 226.36 5.83044 236.227 6.76377 244.493L7.96377 256.493L48.4971 256.093C91.1638 255.827 91.7861 258.493 90.0527 252.76C89.6527 251.293 89.2971 245.293 88.6304 242.893C87.4304 237.96 90.3638 120.093 92.6304 85.8267C96.2304 29.0267 97.7527 21.4 98.5527 13C98.5527 13 101.553 3 101.053 2.5C100.553 2 93.5638 1.96 93.5638 1.96ZM90.7638 67.96C88.2304 107.293 85.2971 196.627 85.2971 228.627L85.4304 252.76L64.6305 253.96C40.6304 255.293 15.6971 255.427 12.3638 254.093C10.2304 253.293 9.96377 250.76 9.96377 227.293C9.96377 213.16 10.4971 195.56 11.2971 188.36C7.96377 162.396 6.76377 117.56 7.96377 88.4933C9.96377 38.2267 5.16377 7.29333 6.76377 6.09333C8.23044 5.02667 49.2971 4.22667 79.8304 6.09333L96.0527 5.5L93.5638 21.6933C93.0304 29.8267 91.8304 50.6267 90.7638 67.96Z" fill="#3D3D3D"/>
        <defs>
          <clipPath id="clip0_229_2394">
            <rect width="93" height={HEIGHT} fill="white" transform={`translate(5 ${HEIGHT - HEIGHT * chargePower})`}/>
          </clipPath>
        </defs>
        <path d="M86.9637 14.4932C85.7637 14.4932 84.9637 15.1598 85.2303 15.9598C85.497 16.7598 86.297 17.4265 86.9637 17.4265C87.6303 17.4265 88.4303 16.7598 88.697 15.9598C88.9637 15.1598 88.1637 14.4932 86.9637 14.4932Z" fill="#3D3D3D"/>
        <path d="M86.2971 23.1602C85.6304 23.5602 84.9637 24.4935 84.9637 25.2935C84.9637 25.9602 85.6304 26.4935 86.2971 26.4935C87.0971 26.4935 87.6304 25.5602 87.6304 24.3602C87.6304 23.2935 87.0971 22.7602 86.2971 23.1602Z" fill="#3D3D3D"/>
        <path d="M86.4306 44.6265C85.7639 44.0932 84.8306 44.3598 84.4306 45.0265C83.8972 45.6932 84.1639 46.6265 84.8306 47.0265C85.4972 47.5598 86.4306 47.2932 86.8306 46.6265C87.3639 45.9598 87.0972 45.0265 86.4306 44.6265Z" fill="#3D3D3D"/>
        <path d="M84.9636 35.1606C84.2969 34.7606 83.6302 35.294 83.6302 36.494C83.6302 37.694 84.2969 38.2273 84.9636 37.8273C85.7636 37.4273 86.2969 36.7606 86.2969 36.494C86.2969 36.2273 85.7636 35.5606 84.9636 35.1606Z" fill="#3D3D3D"/>
        <path d="M83.6306 52.4932C82.9639 52.8932 82.2972 53.8265 82.2972 54.6265C82.2972 55.2932 82.9639 55.8265 83.6306 55.8265C84.4306 55.8265 84.9639 54.8932 84.9639 53.6932C84.9639 52.6265 84.4306 52.0932 83.6306 52.4932Z" fill="#3D3D3D"/>
        <path d="M82.9638 75.8262C81.7638 75.8262 80.9638 76.4928 81.2305 77.2928C81.4971 78.0928 82.2971 78.7595 82.9638 78.7595C83.6305 78.7595 84.4305 78.0928 84.6971 77.2928C84.9638 76.4928 84.1638 75.8262 82.9638 75.8262Z" fill="#3D3D3D"/>
        <path d="M83.6306 86.4932C82.9639 86.4932 82.2972 87.1598 82.2972 87.8265C82.2972 88.6265 82.9639 89.1598 83.6306 89.1598C84.4306 89.1598 84.9639 88.6265 84.9639 87.8265C84.9639 87.1598 84.4306 86.4932 83.6306 86.4932Z" fill="#3D3D3D"/>
        <path d="M82.2971 97.8266C81.6304 98.2266 80.9637 98.8933 80.9637 99.2933C80.9637 99.5599 81.6304 99.8266 82.2971 99.8266C83.0971 99.8266 83.6304 99.1599 83.6304 98.3599C83.6304 97.6933 83.0971 97.4266 82.2971 97.8266Z" fill="#3D3D3D"/>
        <path d="M80.9636 109.16C80.2969 109.16 79.6302 109.827 79.6302 110.493C79.6302 111.293 80.2969 111.827 80.9636 111.827C81.7636 111.827 82.2969 111.293 82.2969 110.493C82.2969 109.827 81.7636 109.16 80.9636 109.16Z" fill="#3D3D3D"/>
        <path d="M80.9636 135.161C80.2969 134.761 79.6302 135.027 79.6302 135.694C79.6302 136.494 80.2969 137.161 80.9636 137.161C81.7636 137.161 82.2969 136.894 82.2969 136.627C82.2969 136.227 81.7636 135.561 80.9636 135.161Z" fill="#3D3D3D"/>
        <path d="M79.6307 122.493C78.964 122.493 78.2974 123.16 78.2974 123.826C78.2974 124.626 78.964 125.16 79.6307 125.16C80.4307 125.16 80.964 124.626 80.964 123.826C80.964 123.16 80.4307 122.493 79.6307 122.493Z" fill="#3D3D3D"/>
        <path d="M79.6302 145.826C78.8302 146.359 78.5636 147.293 78.9636 147.959C80.1636 149.826 80.9636 149.426 80.9636 147.026C80.9636 145.959 80.2969 145.426 79.6302 145.826Z" fill="#3D3D3D"/>
        <path d="M79.4972 170.493C78.8305 170.493 78.5638 171.16 78.9638 171.826C79.3638 172.626 80.0305 173.16 80.4305 173.16C80.6972 173.16 80.9638 172.626 80.9638 171.826C80.9638 171.16 80.2972 170.493 79.4972 170.493Z" fill="#3D3D3D"/>
        <path d="M78.8304 182.493C77.7637 182.493 77.2304 183.16 77.6304 183.826C78.1637 184.626 79.097 184.893 79.7637 184.493C81.6304 183.293 81.2304 182.493 78.8304 182.493Z" fill="#3D3D3D"/>
        <path d="M79.6307 213.16C78.964 213.16 78.2974 213.827 78.2974 214.627C78.2974 215.293 78.964 215.56 79.6307 215.16C80.4307 214.76 80.964 214.093 80.964 213.693C80.964 213.427 80.4307 213.16 79.6307 213.16Z" fill="#3D3D3D"/>
        <path d="M78.8304 235.826C77.7637 235.826 77.2304 236.493 77.6304 237.16C78.1637 237.96 79.097 238.226 79.7637 237.826C81.6304 236.626 81.2304 235.826 78.8304 235.826Z" fill="#3D3D3D"/>
        <path d="M68.3328 248C67.2661 248 66.7328 248.667 67.1328 249.333C67.6661 250.133 68.5995 250.4 69.2661 250C71.1328 248.8 70.7328 248 68.3328 248Z" fill="#3D3D3D"/>
        <path d="M78.2972 191.826C77.6305 191.826 76.9639 192.493 76.9639 193.16C76.9639 193.96 77.6305 194.493 78.2972 194.493C79.0972 194.493 79.6305 193.96 79.6305 193.16C79.6305 192.493 79.0972 191.826 78.2972 191.826Z" fill="#3D3D3D"/>
        <path d="M78.1637 203.826C77.497 203.826 77.2303 204.493 77.6303 205.16C78.0303 205.96 78.697 206.493 79.097 206.493C79.3637 206.493 79.6303 205.96 79.6303 205.16C79.6303 204.493 78.9637 203.826 78.1637 203.826Z" fill="#3D3D3D"/>
        <path d="M78.2972 225.16C77.6305 225.16 76.9639 226.093 76.9639 227.16C76.9639 228.227 77.6305 229.16 78.2972 229.16C79.0972 229.16 79.6305 228.227 79.6305 227.16C79.6305 226.093 79.0972 225.16 78.2972 225.16Z" fill="#3D3D3D"/>
        <path d="M75.4969 10.7604C74.6969 11.027 74.1636 11.827 74.1636 12.4937C74.1636 13.1604 74.6969 13.9604 75.4969 14.227C76.2969 14.4937 76.9636 13.6937 76.9636 12.4937C76.9636 11.2937 76.2969 10.4937 75.4969 10.7604Z" fill="#3D3D3D"/>
        <path d="M67.6307 11.1606C66.964 10.7606 66.2974 11.0273 66.2974 11.6939C66.2974 12.4939 66.964 13.1606 67.6307 13.1606C68.4307 13.1606 68.964 12.8939 68.964 12.6273C68.964 12.2273 68.4307 11.5606 67.6307 11.1606Z" fill="#3D3D3D"/>
        <path d="M59.6307 249.16C58.964 249.16 58.2974 249.827 58.2974 250.493C58.2974 251.293 58.964 251.827 59.6307 251.827C60.4307 251.827 60.964 251.293 60.964 250.493C60.964 249.827 60.4307 249.16 59.6307 249.16Z" fill="#3D3D3D"/>
        <path d="M59.6307 249.16C58.964 249.16 58.2974 249.827 58.2974 250.493C58.2974 251.293 58.964 251.827 59.6307 251.827C60.4307 251.827 60.964 251.293 60.964 250.493C60.964 249.827 60.4307 249.16 59.6307 249.16Z" fill="#3D3D3D"/>
        <path d="M78.3333 247C77.6667 247 77 247.667 77 248.333C77 249.133 77.6667 249.667 78.3333 249.667C79.1333 249.667 79.6667 249.133 79.6667 248.333C79.6667 247.667 79.1333 247 78.3333 247Z" fill="#3D3D3D"/>
        <path d="M58.2972 10.4932C57.6305 10.4932 56.9639 11.1598 56.9639 11.9598C56.9639 12.6265 57.6305 12.8932 58.2972 12.4932C59.0972 12.0932 59.6305 11.4265 59.6305 11.0265C59.6305 10.7598 59.0972 10.4932 58.2972 10.4932Z" fill="#3D3D3D"/>
        <path d="M19.3861 11C18.7194 11 18.0527 11.6667 18.0527 12.4667C18.0527 13.1333 18.7194 13.4 19.3861 13C20.1861 12.6 20.7194 11.9333 20.7194 11.5333C20.7194 11.2667 20.1861 11 19.3861 11Z" fill="#3D3D3D"/>
        <path d="M51.7637 247.16C51.097 246.76 50.1637 247.027 49.6304 247.827C49.2304 248.494 49.7637 249.16 50.8304 249.16C53.2304 249.16 53.6304 248.36 51.7637 247.16Z" fill="#3D3D3D"/>
        <path d="M48.9637 9.82661C48.297 10.2266 47.6304 10.8933 47.6304 11.2933C47.6304 11.5599 48.297 11.8266 48.9637 11.8266C49.7637 11.8266 50.297 11.1599 50.297 10.3599C50.297 9.69328 49.7637 9.42661 48.9637 9.82661Z" fill="#3D3D3D"/>
        <path d="M43.6307 247.826C42.964 247.826 42.2974 248.493 42.2974 249.16C42.2974 249.96 42.964 250.493 43.6307 250.493C44.4307 250.493 44.964 249.96 44.964 249.16C44.964 248.493 44.4307 247.826 43.6307 247.826Z" fill="#3D3D3D"/>
        <path d="M42.2972 9.16016C41.6305 9.16016 40.9639 9.82682 40.9639 10.4935C40.9639 11.2935 41.6305 11.8268 42.2972 11.8268C43.0972 11.8268 43.6305 11.2935 43.6305 10.4935C43.6305 9.82682 43.0972 9.16016 42.2972 9.16016Z" fill="#3D3D3D"/>
        <path d="M35.6307 246.493C34.964 246.493 34.2974 247.16 34.2974 247.826C34.2974 248.626 34.964 249.16 35.6307 249.16C36.4307 249.16 36.964 248.626 36.964 247.826C36.964 247.16 36.4307 246.493 35.6307 246.493Z" fill="#3D3D3D"/>
        <path d="M32.9637 9.82664C32.297 9.42664 31.6304 9.95997 31.6304 11.16C31.6304 12.36 32.297 12.8933 32.9637 12.4933C33.7637 12.0933 34.297 11.4266 34.297 11.16C34.297 10.8933 33.7637 10.2266 32.9637 9.82664Z" fill="#3D3D3D"/>
        <path d="M11.3861 16.1328C10.5861 16.6661 10.3194 17.5995 10.7194 18.2661C11.9194 20.1328 12.7194 19.7328 12.7194 17.3328C12.7194 16.2661 12.0528 15.7328 11.3861 16.1328Z" fill="#3D3D3D"/>
        <path d="M11.3861 28.1333C10.7194 27.7333 10.0527 27.9999 10.0527 28.6666C10.0527 29.4666 10.7194 30.1333 11.3861 30.1333C12.1861 30.1333 12.7194 29.8666 12.7194 29.5999C12.7194 29.1999 12.1861 28.5333 11.3861 28.1333Z" fill="#3D3D3D"/>
        <path d="M11.3861 41.1602C10.7194 41.1602 10.0527 41.8268 10.0527 42.4935C10.0527 43.2935 10.7194 43.8268 11.3861 43.8268C12.1861 43.8268 12.7194 43.2935 12.7194 42.4935C12.7194 41.8268 12.1861 41.1602 11.3861 41.1602Z" fill="#3D3D3D"/>
        <path d="M11.3861 63.1602C10.5861 63.6935 10.3194 64.6268 10.7194 65.2935C11.9194 67.1602 12.7194 66.7602 12.7194 64.3602C12.7194 63.2935 12.0528 62.7602 11.3861 63.1602Z" fill="#3D3D3D"/>
        <path d="M11.3861 74.4932C10.7194 74.4932 10.0527 75.4265 10.0527 76.6265C10.0527 77.6932 10.7194 78.2265 11.3861 77.8265C12.1861 77.4265 12.7194 76.4932 12.7194 75.6932C12.7194 75.0265 12.1861 74.4932 11.3861 74.4932Z" fill="#3D3D3D"/>
        <path d="M11.3861 129C10.7194 129 10.0527 129.933 10.0527 131.133C10.0527 132.2 10.7194 132.733 11.3861 132.333C12.1861 131.933 12.7194 131 12.7194 130.2C12.7194 129.533 12.1861 129 11.3861 129Z" fill="#3D3D3D"/>
        <path d="M11.3861 89C10.7194 89 10.0527 89.6667 10.0527 90.3333C10.0527 91.1333 10.7194 91.6667 11.3861 91.6667C12.1861 91.6667 12.7194 91.1333 12.7194 90.3333C12.7194 89.6667 12.1861 89 11.3861 89Z" fill="#3D3D3D"/>
        <path d="M12.6993 100.564C12.8146 99.9076 12.2732 99.1357 11.6165 99.0205C10.8286 98.8822 10.188 99.4466 10.0728 100.103C9.93452 100.891 10.3676 101.509 11.1556 101.647C11.8122 101.762 12.561 101.352 12.6993 100.564Z" fill="#3D3D3D"/>
        <path d="M11.3861 51C10.7194 51 10.0527 51.6667 10.0527 52.3333C10.0527 53.1333 10.7194 53.6667 11.3861 53.6667C12.1861 53.6667 12.7194 53.1333 12.7194 52.3333C12.7194 51.6667 12.1861 51 11.3861 51Z" fill="#3D3D3D"/>
        <path d="M24.9636 247.16C24.2969 247.56 23.6302 248.493 23.6302 249.293C23.6302 249.96 24.2969 250.493 24.9636 250.493C25.7636 250.493 26.2969 249.56 26.2969 248.36C26.2969 247.293 25.7636 246.76 24.9636 247.16Z" fill="#3D3D3D"/>
        <path d="M10.774 115C10.1073 115 9.84067 115.667 10.2407 116.333C10.6407 117.133 11.3073 117.667 11.7073 117.667C11.974 117.667 12.2407 117.133 12.2407 116.333C12.2407 115.667 11.574 115 10.774 115Z" fill="#3D3D3D"/>
        <path d="M13.3404 140C12.5404 140 11.607 140.667 11.207 141.333C10.807 142.133 11.3404 142.667 12.407 142.667C13.607 142.667 14.5404 142.133 14.5404 141.333C14.5404 140.667 14.007 140 13.3404 140Z" fill="#3D3D3D"/>
        <path d="M12.407 150.666C11.3404 150.666 10.807 151.333 11.207 151.999C11.7404 152.799 12.6737 153.066 13.3404 152.666C15.207 151.466 14.807 150.666 12.407 150.666Z" fill="#3D3D3D"/>
        <path d="M13.3855 176C12.3189 176 11.7855 176.667 12.1855 177.333C12.7189 178.133 13.6522 178.4 14.3189 178C16.1855 176.8 15.7855 176 13.3855 176Z" fill="#3D3D3D"/>
        <path d="M13.3403 160.667C11.8737 159.867 10.2737 161.867 11.4737 163.2C12.6737 164.4 14.5403 164.133 14.5403 162.8C14.5403 162 14.007 161.2 13.3403 160.667Z" fill="#3D3D3D"/>
        <path d="M16.9636 188.493C16.2969 188.893 15.6302 189.559 15.6302 189.959C15.6302 190.226 16.2969 190.493 16.9636 190.493C17.7636 190.493 18.2969 189.826 18.2969 189.026C18.2969 188.359 17.7636 188.093 16.9636 188.493Z" fill="#3D3D3D"/>
        <path d="M17.0972 200.626C16.1639 200.093 15.0972 199.96 14.6972 200.36C13.4972 201.56 15.2305 202.893 17.0972 202.226C18.5639 201.693 18.5639 201.426 17.0972 200.626Z" fill="#3D3D3D"/>
        <path d="M15.6306 211.826C14.9639 211.826 14.2972 212.493 14.2972 213.293C14.2972 213.96 14.9639 214.226 15.6306 213.826C16.4306 213.426 16.9639 212.76 16.9639 212.36C16.9639 212.093 16.4306 211.826 15.6306 211.826Z" fill="#3D3D3D"/>
        <path d="M15.6306 225.16C14.9639 225.16 14.2972 226.093 14.2972 227.293C14.2972 228.36 14.9639 228.893 15.6306 228.493C16.4306 228.093 16.9639 227.16 16.9639 226.36C16.9639 225.693 16.4306 225.16 15.6306 225.16Z" fill="#3D3D3D"/>
        <path d="M15.6306 238.493C14.9639 238.493 14.2972 239.16 14.2972 239.96C14.2972 240.626 14.9639 240.893 15.6306 240.493C16.4306 240.093 16.9639 239.426 16.9639 239.026C16.9639 238.76 16.4306 238.493 15.6306 238.493Z" fill="#3D3D3D"/>
        <path d="M15.6306 246.493C14.9639 246.493 14.2972 247.426 14.2972 248.626C14.2972 249.693 14.9639 250.226 15.6306 249.826C16.4306 249.426 16.9639 248.493 16.9639 247.693C16.9639 247.026 16.4306 246.493 15.6306 246.493Z" fill="#3D3D3D"/>
      </svg>
    </div>
  );
}

export default NewPowerBar;