import { Hotel } from './hotel.api-model';
import { Lookup } from 'common/models';
import { mockCities, mockCharacterCollection } from './hotel.mock-data';

export const getHotel = async (id: string): Promise<Hotel> => {
  return mockCharacterCollection.find((h) => h.id === id);
};

export const getCities = async (): Promise<Lookup[]> => {
  return mockCities;
};

export const saveHotel = async (hotel: Hotel): Promise<boolean> => {
  return true;
};
