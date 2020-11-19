import IUser from "./User";
import IPost from "./Post";

export default interface IComment {
  id: number;
  content: string;
  user: IUser;
  post: IPost;
}
