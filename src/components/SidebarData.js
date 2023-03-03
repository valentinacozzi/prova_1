import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from "react-i18next";
//import { translate } from '../i18n';
import i18next from '../i18n';
//import i18next from 'i18next';


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: i18next.t('navbar_project'), //NON LO PRENDE 
    path: '#0',
    icon: <FaIcons.FaGlobe />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'UniVOCIttà',
        path: '/project', // PROVA PER COLLEGAMENTI INTRA TESTUALI
        icon: <FaIcons.FaRegLightbulb />,
        cName: 'sub-nav'
      },
      {
        title: i18next.t('navbar_project_aim'), //NON LO PRENDE
        path: '/project',
        icon: <AiIcons.AiOutlineAim />
      }
    ]
  },
  {
    title: 'About',
    path: '#0',
    icon: <FaIcons.FaGraduationCap/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Team',
        path: '/about',
        icon: <FaIcons.FaUserGraduate />,
        cName: 'sub-nav'
      },
      {
        title: 'Institutions and Partners',
        path: '/about',
        icon: <FaIcons.FaUniversity />,
        cName: 'sub-nav'
      },
      {
        title: 'Contacts',
        path: '/about',
        icon: <FaIcons.FaEnvelope />
      }
    ]
  },
  {
    title: 'Corpus',
    path: '#0',
    icon: <FaIcons.FaBook />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Overview',
        path: '/corpus',
        icon: <FaIcons.FaBook />,
        cName: 'sub-nav'
      },
      {
        title: 'Languages',
        path: '/corpus',
        icon: <FaIcons.FaLanguage />,
        cName: 'sub-nav'
      },
      {
        title: 'Query',
        path: '/corpus',
        icon: <FaIcons.FaSearch />
      }
    ]
  },
  {
    title: 'Maps',
    path: '#0',
    icon: <FaIcons.FaMapMarkerAlt />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Overview',
        path: '/maps',
        icon: <RiIcons.RiEarthFill />,
        cName: 'sub-nav'
      },
      {
        title: 'Places',
        path: '/maps/places',
        icon: <FaIcons.FaBuilding />,
        cName: 'sub-nav'
      },
      {
        title: 'Routes',
        path: '/maps/routes',
        icon: <FaIcons.FaRoute />,
        cName: 'sub-nav'
      },
      {
        title: 'Travellers',
        path: '/maps/travellers',
        icon: <FaIcons.FaUsers />
      }
    ]
  
  }
];

