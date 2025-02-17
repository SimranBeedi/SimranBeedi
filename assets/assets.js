import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import mysql from './mysql.png';
import flask from './flask.png';
import github from './github.png';
import python from './python.png';
import xampp from './xampp.png';
import fullstack from './fullstack.png';

import database from './database.png';

import frontend_icon from './frontend_icon.png';

import backend_icon from './backend_icon.png';
import wordpress from './wordpress.png';
import bootstrap from './bootstrap.png';
export const assets = {
    user_image,
    database,
    mysql,
    frontend_icon,
    
    
    backend_icon,
    python,
    github,
    xampp,
    bootstrap,
    flask,
    fullstack,
    wordpress,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

import work1 from '../assets/work-1.png';
import work2 from '../assets/work-2.png';
import work3 from '../assets/work-3.png';
import work4 from '../assets/work-4.png';

export const workData = [
    {
        title: 'Responsive Portfolio Website',
        description: 'Built a dynamic and responsive portfolio for showcasing projects',
        bgImage: work1, // ✅ Imported image
        link: 'https://yourportfolio.com',
    },
    {
        title: 'Construction Material Portal',
        description: 'A web app for managing construction, workers, and products.',
        bgImage: work2,
        link: 'https://cmpsimranb.zya.me/?i=1',
    },
    {
        title: 'BuyDirect E-commerce Platform',
        description: 'Secure platform, modular shop management, and responsive design.',
        bgImage: work3,
        link: 'https://yourbuydirectplatform.com',
    },
    {
        title: 'Agro Global Export',
        description: 'Web-based system for managing export data of agricultural products with WordPress.',
        bgImage: work4,
        link: 'https://youragroexportplatform.com',
    },
];

export const serviceData = [
    { 
        icon: assets.fullstack, // Add an appropriate icon
        title: 'Full-Stack Development', 
        description: 'Develop complete web solutions from front-end interfaces to back-end systems using technologies like React, PHP, Python, and MySQL.', 
        link: '' 
    },
    { 
        icon: assets.frontend_icon, // Add an appropriate icon
        title: 'Front-End Development', 
        description: 'Create responsive and dynamic user interfaces with HTML, CSS, JavaScript, and React.', 
        link: '' 
    },
    { 
        icon: assets.backend_icon, // Add an appropriate icon
        title: 'Back-End Development', 
        description: 'Build efficient server-side applications and APIs using PHP, Python, and integrate with MySQL databases.', 
        link: '' 
    },
    { 
        icon: assets.database, // Add an appropriate icon
        title: 'Database Management', 
        description: 'Design and manage scalable MySQL databases, ensuring optimal performance for your web applications.', 
        link: '' 
    },
    { 
        icon: assets.wordpress, // Add an appropriate icon
        title: 'WordPress Development', 
        description: 'Create and customize WordPress websites, including themes, plugins, and content management.', 
        link: '' 
    },
];


export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript, PHP,Python,Flask,MYSQL ,BootStrap,  React Js, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Master of Computer Applications' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built  5 projects' }
];

export const toolsData = [
    assets.vscode, assets.xampp,assets.python,assets.bootstrap,assets.github, assets.flask,assets.mysql, assets.wordpress, assets.git
];
