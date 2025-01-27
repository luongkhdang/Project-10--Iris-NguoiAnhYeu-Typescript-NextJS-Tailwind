import React from "react";
import { ViewType } from "./types";
import PicturesView from "./views/PicturesView";
import FeedbackView from "./views/FeedbackView";
import ScheduleView from "./views/ScheduleView";

interface ViewContainerProps {
  currentView: ViewType;
  onNext: () => void;
}

const ViewContainer: React.FC<ViewContainerProps> = ({ currentView, onNext }) => {
  const views = {
    pictures: <PicturesView onNext={onNext} />,
    feedback: <FeedbackView />,
    schedule: <ScheduleView />
  };

  return (
    <div className="view-container">
      {views[currentView]}
    </div>
  );
};

export default ViewContainer;