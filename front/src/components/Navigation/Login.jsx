import React, { useState } from 'react';
import LoginModal from '../Layout/LoginModal';
import DehazeIcon from '@mui/icons-material/Dehaze';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Login = () => {

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    return (
        <>
        <div className='naviRb' onClick={openModal}>
        <AccountCircleIcon />
        <DehazeIcon />
        </div>

        <div>
            <LoginModal open={modalOpen} close={closeModal}></LoginModal>
        </div>

        </>
        

    )
}

export default Login