/* eslint-disable react/prop-types */
import { Menu, MenuItem } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function NavBar({ logoutHandler, user, handleItemClick, activeItem }) {
  return (
    <Menu pointing inverted>
      <MenuItem name={user.data ? user.data.name : 'Гость'} />
      {user.data && (
        <MenuItem
          as={Link}
          to="/"
          name="Книги"
          active={activeItem === 'Книги'}
          onClick={() => handleItemClick('Книги')}
        />
      )}
      <Menu.Menu position="right">
        {!user.data && (
          <>
            <MenuItem
              as={Link}
              to="/signin"
              name="Вход"
              active={activeItem === 'Вход'}
              onClick={() => handleItemClick('Вход')}
            />
            <MenuItem
              as={Link}
              to="/signup"
              name="Регистрация"
              active={activeItem === 'Регистрация'}
              onClick={() => handleItemClick('Регистрация')}
            />
          </>
        )}
        {user.data && <MenuItem name="Выход" onClick={logoutHandler} />}
      </Menu.Menu>
    </Menu>
  );
}
