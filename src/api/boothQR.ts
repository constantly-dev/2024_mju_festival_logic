import { Axios } from './axios';
import { AxiosResponse } from 'axios';

interface ResponseQrUrl {
  qrCode: string;
}

export const getQrData = async (id: string) => {
  try {
    const { data }: AxiosResponse<ResponseQrUrl> = await Axios.get(
      `/booths/${id}/qr`,
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzMzYyMzYzMC02MzY0LTMxMzQtMmQzNC0zMDM1MzgyZDM0MzAiLCJyb2xlIjoiQk9PVEhfTUFOQUdFUiIsImlhdCI6MTkxNjIzOTAyMn0.ibpXiZ8bJ_hySE1AE2QkcoKd9w3AiNdOWBKzO9180B0`,
        },
      }
    );
    console.log('qr response', data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
