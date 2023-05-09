import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { GoogleOAuthProvider } from '@react-oauth/google';
import 'jodit/build/jodit.min.css';
import React from "react";

function App() {
  return (
    <div className="App">
      <GoogleOAuthProvider clientId="918802200605-2dojv89dmfkphre9rokgjp341ig0hti2.apps.googleusercontent.com">
      <PublicRoutes/>
      <PrivateRoutes/>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
