import { Component } from "react";
import ParticlesBg from "particles-bg";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'tachyons';
import Navigation from "./components/Navigation/Navigation.jsx";
import Rank from "./components/Rank/Rank.jsx";
import Logo from "./components/Logo/Logo.jsx";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm.jsx";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";
import Register from "./components/Register/Register.jsx";
import Footer from "./components/Footer/Footer.jsx";

const ClarifaiRequestOptions = (imageUrl) => {
  // Your PAT (Personal Access Token) can be found in the portal under Authentification
  const PAT = "d5634f3f95ba41c7968258ffa43e50e6";
  // Specify the correct user_id/app_id pairings
  // Since you're making inferences outside your app's scope
  const USER_ID = "kefas";
  const APP_ID = "test";
  // Change these to whatever model and image URL you want to use
  const IMAGE_URL = imageUrl;
  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url: IMAGE_URL,
          },
        },
      },
    ],
  });
  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Key " + PAT,
    },
    body: raw,
  };

  return requestOptions;
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      box: {},
      route: 'signIn',
      isLoggedIn: false
    };
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("ImageOutput");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  displayFaceBox = (box) => {
    this.setState({ box: box });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    this.setState({ box: {} });
    fetch(
      "https://api.clarifai.com/v2/models/" + "face-detection" + "/outputs",
      ClarifaiRequestOptions(this.state.input)
    )
      .then((response) => response.json())
      .then((result) => this.displayFaceBox(this.calculateFaceLocation(result)))
      .catch((error) => console.log("error", error));
  };

  onRouteChange = (route) => {
    route === 'home' ?
      this.setState({ isLoggedIn: true }) :
      this.setState({ isLoggedIn: false });

    this.setState({ route: route });
  };

  render() {
    const { isLoggedIn, imageUrl, route, box } = this.state;
    return (
      <div className="App">
        <ParticlesBg type="cobweb" bg={true} num={75} color="#171717" />
        <div className="TopContainer">
          <Navigation onRouteChange={this.onRouteChange} isLoggedIn={isLoggedIn} />
          <Logo />
        </div>
        <div className="midContainer mb-5 mt-4">
          {route === 'home' ?
            <>
              <Rank />
              <ImageLinkForm
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit}
              />
              <FaceRecognition box={box} imageUrl={imageUrl} />
            </> : (route === 'signIn') ?
              <SignIn onRouteChange={this.onRouteChange} />
              :
              <Register onRouteChange={this.onRouteChange} />
          }
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
