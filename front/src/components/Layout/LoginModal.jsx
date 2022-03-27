import React from 'react';
import './LoginModal.css';


const LoginModal = (props) => {
  const { open , close } = props;
  return (
    <div className={open ? 'openModal logmodal' : 'logmodal'}>
      {open ? (
        <section className='section-login'>

          <main>
           <div className='signup'>회원가입</div>
           <div className='login'>로그인</div> 
          </main>

          <footer>
          <button type="button" className="close" onClick={close}>
            close
          </button>
          </footer>
          
          

        </section>
      ) : null}
    </div>

  )

}

export default LoginModal