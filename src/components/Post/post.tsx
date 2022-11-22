import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonIcon,
  IonInput,
  IonLabel,
} from "@ionic/react";
import {
  addOutline,
  thumbsUp,
  createOutline,
  removeOutline,
} from "ionicons/icons";
import { iPost } from "../../hooks/usePost";

export default function Post(props: {
  post: iPost;
  deletePost: (id: string) => void;
  updateLikes: (newLikes: number) => void;
}) {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{props.post.title}</IonCardTitle>
        {props.post.image !== undefined && (
          <img alt="post" src={props.post.image} />
        )}
      </IonCardHeader>
      <IonCardContent>
        {props.post.updateDateTime !== undefined &&
          `Edited: ${props.post.updateDateTime.toDateString()}`}
        {props.post.message}
        <IonButtons>
          <IonLabel position="stacked">{props.post.likes}</IonLabel>
          <IonButton
            fill="clear"
            onClick={() => props.updateLikes(Number(props.post.likes) + 1)}
          >
            <IonIcon slot="icon-only" icon={thumbsUp} />
          </IonButton>
          <IonButton fill="outline" onClick={() => {}}>
            Edit Post
            <IonIcon slot="start" icon={createOutline} />
          </IonButton>
          <IonButton
            fill="outline"
            onClick={() => props.deletePost(props.post.id)}
          >
            Delete Post
            <IonIcon slot="start" icon={removeOutline} />
          </IonButton>
        </IonButtons>
      </IonCardContent>
    </IonCard>
  );
}
