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
  IonItem,
  IonFabButton,
  IonFab,
} from "@ionic/react";

import "./Upload.css";
import {
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
        <IonCard>
          <IonItem>
            <br />
            <IonText>
              <IonItem button={true} detail={false}>
                <IonThumbnail slot="start">
                  <img
                    alt="Silhouette of mountains"
                    src="https://www.motleydenim.es/images/zoom/jackjones_noos2023_4156895_12163777_5.jpg"
                  />
                </IonThumbnail>

                <IonText className="title-imagen">
                  DESIREE - CAMISETA DEPORTIVA
                </IonText>
                <h3>WS05</h3>
              </IonItem>
              <br />

              <IonButton className="ion-button" color="medium" shape="round">
                <IonIcon
                  className="ion-con"
                  icon={colorPaletteOutline}
                ></IonIcon>
                Negro
              </IonButton>
              <IonButton color="medium" shape="round">
                <IonIcon icon={resizeOutline}></IonIcon>M
              </IonButton>
            </IonText>

            <IonButton size="default" fill="clear">
              Eliminar
            </IonButton>
          </IonItem>
        </IonCard>

        <IonCard>
          <IonItem>
            <br />
            <IonText>
              <IonItem button={true} detail={false}>
                <IonThumbnail slot="start">
                  <img
                    alt="Silhouette of mountains"
                    src="https://www.motleydenim.es/images/zoom/jackjones_noos2023_4156895_12163777_5.jpg"
                  />
                </IonThumbnail>

                <IonText className="title-imagen">
                  GEO - PANTALÓN AISLADO
                </IonText>
                <h3>WP01</h3>
              </IonItem>
              <br />

              <IonButton className="ion-button" color="medium" shape="round">
                <IonIcon
                  className="ion-con"
                  icon={colorPaletteOutline}
                ></IonIcon>
                Negro
              </IonButton>
              <IonButton color="medium" shape="round">
                <IonIcon icon={resizeOutline}></IonIcon>M
              </IonButton>
            </IonText>

            <div className="linea"></div>
            <IonButton size="default" fill="clear">
              Eliminar
            </IonButton>
          </IonItem>
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
