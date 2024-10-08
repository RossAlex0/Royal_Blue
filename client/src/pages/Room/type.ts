export interface Picture {
  room: string;
  sdb: string;
  salon: string;
}
export interface RoomInterface {
  id: number;
  number: number;
  name: string;
  description: string;
  nb_bed: number;
  room_style_id: number;
  sea_view: boolean;
  style_name: string;
  picture: Picture;
}
export interface StyleInterface {
  id: number;
  name: string;
}

export interface LoaderInterface {
  roomsData: RoomInterface[];
  stylesData: StyleInterface[];
}
