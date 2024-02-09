import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import "./Settings.css";
import { useState } from "react";

const Settings = () => {
  const [name, setName] = useState("");
  const saveUser = () => {
    const elNombreEstaVacio = name === "";
    if (elNombreEstaVacio) {
      alert(`Debe ingresar un nuevo nombre`);
    } else alert(`Se guardara el usuario ${name}`);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Configuraciones</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <br />
        <IonButton onClick={(_e) => saveUser()} disabled={name === ""}>
          Disabled
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
