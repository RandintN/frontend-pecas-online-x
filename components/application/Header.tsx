"use client";
import { Menu, Upload, Wrench, X } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import FileUpload from "./FileUpload";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="px-4 lg:px-6 flex items-center py-10">
      <Link className="flex items-center justify-center" href="#">
        <Wrench className="h-6 w-6" />
        <span className="sr-only">Logo</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
        <Link className="text-sm hover:underline underline-offset-4" href="#">
          Início
        </Link>
        <Link className="text-sm hover:underline underline-offset-4" href="#">
          Produtos
        </Link>
        <Link className="text-sm hover:underline underline-offset-4" href="#">
          Sobre
        </Link>
        <Link className="text-sm hover:underline underline-offset-4" href="#">
          Contato
        </Link>
      </nav>
      <div className="ml-auto items-center gap-2 hidden md:flex">
        <DarkModeToggle />
        <Button variant="outline" size="sm">
          Login
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm">
              <Upload className="h-4 w-4" />
              Upload
            </Button>
          </DialogTrigger>
          <DialogContent>
            <FileUpload />
          </DialogContent>
        </Dialog>
      </div>
      {/* hamburger menu */}
      <div className="ml-auto flex items-center justify-center gap-2 md:hidden relative">
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <Menu className="h-6 w-6" />
          </DrawerTrigger>
          <DrawerContent>
            <div className="flex items-center justify-between absolute top-0 right-0 p-4">
              <DrawerClose asChild>
                <X className="h-6 w-6" />
              </DrawerClose>
            </div>
            <nav className="flex flex-col gap-4 sm:gap-6 items-center justify-center mt-4 pb-6">
              <Link
                className="text-sm hover:underline underline-offset-4"
                href="#"
              >
                Início
              </Link>
              <Link
                className="text-sm hover:underline underline-offset-4"
                href="#"
              >
                Produtos
              </Link>
              <Link
                className="text-sm hover:underline underline-offset-4"
                href="#"
              >
                Sobre
              </Link>
              <Link
                className="text-sm hover:underline underline-offset-4"
                href="#"
              >
                Contato
              </Link>
              <Button variant="outline" size="sm" className="w-[80%]">
                Login
              </Button>
              <Button size="sm" className="w-[80%]">
                <Upload className="h-4 w-4" />
                Upload
              </Button>
            </nav>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
}
