import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'Project',
    path: '#0',
    icon: <FaIcons.FaGlobe />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'UniVOCIttà',
        path: '/project',
        icon: <FaIcons.FaRegLightbulb />,
        cName: 'sub-nav'
      },
      {
        title: 'Aim',
        path: '/',
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
        path: '/about/reports3',
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
        path: '/corpus/reports3',
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