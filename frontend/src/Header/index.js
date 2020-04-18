import React from 'react';
import 'materialize-css';
import { Navbar, NavItem, Icon } from 'react-materialize';

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
      <NavItem onClick={() => props.undoChanges()}>
        Undo Changes
        <Icon left>undo</Icon>
      </NavItem>
      <NavItem onClick={() => props.onClickNewData()}>
        New Alien
        <Icon left>person_add</Icon>
      </NavItem>
      <NavItem onClick={() => props.handleSaveData()}>
        Save
        <Icon left>save</Icon>
      </NavItem>
    </Navbar>
  );
}
