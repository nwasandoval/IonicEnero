import { IonAvatar, IonCard, IonText, IonButton, IonIcon } from "@ionic/react"
import { colorPaletteOutline, resizeOutline } from "ionicons/icons"

const UploadItem = ({title, subtitle, image, size, color}) => {
    return (<IonCard className="title-imagen">
    <IonAvatar>
      <img
        className="imagen"
        alt="Silhouette of mountains"
        src="https://www.motleydenim.es/images/zoom/jackjones_noos2023_4156895_12163777_5.jpg"
      />
    </IonAvatar>
    <IonText className="title-text">
     {subtitle}
      <h3>{title}</h3>
    </IonText>
    <IonButton 
      className="button-card"
      size="default"
      color="medium"
      shape="round"
    >
      <IonIcon className="ion-con" icon={colorPaletteOutline}></IonIcon>
     {color}
    </IonButton>

    <IonButton
      className="button-card"
      size="small"
      color="medium"
      shape="round"
    >
      <IonIcon icon={resizeOutline}></IonIcon>
      {size}
    </IonButton>

    <div className="linea-card"></div>
    <IonButton size="default" fill="clear">
      ELIMINAR
    </IonButton>
  </IonCard>)
}

export default UploadItem