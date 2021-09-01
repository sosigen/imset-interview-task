import React from "react";
import CircleIcon from "../circleIcon/circleIcon.component";
import CircleIconLarge from "../circleIconLarge/circleIconLarge.component";
import { IconRowContainer, IconRowItem } from "./iconRow.styles";

const IconRow = ({ icons, size }) => (
  <IconRowContainer>
    {icons.map((icon, idx) => {
      if (idx === icons.length - 1) {
        return (
          <IconRowItem key={idx}>
            {size === "large" ? (
              <CircleIconLarge icon={icon} />
            ) : (
              <CircleIcon icon={icon} />
            )}
          </IconRowItem>
        );
      } else {
        return (
          <IconRowItem key={idx}>
            {size === "large" ? (
              <CircleIconLarge icon={icon} />
            ) : (
              <CircleIcon icon={icon} />
            )}
            <span>+</span>
          </IconRowItem>
        );
      }
    })}
  </IconRowContainer>
);

export default IconRow;
