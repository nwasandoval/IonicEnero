import { IonIcon, IonItem, IonLabel, IonText } from "@ionic/react";
import { person } from "ionicons/icons";

const SettingsItem = ({ text, size, color, iconos }) => {
  return (
    <>
      <IonText className="text-subtitle" color="tertiary">
        {text}
      </IonText>
      {/* <IonItem className="container-item" button={true}>
        <IonIcon color="dark" slot="start" icon={person} size="large"></IonIcon>
        <IonLabel>{text}</IonLabel>
      </IonItem> */}
    </>
  );
};
export default SettingsItem;
