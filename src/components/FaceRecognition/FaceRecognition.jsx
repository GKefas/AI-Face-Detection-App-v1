import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className="center ma2">
            <div className="mt2 relative">
                <img id="ImageOutput" alt="" src={imageUrl} width='800px' height='auto' />
                <div className="boundingBox"
                    style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }} />
            </div>
        </div>
    )
}

export default FaceRecognition;

