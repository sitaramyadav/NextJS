import React, { useEffect } from "react";
import { Line } from "@antv/g2plot";
export const YourComponentName = function() {
  const [linePlot, setlinePlot] = useState(initialState);
  const data = [
    { year: "1991", value: 3 },
    { year: "1992", value: 4 },
    { year: "1993", value: 3.5 },
    { year: "1994", value: 5 },
    { year: "1995", value: 4.9 },
    { year: "1996", value: 6 },
    { year: "1997", value: 7 },
    { year: "1998", value: 9 },
    { year: "1999", value: 13 }
  ];
  useEffect(() => {
    setlinePlot(
      new Line(document.getElementById("container"), {
        title: {
          visible: true,
          text: "DEF"
        },
        description: {
          visible: true,
          text: "ABC"
        },
        padding: "auto",
        forceFit: true,
        data,
        xField: "year",
        yField: "value",
        smooth: true
      })
    );
    return () => {
      // you can clanup here
    };
  }, [linePlot]);
  return; //jsx from here with state which you want to render.
};
