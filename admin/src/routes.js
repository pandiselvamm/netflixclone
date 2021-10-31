import Index from "views/Index.js";
import Login from "views/pages/Login.js";
import MoviesTable from "views/pages/movies/MoviesTable";
import UsersTable from "views/pages/users/UsersTable";
import ListsTable from "views/pages/lists/ListsTable";
import Profile from "views/pages/Profile.js";
import UserForm from "views/pages/users/UserForm";
import MovieForm from "views/pages/movies/MovieForm";


var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <Index />,
    layout: "/admin",
    isSidebar: true,
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: <Profile />,
    layout: "/admin",
    isSidebar: false,
  }, {
    path: "/user/create",
    name: "User Create",
    icon: "ni ni-single-02 text-yellow",
    component: <UserForm />,
    layout: "/admin",
    isSidebar: false,
  },
  {
    path: "/user/edit/:id",
    name: "User Edit",
    icon: "ni ni-single-02 text-yellow",
    component: <UserForm />,
    layout: "/admin",
    isSidebar: false,
  },
  {
    path: "/movie/create",
    name: "Movie Create",
    icon: "ni ni-single-02 text-yellow",
    component: <MovieForm />,
    layout: "/admin",
    isSidebar: false,
  },
  {
    path: "/users",
    name: "Users",
    icon: "fas fa-users text-red",
    component: <UsersTable />,
    layout: "/admin",
    isSidebar: true,
  },
  {
    path: "/movies",
    name: "Movies",
    icon: "fas fa-video text-yellow",
    component: <MoviesTable />,
    layout: "/admin",
    isSidebar: true,
  },
  {
    path: "/lists",
    name: "Lists",
    icon: "fas fa-stream text-orange",
    component: <ListsTable />,
    layout: "/admin",
    isSidebar: true,
  },
  {
    path: "/login",
    name: "Login",
    icon: "fas fa-stream text-orange",
    component: <Login />,
    layout: "/auth",
    isSidebar: false,
  },
];
export default routes;
