import {
  IonIcon,
  IonItem,
  IonLabel,
  IonNote,
  IonText,
  IonThumbnail,
} from "@ionic/react";
import { chevronForward } from "ionicons/icons";

const SearchItem = ({ title, subtitle, image, size, color }) => {
  return (
    <IonItem button={true} detail={false}>
      <div className="unread-indicator-wrapper" slot="start"></div>

      <IonThumbnail slot="start">
        <img
          alt="Silhouette of mountains"
          src={`"https://www.motleydenim.es/images/zoom/jackjones_noos2023_4156895_12163777_5.jpg"${image}`}
        />
      </IonThumbnail>
      <IonLabel>
        <IonText className="title-imagen">{subtitle}</IonText>
        <br />
        <h2>{title}</h2>
        <br />
        <IonNote color="medium" className="ion-text-wrap">
          {color} | {size}
        </IonNote>
      </IonLabel>

      <div className="metadata-end-wrapper" slot="end">
        <IonNote color="medium"></IonNote>
        <IonIcon size="large" color="medium" icon={chevronForward}></IonIcon>
      </div>
    </IonItem>
    
  );
};

export default SearchItem;
