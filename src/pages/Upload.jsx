import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonFabButton,
  IonFab,
} from "@ionic/react";

import "./Upload.css";
import {
  cloudUploadOutline,
} from "ionicons/icons";
import UploadItem from "../components/UploadItem";

const Upload = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Subir Producto</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <UploadItem title={"WS05"} subtitle={"DESIREE - CAMISETA DEPORTIVA"} size={"M"} color={"Negro"}/>

        <UploadItem title={"WS06"} subtitle={"DESIREE - CAMISETA DEPORTIVA"} size={"L"} color={"Azul"}/>
       
       
        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonFabButton >
            <IonIcon icon={cloudUploadOutline}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Upload;
