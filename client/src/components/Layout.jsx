/* eslint-disable react/prop-types */
import NavBar from './ui/NavBar';
import { Outlet } from 'react-router-dom';
import { RingLoader } from 'react-spinners';

export default function Layout({ logoutHandler, user, handleItemClick, activeItem }) {
  if (user.status === 'logging')
    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20%' }}>
        <RingLoader color="#1d5ba3" size={150} speedMultiplier={1} />
      </div>
    );
  return (
    <div>
      <NavBar
        logoutHandler={logoutHandler}
        user={user}
        handleItemClick={handleItemClick}
        activeItem={activeItem}
      />
      <Outlet />
    </div>
  );
}
