import React, { useState, useEffect } from 'react';
import './Banner.scss';
import { useNavigate } from 'react-router-dom';
import logo from '../../../utils/logoAL-removebg-preview.png';
import DialogBox from '../../Dialog/Dialog';

const Banner = () => {
  const navigate = useNavigate();
  const navToContact = () => {
    navigate('/contact');
  };

  const [open, setOpen] = useState(false);
  const [hasDialogDisplayed, setHasDialogDisplayed] = useState(false);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem('dialogDisplayed', 'true');
  };

  const handleConfirm = () => {
    handleClose();
  };
  useEffect(() => {
    const clearLocalStorage = () => {
      localStorage.clear();
    };

    const intervalId = setInterval(clearLocalStorage, 2* 60 * 60 * 1000); // 2 hours

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {    const dialogDisplayed = localStorage.getItem('dialogDisplayed');
    if (!hasDialogDisplayed && !dialogDisplayed) {
      setOpen(true);
      setHasDialogDisplayed(true);
    }
  }, [hasDialogDisplayed]);

  const dialogActions = [
    { label: 'I AGREE', color: 'secondary', handler: handleConfirm },
  ];

  return (
    <div className='banner-main'>
      <div className='inner'>
        <img src={logo} alt='logo' />
        <h1>AKHTARS LEGALITARIAN </h1>
        <button type='submit' onClick={navToContact}>
          For Query
        </button>
        <DialogBox
          open={open}
          handleClose={handleClose}
          title='DISCLAIMER'
          content="'The rules of the Bar Council of India prohibit law firms from soliciting work or advertising in any manner. By clicking on 'I AGREE', the user acknowledges that:

          The user wishes to gain more information about Akhtars Legalitarian, its practice areas and its attorneys, for his/her own information and use;
          The information is made available/provided to the user only on his/her specific request and any information obtained or material downloaded from this website is completely at the user's volition and any transmission, receipt or use of this site is not intended to, and will not, create any lawyer-client relationship; and
          None of the information contained on the website is in the nature of a legal opinion or otherwise amounts to any legal advice.
          Akhtars Legalitarian is not liable for any consequence of any action taken by the user relying on material/information provided under this website. In cases where the user has any legal issues, he/she in all cases must seek independent legal advice.' "
          actions={dialogActions}
        />
      </div>
    </div>
  );
};

export default Banner;
