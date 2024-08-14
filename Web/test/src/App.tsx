import {
  Admin,
  Resource,
} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import { UserList } from "./users";
import { UserEdit } from "./users";
import { UserCreate } from "./users";
import { PostList } from "./posts";
import { PostEdit } from "./posts"; 
import { CreatePost } from "./posts";
import { authProvider } from "./authProvider";

export const App = () => (
  <Admin authProvider = {authProvider} layout={Layout} dataProvider={dataProvider}>
    <Resource name = 'users' list = {UserList} edit = {UserEdit} create = {UserCreate}/>
    <Resource name = 'posts' list = {PostList} edit = {PostEdit} create = {CreatePost}/>
  </Admin>
);