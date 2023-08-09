import { SVGProps } from 'react'

export const MortySvg = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="76"
      height="80"
      viewBox="0 0 76 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M40.3945 0.898457C39.5829 0.904639 38.7592 0.939663 37.9238 1.00393C31.5668 1.49293 25.7109 2.49744 20.7461 4.69924C15.7813 6.90104 11.7115 10.3408 9.10547 15.5528C6.97841 19.8059 -0.108653 28.6224 2.02344 38.2168C2.58264 40.732 3.40647 42.9933 4.45117 45.0391C1.80179 46.4792 0 49.2815 0 52.5C0 57.1126 3.70641 60.8787 8.29297 60.9903C13.549 72.2344 24.6207 80 38 80C51.2784 80 62.3097 72.8364 67.6094 61.9942C72.2412 61.9346 76 58.1456 76 53.5C76 50.0517 73.9342 47.0783 70.9707 45.75C70.9666 45.6304 70.9662 45.51 70.9609 45.3906C71.7196 43.8378 72.385 42.1473 72.9551 40.2949C74.0653 36.6866 73.5382 31.5999 72.4121 26.7637C71.286 21.9275 69.5688 17.429 67.8008 15.0156C62.4228 7.67444 53.8155 1.66386 42.793 0.964863C42.0056 0.914934 41.2061 0.892275 40.3945 0.898457ZM40.4102 2.8965C41.1766 2.89078 41.9315 2.91249 42.6738 2.959C53.0663 3.61021 61.1005 9.25323 66.1875 16.1973C67.5945 18.1179 69.3797 22.5669 70.4629 27.2188C71.5461 31.8706 71.9347 36.8134 71.0449 39.7051C70.8899 40.2088 70.6895 40.6246 70.5078 41.0762C68.3789 28.0545 59.3987 17.0839 47.1641 13.3633C47.0884 13.3401 47.0134 13.3156 46.9375 13.293C46.5661 13.1831 46.1917 13.0808 45.8145 12.9844C45.6666 12.9464 45.5179 12.9109 45.3691 12.875C45.0389 12.7958 44.7075 12.7191 44.373 12.6504C44.1562 12.6056 43.9373 12.5657 43.7188 12.5254C43.4321 12.4729 43.145 12.4217 42.8555 12.377C42.59 12.3358 42.3226 12.3021 42.0547 12.2676C41.7914 12.2339 41.5292 12.1971 41.2637 12.1699C40.9734 12.1401 40.6797 12.1216 40.3867 12.0996C40.1355 12.0809 39.8859 12.0558 39.6328 12.043C39.0927 12.0155 38.5484 12 38 12C37.4337 12 36.8719 12.0154 36.3145 12.043C36.1255 12.0523 35.9399 12.0716 35.752 12.084C35.3854 12.1083 35.0186 12.13 34.6562 12.166C34.3938 12.192 34.1353 12.2297 33.875 12.2617C33.607 12.2949 33.3379 12.3238 33.0723 12.3633C32.7469 12.4114 32.4252 12.4699 32.1035 12.5274C31.9068 12.5627 31.709 12.596 31.5137 12.6348C31.1518 12.7062 30.7944 12.788 30.4375 12.8711C30.2942 12.9047 30.1503 12.9372 30.0078 12.9727C29.6017 13.0731 29.2001 13.1816 28.8008 13.2969C28.7252 13.3189 28.6495 13.3408 28.5742 13.3633C15.933 17.1152 6.79903 28.2672 5.24414 41.8633C4.74418 40.5888 4.3028 39.2505 3.97656 37.7832C2.10865 29.3776 8.50359 21.2281 10.8945 16.4473C13.2885 11.6593 16.9207 8.58331 21.5566 6.52736C26.1926 4.47141 31.8362 3.47611 38.0762 2.99611C38.8658 2.93538 39.6437 2.90223 40.4102 2.8965ZM38 14C38.5488 14 39.0926 14.0157 39.6328 14.0449C39.6354 14.0451 39.638 14.0448 39.6406 14.0449C39.6996 14.0481 39.7575 14.0551 39.8164 14.0586C40.2829 14.0867 40.7474 14.1225 41.207 14.1719C41.4144 14.1942 41.6183 14.2274 41.8242 14.2539C42.1376 14.2943 42.4518 14.3308 42.7617 14.3809C42.9602 14.4129 43.1546 14.4543 43.3516 14.4903C43.6775 14.5498 44.0043 14.6095 44.3262 14.6797C44.4922 14.7159 44.6554 14.7599 44.8203 14.7988C45.1518 14.8772 45.4837 14.9555 45.8105 15.0449C46.0182 15.1017 46.222 15.1654 46.4277 15.2266C46.7095 15.3104 46.9915 15.3925 47.2695 15.4844C47.4948 15.5589 47.7166 15.641 47.9395 15.7207C48.1924 15.8113 48.4456 15.9009 48.6953 15.9981C48.9325 16.0904 49.1662 16.1908 49.4004 16.2891C49.625 16.3833 49.8504 16.4766 50.0723 16.5762C50.328 16.691 50.5801 16.8117 50.832 16.9336C51.032 17.0303 51.2322 17.1275 51.4297 17.2285C51.6662 17.3496 51.8999 17.4764 52.1328 17.6035C52.3506 17.7224 52.5686 17.8407 52.7832 17.9649C52.9964 18.0882 53.2061 18.2173 53.416 18.3457C53.6289 18.476 53.8413 18.6068 54.0508 18.7422C54.2811 18.8911 54.5082 19.0442 54.7344 19.1992C54.9091 19.319 55.0837 19.4392 55.2559 19.5625C55.4991 19.7368 55.7385 19.9164 55.9766 20.0977C56.1391 20.2214 56.3009 20.3457 56.4609 20.4727C56.6817 20.6479 56.8992 20.8266 57.1152 21.0078C57.2896 21.154 57.4636 21.3012 57.6348 21.4512C57.8388 21.63 58.0408 21.812 58.2402 21.9961C58.4038 22.147 58.5661 22.2987 58.7266 22.4531C58.9373 22.6561 59.1443 22.8614 59.3496 23.0703C59.4945 23.2177 59.6372 23.3674 59.7793 23.5176C59.9757 23.7253 60.1703 23.9353 60.3613 24.1485C60.5075 24.3115 60.6519 24.4764 60.7949 24.6426C60.9857 24.8643 61.1743 25.0893 61.3594 25.3164C61.4839 25.4692 61.6067 25.6242 61.7285 25.7793C61.9245 26.0289 62.1176 26.2795 62.3066 26.5352C62.4051 26.6683 62.5011 26.8028 62.5977 26.9375C62.8007 27.2209 63.0009 27.5067 63.1953 27.7969C63.277 27.9187 63.3554 28.043 63.4355 28.166C63.6307 28.4658 63.8239 28.7676 64.0098 29.0742C64.0831 29.1952 64.1547 29.3175 64.2266 29.4395C64.4138 29.7572 64.5982 30.0759 64.7754 30.4004C64.8372 30.5135 64.8965 30.6283 64.957 30.7422C65.1373 31.0816 65.3152 31.4232 65.4844 31.7696C65.5316 31.8662 65.5747 31.9654 65.6211 32.0625C65.7966 32.4305 65.9701 32.8005 66.1328 33.1758C66.16 33.2384 66.1841 33.3025 66.2109 33.3653C66.3867 33.7772 66.5586 34.1913 66.7188 34.6113C66.7202 34.6152 66.7212 34.6192 66.7227 34.6231C66.7315 34.6463 66.7392 34.6701 66.748 34.6934C66.9195 35.1466 67.0815 35.6024 67.2344 36.0645C68.1985 38.9794 68.7891 42.0654 68.9512 45.2442C68.9518 45.2507 68.9524 45.2572 68.9531 45.2637C68.9725 45.6486 68.9797 46.0363 68.9863 46.4238C68.9863 46.431 68.9863 46.4382 68.9863 46.4453C68.9896 46.6402 69 46.8338 69 47.0293C69 47.0299 69 47.0307 69 47.0313C69 47.0365 69 47.0416 69 47.0469C68.9997 47.633 68.9824 48.2133 68.9531 48.7891C68.9455 48.94 68.9314 49.0881 68.9219 49.2383C68.8943 49.6686 68.8619 50.0974 68.8184 50.5215C68.8016 50.6859 68.7788 50.8483 68.7598 51.0117C68.7105 51.4304 68.6583 51.8476 68.5938 52.2598C68.5735 52.3899 68.551 52.519 68.5293 52.6485C68.4518 53.1066 68.3676 53.562 68.2715 54.0117C68.2545 54.0922 68.2364 54.1718 68.2188 54.252C68.1031 54.7735 67.978 55.2913 67.8379 55.8008C67.383 57.4545 66.8005 59.0423 66.1016 60.5567C66.076 60.6132 66.0557 60.6721 66.041 60.7324C61.1735 71.1582 50.7346 78 38 78C25.2215 78 14.7276 70.543 9.88672 59.7207C9.87361 59.6707 9.85663 59.6217 9.83594 59.5742C9.15525 58.0361 8.58682 56.4313 8.14258 54.7715C8.13874 54.7572 8.13468 54.7429 8.13086 54.7285C7.99454 54.2165 7.87423 53.698 7.76172 53.1758C7.74765 53.11 7.73244 53.0445 7.71875 52.9785C7.62282 52.5198 7.53808 52.0559 7.46094 51.5899C7.44084 51.4674 7.41918 51.3457 7.40039 51.2227C7.33224 50.7807 7.27748 50.3348 7.22656 49.8867C7.21196 49.757 7.19284 49.6283 7.17969 49.4981C7.13674 49.0769 7.10753 48.6507 7.08008 48.2246C7.0696 48.0602 7.05308 47.8975 7.04492 47.7324C7.01623 47.1586 7 46.5818 7 46C7 45.9456 7.00366 45.8922 7.00391 45.8379C7.00391 45.8373 7.00391 45.8366 7.00391 45.836C7.00649 45.2845 7.02269 44.7358 7.05078 44.1914C7.07881 43.6484 7.11899 43.1096 7.17188 42.5742C7.17329 42.5599 7.17434 42.5456 7.17578 42.5313C7.22788 42.0106 7.29013 41.4933 7.36523 40.9805C7.36975 40.9497 7.37626 40.9195 7.38086 40.8887C7.45544 40.3891 7.54074 39.8938 7.63672 39.4024C7.8395 38.364 8.08966 37.344 8.38477 36.3457C8.53232 35.8466 8.69151 35.3534 8.86133 34.8653C9.03115 34.3771 9.21079 33.8945 9.40234 33.418C9.59389 32.9415 9.79703 32.47 10.0098 32.0059C10.2168 31.5542 10.4336 31.1093 10.6602 30.6699C10.7444 30.5066 10.835 30.3471 10.9219 30.1856C11.077 29.897 11.231 29.6071 11.3945 29.3242C11.4684 29.1965 11.5495 29.0738 11.625 28.9473C11.8091 28.6389 11.9936 28.3305 12.1875 28.0293C12.2402 27.9474 12.2962 27.8685 12.3496 27.7871C12.5771 27.441 12.8065 27.0977 13.0469 26.7617C13.3384 26.3542 13.6392 25.9526 13.9492 25.5606C13.963 25.5432 13.9784 25.5272 13.9922 25.5098C14.2883 25.1369 14.592 24.7703 14.9043 24.4121C14.968 24.3391 15.0353 24.2697 15.0996 24.1973C15.3616 23.9025 15.6256 23.6104 15.8984 23.3262C16.0332 23.1859 16.1732 23.0518 16.3105 22.9141C16.5291 22.6949 16.7457 22.4741 16.9707 22.2617C17.0512 22.1858 17.1355 22.1142 17.2168 22.0391C17.5065 21.7715 17.7978 21.5061 18.0977 21.25C18.4718 20.9304 18.8546 20.6196 19.2441 20.3184C19.4315 20.1735 19.6256 20.037 19.8164 19.8965C20.0232 19.7443 20.2267 19.5885 20.4375 19.4414C20.7163 19.247 21.0034 19.0622 21.2891 18.877C21.4236 18.7898 21.5554 18.6984 21.6914 18.6133C22.0021 18.4189 22.3203 18.2361 22.6387 18.0528C22.7554 17.9855 22.8686 17.9134 22.9863 17.8477C23.1589 17.7514 23.337 17.6634 23.5117 17.5703C23.7912 17.4215 24.0687 17.2692 24.3535 17.1289C24.7947 16.9117 25.2417 16.7041 25.6953 16.5078C25.6985 16.5064 25.7019 16.5053 25.7051 16.5039C26.0045 16.3746 26.3106 16.2567 26.6152 16.1367C26.7871 16.069 26.9554 15.9944 27.1289 15.9297C27.3127 15.8612 27.5019 15.8034 27.6875 15.7383C27.9905 15.632 28.2919 15.5228 28.5996 15.4258C29.0822 15.2737 29.5707 15.1327 30.0645 15.0039C30.0696 15.0026 30.0749 15.0014 30.0801 15C30.274 14.9496 30.4724 14.9101 30.668 14.8633C30.9785 14.789 31.2869 14.7114 31.6016 14.6465C31.7607 14.6137 31.9238 14.589 32.084 14.5586C32.4425 14.4906 32.8006 14.421 33.1641 14.3653C33.6871 14.2851 34.2152 14.2182 34.748 14.1641C35.8139 14.0558 36.898 14 38 14ZM25.668 23.3164C21.1712 23.3235 18.2422 25.0703 18.2422 25.0703C18.1858 25.1042 18.1366 25.1488 18.0974 25.2017C18.0582 25.2546 18.0298 25.3146 18.0139 25.3785C17.9979 25.4423 17.9947 25.5087 18.0044 25.5738C18.014 25.6389 18.0365 25.7014 18.0703 25.7578C18.1042 25.8143 18.1488 25.8635 18.2017 25.9026C18.2546 25.9418 18.3146 25.9702 18.3785 25.9862C18.4423 26.0021 18.5087 26.0053 18.5738 25.9957C18.6388 25.986 18.7014 25.9636 18.7578 25.9297C18.7578 25.9297 23.5507 23.034 30.3633 24.9805C30.4274 25.0019 30.4951 25.0101 30.5625 25.0046C30.6298 24.9991 30.6953 24.98 30.7551 24.9484C30.8148 24.9169 30.8676 24.8736 30.9101 24.8211C30.9527 24.7686 30.9841 24.708 31.0026 24.643C31.0211 24.5781 31.0262 24.51 31.0177 24.443C31.0092 24.376 30.9871 24.3114 30.9529 24.2531C30.9187 24.1948 30.8731 24.1441 30.8187 24.1039C30.7644 24.0638 30.7025 24.0351 30.6367 24.0196C28.8399 23.5062 27.1669 23.3141 25.668 23.3164ZM49.707 23.3399C49.3644 23.3422 49.0313 23.3529 48.7109 23.3692C46.148 23.4994 44.3633 24.0196 44.3633 24.0196C44.2975 24.0351 44.2356 24.0638 44.1813 24.1039C44.1269 24.1441 44.0813 24.1948 44.0471 24.2531C44.0129 24.3114 43.9908 24.376 43.9823 24.443C43.9738 24.51 43.9789 24.5781 43.9974 24.643C44.0159 24.708 44.0473 24.7686 44.0899 24.8211C44.1324 24.8736 44.1852 24.9169 44.2449 24.9484C44.3047 24.98 44.3702 24.9991 44.4375 25.0046C44.5049 25.0101 44.5726 25.0019 44.6367 24.9805C44.6367 24.9805 51.496 23.0566 57.2773 25.9473C57.3364 25.9798 57.4014 26 57.4685 26.0068C57.5355 26.0135 57.6033 26.0066 57.6676 25.9865C57.732 25.9664 57.7916 25.9335 57.8429 25.8898C57.8942 25.8461 57.9361 25.7924 57.9662 25.7321C57.9962 25.6717 58.0137 25.6059 58.0177 25.5387C58.0217 25.4714 58.012 25.404 57.9892 25.3405C57.9665 25.277 57.9311 25.2188 57.8853 25.1694C57.8395 25.1199 57.7842 25.0803 57.7227 25.0528C55.002 23.6924 52.1057 23.3235 49.707 23.3399ZM18.5547 29.5254C18.4594 29.5246 18.3659 29.551 18.2852 29.6016C17.5822 30.0311 16.9311 30.5368 16.3438 31.1074C16.2965 31.1532 16.2588 31.2079 16.2327 31.2682C16.2066 31.3286 16.1927 31.3935 16.1917 31.4592C16.1907 31.525 16.2027 31.5903 16.2269 31.6514C16.2511 31.7125 16.2872 31.7683 16.333 31.8155C16.3788 31.8627 16.4334 31.9004 16.4938 31.9265C16.5541 31.9526 16.619 31.9665 16.6848 31.9675C16.7505 31.9685 16.8158 31.9565 16.8769 31.9323C16.9381 31.908 16.9938 31.872 17.041 31.8262C17.5756 31.3068 18.1676 30.8456 18.8066 30.4551C18.9004 30.3992 18.9734 30.3142 19.0143 30.213C19.0553 30.1118 19.062 30 19.0335 29.8946C19.0049 29.7893 18.9426 29.6961 18.8562 29.6295C18.7697 29.5628 18.6639 29.5263 18.5547 29.5254ZM30.0059 29.9141C29.9021 29.9211 29.8031 29.9602 29.7226 30.0261C29.6421 30.0921 29.5842 30.1814 29.5569 30.2818C29.5296 30.3821 29.5343 30.4885 29.5703 30.5861C29.6063 30.6837 29.6719 30.7676 29.7578 30.8262C31.8197 32.2832 33.1903 34.5512 33.6895 37.1231C30.462 36.6247 27.2265 36.4232 23.9824 36.543C20.7093 36.6639 17.429 37.1115 14.1426 37.8555C14.2998 36.4728 14.6806 35.159 15.3438 34.0078C15.3797 33.9509 15.4038 33.8873 15.4146 33.8208C15.4254 33.7544 15.4227 33.6864 15.4066 33.621C15.3905 33.5557 15.3613 33.4942 15.3209 33.4404C15.2804 33.3865 15.2295 33.3414 15.1712 33.3077C15.1129 33.274 15.0484 33.2525 14.9816 33.2443C14.9148 33.2362 14.847 33.2416 14.7823 33.2603C14.7176 33.279 14.6573 33.3105 14.6051 33.3531C14.5529 33.3956 14.5099 33.4482 14.4785 33.5078C13.6101 35.0152 13.0865 36.7499 13.0195 38.5977C13.0188 38.6238 13.0201 38.6499 13.0234 38.6758C13.013 38.7767 13 38.8613 13 39C13 45.0692 17.9308 50 24 50C30.0692 50 35 45.0692 35 39C35 38.6188 34.962 38.2579 34.9219 37.9004C34.9298 37.854 34.9311 37.8066 34.9258 37.7598C34.5665 34.5618 32.8354 31.7759 30.3359 30.0098C30.2546 29.9505 30.1572 29.9171 30.0566 29.9141C30.0397 29.9132 30.0228 29.9132 30.0059 29.9141ZM58.1309 30C58.0277 30.0063 57.929 30.0445 57.8484 30.1092C57.7678 30.1739 57.7092 30.262 57.6807 30.3614C57.6523 30.4607 57.6553 30.5665 57.6894 30.6641C57.7234 30.7616 57.7869 30.8463 57.8711 30.9063C59.8336 32.3354 61.1449 34.5113 61.6621 36.9727C60.1833 36.7754 58.7027 36.6278 57.2207 36.5606C52.2134 36.3333 47.187 36.8544 42.1465 38.0977C42.2239 37.1694 42.3458 36.2523 42.666 35.418C42.6896 35.3567 42.7009 35.2913 42.6992 35.2257C42.6976 35.16 42.683 35.0953 42.6564 35.0353C42.6297 34.9753 42.5915 34.9211 42.5439 34.8758C42.4963 34.8305 42.4402 34.7951 42.3789 34.7715C42.3176 34.7479 42.2523 34.7366 42.1866 34.7383C42.1209 34.7399 42.0562 34.7545 41.9962 34.7812C41.9362 34.8078 41.882 34.846 41.8367 34.8937C41.7915 34.9413 41.756 34.9973 41.7324 35.0586C41.2755 36.2492 41.0195 37.5398 41.0059 38.8867C41.0057 38.8932 41.0057 38.8998 41.0059 38.9063C41.0028 38.9427 41 38.9458 41 39C41 45.0692 45.9308 50 52 50C58.0692 50 63 45.0692 63 39C63 38.4877 62.9604 37.9872 62.8926 37.4981C62.8873 37.462 62.8782 37.4267 62.8652 37.3926C62.4256 34.4035 60.7942 31.8002 58.459 30.0996C58.3648 30.0288 58.2486 29.9935 58.1309 30ZM45.5391 30.2207C45.4266 30.2221 45.3179 30.2613 45.2305 30.3321C44.3862 30.993 43.6416 31.7737 43.0215 32.6504C42.9835 32.704 42.9565 32.7646 42.9419 32.8286C42.9274 32.8927 42.9256 32.959 42.9366 33.0237C42.9477 33.0885 42.9714 33.1504 43.0064 33.206C43.0414 33.2616 43.087 33.3097 43.1406 33.3477C43.1942 33.3856 43.2548 33.4127 43.3188 33.4272C43.3829 33.4418 43.4492 33.4436 43.5139 33.4325C43.5787 33.4215 43.6406 33.3977 43.6962 33.3627C43.7518 33.3277 43.7999 33.2821 43.8379 33.2285C44.4018 32.4313 45.0779 31.7202 45.8457 31.1192C45.9294 31.0556 45.991 30.9674 46.0217 30.8668C46.0524 30.7663 46.0507 30.6587 46.0168 30.5592C45.9828 30.4598 45.9184 30.3735 45.8326 30.3128C45.7469 30.252 45.6442 30.2198 45.5391 30.2207ZM26.5039 37.5137C27.3316 37.5259 28.1598 37.5594 28.9863 37.6133C28.9909 37.6136 28.9954 37.6149 29 37.6153C29.2553 37.632 29.5104 37.663 29.7656 37.6836C31.1598 37.8065 32.552 37.9915 33.9434 38.2442C33.9688 38.4964 34 38.749 34 39C34 44.5288 29.5288 49 24 49C18.4765 49 14.0085 44.5371 14 39.0156C16.3474 38.4164 18.6893 37.9972 21.0254 37.7539C21.1907 37.7377 21.3563 37.7119 21.5215 37.6973H21.5234C21.7703 37.6755 22.0169 37.6685 22.2637 37.6504C22.1089 37.8757 22.0185 38.1389 22.0025 38.4117C21.9864 38.6846 22.0451 38.9566 22.1724 39.1985C22.2997 39.4404 22.4906 39.6429 22.7246 39.7841C22.9586 39.9254 23.2267 40 23.5 40C23.7858 39.9999 24.0656 39.9182 24.3065 39.7645C24.5474 39.6108 24.7394 39.3914 24.8599 39.1322C24.9803 38.8731 25.0242 38.5849 24.9864 38.3016C24.9486 38.0183 24.8307 37.7517 24.6465 37.5332C25.266 37.5185 25.8851 37.5046 26.5039 37.5137ZM55.2051 37.5137C55.8616 37.5199 56.518 37.5258 57.1738 37.5606H57.1758C58.7635 37.6447 60.3498 37.8207 61.9336 38.0723C61.9653 38.3794 62 38.6863 62 39C62 44.5288 57.5288 49 52 49C46.5659 49 42.1902 44.6691 42.041 39.2715C44.3337 38.6396 46.6205 38.1794 48.9023 37.8867C49.6905 37.7913 50.4786 37.7089 51.2656 37.6504C51.1109 37.8755 51.0206 38.1386 51.0044 38.4113C50.9883 38.6839 51.0469 38.9558 51.1739 39.1976C51.3009 39.4394 51.4916 39.642 51.7253 39.7834C51.959 39.9248 52.2269 39.9997 52.5 40C52.786 39.9999 53.066 39.918 53.307 39.764C53.5479 39.61 53.7399 39.3904 53.8602 39.1309C53.9805 38.8715 54.0241 38.583 53.9859 38.2996C53.9477 38.0162 53.8292 37.7496 53.6445 37.5313C54.1646 37.5175 54.6855 37.511 55.2051 37.5137ZM39.4941 46.9942C39.3946 46.9942 39.2972 47.0239 39.2147 47.0796C39.1321 47.1353 39.068 47.2144 39.0307 47.3067C38.9933 47.399 38.9844 47.5004 39.005 47.5978C39.0257 47.6952 39.0749 47.7843 39.1465 47.8535C39.1465 47.8535 40.3619 49.0766 41.1934 50.502C41.6091 51.2147 41.9143 51.9732 41.9531 52.5938C41.9919 53.2143 41.8393 53.6729 41.2227 54.084C40.5953 54.5022 39.9549 54.5532 39.2559 54.3887C38.5569 54.2242 37.8239 53.8213 37.1699 53.3457C35.862 52.3945 34.8906 51.1875 34.8906 51.1875C34.8496 51.1362 34.7988 51.0935 34.7413 51.0618C34.6838 51.0301 34.6205 51.0101 34.5552 51.0028C34.4234 50.9882 34.2911 51.0265 34.1875 51.1094C34.0839 51.1923 34.0175 51.3129 34.0028 51.4448C33.9882 51.5766 34.0265 51.7089 34.1094 51.8125C34.1094 51.8125 35.138 53.1056 36.5801 54.1543C37.3011 54.6787 38.1306 55.1508 39.0254 55.3613C39.9201 55.5719 40.9047 55.4978 41.7773 54.916C42.6607 54.3271 43.0081 53.4107 42.9531 52.5313C42.8982 51.6518 42.5159 50.7854 42.0566 49.9981C41.1381 48.4235 39.8535 47.1465 39.8535 47.1465C39.8069 47.0983 39.751 47.06 39.6893 47.0338C39.6276 47.0076 39.5612 46.9942 39.4941 46.9942ZM5.02539 47.0938C5.14787 51.2067 5.95715 55.136 7.34961 58.7598C4.32307 58.2045 2 55.6921 2 52.5C2 50.1984 3.2282 48.2451 5.02539 47.0938ZM70.9746 48.0957C72.7714 49.2468 74 51.1989 74 53.5C74 56.714 71.6493 59.2489 68.5918 59.7793C70.0234 56.1941 70.8528 52.2631 70.9746 48.0957ZM39.2812 63.5313C33.6831 63.5751 29.3438 65.0254 29.3438 65.0254C29.279 65.0439 29.2187 65.0754 29.1665 65.1178C29.1142 65.1602 29.071 65.2127 29.0395 65.2722C29.008 65.3317 28.9888 65.3969 28.9832 65.464C28.9775 65.531 28.9854 65.5986 29.0065 65.6625C29.0275 65.7264 29.0612 65.7855 29.1057 65.8361C29.1501 65.8866 29.2042 65.9277 29.2649 65.9569C29.3256 65.986 29.3915 66.0026 29.4588 66.0057C29.526 66.0087 29.5932 65.9982 29.6562 65.9746C29.6563 65.9746 39.4978 62.7529 48.3281 65.9707C48.3899 65.9933 48.4556 66.0035 48.5213 66.0007C48.5871 65.9979 48.6517 65.9822 48.7113 65.9544C48.771 65.9267 48.8246 65.8874 48.8691 65.839C48.9136 65.7905 48.9482 65.7337 48.9708 65.6719C48.9933 65.6101 49.0035 65.5444 49.0007 65.4787C48.9979 65.4129 48.9822 65.3484 48.9544 65.2887C48.9267 65.229 48.8874 65.1754 48.8389 65.1309C48.7905 65.0864 48.7337 65.0519 48.6719 65.0293C46.3584 64.1863 43.9938 63.766 41.748 63.6074C40.9059 63.548 40.081 63.525 39.2812 63.5313Z"
        fill="#A2A2A2"
      />
    </svg>
  )
}