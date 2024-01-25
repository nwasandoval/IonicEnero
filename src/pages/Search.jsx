import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonSearchbar,
  IonThumbnail,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonNote,
  IonText,
} from "@ionic/react";

import "./Search.css";
import { chevronForward,} from "ionicons/icons";

const Search = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Buscador de Productos</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonSearchbar placeholder="Buscar por nombre"></IonSearchbar>
        <IonContent className="Subtitle">
          <h3>Resultados</h3>

          <IonItem button={true} detail={false}>
            <div className="unread-indicator-wrapper" slot="start"></div>
            <IonThumbnail slot="start">
              <img
                alt="Silhouette of mountains"
                src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
              />
            </IonThumbnail>
            <IonLabel>
              <IonText>OSLO - SUDADERA CON CAPUCHA</IonText>
              <br />
              <strong>MH01</strong>
              <br />
              <IonNote color="medium" className="ion-text-wrap">
               Azul | M
              </IonNote>
            </IonLabel>
            <div className="metadata-end-wrapper" slot="end">
              <IonIcon size="large" color="medium" icon={chevronForward}></IonIcon>
            </div>
          </IonItem>


          <IonItem>
            <IonThumbnail slot="start">
              <img
                alt="Silhouette of mountains"
                src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
              />
            </IonThumbnail>
            <IonLabel>Item Thumbnail</IonLabel>
          </IonItem>
          <IonItem>
            <IonThumbnail slot="start">
              <img
                alt="Silhouette of mountains"
                src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
              />
            </IonThumbnail>
            <IonLabel>Item Thumbnail</IonLabel>
          </IonItem>
          <IonItem>
            <IonThumbnail slot="start">
              <img
                alt="Silhouette of mountains"
                src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
              />
            </IonThumbnail>

            <IonLabel>Item Thumbnail</IonLabel>
          </IonItem>
          <IonItem>
            <IonThumbnail slot="start">
              <img
                alt="Silhouette of mountains"
                src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
              />
            </IonThumbnail>
            <IonLabel>Item Thumbnail</IonLabel>
          </IonItem>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Search;
