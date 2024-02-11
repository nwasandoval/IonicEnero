import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonText,
  IonItem,
  IonLabel,
  IonToggle,
} from "@ionic/react";

import "./Settings.css";
import { useState } from "react";
import {
  bagOutline,
  batteryFull,
  chevronBack,
  filterOutline,
  logoDribbble,
  logoGithub,
  logoInstagram,
  logoTwitter,
  mailOpenOutline,
  person,
} from "ionicons/icons";
import SettingsItem from "../components/SettingsItem";

const Settings = () => {

  const [name, setName] = useState("");
  const saveUser = () => {
    const elNombreEstaVacio = name === "";
    if (elNombreEstaVacio) {
      alert(`Debe ingresar un nuevo nombre`);
    } else alert(`Se guardara el usuario ${name}`);
  };
  const item1 = {
    text: "", 
    size: "", 
    color: "", 
    iconos: "",
  
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonText color="light">
            10:00 AM
          </IonText>
          <br />
          <IonIcon size="small" icon={chevronBack}></IonIcon>
          <IonIcon slot="start" size="small" icon={filterOutline}></IonIcon>
          <IonText slot="end" color="light">
            100%
            <IonIcon size="large" icon={batteryFull}></IonIcon>
          </IonText>
          <IonTitle slot="start">SETTINGS</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* Personal Details */}

      <IonContent fullscreen>
        <SettingsItem 
        text={item1.text}
        size={item1.size}
        color={item1.color}
        iconos={item1.iconos}>
        </SettingsItem>

        <IonText className="text-subtitle" color="tertiary">
          Personal Details
        </IonText>


        <IonItem className="container-item" button={true}>
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
        <IonText className="text-subtitle" color="tertiary">
          Conected Account
        </IonText>
        <IonItem className="container-item">
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
