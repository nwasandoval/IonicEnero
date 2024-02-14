import { IonButton, IonInput } from "@ionic/react";
import { useState } from "react";

const ChangeEmailPage = () => {
  const [email, setEmail] = useState("");
  const saveUser = () => {
    alert(`Tu email es: ${email}`);
  };
  return (
    <div>
      <IonInput
        type="text"
        value={email}
        onIonInput={(e) => setEmail(e.target.value)}
        fill="outline"
        color="success"
        labelPlacement="floating"
        helperText="Enter your name"
      ></IonInput>
      <br />
      <IonButton
        size="small"
        onClick={() => saveUser()}
        disabled={email === ""}
      >
        Aceptar
      </IonButton>
    </div>
  );
};

export default ChangeEmailPage;
