import './ImageLinkForm.css';
import { MDBBtn } from 'mdb-react-ui-kit';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <>
            <p className="f3 tc black">
                {'Step into enchantment while this reveals hidden faces in your images. Try it now!'}
            </p>
            {
                /*
                    
                    <button className="w-30 grow f4 link pa2 dib light-gray bg-light-purple"
                    >
                    Detect</button>
                </div>
            </div>*/
            }

            <div className='center w-90 centerInputs'>
                <input className="f4 pa2 w-70 inputUrl" type="text" onChange={onInputChange} placeholder='Enter image url' />
                <MDBBtn className='w-30 detectBtn' onClick={onButtonSubmit}>
                    Detect
                </MDBBtn>
            </div>


        </>
    );
}

export default ImageLinkForm;