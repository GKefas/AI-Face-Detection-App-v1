import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

const Footer = () => {
  return (

    <MDBFooter className='text-center text-white footerCustom' style={{ backgroundColor: 'rgb(0,0,0)' }}>
      <MDBContainer className='pt-1'>
        <section>
          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='white m-1'
            href='https://www.facebook.com/Giwrgos.Kefas'
            role='button'
            target='_blank'

          >
            <MDBIcon fab className='fab fa-facebook-f' />
          </MDBBtn>


          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='white m-1'
            href='https://www.instagram.com/g.kefas_/'
            role='button'
            target='_blank'
          >
            <MDBIcon fab className='fa-instagram' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='white m-1'
            href='https://github.com/GKefas'
            role='button'
            target='_blank'
          >
            <MDBIcon fab className='fa-github' />
          </MDBBtn>
        </section>
      </MDBContainer>
    </MDBFooter>
  )
}

export default Footer;