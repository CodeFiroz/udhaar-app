"use client";

import { useTheme } from "@/app/context/Themecontext/Themecontext";
import React from "react";
import style from "./header.module.css";

const Header = () => {
    const { sitetheme, toggleTheme } = useTheme();

    const themeIcon = sitetheme === "light" ? "fi-rr-moon" : "fi-rr-sun";

    const changeTheme = () => {
        toggleTheme();
    };

    return (
        <>
            <div className={style.header}>
                <div className={style.search}>
                    <i className="fi fi-rr-search"></i>
                    <input type="text" placeholder="Search" />
                </div>

                <div className={style.rightNav}>
                    <div className={style.icon}>
                        <i className="fi fi-rr-bell"></i>
                    </div>

                    <div className={style.theme}>
                        <input
                            type="checkbox"
                            name="theme"
                            id="theme"
                            checked={sitetheme === "dark"}
                            onChange={changeTheme}
                        />
                        <label htmlFor="theme">
                            <i className={`fi ${themeIcon}`}></i>
                        </label>
                    </div>

                    <button>Sign in</button>
                </div>
            </div>
        </>
    );
};

export default Header;
