import {
  IonCard,
  IonText,
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonThumbnail,
  IonFabButton,
  IonFab,
  IonNote,
  IonAvatar,
} from "@ionic/react";

import "./Upload.css";
import {
  chevronForward,
  cloudUploadOutline,
  colorPaletteOutline,
  resizeOutline,
} from "ionicons/icons";

const Upload = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Subir Producto</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonCard className="title-imagen">
          <IonAvatar>
            <img
              className="imagen"
              alt="Silhouette of mountains"
              src="https://www.motleydenim.es/images/zoom/jackjones_noos2023_4156895_12163777_5.jpg"
            />
          </IonAvatar>
          <IonText className="title-text">
            DESIREE - CAMISETA DEPORTIVA
            <h3>WS05</h3>
          </IonText>
          <IonButton
            className="button-card"
            size="default"
            color="medium"
            shape="round"
          >
            <IonIcon className="ion-con" icon={colorPaletteOutline}></IonIcon>
            Negro
          </IonButton>

          <IonButton
            className="button-card"
            size="default"
            color="medium"
            shape="round"
          >
            <IonIcon icon={resizeOutline}></IonIcon>M
          </IonButton>

          <div className="linea-card"></div>
          <IonButton size="default" fill="clear">
            ELIMINAR
          </IonButton>
        </IonCard>

        <IonCard className="title-imagen">
          <IonAvatar>
            <img
              className="imagen"
              alt="Silhouette of mountains"
              src="https://www.motleydenim.es/images/zoom/jackjones_noos2023_4156895_12163777_5.jpg"
            />
          </IonAvatar>
          <IonText className="title-text">
            DESIREE - CAMISETA DEPORTIVA
            <h3>WS05</h3>
          </IonText>
          <IonButton
            className="button-card"
            size="default"
            color="medium"
            shape="round"
          >
            <IonIcon className="ion-con" icon={colorPaletteOutline}></IonIcon>
            Negro
          </IonButton>

          <IonButton
            className="button-card"
            size="default"
            color="medium"
            shape="round"
          >
            <IonIcon icon={resizeOutline}></IonIcon>M
          </IonButton>

          <div className="linea-card"></div>
          <IonButton size="default" fill="clear">
            ELIMINAR
          </IonButton>
        </IonCard>

        <IonFab>
          <IonFabButton className="iconupload">
            <IonIcon icon={cloudUploadOutline}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Upload;
