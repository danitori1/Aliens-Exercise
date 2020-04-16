import React from 'react';
import 'materialize-css';
import { Navbar, NavItem, Icon, Dropdown, Divider } from 'react-materialize';

export default function Header(props) {
  return (
    <Navbar
      alignLinks='right'
      brand={
        <a className='brand-logo' href='#'>
          Logo
        </a>
      }
      id='mobile-nav'
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: 'left',
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true,
      }}
    >
      <NavItem href=''>Getting started</NavItem>
      <NavItem href='components.html'>Components</NavItem>
      <Dropdown
        id='Dropdown_6'
        options={{
          alignment: 'left',
          autoTrigger: true,
          closeOnClick: true,
          constrainWidth: true,
          container: null,
          coverTrigger: true,
          hover: false,
          inDuration: 150,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 250,
        }}
        trigger={
          <a href='#!'>
            Dropdown <Icon right>arrow_drop_down</Icon>
          </a>
        }
      >
        <a href='#'>New Alien</a>
        <Divider />
        <a href='#' onClick={() => props.undoChanges()}>
          Undo changes
        </a>
      </Dropdown>
    </Navbar>
  );
}
