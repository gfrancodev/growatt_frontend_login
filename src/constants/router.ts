import {
  BiUser,
  BsBook,
  BsCart2,
  FiSettings,
  FiShoppingBag,
  RiBookLine,
  RiBookmarkLine,
} from "@components/_ui/Icons";

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
