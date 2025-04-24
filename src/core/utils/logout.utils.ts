// ** Third Party Components

// ** Redux Imports

// ** Core Imports
import { removeItem } from "../services/common/storage.service";

export const handleLogout = () => {
  removeItem("token");
  window.location.pathname = "/login";
};
