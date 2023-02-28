import { BiUser } from "react-icons/bi";
import { BsBook, BsCart2, BsSearch } from "react-icons/bs";
import { FiSettings, FiShoppingBag } from "react-icons/fi";
import { RiBookLine, RiBookmarkLine } from "react-icons/ri";

export const routers = [
  {
    label: "Perfil",
    icon: BiUser,
    path: "/",
  },
  {
    label: "Cursos",
    icon: BsBook,
    path: "/courses",
  },
  {
    label: "Produtos",
    icon: FiShoppingBag,
    path: "/products",
  },
  {
    label: "Carrinho",
    icon: BsCart2,
    path: "/cart",
  },
  {
    label: "Atividade",
    icon: RiBookLine,
    path: "/activities",
  },
  {
    label: "Lista de desejo",
    icon: RiBookmarkLine,
    path: "/wishlist",
  },
  // {
  //   label: "Pesquisa",
  //   icon: BsSearch,
  //   path: "/",
  // },
  {
    label: "",
    icon: FiSettings,
    path: "/settings",
  },
];
