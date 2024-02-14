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
  IonInput,
  IonButton,
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
import SocialMediaItem from "../components/SettingsItem";

const Settings = () => {
  const [name, setName] = useState("");
  const saveUser = () => {
    const elNombreEstaVacio = name === "";
    if (elNombreEstaVacio) {
      alert(`Debe ingresar un nuevo nombre`);
    } else alert(`Se guardara el usuario ${name}`);
  };
  const twitter = {
    icon: logoTwitter,
    text: "TWITTER",
    value: true,
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle slot="start">SETTINGS</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* Personal Details */}

      <IonContent fullscreen>
        <IonItem>
          <IonText className="text-subtitle" color="tertiary">
            Personal Details
          </IonText>
        </IonItem>

        <IonItem href="/ChangeEmailPage" className="container-item" button={true}>
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
        <IonItem>
          <IonText className="text-subtitle" color="tertiary">
            Conected Account
          </IonText>
        </IonItem>

        <SocialMediaItem
          icon={twitter.icon}
          text={twitter.text}
          value={twitter.value}
        ></SocialMediaItem>

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
      </IonContent>
    </IonPage>
  );
};

export default Settings;
