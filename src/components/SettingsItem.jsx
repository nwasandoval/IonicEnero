import { IonIcon, IonItem, IonLabel, IonToggle } from "@ionic/react";
import { logoDribbble, person } from "ionicons/icons";

const SocialMediaItem = ({icon, text, value}) => {
  return (
    <IonItem>
      <IonIcon
        color="dark"
        slot="start"
        icon={icon}
        size="large"
      ></IonIcon>
      <IonLabel>{text}</IonLabel>
      <IonToggle
        slot="end"
        aria-label="Danger toggle"
        color="danger"
        checked={value}
      ></IonToggle>
    </IonItem>
  );
};
export default SocialMediaItem;
