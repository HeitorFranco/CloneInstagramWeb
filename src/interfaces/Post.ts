import IUser from "./User";
import IComment from "./Comment";

export default interface IPost {
  id: number;
  description: string;
  likes: number;

  user: IUser;

  comments?: Array<IComment>;

  url: string;
}
