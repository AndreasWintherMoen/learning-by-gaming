import useData from '../hooks/useData';
import React, { useEffect } from 'react';
import useTheme from "../hooks/useTheme";


interface FunctionInputPickerProps {
  variable: number;
  onClick: (value: number) => void;
  color: string;
}
export default function FunctionInputPicker({ variable, onClick, color }: FunctionInputPickerProps) {
  const theme = useTheme();

  return (
    <>
      <div style={{ height: '100%'}}>
        <div style={{ color: color, display:'flex', height:'100%', alignItems:'center', justifyContent:'space-between', flexDirection:'column'}}>
          <div style={{maxHeight:20, width:30, padding: 2}} onClick={() => onClick(variable + 0.5)}>
            <svg viewBox="0 0 39 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.450832 29.7544C0.850121 29.7544 1.29377 29.5327 1.42687 29.311C1.91489 28.5573 3.06838 28.8233 3.29021 29.7544C3.46767 30.4637 3.64513 30.5524 4.13315 30.1534C4.48807 29.843 4.66553 29.2667 4.53244 28.8233C4.31061 28.2026 4.7099 27.9366 6.61761 27.3602C8.39222 26.8725 9.945 25.8528 12.8731 23.3256C16.6885 20.0448 18.1969 19.1137 19.8385 19.1137C20.6814 19.1137 24.763 22.2616 28.3122 25.6311C29.4214 26.6952 30.6192 27.5376 30.9741 27.4489C31.3291 27.3602 31.5509 27.5819 31.5065 27.8479C31.4178 28.1583 31.9945 28.7346 32.7044 29.0893C33.4586 29.4883 34.0353 30.109 34.0353 30.5081C34.0353 31.0844 34.1684 31.1288 34.5234 30.7741C34.8339 30.4637 35.6325 30.3751 36.298 30.5081C37.0078 30.6411 37.5846 30.5967 37.6289 30.3751C37.7177 29.0893 38.0282 28.2469 38.5162 27.9366C39.093 27.6262 39.1374 26.0745 38.7381 22.8823C38.605 21.9069 38.4275 19.2911 38.3388 17.0743C38.1613 13.0397 37.6289 11.4879 36.298 11.2219C35.9431 11.1332 34.2128 10.2022 32.4382 9.09377C30.6192 8.02971 29.0221 7.14299 28.8002 7.14299C28.401 7.14299 22.8553 3.64044 21.0363 2.22169C20.2821 1.64532 19.8828 1.02461 20.0603 0.581255C20.5927 -0.793162 17.7533 0.448246 15.8012 2.44337C13.4499 4.79318 6.30705 9.35979 4.93172 9.35979C4.31061 9.35979 3.51204 9.89182 2.84656 10.7785C1.91489 12.1086 1.82616 12.6407 1.91489 16.2319C1.95925 18.4043 2.13671 21.1532 2.26981 22.2616C2.44727 23.37 2.31417 24.9217 2.00362 25.7641C1.64869 26.9169 1.60433 27.3159 2.00362 27.4489C2.84656 27.7149 2.62473 28.4243 1.69306 28.4243C1.24941 28.4243 0.628292 28.7346 0.317738 29.0893C-0.125916 29.6213 -0.125916 29.7544 0.450832 29.7544ZM4.31061 14.5914C4.31061 14.4141 4.93172 13.9264 5.7303 13.5274C7.41618 12.6407 11.0098 9.67014 14.9139 5.90158C19.173 1.82266 18.7737 1.73399 28.1348 9.27111C30.0425 10.8229 32.66 12.9067 33.9466 13.9264C35.2332 14.9461 36.3867 16.2319 36.5198 16.7639C36.6973 17.3403 36.5642 19.025 36.2536 20.5325C35.9874 22.0842 35.6325 24.035 35.5438 24.8774C35.4107 25.7198 35.1888 26.5622 35.0114 26.7395C34.5234 27.2272 31.2847 24.7887 31.5509 24.1237C31.684 23.8133 31.5509 23.5473 31.3291 23.5473C31.0629 23.5473 29.865 22.8379 28.7115 21.9956C27.558 21.1532 26.4045 20.4438 26.1383 20.4438C25.8721 20.4438 25.5616 20.0448 25.3841 19.6014C25.1179 18.759 23.6095 17.9166 22.7666 18.1383C22.5447 18.227 22.0567 18.0053 21.6574 17.6506C20.6814 16.8082 16.6442 14.6358 16.4223 14.8131C16.3336 14.9018 16.5554 15.2565 16.9103 15.5225C17.2653 15.8328 17.4427 16.3649 17.3096 16.7196C16.9547 17.695 5.50847 26.2075 4.5768 26.2075C4.13315 26.2075 4.00005 21.2418 4.31061 14.5914ZM33.0149 10.2465C33.2368 10.2465 33.9466 10.6455 34.7008 11.1332C36.1649 12.1086 35.6325 12.3303 33.8135 11.4879C32.7931 11.0446 32.3051 10.2465 33.0149 10.2465Z" fill={color}/>
            </svg>
          </div>
          {variable}
          <div style={{maxHeight:20, width:30, padding: 2}} onClick={() => onClick(variable - 0.5)}>
            <svg viewBox="0 0 39 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M38.5492 1.24565C38.1499 1.24565 37.7062 1.46733 37.5731 1.68901C37.0851 2.44272 35.9316 2.1767 35.7098 1.24565C35.5323 0.536269 35.3549 0.447597 34.8669 0.846621C34.5119 1.15697 34.3345 1.73334 34.4676 2.1767C34.6894 2.79741 34.2901 3.06342 32.3824 3.63979C30.6078 4.12749 29.055 5.14721 26.1269 7.67437C22.3115 10.9552 20.8031 11.8863 19.1615 11.8863C18.3186 11.8863 14.237 8.73843 10.6878 5.36889C9.57864 4.30483 8.38078 3.46244 8.02586 3.55112C7.67094 3.63979 7.44911 3.41811 7.49347 3.15209C7.58221 2.84174 7.00546 2.26537 6.29561 1.91068C5.5414 1.51166 4.96465 0.890956 4.96465 0.491931C4.96465 -0.0844369 4.83156 -0.128773 4.47664 0.225915C4.16608 0.536267 3.3675 0.624939 2.70202 0.491931C1.99218 0.358923 1.41543 0.403259 1.37107 0.624939C1.28234 1.91068 0.971779 2.75307 0.483761 3.06342C-0.0929876 3.37377 -0.137353 4.92553 0.261934 8.11773C0.39503 9.09312 0.572491 11.7089 0.661222 13.9257C0.838683 17.9603 1.37107 19.5121 2.70202 19.7781C3.05695 19.8668 4.78719 20.7978 6.5618 21.9062C8.38078 22.9703 9.97793 23.857 10.1998 23.857C10.599 23.857 16.1447 27.3596 17.9637 28.7783C18.7179 29.3547 19.1172 29.9754 18.9397 30.4187C18.4073 31.7932 21.2467 30.5518 23.1988 28.5566C25.5501 26.2068 32.693 21.6402 34.0683 21.6402C34.6894 21.6402 35.488 21.1082 36.1534 20.2215C37.0851 18.8914 37.1738 18.3593 37.0851 14.7681C37.0407 12.5957 36.8633 9.84683 36.7302 8.73843C36.5527 7.63003 36.6858 6.07827 36.9964 5.23589C37.3513 4.08315 37.3957 3.68413 36.9964 3.55112C36.1534 3.2851 36.3753 2.57573 37.3069 2.57573C37.7506 2.57573 38.3717 2.26537 38.6823 1.91069C39.1259 1.37865 39.1259 1.24565 38.5492 1.24565ZM34.6894 16.4086C34.6894 16.5859 34.0683 17.0736 33.2697 17.4726C31.5838 18.3593 27.9902 21.3299 24.0861 25.0984C19.827 29.1773 20.2263 29.266 10.8652 21.7289C8.95753 20.1771 6.33998 18.0933 5.05338 17.0736C3.76679 16.0539 2.61329 14.7681 2.4802 14.2361C2.30274 13.6597 2.43583 11.975 2.74639 10.4675C3.01258 8.91578 3.3675 6.96499 3.45623 6.12261C3.58933 5.28022 3.81116 4.43784 3.98862 4.26049C4.47664 3.7728 7.7153 6.21128 7.44911 6.87632C7.31601 7.18667 7.44911 7.45269 7.67094 7.45269C7.93713 7.45269 9.13499 8.16206 10.2885 9.00445C11.442 9.84683 12.5955 10.5562 12.8617 10.5562C13.1279 10.5562 13.4384 10.9552 13.6159 11.3986C13.8821 12.241 15.3905 13.0834 16.2334 12.8617C16.4553 12.773 16.9433 12.9947 17.3426 13.3494C18.3186 14.1918 22.3558 16.3642 22.5777 16.1869C22.6664 16.0982 22.4446 15.7435 22.0897 15.4775C21.7347 15.1672 21.5573 14.6351 21.6904 14.2804C22.0453 13.305 33.4915 4.79253 34.4232 4.79253C34.8669 4.79253 34.9999 9.75816 34.6894 16.4086ZM5.98505 20.7535C5.76323 20.7535 5.05338 20.3545 4.29917 19.8668C2.83512 18.8914 3.3675 18.6697 5.18648 19.5121C6.20688 19.9554 6.6949 20.7535 5.98505 20.7535Z" fill={color}/>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
