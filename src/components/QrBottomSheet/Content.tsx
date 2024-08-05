import QRCode from 'qrcode.react';

const Content = () => {
  // QR을 svg로 할지 canvas 형식으로 할지 최적화 고려
  const qrData = 'https://www.naver.com/';
  return <QRCode value={qrData} />;
};

export default Content;
