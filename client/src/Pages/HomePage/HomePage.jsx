import React, { useCallback } from "react";
import { useEffect } from "react";
import { CreateUploadBlock } from "../../Components/Blocks/CreateUploadBlock/CreateUploadBlock";
import { EventsBlock } from "../../Components/Blocks/EventsBlock/EventsBlock";
import { PagesWrapper } from "../../HOC/PagesWrapper";
import { useEventService } from "../../Service/useEventService";

const HomePage = (props) => {
  const eventService = useEventService();
  const { showAlertHandler } = props;
  const dataRequest = useCallback(async () => {
    try {
      await eventService.getAll();
    } catch (e) {
      showAlertHandler({
        show: true,
        text: `error ${e}`,
        type: "error",
      });
    }
  }, []);

  useEffect(() => {
    dataRequest();
  }, [dataRequest]);

  return (
    <div>
      <CreateUploadBlock showAlertHandler={showAlertHandler} />
      <EventsBlock showAlertHandler={showAlertHandler} />
    </div>
  );
};

export default PagesWrapper(HomePage);
