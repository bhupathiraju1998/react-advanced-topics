import { forwardRef } from "react";

const FunctionalChildRef = forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
});

export default FunctionalChildRef
