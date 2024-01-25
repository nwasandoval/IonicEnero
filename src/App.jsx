import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonButton,
  IonCard,
  IonContent,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { cloudUpload, search, settings } from "ionicons/icons";

import Search from "./pages/Search";
import Upload from "./pages/Upload";
import Settings from "./pages/Settings";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/upload">
            <Upload />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          
          
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="search" href="/search">
            <IonIcon aria-hidden="true" icon={search} />
            <IonLabel>Buscar</IonLabel>
          </IonTabButton>
          <IonTabButton tab="upload" href="/upload">
            <IonIcon aria-hidden="true" icon={cloudUpload} />
            <IonLabel>Subir</IonLabel>
          </IonTabButton>

          <IonTabButton tab="settings" href="/settings">
            <IonIcon aria-hidden="true" icon={settings} />
            <IonLabel>Configuraciones</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
