import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonSearchbar,
  IonThumbnail,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonNote,
  IonText,
} from "@ionic/react";

import "./Search.css";
import { chevronForward, listCircle } from "ionicons/icons";

const Search = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Buscador de Productos</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonSearchbar placeholder="Buscar por nombre"></IonSearchbar>
        <IonContent className="Subtitle">
          <h3>Resultados</h3>

          <IonItem button={true} detail={false}>
            <div className="unread-indicator-wrapper" slot="start"></div>
            <IonThumbnail slot="start">
              <img 
                alt="Silhouette of mountains"
                src="https://www.motleydenim.es/images/zoom/jackjones_noos2023_4156895_12163777_5.jpg"
              />
            </IonThumbnail>
            <IonLabel>
              
              <IonText className="title-imagen">OSLO - SUDADERA CON CAPUCHA</IonText>
              <br />
              <h2>MH01</h2>
              <br />
              <IonNote color="medium" className="ion-text-wrap">
                Azul | M
              </IonNote>
            </IonLabel>

            <div className="metadata-end-wrapper" slot="end">
              <IonNote color="medium"></IonNote>
              <IonIcon
                size="large"
                color="medium"
                icon={chevronForward}
              ></IonIcon>
            </div>
          </IonItem>

          <IonItem button={true} detail={false}>
            <div className="unread-indicator-wrapper" slot="start"></div>
            <IonThumbnail slot="start">
              <img
                alt="Silhouette of mountains"
                src="https://www.motleydenim.es/images/zoom/jackjones_noos2023_4156895_12163777_5.jpg"
              />
            </IonThumbnail>
            <IonLabel>
              <IonText className="title-imagen">OSLO - SUDADERA CON CAPUCHA</IonText>
              <br />
              <h2>MH02</h2>
              <br />
              <IonNote color="medium" className="ion-text-wrap">
                Azul | L
              </IonNote>
            </IonLabel>

            <div className="metadata-end-wrapper" slot="end">
              <IonNote color="medium"></IonNote>
              <IonIcon
                size="large"
                color="medium"
                icon={chevronForward}
              ></IonIcon>
            </div>
          </IonItem>

          <IonItem button={true} detail={false}>
            <div className="unread-indicator-wrapper" slot="start"></div>
            <IonThumbnail slot="start">
              <img
                alt="Silhouette of mountains"
                src="https://images.asos-media.com/products/sudadera-extragrande-azul-pastel-con-capucha-de-asos-design/202000992-1-clearsky?$n_640w$&wid=513&fit=constrain"
              />
            </IonThumbnail>
            <IonLabel>
              <IonText className="title-imagen">OSLO - SUDADERA CON CAPUCHA</IonText>
              <br />
              <h2>RS01</h2>
              <br />
              <IonNote color="medium" className="ion-text-wrap">
                Celeste | S
              </IonNote>
            </IonLabel>

            <div className="metadata-end-wrapper" slot="end">
              <IonNote color="medium"></IonNote>
              <IonIcon
                size="large"
                color="medium"
                icon={chevronForward}
              ></IonIcon>
            </div>
          </IonItem>

          <IonItem button={true} detail={false}>
            <div className="unread-indicator-wrapper" slot="start"></div>
            <IonThumbnail slot="start">
              <img
                alt="Silhouette of mountains"
                src="https://images.asos-media.com/products/sudadera-extragrande-azul-pastel-con-capucha-de-asos-design/202000992-1-clearsky?$n_640w$&wid=513&fit=constrain"
              />
            </IonThumbnail>
            <IonLabel>
              <IonText className="title-imagen">OSLO - SUDADERA CON CAPUCHA</IonText>
              <br />
              <h2>RS02</h2>
              <br />
              <IonNote color="medium" className="ion-text-wrap">
                Celeste | L
              </IonNote>
            </IonLabel>

            <div className="metadata-end-wrapper" slot="end">
              <IonNote color="medium"></IonNote>
              <IonIcon
                size="large"
                color="medium"
                icon={chevronForward}
              ></IonIcon>
            </div>
          </IonItem>

          <IonItem button={true} detail={false}>
            <div className="unread-indicator-wrapper" slot="start"></div>
            <IonThumbnail slot="start">
              <img
                alt="Silhouette of mountains"
                src="https://static.dafiti.com.ar/p/tommy-hilfiger-2785-551773-1-product.jpg"
              />
            </IonThumbnail>
            <IonLabel>
              <IonText className="title-imagen">GEO - PANTALÓN AISLADO</IonText>
              <br />
              <h2>WP01</h2>
              <br />
              <IonNote color="medium" className="ion-text-wrap">
                Rosa | S
              </IonNote>
            </IonLabel>

            <div className="metadata-end-wrapper" slot="end">
              <IonNote color="medium"></IonNote>
              <IonIcon
                size="large"
                color="medium"
                icon={chevronForward}
              ></IonIcon>
            </div>
          </IonItem>

          <IonItem button={true} detail={false}>
            <div className="unread-indicator-wrapper" slot="start"></div>
            <IonThumbnail slot="start">
              <img
                alt="Silhouette of mountains"
                src="https://static.dafiti.com.ar/p/tommy-hilfiger-2785-551773-1-product.jpg"
              />
            </IonThumbnail>
            <IonLabel>
              <IonText className="title-imagen">GEO - PANTALÓN AISLADO</IonText>
              <br />
              <h2>WP02</h2>
              <br />
              <IonNote color="medium" className="ion-text-wrap">
                Rosa | M
              </IonNote>
            </IonLabel>

            <div className="metadata-end-wrapper" slot="end">
              <IonNote color="medium"></IonNote>
              <IonIcon
                size="large"
                color="medium"
                icon={chevronForward}
              ></IonIcon>
            </div>
          </IonItem>

          <IonItem button={true} detail={false}>
            <div className="unread-indicator-wrapper" slot="start"></div>
            <IonThumbnail slot="start">
              <img
                alt="Silhouette of mountains"
                src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
              />
            </IonThumbnail>
            <IonLabel>
              <IonText className="title-imagen">MACH - SUDADERA DE CALLE</IonText>
              <br />
              <h2>WP02</h2>
              <br />
              <IonNote color="medium" className="ion-text-wrap">
                GRIS | L
              </IonNote>
            </IonLabel>

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
