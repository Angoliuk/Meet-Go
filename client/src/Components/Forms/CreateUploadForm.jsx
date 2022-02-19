import { useState } from "react";
import { useSelector } from "react-redux";
import { useEventService } from "../../Service/useEventService";
import { Button } from "../Common/Button/Button";
import { Input } from "../Common/Input/Input";
import "./CreateUploadForm.css";

export const CreateUploadForm = (props) => {
  const eventService = useEventService();
  const { closeModal, showAlertHandler } = props;
  const user = useSelector((state) => state.userReducers);
  const [newUpload, setNewUpload] = useState({
    author: `${user.firstname} ${user.lastname}`,
    authorId: user._id,
    title: "",
    content: "",
    date: "2022-02-19",
    participants: [],
  });

  const createUploadHandler = (e) => {
    setNewUpload({ ...newUpload, [e.target.name]: e.target.value });
  };

  const createUpload = async () => {
    try {
      await eventService.create(newUpload);
      closeModal();
      showAlertHandler({
        show: true,
        text: `successfully created`,
        type: "success",
      });
    } catch (e) {
      closeModal();
      showAlertHandler({
        show: true,
        text: `error ${e}`,
        type: "error",
      });
    }
  };
  return (
    <div className="createUploadForm">
      <Input
        value={newUpload.title}
        name="title"
        text="title"
        className="input createUploadFormInput"
        onChange={createUploadHandler}
      />
      <Input
        value={newUpload.content}
        name="content"
        text="content"
        className="input createUploadFormInput"
        onChange={createUploadHandler}
      />
      <Input
        value={newUpload.date}
        name="date"
        text="date"
        type="date"
        className="input createUploadFormInput"
        onChange={createUploadHandler}
      />
      <Button
        className="button createUploadFormButton"
        onClick={createUpload}
        text="create"
        name="createUpload"
      />
      <Button
        className="button createUploadFormButton"
        onClick={closeModal}
        text="close"
        name="closeUpload"
      />
    </div>
  );
};
