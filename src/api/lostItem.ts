import React from 'react';
import { Axios } from './axios';
import { AxiosResponse } from 'axios';
import { SimpleLostItem, ResponseLostItem } from '../types/lostItem';

export const getLostItem = async (
  sort: string,
  page: number,
  size: number,
  setLostItems: React.Dispatch<React.SetStateAction<SimpleLostItem[]>>,
  setTotalPage: React.Dispatch<React.SetStateAction<number>>
) => {
  try {
    const { data }: AxiosResponse<ResponseLostItem> = await Axios.get(
      `/lost-items?sort=${sort}&page=${page}&size=${size}`
    );
    const { simpleLostItems, totalPage } = data;

    setLostItems(simpleLostItems);
    setTotalPage(totalPage);

    console.log(simpleLostItems);
    console.log(totalPage);
  } catch (error) {
    console.log(error);
  }
};

export const getSearchLostItem = async (
  sort: string,
  keyword: string,
  page: number,
  size: number,
  setLostItems: React.Dispatch<React.SetStateAction<SimpleLostItem[]>>,
  setTotalPage: React.Dispatch<React.SetStateAction<number>>
) => {
  try {
    const { data } = await Axios.get(
      `/lost-items/search?sort=${sort}&keyword=${keyword}&page=${page}&size=${size}`
    );
    const { simpleLostItems, totalPage } = data;

    setLostItems(simpleLostItems);
    setTotalPage(totalPage);

    console.log(simpleLostItems);
    console.log(totalPage);
  } catch (error) {
    console.log(error);
  }
};

// 재사용성을 늘릴 수 있을지 고민
