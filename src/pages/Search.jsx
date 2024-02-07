import {
  IonContent,
  IonHeader,
  IonItem,
  IonPage,
  IonSearchbar,
  IonThumbnail,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonNote,
} from "@ionic/react";

import "./Search.css";
import { chevronForward } from "ionicons/icons";
import SearchItem from "../components/SearchItem";

const Search = () => {
  const item1 = {
    image: "https://www.motleydenim.es/images/zoom/jackjones_noos2023_4156895_12163777_5.jpg",
    title: "MH01",
    subtitle: "OSLO - SUDADERA CON CAPUCHA",
    size: "M",
    color: "Azul",
  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Buscador de Productos</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonSearchbar
        className="search"
        placeholder="Buscar por nombre"
      ></IonSearchbar>
      <IonContent className="subtitle">
        <h3>Resultados</h3>

        <IonContent fullscreen>
          <SearchItem
            image={item1.image}
            title={item1.title}
            subtitle={item1.subtitle}
            size={item1.size}
            color={item1.color}
          ></SearchItem>

          <SearchItem
            image={
              "https://www.motleydenim.es/images/zoom/jackjones_noos2023_4156895_12163777_5.jpg"
            }
            title={"MH02"}
            subtitle={"OSLO - SUDADERA CON CAPUCHA"}
            size={"L"}
            color={"Azul"}
          ></SearchItem>

          <SearchItem
            image={
              "https://www.motleydenim.es/images/zoom/jackjones_noos2023_4156895_12163777_5.jpg"
            }
            title={"RS01"}
            subtitle={"OSLO - SUDADERA CON CAPUCHA"}
            size={"S"}
            color={"Celeste"}
          ></SearchItem>

          <SearchItem
            image={
              "https://www.motleydenim.es/images/zoom/jackjones_noos2023_4156895_12163777_5.jpg"
            }
            title={"RS02"}
            subtitle={"OSLO - SUDADERA CON CAPUCHA"}
            size={"L"}
            color={"Celeste"}
          ></SearchItem>

          <SearchItem
            image={
              "https://www.motleydenim.es/images/zoom/jackjones_noos2023_4156895_12163777_5.jpg"
            }
            title={"WP01"}
            subtitle={"GEO - PANTALÓN AISLADO"}
            size={"S"}
            color={"Rosa"}
          ></SearchItem>

          <SearchItem
            image={
              "https://www.motleydenim.es/images/zoom/jackjones_noos2023_4156895_12163777_5.jpg"
            }
            title={"WP02"}
            subtitle={"GEO - PANTALÓN AISLADO"}
            size={"M"}
            color={"Rosa"}
          ></SearchItem>

          <SearchItem
            image={
              "https://www.motleydenim.es/images/zoom/jackjones_noos2023_4156895_12163777_5.jpg"
            }
            title={"MH10"}
            subtitle={"SUDADERA DE CALLE"}
            size={"L"}
            color={"Gris"}
          ></SearchItem>

          <IonItem button={true} detail={false}>
            <div className="unread-indicator-wrapper" slot="start"></div>
            <IonThumbnail slot="start">
              <img
                alt="Silhouette of mountains"
                src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
              />
            </IonThumbnail>

            <div className="metadata-end-wrapper" slot="end">
              <IonNote color="medium"></IonNote>
              <IonIcon
                size="large"
                color="medium"
                icon={chevronForward}
              ></IonIcon>
            </div>
          </IonItem>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Search;
