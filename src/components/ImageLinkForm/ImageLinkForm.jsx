import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange,onButtonSubmit}) => {
    return (
        <>
            <p className="f3 tc black">
                {'Step into enchantment while this reveals hidden faces in your images. Try it now!'}
            </p>
            <div className='center'>
                <div className='w-90 center br3 shadow-5 formContainer'>
                    <input className="f4 pa2 w-70" type="text" onChange={onInputChange} placeholder='Enter image url (png/jpg)'/>
                    <button className="w-30 grow f4 link pa2 dib light-gray bg-light-purple"
                    onClick={onButtonSubmit}>
                    Detect</button>
                </div>
            </div>
        </>
    );
}

export default ImageLinkForm;