import React from 'react';
import { useTheme } from '../../components/layout';

const Feedback = props => {
  const white = useTheme().homepage.white;
  return (
    <svg
      width={32}
      height={32}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.00043 10.8482C1.00014 10.8218 1 10.7955 1 10.7691C1 7.03061 3.85114 4 7.36819 4C10.8853 4 13.7364 7.03061 13.7364 10.7691C13.7364 14.5075 10.8853 17.5381 7.36819 17.5381C7.35794 17.5381 7.34769 17.5381 7.33744 17.538H1.00043V10.8482Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.191 16.9138C13.8451 15.4464 14.8975 13.2384 14.8975 10.7692C14.8975 9.93578 14.7776 9.13211 14.5552 8.37663C15.3506 7.93942 16.2535 7.69249 17.2107 7.69249C20.4081 7.69249 23 10.4476 23 13.8462C23 13.9041 22.9992 13.9619 22.9977 14.0194V20H17.2085V19.9999C15.063 19.999 13.1904 18.7576 12.191 16.9138Z" fill="white"/>

    </svg>
  );
};
export default Feedback;
