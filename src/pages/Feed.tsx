import {
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
  IonContent,
  IonProgressBar,
} from "@ionic/react";
import { addOutline } from "ionicons/icons";
import "./Feed.css";
import useFeed from "../hooks/useFeed";
import { iPost } from "../hooks/usePost";
import Post from "../components/Post/post";

const Feed: React.FC = () => {
  const { feed, fetching, addPost, deletePost, updateLikes } = useFeed();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Feed</IonTitle>
          {fetching && <IonProgressBar type="indeterminate" />}
          <IonButtons slot="end">
            <IonButton
              fill="outline"
              onClick={() => {
                addPost();
              }}
            >
              Add Post
              <IonIcon slot="start" icon={addOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
        <IonContent fullscreen>
          {feed.map((post: iPost, index: number) => {
            return (
              <Post
                key={post.id}
                post={post}
                deletePost={deletePost}
                updateLikes={updateLikes}
              ></Post>
            );
          })}
        </IonContent>
      </IonHeader>
    </IonPage>
  );
};

export default Feed;
