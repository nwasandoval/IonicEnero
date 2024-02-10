import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonText,
  IonItem,
  IonLabel,
  IonNote,
  IonToggle,
} from "@ionic/react";

import "./Settings.css";
import { useState } from "react";
import {
  atCircle,
  bagOutline,
  batteryFull,
  chevronBack,
  filterOutline,
  listCircle,
  logoDribbble,
  logoGithub,
  logoInstagram,
  logoTwitter,
  mailOpenOutline,
  person,
} from "ionicons/icons";

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
        <IonToolbar color="primary">
          <IonText color="light">
            <span>10:00 AM</span>
          </IonText>
          <IonIcon size="small" icon={chevronBack}></IonIcon>
          <IonIcon slot="start" size="small" icon={filterOutline}></IonIcon>
          <IonText slot="end" color="light">
            <span>100%</span>
            <IonIcon size="large" icon={batteryFull}></IonIcon>
          </IonText>
          <IonTitle slot="start">SETTINGS</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* Personal Details */}

      <IonContent fullscreen>
        <IonText color="tertiary">
          <span>Personal Details</span>
        </IonText>
        <IonItem button={true}>
          <IonIcon
            color="dark"
            slot="start"
            icon={person}
            size="large"
          ></IonIcon>
          <IonLabel>nwasandoval@gmail.com</IonLabel>
        </IonItem>
        <IonItem button={true}>
          <IonIcon
            color="dark"
            slot="start"
            icon={bagOutline}
            size="large"
          ></IonIcon>
          <IonLabel>CHANGE PASSWORD</IonLabel>
        </IonItem>
        <IonItem>
          <IonIcon
            color="dark"
            slot="start"
            icon={mailOpenOutline}
            size="large"
          ></IonIcon>
          <IonLabel>AUTO SUBSCRIBE</IonLabel>
          <IonToggle
            slot="end"
            aria-label="Danger toggle"
            color="danger"
            checked={true}
          ></IonToggle>
        </IonItem>

        {/* Conected Account */}

        <IonText color="tertiary">
          <span>Conected Account</span>
        </IonText>
        <IonItem>
          <IonIcon
            color="dark"
            slot="start"
            icon={logoTwitter}
            size="large"
          ></IonIcon>
          <IonLabel>TWITTER</IonLabel>
          <IonToggle
            slot="end"
            aria-label="Danger toggle"
            color="danger"
            checked={true}
          ></IonToggle>
        </IonItem>
        <IonItem>
          <IonIcon
            color="dark"
            slot="start"
            icon={logoDribbble}
            size="large"
          ></IonIcon>
          <IonLabel>DRIBBBLE</IonLabel>
          <IonToggle
            slot="end"
            aria-label="Danger toggle"
            color="danger"
            checked={true}
          ></IonToggle>
        </IonItem>
        <IonItem>
          <IonIcon
            color="dark"
            slot="start"
            icon={logoInstagram}
            size="large"
          ></IonIcon>
          <IonLabel>INSTAGRAM</IonLabel>
          <IonToggle
            slot="end"
            aria-label="Danger toggle"
            color="danger"
            checked={true}
          ></IonToggle>
        </IonItem>

        <IonItem>
          <IonIcon
            color="dark"
            slot="start"
            icon={logoGithub}
            size="large"
          ></IonIcon>
          <IonLabel>GITHUB</IonLabel>
          <IonToggle
            slot="end"
            aria-label="Danger toggle"
            color="danger"
            checked={true}
          ></IonToggle>
        </IonItem>
        {/* <IonInput
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fill="solid"
          color="success"
          labelPlacement="floating"
          helperText="Enter your name"
        ></IonInput> */}
        {/* <br />
        <IonButton
          size="small"
          onClick={(e) => saveUser()}
          disabled={name === ""}
        >
          Aceptar
        </IonButton> */}
      </IonContent>
    </IonPage>
  );
};

export default Settings;
