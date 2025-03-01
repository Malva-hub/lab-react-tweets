import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";
import Action from "./Action";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">

        <div className="top">
        <User user={props.tweet.user.name} handle={props.tweet.user.handle} />
        <Timestamp timesTamp={props.tweet.timestamp} />
        </div>

        <Message message={props.tweet.message} />
        <Action />
        
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
