import { useState } from "react";
import { Button } from "../../Common/Button/Button";
import { Modal } from "../../Common/Modal/Modal";
import { CreateUploadForm } from "../../Forms/CreateUploadForm";

export const CreateUploadBlock = (props) => {
  const [showNewUploadBlock, setShowNewUploadBlock] = useState(false);

  const showNewUploadBlockHandler = () => {
    setShowNewUploadBlock(!showNewUploadBlock);
  };
  return (
    <>
      <Button
        onClick={showNewUploadBlockHandler}
        text="create event"
        className="button createUploadButton"
        name="createEvent"
      />
      {showNewUploadBlock &&
        Modal(
          <CreateUploadForm
            showAlertHandler={props.showAlertHandler}
            closeModal={showNewUploadBlockHandler}
          />
        )}
    </>
  );
};
