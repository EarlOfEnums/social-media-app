import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonIcon,
  IonInput,
  IonLabel,
} from "@ionic/react";
import { addOutline } from "ionicons/icons";
import usePost from "../../hooks/usePost";

export default function EditPost() {
  const {
    editing,
    setPost,
    setEditing,
    updateTitle,
    updateMessage,
    updateImage,
    updateLikes,
  } = usePost();
  return (
    <IonCard>
      <IonCardHeader>
        <IonLabel position="stacked">Title</IonLabel>
        <IonInput
          placeholder="Enter a Title for your post."
          onIonChange={(ev) => updateTitle(String(ev.target.value))}
        ></IonInput>
      </IonCardHeader>
      <IonCardContent>
        <IonInput
          maxlength={240}
          onIonChange={(ev) => updateMessage(String(ev.target.value))}
        ></IonInput>
        <IonButtons>
          <IonButton>
            {/*onClick={(ev) => updateImage()*/}
            <IonIcon slot="start" icon={addOutline} />
            Add Image
          </IonButton>
        </IonButtons>
      </IonCardContent>
    </IonCard>
  );
}
