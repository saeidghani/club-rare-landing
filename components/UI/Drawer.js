import React from "react";
import RCDrawer from "rc-drawer";

function Drawer({
  children,
  open,
  onClose,
  placement,
  wrapperClass,
  wrapperStyle,
  ...props
}) {
  return (
    <RCDrawer
      level={null}
      placement={placement}
      open={open}
      onClose={onClose}
      {...props}
    >
      <div className={wrapperClass} style={wrapperStyle}>
        {children}
      </div>
    </RCDrawer>
  );
}

export default Drawer;
