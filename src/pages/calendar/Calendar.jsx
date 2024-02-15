import {
  ScheduleComponent,
  ViewDirective,
  ViewsDirective,
  Inject,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";

import { scheduleData } from "../../data/dummy";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { Header } from "../../components";

const Calendar = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 bg-white rounded-3xl md:p-10">
      <Header category="App" title="Calendar" />
      <ScheduleComponent
        height="650px"
        eventSettings={{ dataSource: scheduleData }}
        selectedDate={new Date("2024,02,11")}
      >
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
        />
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;
