export interface RoomInterface {
  id: number;
  number: number;
  name: string;
  description: string;
  nb_bed: number;
  room_style_id: number;
  sea_view: boolean;
  style_name: string;
}
export interface StyleInterface {
  id: number;
  name: string;
}

export interface LoaderInterface {
  roomsData: RoomInterface[];
  stylesData: StyleInterface[];
}
