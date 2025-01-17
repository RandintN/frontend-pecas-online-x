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
  DrawerTrigger,
} from "../ui/drawer";
import DarkModeToggle from "./DarkModeToggle";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const token = localStorage.getItem("token");
  return (
    <header className="px-4 lg:px-6 flex items-center py-10">
      <Link className="flex items-center justify-center" href="/">
        <Image
          src="/images/logo-white.png"
          alt="AutoPeças Online"
          width={160}
          height={40}
          className="object-contain dark:block hidden"
        />
        <span className="sr-only">Logo</span>
      </Link>
      <Link className="flex items-center justify-center" href="/">
        <Image
          src="/images/logo-black.png"
          alt="AutoPeças Online"
          width={160}
          height={40}
          className="object-contain dark:hidden block"
        />
        <span className="sr-only">Logo</span>
      </Link>
      <nav className="ml-auto gap-4 sm:gap-6 items-center hidden md:flex">
        <Link className="text-sm hover:underline underline-offset-4" href="/">
          Início
        </Link>
        <Link
          className="text-sm hover:underline underline-offset-4"
          href="/pricing"
        >
          Planos
        </Link>
        <Link
          className="text-sm hover:underline underline-offset-4"
          href="/about"
        >
          Sobre
        </Link>
        <Link
          className="text-sm hover:underline underline-offset-4"
          href="/contact"
        >
          Contato
        </Link>
      </nav>
      <div className="ml-auto items-center gap-2 hidden md:flex">
        <DarkModeToggle />
        {token ? (
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
        ) : (
          <Link href={"/login"}>
            <Button variant="outline" size="sm" className="px-4">
              Login
            </Button>
          </Link>
        )}
        <Link href={"/signup"}>
          <Button variant="default" size="sm">
            Inscreva-se
          </Button>
        </Link>
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
                href="/"
              >
                Início
              </Link>
              <Link
                className="text-sm hover:underline underline-offset-4"
                href={"/pricing"}
              >
                Planos
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
              <Link
                className="text-sm hover:underline underline-offset-4"
                href="/signup"
              >
                <Button variant="default" size="sm" className="px-4">
                  Inscreva-se
                </Button>
              </Link>
              <Link href={"/login"}>
                <Button variant="outline" size="sm" className="px-4">
                  Login
                </Button>
              </Link>
              {/* <Dialog>
                <DialogTrigger asChild>
                  <Button size="sm">
                    <Upload className="h-4 w-4" />
                    Upload
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <FileUpload />
                </DialogContent>
              </Dialog> */}
            </nav>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
}
