import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput
}
  from 'mdb-react-ui-kit';



const SignIn = ({ onRouteChange }) => {
  return (
    <MDBContainer>

      <MDBCard className="pv4 card">
        <MDBRow className='g-0'>

          <MDBCol md='6 flex items-center mb-4'>
            <MDBCardImage src='public\Login-Image.png' alt="login form" className='rounded-start w-100' />
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>
              <h3 className="fw-normal my-4 pb-2" style={{ letterSpacing: '1px' }}>Sign into your account</h3>
              <MDBInput wrapperClass='mb-4' label='Username' id='formControlLg' type='text' size="lg" />
              <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" />

              <MDBBtn className="mb-4 mt-2 px-5 f5" color='black' size='lg' onClick={() => onRouteChange('home')}>Login</MDBBtn>
              <p className="mb-2 pb-lg-2 tc" style={{ color: '#00000' }}>Don&apos;t have an account?
                <span style={{ color: '#005AA7', cursor: 'pointer' }} onClick={() => onRouteChange('register')}>&nbsp;Register here</span></p>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}
export default SignIn;
