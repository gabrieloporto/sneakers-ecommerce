import { ReactNode } from "react";

export interface HeaderApp {
  menu: boolean;
  onMenu: () => void;
  onCart: () => void;
  onDelete: () => void;
  cartState: boolean;
  itemsAdded: number;
  checkoutStatus: boolean;
}

export interface Home {
  countProduct: number;
  subtractProduct: () => void;
  addProduct: () => void;
  addItemCart: () => void;
}

export interface ModalDesktopProduct {
  onModalDesktop: () => void;
}

export interface MenuAndLogo {
  menu: boolean;
  onMenu: () => void;
}

export interface Cart {
  itemsAdded: number;
  cartState: boolean;
  onCart: () => void;
  checkoutStatus: boolean;
  onDelete: () => void;
}

export interface OnMenu {
  onMenu: () => void;
}

export interface CartModal {
  cartState: boolean;
  checkoutStatus: boolean;
  itemsInCart: number;
  onDelete: () => void;
}

export interface CheckoutCart {
  itemsInCart: number;
  onDelete: () => void;
  handleBuy: () => void;
  preferenceId: string;
  walletRendered: boolean;
  children: ReactNode;
}

export interface CheckOutDetailProduct {
  itemsInCart: number;
}

export interface CheckoutButton {
  handleBuy: () => void;
  preferenceId: string;
  walletRendered: boolean;
  children: ReactNode;
}

export interface MobileProductImage {
  selectImg: string;
  onNext: () => void;
  onPrev: () => void;
}

export interface CheckoutDeleteButton {
  onDelete: () => void;
}

export interface DesktopProductImage {
  onModalDesktop: () => void;
}

export interface ProductThumbnailImage {
  selectedImage: string;
  onThumbnailSelect: (arg0: string) => void;
}

export interface ThumbnailComponent {
  imgThumbnail: string;
  isSelected: boolean;
  onClick: () => void;
}

export interface QuantityItems {
  onSubtract: () => void;
  onAdd: () => void;
  count: number;
}

export interface AddtoCart {
  onAddCart: () => void;
}
