export interface Link {
  title: string;
  href: string;
  thumbnail: string;
  target?: string;
  description?: string;
}

export type Circle = {
  x: number;
  y: number;
  translateX: number;
  translateY: number;
  size: number;
  alpha: number;
  targetAlpha: number;
  dx: number;
  dy: number;
  magnetism: number;
};

export type User = {
  socketId: string;
  name: string;
  color: string;
  pos: {
    x: number;
    y: number;
  };
  location: string;
  flag: string;
};

export type Message = {
  socketId: string;
  content: string;
  time: Date;
  username: string;
};

export type UserMap = Map<string, User>;
