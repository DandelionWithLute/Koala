import React from "react";
import styles from "./navbar.module.css";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="http://localhost:3000">
          <Image src="/koala.png" alt="" width={80} height={80} />
        </Link>
      </div>
      <a href="http://localhost:3000" className={styles.title}>Koala</a>
      <div className={styles.items}>
        <Button variant="outline">Instructions</Button>
        <Button variant="outline">Contact</Button>
        <Button variant="outline">About</Button>
      </div>
      <div className={styles.menubar}>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger> Me </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>New Window</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Print</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  );
};

export default Navbar;
