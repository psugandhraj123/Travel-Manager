import "./task.css";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase";

function Task({ id, data }) {
  const handleDelete = async () => {
    const taskDocRef = doc(db, "tasks", id);
    try {
      await deleteDoc(taskDocRef);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className={`task task--borderColor`}>
      <div className="task__body">
        <h2>{data?.name}</h2>
        <p>Address: {data?.address}</p>
        <p>Age: {data?.age}</p>
        <p>Sex: {data?.sex}</p>
        <p>Travel Destination: {data?.destination}</p>
        <p>Travel Duration: {data?.duration}</p>
        <div className="task__buttons">
          <div className="task__deleteNedit">
            <button className="task__deleteButton" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;
