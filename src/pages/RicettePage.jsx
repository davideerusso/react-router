import { usePosts } from "../componens/PostContext";
import RicetteList from "./RicetteList";

export default function RicettePage() {
  const { posts } = usePosts();
  console.log(posts);
  return (
    <div className="container">
      <div>
        <RicetteList posts={posts}></RicetteList>
      </div>
    </div>
  );
}
