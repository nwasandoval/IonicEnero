import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import "./Upload.css";

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
          <IonCardHeader>
            <IonCardTitle>
              <h5>DESIREE - CAMISETA - DEPORTIVA</h5>
            </IonCardTitle>

            <IonCardSubtitle>
              <h1>WS05</h1>
            </IonCardSubtitle>
          </IonCardHeader>
          <div className="button">Negro</div>
          <div className="linea"></div>
          <h4 className="eliminar">ELIMINAR</h4>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              <h5>DESIREE - CAMISETA - DEPORTIVA</h5>
            </IonCardTitle>

            <IonCardSubtitle>
              <h1>WS05</h1>
            </IonCardSubtitle>
          </IonCardHeader>
          <div className="linea"></div>
          <h4 className="eliminar">ELIMINAR</h4>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Upload;
