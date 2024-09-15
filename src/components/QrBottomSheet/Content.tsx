import QRCode from 'qrcode.react';
import { useEffect, useState } from 'react';
import { getQrData } from '../../api/boothQR';

interface ResponseQrUrl {
  qrCode: string;
}

const Content = () => {
  const [qrData, setQrData] = useState<ResponseQrUrl | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getQrData('65616264-3165-6132-2d38-3534342d3434');
        setQrData(data);
      } catch (error) {
        console.error('Error fetching QR data:', error);
        setQrData(undefined);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {qrData?.qrCode ? <QRCode value={qrData.qrCode} /> : <p>Loading...</p>}{' '}
    </>
  );
};

export default Content;
