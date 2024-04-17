import "./SelectList.css";
import * as Ariakit from "@ariakit/react";

export default function SelectList() {
  return (
    <div className="wrapper select-list">
      <Ariakit.SelectProvider defaultValue="En">
        <Ariakit.Select className="button" />
        <Ariakit.SelectPopover sameWidth gutter={1} className="popover">
          <Ariakit.SelectItem className="select-item" value="En" />
          <Ariakit.SelectItem className="select-item" value="Ar" />
        </Ariakit.SelectPopover>
      </Ariakit.SelectProvider>
    </div>
  );
}
