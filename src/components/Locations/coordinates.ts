import { Point } from "pigeon-maps";
type Schedule = {
  open: number;
  close: number;
};
type Coordinates = {
  location: string;
  coords: Point;
  address: string;
  schedule: Schedule[];
};
export const COORDINATES: Coordinates[] = [
  {
    location: "Mississauga",
    coords: [43.6624908, -79.5929195],
    address: "2800 Skymark Ave, Mississauga, ON L4W 5A6",
    schedule: [
      {
        open: 11,
        close: 0,
      },
      {
        open: 11,
        close: 0,
      },
      {
        open: 11,
        close: 0,
      },
      {
        open: 11,
        close: 0,
      },
      {
        open: 11,
        close: 2,
      },
      {
        open: 11,
        close: 2,
      },
      {
        open: 11,
        close: 2,
      },
    ],
  },
  {
    location: "Etobicoke",
    coords: [43.6452552, -79.5202029],
    address: "3313 Bloor St W, Etobicoke, ON M8X 1E7",
    schedule: [
      {
        open: 11,
        close: 0,
      },
      {
        open: 11,
        close: 0,
      },
      {
        open: 11,
        close: 0,
      },
      {
        open: 11,
        close: 0,
      },
      {
        open: 11,
        close: 2,
      },
      {
        open: 11,
        close: 2,
      },
      {
        open: 11,
        close: 2,
      },
    ],
  },
];
